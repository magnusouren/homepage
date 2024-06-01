import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { PageLayout } from './layouts/page';
import { AboutMe } from './pages/aboutMe';
import { CV } from './pages/cv';
import { HomeView } from './pages/homeview';
import { Projects } from './pages/projects';
import { Timeline } from './pages/timeline';

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="/" element={<HomeView />} />
      <Route path="/me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/cv" element={<CV />} />
    </Route>,
  ),
);
