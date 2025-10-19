import React from 'react'
const VARIANT_CLASSES = { primary: 'bg-indigo-600 hover:bg-indigo-700 text-white', secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200', danger: 'bg-red-600 hover:bg-red-700 text-white' }
export default function Button({ children, variant='primary', onClick, className='' }) {
  return <button className={`px-4 py-2 rounded-lg font-medium transition ${VARIANT_CLASSES[variant]} ${className}`} onClick={onClick}>{children}</button>
}