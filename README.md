# Wakushi Date Picker

A simple and customizable date picker component for React.

## Installation

```bash
npm install wakushi-date-picker
```

## Usage

```jsx
import React from "react"
import DatePicker from "wakushi-date-picker"
import "wakushi-date-picker/dist/DatePicker.css"

function App() {
  const [formValues, setFormValues] = useState({
      birthdate: "",
  })

  return (
      <DatePicker
        value={formValues.birthdate}
        onChange={(date) =>
          setFormValues((prevFormValues) => ({
            ...prevFormValues,
            birthdate: date,
          }))
        }
      />
    )
}

export default App
```

## Licence

MIT
