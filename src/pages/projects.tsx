import { Project } from '../components/projects/project';
import { Subtitle } from '../components/subtitle';
import { projects } from '../data/projects/projects';

export const Projects = () => (
  <div className="ml-auto mr-auto max-w-2xl px-4">
    <div>
      <Subtitle subtitle="projects" />
      <p>
        On this page you will find a list of projects I have worked on. Since I am a student I have not had so much time
        to work on projects in my sparetime, therefore some of them are from school. More projects will be added in the
        future!
      </p>
    </div>
    <div>
      {projects.map((project) => (
        <Project
          title={project.title}
          image={project.image}
          shortDescription={project.shortDescription}
          longDescription={project.longDescription}
          secondaryImages={project.secondaryImages}
          url={project.url}
          tags={project.tags}
          key={project.title}
        />
      ))}
    </div>
  </div>
);
