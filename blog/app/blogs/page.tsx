import prisma from "@/lib/prisma"
import Link from "next/link";

async function BlogListPage(){
  const blogs = await prisma.blog.findMany();
  return (
    <div>
      <h1>Blog List</h1>
      <div>
        {blogs.map(b => <Link key={b.id} href={`blogs/${b.id}`}>{b.title}</Link>)}
      </div>
    </div>
  )
}

export default BlogListPage
