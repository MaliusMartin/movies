
// import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {
  // const title= 'welcome to the new blog';
  // let likes =2000;
//object and boolean do not wo rk
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
<div  className='content'>

<Switch>
<Route exact path='/'>
   <Home/>
</Route>

<Route path='/Create'>
   <Create/>
</Route>
<Route path='/blogs/:id'>
   <BlogDetails/>
</Route>

<Route path='*'>
  <NotFound/>
</Route>

</Switch>

  {/* <h1> {title}</h1>
  <p>{likes}</p> */}
</div>

    </div>
    </Router>

  );
}

export default App;
