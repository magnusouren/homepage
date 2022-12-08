import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import { PageLayout } from './layouts/page';
import { AboutMe } from './pages/aboutMe';
import { HomeView } from './pages/homeview';
import { Projects } from './pages/projects';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="/" element={<HomeView />} />
      <Route path="/me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
    </Route>,
  ),
);
