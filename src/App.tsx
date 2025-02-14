import { useState } from "react"
import { DatePicker } from "../lib/main"

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
    <>
      <h1>Select your birthdate</h1>
      <div className="date-field">
        <DatePicker
          id="birthdate-picker"
          value={formValues.birthdate}
          onChange={handleDateChange}
          locale="fr"
        />
      </div>
    </>
  )
}
