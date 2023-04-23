import React from 'react'

export default function NameForm() {
  return (
    <div><div>
      <input type="radio" value="Male" name="gender" /> Male
      <input type="radio" value="Female" name="gender" /> Female
      <input type="radio" value="Other" name="gender" /> Other
    </div></div>
  )
}
