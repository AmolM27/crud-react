import { NavLink, Outlet } from 'react-router-dom';
const HelpLayout = () => {
    return (
        <div>
            <h2>Website Help</h2>
            <p>Some text</p>
            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet></Outlet>
        </div>
      );
}
 
export default HelpLayout;

