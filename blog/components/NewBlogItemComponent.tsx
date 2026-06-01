"use client";

import prisma from '@/lib/prisma';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'


interface NewBlog{
  title: string
  text: string
}

const NewBlogItemComponent = () => {
  const [isActive, setIsActive] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const createBlog = () => {
    const newBlog : NewBlog = {title: title, text: text}
    console.log('data', JSON.stringify(newBlog))
    mutation.mutate(newBlog);
    setIsActive(false);
  }
  
  const mutation = useMutation({
    mutationFn: (newBlog: NewBlog) => {
      return fetch("/api/blogs", {method: "POST", body: JSON.stringify(newBlog)})
    },
  })

  return (
    <div className="mb-2">
      <button className="bg-amber-100" onClick={() => setIsActive(!isActive)}>Create New Blog Post</button>
      {isActive && 
      <div>
        <p>Enter the title: <input value={title} onChange={(e) => {setTitle(e.target.value)}}/></p>
        <p>Enter the text: <textarea value={text} onChange={(e) => {setText(e.target.value)}}/></p>
        <button className="bg-red-50 mt-2 mb-2" onClick={() => createBlog()}>Create</button>
      </div>
      }
    </div>
  )
}

export default NewBlogItemComponent
