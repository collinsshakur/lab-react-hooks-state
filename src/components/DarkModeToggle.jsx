import React from 'react'

const DarkModeToggle = ({mode, toggleMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
   <button onClick={toggleMode}>
    Toggle to {mode === "light" ? "Dark" : "Light"} Mode </button>
  )
}

export default DarkModeToggle