"use client";

import { useMutation } from "@tanstack/react-query";

const PinBlogItemComponent = ({blog}) => {  
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("/api/blogs", {method: "PUT", body: JSON.stringify({id: blog.id, isPinned: !blog.isPinned})})
    },
  })

  return (
    <div>
      <button className="bg-red-50" onClick={() => mutation.mutate()}>Pin/Unpin</button>
    </div>
  )
}

export default PinBlogItemComponent
