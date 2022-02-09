import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './views/Home/Home';
import DetailMovie from './views/DetailMovie/DetailMovie';

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <Home />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'movie/:id', element: <DetailMovie /> },
    ],
  };
  const routing = useRoutes([mainRoutes]);
  return <>{routing}</>;
}

export default App;