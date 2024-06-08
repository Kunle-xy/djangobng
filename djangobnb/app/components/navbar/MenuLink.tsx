import React from 'react'


interface MenuLinkProps {
  label: string
  href?: string
  onClick?: () => void
}

const MenuLink:React.FC<MenuLinkProps> = ({label, onClick }) => {
  return (
    <div className='px-5 py-4 hover:bg-gray-100 transition cursor-pointer'
    onClick={onClick}>
      {label}
    </div>
  )
}

export default MenuLink
