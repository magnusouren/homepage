import { type FC } from 'react';
import ReactGa from 'react-ga4';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export const App: FC = () => {
  ReactGa.initialize('G-H9LM5N0B9G'); // TODO: set up env variable

  return <RouterProvider router={router} />;
};
