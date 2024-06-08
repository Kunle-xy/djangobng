import React from 'react'

interface CustomButtonProps {
        label: string
        onClick?: () => void
        className?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick, className}) => {
  return (
    <div
    onClick={onClick}
    className={` py-4 bg-airbnbDark hover:bg-airbnb text-white rounded-xl transition cursor-pointer  text-center ${className}` }>
     {label}
    </div>
  )
}

export default CustomButton
