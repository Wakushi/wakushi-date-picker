import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./DatePicker.css";
import { useEffect, useState } from "react";
export default function DatePicker({ id, value, onChange, }) {
    const MAX_DAYS_IN_GRID = 42;
    const [showCalendar, setShowCalendar] = useState(false);
    const [daysOfMonth, setDaysOfMonth] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(getNow().getMonth());
    const [selectedYear, setSelectedYear] = useState(getNow().getFullYear());
    const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : new Date());
    useEffect(() => {
        buildDaysGrid();
        const handleClickOutside = (e) => {
            const modal = document.getElementById("datePickerModal");
            if (!modal)
                return;
            const target = e.target;
            const targetId = e.target?.id;
            if (!modal.contains(target) && target !== modal && targetId !== id) {
                setShowCalendar(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [selectedMonth, selectedYear]);
    function getCurrentTimeFrame() {
        const time = new Date();
        time.setMonth(selectedMonth);
        time.setFullYear(selectedYear);
        time.setHours(0, 0, 0, 0);
        return time;
    }
    function getNow() {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return now;
    }
    function getDaysAmountInMonth(date) {
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);
        nextMonth.setDate(nextMonth.getDate() - 1);
        return nextMonth.getDate();
    }
    function getYearsSelectorArray() {
        const YEARS_EDGE = 500;
        const currentYear = getNow().getFullYear();
        const yearRangeStart = currentYear - YEARS_EDGE;
        const yearRangeEnd = currentYear + YEARS_EDGE;
        const rangeSize = yearRangeEnd - yearRangeStart;
        return Array.from({ length: rangeSize }, (_, i) => yearRangeStart + i);
    }
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    function buildDaysGrid() {
        const previousMonth = getCurrentTimeFrame();
        previousMonth.setMonth(previousMonth.getMonth() - 1);
        const previousMonthDaysAmount = getDaysAmountInMonth(previousMonth);
        const firstOfMonth = getCurrentTimeFrame();
        firstOfMonth.setDate(1);
        const currentMonthDaysAmount = getDaysAmountInMonth(getCurrentTimeFrame());
        let daysBeforeMonday = firstOfMonth.getDay() - 1;
        if (daysBeforeMonday < 0) {
            daysBeforeMonday = 6;
        }
        const previousMonthLastDays = [];
        for (let i = daysBeforeMonday; i > 0; i--) {
            previousMonthLastDays.push({
                dayNumber: previousMonthDaysAmount - i + 1,
                month: previousMonth.getMonth(),
            });
        }
        const daysGrid = previousMonthLastDays.concat(Array.from({ length: currentMonthDaysAmount }, (_, i) => ({
            dayNumber: i + 1,
            month: firstOfMonth.getMonth(),
        })));
        const nextMonth = getCurrentTimeFrame();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const remainingDays = MAX_DAYS_IN_GRID - daysGrid.length;
        for (let i = 1; i <= remainingDays; i++) {
            daysGrid.push({
                dayNumber: i,
                month: nextMonth.getMonth(),
            });
        }
        setDaysOfMonth(daysGrid);
    }
    function onSelectDate(gridDay) {
        const { dayNumber, month } = gridDay;
        const date = new Date(`${selectedYear}-${month + 1}-${dayNumber}`);
        date.setHours(0, 0, 0, 0);
        setSelectedDate(date);
        onChange(formatDate(date));
        setShowCalendar(false);
    }
    function onDateInputClick(e) {
        e.preventDefault();
        setShowCalendar((prevShowCalendar) => !prevShowCalendar);
    }
    return (_jsxs("div", { className: "date-picker-container", children: [showCalendar && (_jsxs("div", { id: "datePickerModal", className: "calendar-modal", children: [_jsxs("div", { className: "calendar-head", children: [_jsx("select", { name: "month", id: "month", value: selectedMonth, onChange: (e) => setSelectedMonth(+e.target.value), children: [
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
                                ].map((month, i) => (_jsx("option", { value: i, children: month }, month))) }), _jsx("select", { name: "year", id: "year", value: selectedYear, onChange: (e) => setSelectedYear(+e.target.value), size: 1, children: getYearsSelectorArray().map((year) => (_jsx("option", { value: year, children: year }, year))) })] }), _jsxs("div", { className: "calendar-grid", children: [_jsxs("div", { className: "grid-head", children: [_jsx("span", { className: "grid-box", children: "M" }), _jsx("span", { className: "grid-box", children: "T" }), _jsx("span", { className: "grid-box", children: "W" }), _jsx("span", { className: "grid-box", children: "T" }), _jsx("span", { className: "grid-box", children: "F" }), _jsx("span", { className: "grid-box", children: "S" }), _jsx("span", { className: "grid-box", children: "S" })] }), _jsx("div", { className: "grid-body", children: daysOfMonth.map((gridDay, i) => {
                                    return (_jsx("div", { className: `grid-box day-chip ${gridDay.month !== selectedMonth ? "faded" : ""}`, onClick: () => {
                                            onSelectDate(gridDay);
                                        }, children: gridDay.dayNumber }, i + 1));
                                }) })] })] })), _jsx("input", { id: id, type: "date", style: { width: "100%" }, value: value ? formatDate(selectedDate) : "", onChange: () => { }, onClick: (e) => onDateInputClick(e) })] }));
}
