import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium rounded-[10px] text-[18px] text-primary outline-none ${styles}`}>
      Hire Hector
    </button>
  )
}

export default Button