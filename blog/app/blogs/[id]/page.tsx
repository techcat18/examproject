
async function BlogItemPage({params}){
  const {id} = await params;
  return (
    <div>
      Blog Item {id}
    </div>
  )
}

export default BlogItemPage
