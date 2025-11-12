import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioDetailPage from './pages/portofolioDetailPage/PortofolioDetailPage'; 
import HomePage from './pages/home/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, 
  },
  {
    path: "/portfolio-detail/:projectId", 
    element: <PortfolioDetailPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;