import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from './components/TeamList';
import Main from './components/Main';
import About from './components/About';
import RootLayout from './components/RootLayout';
import PlayerList from './components/PlayerList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TeamList />,
      },
      {
        path: 'team/:teamId/players',
        element: <PlayerList />,
      },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}


export default App;