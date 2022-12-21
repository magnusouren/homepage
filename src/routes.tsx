import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import { PageLayout } from './layouts/page';
import { AboutMe } from './pages/aboutMe';
import { CV } from './pages/cv';
import { HomeView } from './pages/homeview';
import { Projects } from './pages/projects';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/homepage" element={<PageLayout />}>
      <Route path="/homepage" element={<HomeView />} />
      <Route path="/homepage/me" element={<AboutMe />} />
      <Route path="/homepage/projects" element={<Projects />} />
      <Route path="/homepage/cv" element={<CV />} />
    </Route>,
  ),
);
