import prisma from "@/lib/prisma";

export async function GET(){
  const blogs = await prisma.blog.findMany();
  return new Response(blogs, {status: 200});
}

export async function POST(req){
    const data = await req.json();
     await prisma.blog.create({
        data: {
          title: data.title,
          text: data.text,
          isPinned: false,
          createdAt: new Date()
        }
      })
    return new Response(null, {status: 201})
}

export async function PUT(req){
    const data = await req.json();
     await prisma.blog.update({
        where: {id: data.id},
        data: {isPinned: !data.isPinned}
      })
    return new Response(null, {status: 200})
}