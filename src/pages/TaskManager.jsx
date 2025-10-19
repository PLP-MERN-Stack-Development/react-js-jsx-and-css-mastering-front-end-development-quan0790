import React,{useState,useMemo}from'react'
import Card from'../components/Card'
import Button from'../components/Button'
import useLocalStorage from'../hooks/useLocalStorage'
export default function TaskManager(){
  const[tasks,setTasks]=useLocalStorage('tasks',[])
  const[text,setText]=useState('')
  const[filter,setFilter]=useState('all')
  const addTask=()=>{if(!text.trim())return;setTasks([{id:Date.now(),text,completed:false},...tasks]);setText('')}
  const toggle=id=>setTasks(tasks.map(t=>t.id===id?{...t,completed:!t.completed}:t))
  const del=id=>setTasks(tasks.filter(t=>t.id!==id))
  const filtered=useMemo(()=>filter==='active'?tasks.filter(t=>!t.completed):filter==='completed'?tasks.filter(t=>t.completed):tasks,[tasks,filter])
  return <div className='space-y-4'><Card><h2 className='text-lg font-semibold'>Task Manager</h2><div className='mt-3 flex gap-2'><input value={text}onChange={e=>setText(e.target.value)}placeholder='Add a task...'className='flex-1 p-2 border rounded-md'/><Button onClick={addTask}>Add</Button></div><div className='mt-3 flex gap-2'><Button variant={filter==='all'?'primary':'secondary'}onClick={()=>setFilter('all')}>All</Button><Button variant={filter==='active'?'primary':'secondary'}onClick={()=>setFilter('active')}>Active</Button><Button variant={filter==='completed'?'primary':'secondary'}onClick={()=>setFilter('completed')}>Completed</Button></div></Card>{filtered.map(t=><Card key={t.id}className='flex justify-between items-center'><div><input type='checkbox'checked={t.completed}onChange={()=>toggle(t.id)}/><span className={t.completed?'line-through text-gray-400 ml-2':'ml-2'}>{t.text}</span></div><Button variant='danger'onClick={()=>del(t.id)}>Delete</Button></Card>)}</div>
}