import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 btn rounded-lg hover:scale-105
      font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
        Get Strated
    </button>
  )
}

export default Button