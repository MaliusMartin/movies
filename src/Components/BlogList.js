import { Link } from "react-router-dom";

const BlogList  = ({blogs,title}) => {
//     const blogs= props.blogs;
//    const title = props.title;
//    console.log(props,blogs)

    return ( 
        <div className="blog-list">
             <h1>{title}</h1>   
                {blogs.map((blog) =>(
<div className=""blog-preview key={blog.id}>
    {/* <h2>{blog.id}.{blog.title}</h2>
    <p>Written by {blog.author}</p> */}

{/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}
 <Link  to ={`/blogs/${blog.id}`}>
 <h2> {blog.title}</h2>
 <p>Written by {blog.author}</p>
 </Link>   

</div>
            )) }
           
        </div>
     );
}
export default BlogList;