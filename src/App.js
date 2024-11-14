import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import BlogEdit from './pages/BlogEdit';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';

import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="create" element={<Create/>}></Route>
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="blogedit/:id" element={<BlogEdit />} />
          <Route path="help" element={<HelpLayout/>}>
            <Route path="faq" element={<Faq/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
          </Route>

        </Route>
    )
  )
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
