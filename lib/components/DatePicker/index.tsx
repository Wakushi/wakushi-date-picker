import "./date-picker.css"
import React, { MouseEvent, useEffect, useState } from "react"

// Type definition for the grid day structure
export type GridDay = {
  dayNumber: number
  month: number
  dayName?: string
}

export interface DatePickerProps {
  id: string
  value: string
  onChange: (date: string) => void
  locale?: string
}

// DatePicker component definition
export function DatePicker({
  id,
  value,
  onChange,
  locale = "en",
}: DatePickerProps) {
  // Maximum number of days to display in the calendar grid
  const MAX_DAYS_IN_GRID = 42

  // State to control the visibility of the calendar
  const [showCalendar, setShowCalendar] = useState<boolean>(false)

  // State to define the calendar position relative to the input
  const [calendarPosition, setCalendarPosition] = useState<"top" | "bottom">(
    "top"
  )

  // State to hold the days of the current month being displayed
  const [daysOfMonth, setDaysOfMonth] = useState<GridDay[]>([])

  // State to hold the currently selected month
  const [selectedMonth, setSelectedMonth] = useState<number>(
    getNow().getMonth()
  )

  // State to hold the currently selected year
  const [selectedYear, setSelectedYear] = useState<number>(
    getNow().getFullYear()
  )

  // State to hold the currently selected date
  const [selectedDate, setSelectedDate] = useState<Date>(
    value ? new Date(value) : new Date()
  )

  // State to hold the actual HTML date input's value
  const [inputValue, setInputValue] = useState(formatDate(selectedDate) || "")

  // Effect to build the calendar grid and handle clicks outside the calendar modal
  useEffect(() => {
    buildDaysGrid()

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

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [selectedMonth, selectedYear])

  // Function to get the current time frame based on the selected month and year
  function getCurrentTimeFrame(): Date {
    const time = new Date()
    time.setMonth(selectedMonth)
    time.setFullYear(selectedYear)
    time.setHours(0, 0, 0, 0)
    return time
  }

  // Function to get the current date with time set to 00:00:00
  function getNow(): Date {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    return now
  }

  // Function to get the number of days in a given month
  function getDaysAmountInMonth(date: Date) {
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const nextMonth = new Date(currentYear, currentMonth + 1, 1)
    nextMonth.setDate(nextMonth.getDate() - 1)
    return nextMonth.getDate()
  }

  // Function to get the range of years for the year selector
  function getYearsSelectorArray(): number[] {
    const YEARS_EDGE = 2000
    const currentYear = getNow().getFullYear()
    const yearRangeStart = currentYear - YEARS_EDGE
    const yearRangeEnd = currentYear + YEARS_EDGE
    const rangeSize = yearRangeEnd - yearRangeStart
    return Array.from({ length: rangeSize }, (_, i) => yearRangeStart + i)
  }

  // Function to format a date object into a YYYY-MM-DD string
  function formatDate(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  // Function to build the days grid for the current month
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

  // Function to handle date selection from the calendar grid
  function onSelectDate(gridDay: GridDay) {
    const { dayNumber, month } = gridDay
    const date = new Date(`${selectedYear}-${month + 1}-${dayNumber}`)
    date.setHours(0, 0, 0, 0)
    setSelectedDate(date)
    setInputValue(formatDate(date))
    onChange(formatDate(date))
    setShowCalendar(false)
  }

  // Function to handle the click event on the date input field
  function onDateInputClick(e: MouseEvent) {
    e.preventDefault()
    positionModal(e.target as HTMLElement)
    setShowCalendar((prevShowCalendar) => !prevShowCalendar)
  }

  // Function to position the calendar modal regarding available space
  function positionModal(element: HTMLElement): void {
    const MODAL_SAFE_SPACE_IN_PX = 300

    const { top } = element.getBoundingClientRect()

    setCalendarPosition(top >= MODAL_SAFE_SPACE_IN_PX ? "top" : "bottom")
  }

  function handleManualDateChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
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

  function isSelectedDay(gridDay: GridDay): boolean {
    const { dayNumber, month } = gridDay

    return (
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === dayNumber &&
      selectedYear === selectedDate.getFullYear()
    )
  }

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

  // TODO
  function getLocalizedMonthNames(): string[] {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
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
