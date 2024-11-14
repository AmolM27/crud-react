import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
    <nav className='navbar'>
        <div className='links'> 
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                        color: "white",
                        backgroundColor: "#f1356d"
            }}>New Blog</Link>
            <Link to="/help">Help</Link>
        </div>
    </nav>
);
}
 
export default NavBar;