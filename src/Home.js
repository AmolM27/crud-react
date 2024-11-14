import { useState, useEffect } from 'react';
import BlogList from './pages/BlogList';
import Usefetch from './usefetch';

const Home = () => {

    const {data : blogs , isPending, error } = Usefetch('http://localhost:8000/blogs')

    return (  
        <div className='home'>
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs}></BlogList>}
        </div>
    );
    
}
 
export default Home;