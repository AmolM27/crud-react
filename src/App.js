import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import BlogEdit from './BlogEdit';

import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

//layouts
import RootLayout from './layouts/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="create" element={<Create/>}></Route>
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="blogedit/:id" element={<BlogEdit />} />
        </Route>
    )
  )
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
