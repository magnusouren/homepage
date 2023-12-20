/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';

import { Project } from '../components/projects/project';
import { Subtitle } from '../components/subtitle';
import { projects } from '../data/projects/projects';

export const Projects = (): JSX.Element => {
  const [filter, setFilter] = useState('all');

  const tagCounts = projects.reduce<Record<string, number>>((acc, project) => {
    project.tags.forEach((tag) => {
      if (acc[tag]) {
        acc[tag]++;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});

  // Use this list for filtering
  const handleFilterChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const tag = event.currentTarget.value;
    if (tag === filter) {
      setFilter('all');
      return;
    }
    setFilter(tag);
  };

  const filteredAndCategorizedProjects = projects.filter((project) =>
    filter === 'all' ? true : project.tags.includes(filter),
  );

  return (
    <div className="ml-auto mr-auto max-w-2xl px-4">
      <div>
        <Subtitle subtitle="projects" />
        <p>
          On this page you will find a list of projects I have worked on. Since
          I am a student I have not had so much time to work on projects in my
          sparetime, therefore some of them are from school. Click on images to
          make them bigger. More projects will be added in the future!
        </p>
        <div className=" border-black border-t border-b my-4">
          <h2 className="mt-2 font-semibold">filter projects:</h2>
          <div className="flex flex-grow flex-wrap gap-2 mb-4 mt-2">
            {Object.entries(tagCounts)
              .filter(([_tag, count]) => count > 1)
              .sort(([_tag, count1], [_tag2, count2]) => count2 - count1)
              .map(([tag, count]) => (
                <button
                  className={`${
                    filter === tag ? 'bg-black text-white' : 'bg-white'
                  } px-4 py-2 border border-black border-l-8 min-w-[7rem]`}
                  value={tag}
                  onClick={handleFilterChange}
                  key={tag}
                >
                  {tag} ({count})
                </button>
              ))}
          </div>
        </div>
      </div>
      <div>
        {filteredAndCategorizedProjects.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </div>
  );
};
