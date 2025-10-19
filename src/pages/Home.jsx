import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
export default function Home() {
  return <div className='space-y-6'><Card><h1 className='text-2xl font-bold'>React, JSX & Tailwind</h1><p className='mt-2 text-gray-600 dark:text-gray-300'>Week 3 assignment app demo.</p></Card><div className='grid md:grid-cols-2 gap-4'><Card><h3 className='font-semibold'>Task Manager</h3><p className='text-sm mt-2'>Add, complete and delete tasks with localStorage.</p><div className='mt-4'><Link to='/tasks'><Button>Open</Button></Link></div></Card><Card><h3 className='font-semibold'>Posts (API)</h3><p className='text-sm mt-2'>Fetch posts from JSONPlaceholder.</p><div className='mt-4'><Link to='/posts'><Button variant='secondary'>View</Button></Link></div></Card></div></div>
}