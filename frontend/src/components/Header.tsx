// Header.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="bg-black text-white p-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold text-white">
          Your Website Name
        </Link>
      </div>
      <div className="flex items-center">
        {/* Dropdown button for small screens */}
        <button
          className="md:hidden px-2 py-1 text-white border border-white rounded"
          onClick={toggleDropdown}
        >
          {showDropdown ? 'Close' : 'Menu'}
        </button>

        {/* Dropdown content for small screens */}
        {showDropdown && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black text-white z-10">
            <Link to="/cart" className="block p-2">
              Cart
            </Link>
            <Link to="/signin" className="block p-2">
              Sign In
            </Link>
          </div>
        )}

        {/* Navbar links for medium and larger screens */}
        <div className="hidden md:flex items-center flex-row gap-4">
          <Link
            to="/cart"
            className="flex flex-row items-center justify-between gap-1 mx-2"
          >
            <FaShoppingCart /> Cart
          </Link>
          <Link
            to="/signin"
            className="flex flex-row items-center justify-between gap-1 mx-2"
          >
            <FaUser /> Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
