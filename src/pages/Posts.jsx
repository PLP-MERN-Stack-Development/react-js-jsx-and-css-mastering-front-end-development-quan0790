import React,{useState,useEffect,useRef}from'react'
import{fetchPosts}from'../api/postsApi'
import Card from'../components/Card'
export default function Posts(){
 const[posts,setPosts]=useState([]);const[page,setPage]=useState(1);const[loading,setLoading]=useState(false);const[error,setError]=useState(null);const[query,setQuery]=useState('');const controllerRef=useRef(null)
 useEffect(()=>{controllerRef.current?.abort();const controller=new AbortController();controllerRef.current=controller;setLoading(true);setError(null);fetchPosts({page,signal:controller.signal}).then(d=>setPosts(p=>page===1?d:[...p,...d])).catch(e=>{if(e.name!=='AbortError')setError(e.message)}).finally(()=>setLoading(false));return()=>controller.abort()},[page])
 const filtered=posts.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())||p.body.toLowerCase().includes(query.toLowerCase()))
 useEffect(()=>{const onScroll=()=>{if(loading||error)return;if(window.innerHeight+window.scrollY>=document.body.offsetHeight-200)setPage(p=>p+1)};window.addEventListener('scroll',onScroll);return()=>window.removeEventListener('scroll',onScroll)},[loading,error])
 return<div className='space-y-4'><div className='flex gap-2'><input value={query}onChange={e=>setQuery(e.target.value)}placeholder='Search posts...'className='flex-1 p-2 border rounded-md'/><div>Page:{page}</div></div><div className='grid md:grid-cols-2 gap-4'>{filtered.map(p=><Card key={p.id}><h3 className='font-semibold'>{p.title}</h3><p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>{p.body}</p></Card>)}</div>{loading&&<div>Loading...</div>}{error&&<div className='text-red-500'>Error:{error}</div>}</div>
}