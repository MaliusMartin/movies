
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const  Home = () => {
//     const handleClick=(e)=>{
//         console.log('hello, ninjas',e);
//     }
    // const handleClickAgain = (name , e)=>{
    //     console.log('hello' + name, e.target);
        
        
    // }
    //     const [name, setName]= useState('Badman');
    //    const [age,setAge]= useState(25);
     
    //    const handleClick=() =>{
    //         setName('International');
    //         setAge(30)
           
    //     }
        // const handleDelete = (id) =>{
        //     const newBlogs = blogs.filter(blog =>blog.id !== id)
        // setBlogs(newBlogs)
        // }


const {data:blogs, isPending,error} =useFetch('http://localhost:8000/blogs'); 
  

    return ( 
        <div className="home">
            {/* <h2>Home</h2>
            <p>{name} is {age} years Old</p>
            <button onClick={handleClick}>Click Me</button>
    
  <BlogList blogs={blogs} title="ALL THE BLOGS"/>
  <BlogList blogs={blogs.filter((blog)=>blog.author==='Bankonit')} title="Burnaboy's blog"/>
 
   <p>{name}</p>
   <button onClick={() => setName('Furaha')}>change name</button>
         */}
         {error && <div>{error}</div>}
         {isPending &&<div>Loading.....</div>}
         {blogs && <BlogList blogs={blogs} title="ALL THE BLOGS" />}
        </div> 
     );
}
 
export default Home;