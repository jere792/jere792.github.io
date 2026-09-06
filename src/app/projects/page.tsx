import { Suspense } from 'react';
import { ProjectsPage } from './ProjectsClient';
import './projects.scss';

export default function Projects() {
  return (
    <Suspense>
      <ProjectsPage />
    </Suspense>
  );
}
