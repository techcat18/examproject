import PinBlogItemComponent from "@/components/PinBlogItemComponent";
import prisma from "@/lib/prisma";

async function BlogItemPage({params}){
  const {id} = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id)
    }
  })
  return (
    <div className="p-6">
      <h1 className="font-bold mb-2">Blog Item</h1>
      <h2>Id: {blog?.id}</h2>
      <h2>Title: {blog?.title}</h2>
      <h2>Created at: {blog?.createdAt.toDateString()}</h2>
      <h2>Text: {blog?.text}</h2>
      <PinBlogItemComponent blog={blog}></PinBlogItemComponent>
    </div>
  )
}

export default BlogItemPage
