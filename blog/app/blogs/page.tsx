import NewBlogItemComponent from "@/components/NewBlogItemComponent";
import prisma from "@/lib/prisma"
import Link from "next/link";

async function BlogListPage(){
  const blogs = await prisma.blog.findMany();
  return (
    <div className="p-6">
      <h1 className="font-bold mb-2">Blog List</h1>
      <NewBlogItemComponent></NewBlogItemComponent>
      <div>
        {blogs.map(b => 
        <div key={b.id}>
          <Link key={b.id} href={`blogs/${b.id}`}>{b.isPinned && <label>Pinned </label>} {b.title}</Link>
        </div>
      )}
      </div>
    </div>
  )
}

export default BlogListPage
