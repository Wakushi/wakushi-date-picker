import "./date-picker.css"
import React, { MouseEvent, useEffect, useState } from "react"

/**
 * Type definition for a day in the calendar grid
 * @typedef {Object} GridDay
 * @property {number} dayNumber - The day of the month (1-31)
 * @property {number} month - The month number (0-11)
 * @property {string} [dayName] - Optional name of the day
 */
export type GridDay = {
  dayNumber: number
  month: number
  dayName?: string
}

/**
 * Props interface for the DatePicker component
 * @interface DatePickerProps
 * @property {string} id - Unique identifier for the date picker
 * @property {string} value - The current date value in YYYY-MM-DD format
 * @property {function} onChange - Callback function when date changes
 * @property {string} [locale="en"] - Locale string for internationalization
 */
export interface DatePickerProps {
  id: string
  value: string
  onChange: (date: string) => void
  locale?: string
}

/**
 * DatePicker component that provides a calendar interface for date selection
 * @param {DatePickerProps} props - Component props
 * @returns {JSX.Element} Rendered DatePicker component
 */
export function DatePicker({
  id,
  value,
  onChange,
  locale = "en",
}: DatePickerProps) {
  const MAX_DAYS_IN_GRID = 42

  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  const [calendarPosition, setCalendarPosition] = useState<"top" | "bottom">("top")
  const [daysOfMonth, setDaysOfMonth] = useState<GridDay[]>([])
  const [selectedMonth, setSelectedMonth] = useState<number>(getNow().getMonth())
  const [selectedYear, setSelectedYear] = useState<number>(getNow().getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date>(
    value ? new Date(value) : new Date()
  )
  const [inputValue, setInputValue] = useState(formatDate(selectedDate) || "")

  useEffect(() => {
    buildDaysGrid()

    /**
     * Handles clicks outside the calendar modal to close it
     * @param {Event} e - Click event
     */
    const handleClickOutside = (e: Event) => {
      const modal = document.getElementById("datePickerModal")
      if (!modal) return
      const target = e.target as Node
      const targetId = (e.target as HTMLElement)?.id
      if (!modal.contains(target) && target !== modal && targetId !== id) {
        setShowCalendar(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [selectedMonth, selectedYear])

  /**
   * Returns a Date object for the current selected month and year
   * @returns {Date} Date object set to the current time frame
   */
  function getCurrentTimeFrame(): Date {
    const time = new Date()
    time.setMonth(selectedMonth)
    time.setFullYear(selectedYear)
    time.setHours(0, 0, 0, 0)
    return time
  }

  /**
   * Returns current date with time set to midnight
   * @returns {Date} Current date at 00:00:00
   */
  function getNow(): Date {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    return now
  }

  /**
   * Calculates the number of days in a given month
   * @param {Date} date - Date object to calculate days for
   * @returns {number} Number of days in the month
   */
  function getDaysAmountInMonth(date: Date) {
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const nextMonth = new Date(currentYear, currentMonth + 1, 1)
    nextMonth.setDate(nextMonth.getDate() - 1)
    return nextMonth.getDate()
  }

  /**
   * Generates an array of years for the year selector
   * @returns {number[]} Array of years spanning ±2000 years from current year
   */
  function getYearsSelectorArray(): number[] {
    const YEARS_EDGE = 2000
    const currentYear = getNow().getFullYear()
    const yearRangeStart = currentYear - YEARS_EDGE
    const yearRangeEnd = currentYear + YEARS_EDGE
    const rangeSize = yearRangeEnd - yearRangeStart
    return Array.from({ length: rangeSize }, (_, i) => yearRangeStart + i)
  }

  /**
   * Formats a Date object to YYYY-MM-DD string
   * @param {Date} date - Date to format
   * @returns {string} Formatted date string
   */
  function formatDate(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  /**
   * Builds the calendar grid for the current month view
   * Includes days from previous and next months to fill the grid
   */
  function buildDaysGrid() {
    const previousMonth = getCurrentTimeFrame()
    previousMonth.setMonth(previousMonth.getMonth() - 1)
    const previousMonthDaysAmount = getDaysAmountInMonth(previousMonth)

    const firstOfMonth = getCurrentTimeFrame()
    firstOfMonth.setDate(1)
    const currentMonthDaysAmount = getDaysAmountInMonth(getCurrentTimeFrame())

    let daysBeforeMonday = firstOfMonth.getDay() - 1
    if (daysBeforeMonday < 0) {
      daysBeforeMonday = 6
    }

    const previousMonthLastDays: GridDay[] = []
    for (let i = daysBeforeMonday; i > 0; i--) {
      previousMonthLastDays.push({
        dayNumber: previousMonthDaysAmount - i + 1,
        month: previousMonth.getMonth(),
      })
    }

    const daysGrid = previousMonthLastDays.concat(
      Array.from({ length: currentMonthDaysAmount }, (_, i) => ({
        dayNumber: i + 1,
        month: firstOfMonth.getMonth(),
      }))
    )

    const nextMonth = getCurrentTimeFrame()
    nextMonth.setMonth(nextMonth.getMonth() + 1)

    const remainingDays = MAX_DAYS_IN_GRID - daysGrid.length
    for (let i = 1; i <= remainingDays; i++) {
      daysGrid.push({
        dayNumber: i,
        month: nextMonth.getMonth(),
      })
    }

    setDaysOfMonth(daysGrid)
  }

  /**
   * Handles date selection from the calendar grid
   * @param {GridDay} gridDay - Selected day from the grid
   */
  function onSelectDate(gridDay: GridDay) {
    const { dayNumber, month } = gridDay
    const date = new Date(`${selectedYear}-${month + 1}-${dayNumber}`)
    date.setHours(0, 0, 0, 0)
    setSelectedDate(date)
    setInputValue(formatDate(date))
    onChange(formatDate(date))
    setShowCalendar(false)
  }

  /**
   * Handles click event on the date input field
   * @param {MouseEvent} e - Click event
   */
  function onDateInputClick(e: MouseEvent) {
    e.preventDefault()
    positionModal(e.target as HTMLElement)
    setShowCalendar((prevShowCalendar) => !prevShowCalendar)
  }

  /**
   * Positions the calendar modal based on available screen space
   * @param {HTMLElement} element - Target element for positioning
   */
  function positionModal(element: HTMLElement): void {
    const MODAL_SAFE_SPACE_IN_PX = 300
    const { top } = element.getBoundingClientRect()
    setCalendarPosition(top >= MODAL_SAFE_SPACE_IN_PX ? "top" : "bottom")
  }

  /**
   * Handles manual date input changes
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  function handleManualDateChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newDate = e.target.value
    setInputValue(newDate)

    if (newDate.length === 10) {
      try {
        const date = new Date(newDate)
        if (isNaN(date.getTime())) return

        setSelectedYear(date.getFullYear())
        setSelectedMonth(date.getMonth())
        setSelectedDate(date)
        onChange(formatDate(date))
      } catch (error) {
        console.warn("Invalid date entered")
      }
    }
  }

  /**
   * Checks if a given grid day is the currently selected date
   * @param {GridDay} gridDay - Day to check
   * @returns {boolean} True if the day is selected
   */
  function isSelectedDay(gridDay: GridDay): boolean {
    const { dayNumber, month } = gridDay
    return (
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === dayNumber &&
      selectedYear === selectedDate.getFullYear()
    )
  }

  /**
   * Gets localized day names based on current locale
   * @returns {string[]} Array of localized day names
   */
  function getLocalizedDayNames(): string[] {
    const weekStart = new Date(2024, 0, 1)
    const days: string[] = []

    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart)
      day.setDate(weekStart.getDate() + i)
      days.push(
        new Intl.DateTimeFormat(locale, { weekday: "narrow" }).format(day)
      )
    }

    return days
  }

  /**
   * Gets localized month names based on current locale
   * @returns {string[]} Array of localized month names
   */
  function getLocalizedMonthNames(): string[] {
    const months: string[] = []
    const yearStart = new Date(2024, 0, 1)

    for (let i = 0; i < 12; i++) {
      const month = new Date(yearStart)
      month.setMonth(i)
      months.push(
        capitalize(
          new Intl.DateTimeFormat(locale, { month: "long" }).format(month)
        )
      )
    }

    return months
  }

  /**
   * Capitalizes the first letter of a string
   * @param {string} str - String to capitalize
   * @returns {string} Capitalized string
   */
  function capitalize(str: string) {
    return `${str.substring(0, 1).toUpperCase()}${str.substring(1, str.length)}`
  }

  return (
    <div className="date-picker-container">
      {showCalendar && (
        <div
          id="datePickerModal"
          className={`${calendarPosition} calendar-modal`}
        >
          <div className="calendar-head">
            <select
              name="month"
              id="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(+e.target.value)}
            >
              {getLocalizedMonthNames().map((month, i) => (
                <option key={month} value={i}>
                  {month}
                </option>
              ))}
            </select>
            <select
              name="year"
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(+e.target.value)}
              size={1}
            >
              {getYearsSelectorArray().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="calendar-grid">
            <div className="grid-head">
              {getLocalizedDayNames().map((day, index) => (
                <span key={index} className="grid-box">
                  {day}
                </span>
              ))}
            </div>
            <div className="grid-body">
              {daysOfMonth.map((gridDay, i) => {
                return (
                  <div
                    key={i + 1}
                    className={`grid-box day-chip ${
                      gridDay.month !== selectedMonth ? "faded" : ""
                    } ${isSelectedDay(gridDay) ? "selected" : ""}`}
                    onClick={() => {
                      onSelectDate(gridDay)
                    }}
                  >
                    {gridDay.dayNumber}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
      <input
        id={id}
        className="date-input"
        type="date"
        style={{ width: "100%" }}
        value={inputValue}
        onChange={handleManualDateChange}
        onClick={(e) => onDateInputClick(e)}
      />
    </div>
  )
}
