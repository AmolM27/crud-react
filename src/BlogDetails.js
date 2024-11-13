import { useNavigate, useParams } from "react-router-dom";
import Usefetch from './usefetch';

const BlogDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const { data: blog, isPending, error } = Usefetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/');
        }
        )
    }

    const handleUpdate = (id) => {
        navigate(`/blogedit/${id}`);
    }

    return (  
        <div className="blog-details">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            {blog && (
                <article>
                    <h2> {blog.title}</h2>
                    <p> Written by {blog.author} </p>
                    <div>{blog.body}</div>
                    <button onClick={(e) => handleUpdate(blog.id)}>Edit</button>
                    <button onClick={(e) => handleDelete()}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;