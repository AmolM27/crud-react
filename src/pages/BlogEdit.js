import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Usefetch from '../usefetch';

const BlogEdit = () => {

    const {id} = useParams();
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const navigate = useNavigate();

    const { data: blog, isPending, error } = Usefetch('http://localhost:8000/blogs/' + id)

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setAuthor(blog.author);
            setBody(blog.body);
        }
    }, [blog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const Updatedblog = { title, body, author }

        fetch (`http://localhost:8000/blogs/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Updatedblog)
        })
        .then(() => {
            console.log('Blog updated successfully')
            navigate('/');
        }
        )
    }

    return ( 
        <div className="create">
            {blog && (<form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type='text' required value={title} onChange={(e) => { setTitle(e.target.value) }}/>
                <label>Blog Body: </label>
                <textarea type='textarea' required value={body} onChange={(e) => { setBody(e.target.value) }}/>
                <label>Author: </label>
                <select  value={author} onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Update</button>
            </form>
            )}
        </div>
     );
}
 
export default BlogEdit;