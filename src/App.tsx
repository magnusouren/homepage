import { type FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export const App: FC = () => <RouterProvider router={router} />;
