# wakushi-date-picker-2

A lightweight, customizable React date picker component with built-in locale support.

## Features

- 📅 Clean and intuitive calendar interface
- 🌐 Locale support for internationalization
- 🎨 Customizable styling
- ⌨️ Keyboard-friendly date input
- 📱 Responsive design with smart positioning
- 🔄 Controlled component with onChange support

## Installation

```bash
npm install wakushi-date-picker-2
```

## Usage

Here's a basic example of how to use the DatePicker component:

```tsx
import { useState } from "react"
import { DatePicker } from "wakushi-date-picker-2"

export default function App() {
  const [formValues, setFormValues] = useState({
    birthdate: "",
  })

  const handleDateChange = (date: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      birthdate: date,
    }))
  }

  return (
    <div>
      <DatePicker
        id="birthdate-picker"
        value={formValues.birthdate}
        onChange={handleDateChange}
        locale="fr"
      />
    </div>
  )
}
```

## Props

| Prop     | Type                   | Required | Default | Description                                   |
| -------- | ---------------------- | -------- | ------- | --------------------------------------------- |
| id       | string                 | Yes      | -       | Unique identifier for the date picker         |
| value    | string                 | Yes      | -       | Selected date in YYYY-MM-DD format            |
| onChange | (date: string) => void | Yes      | -       | Callback function when date selection changes |
| locale   | string                 | No       | "en"    | Locale for date formatting (e.g., "fr", "en") |

## Features Breakdown

### Smart Positioning

The calendar modal automatically positions itself above or below the input field based on available screen space.

### Locale Support

The component supports internationalization through the locale prop, affecting:

- Day names in the calendar
- Month names in the dropdown
- Date formatting

### Date Selection Methods

Users can select dates through multiple methods:

1. Calendar interface with month/year navigation
2. Direct date input in YYYY-MM-DD format
3. Native date picker fallback

### Styling

The component comes with default styling that can be customized through CSS. Main class names for styling:

- `.date-picker-container` - Main container
- `.calendar-modal` - Calendar popup
- `.calendar-head` - Month/year selector section
- `.calendar-grid` - Days grid
- `.date-input` - Input field
- `.selected` - Selected date styling
- `.faded` - Non-current month days

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [wakushi]
