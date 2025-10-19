import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'
export default function Navbar() {
  const { theme, toggle } = useTheme()
  const linkClass = ({ isActive }) => isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
  return (
    <nav className='bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-6xl mx-auto px-4 flex items-center justify-between h-16'>
        <Link to='/' className='text-xl font-bold text-indigo-600 dark:text-indigo-400'>Week3App</Link>
        <div className='flex items-center gap-4'>
          <NavLink to='/' className={linkClass}>Home</NavLink>
          <NavLink to='/tasks' className={linkClass}>Tasks</NavLink>
          <NavLink to='/posts' className={linkClass}>Posts</NavLink>
          <Button variant='secondary' onClick={toggle}>{theme==='dark'?'Light':'Dark'}</Button>
        </div>
      </div>
    </nav>
  )
}