import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const RootLayout = () => {
    return ( 
        <div className='App'>
            <header>
                <NavBar></NavBar>
            </header> 
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default RootLayout;

