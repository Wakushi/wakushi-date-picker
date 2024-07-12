# Wakushi Date Picker

A simple and customizable date picker component for React.

## Features

- Easy integration into any React project
- Fully customizable styles
- Supports a wide range of years
- Displays the calendar in a grid layout for easy date selection
- Handles outside clicks to close the calendar

## Installation

To install Wakushi Date Picker, run the following command in your project directory:

```bash
npm install wakushi-date-picker
```

## Usage

Here is a basic example of how to use the Wakushi Date Picker in your React application:

```jsx
import React, { useState } from "react"
import DatePicker from "wakushi-date-picker"
import "wakushi-date-picker/dist/DatePicker.css"

function App() {
  const [formValues, setFormValues] = useState({
    birthdate: "",
  })

  const handleDateChange = (date) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      birthdate: date,
    }))
  }

  return (
    <div className="app">
      <h1>Select your birthdate</h1>
      <DatePicker
        id="birthdate-picker"
        value={formValues.birthdate}
        onChange={handleDateChange}
      />
    </div>
  )
}

export default App
```

## Props

### DatePicker

| Prop       | Type       | Description                                                      |
| ---------- | ---------- | ---------------------------------------------------------------- |
| `id`       | `string`   | Unique identifier for the date picker input field.               |
| `value`    | `string`   | The current value of the date picker, formatted as `YYYY-MM-DD`. |
| `onChange` | `function` | Callback function to handle changes in the selected date.        |

## Customization

You can customize the styles of the date picker by overriding the default CSS classes. Import the default CSS and then add your custom styles in your main CSS file.

### Default CSS Classes

- `.date-picker-container`: The main container for the date picker.
- `.calendar-modal`: The modal that contains the calendar.
- `.calendar-head`: The header section of the calendar, including month and year selectors.
- `.calendar-grid`: The grid layout for the calendar days.
- `.grid-head`: The header row for the day names (e.g., M, T, W).
- `.grid-box`: Each individual cell in the calendar grid.
- `.day-chip`: The individual day element within the grid.
- `.faded`: Class applied to days that are outside the current month.

### Example Custom Styles

```css
/* custom-styles.css */
.date-picker-container {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.calendar-modal {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
}

.calendar-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.grid-head {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
  text-align: center;
}

.grid-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.grid-box {
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.day-chip {
  border-radius: 50%;
  transition: background-color 0.3s;
}

.day-chip:hover {
  background-color: #f0f0f0;
}

.faded {
  color: #ccc;
}
```

## License

Wakushi Date Picker is licensed under the MIT License.

## Contributing

We welcome contributions to improve this component. Please open an issue or submit a pull request on [GitHub](https://github.com/Wakushi/wakushi-date-picker).

## Support

If you encounter any issues or have any questions, feel free to open an issue on our [GitHub repository](https://github.com/Wakushi/wakushi-date-picker/issues).
