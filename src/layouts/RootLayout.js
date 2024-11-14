import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const RootLayout = () => {
    return ( 
        <div className='App'>
            <NavBar></NavBar>
            <div className='content'>
                <Outlet/>
            </div>
        </div>
     );
}
 
export default RootLayout;

