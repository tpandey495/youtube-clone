import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import store from "./utils/store";
import { Provider } from "react-redux";
import Home from './pages/Home';
import MainContainer from './component/MainContainer';
import Watch from './pages/Watchpage';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
      path:"/",
      element:<MainContainer/>,
      },
     {
      path:"/watch",
      element:<Watch/>,
     }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
    </Provider>

  );
}

export default App;
