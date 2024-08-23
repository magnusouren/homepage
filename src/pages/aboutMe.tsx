import { type FC } from 'react';
import ReactGa from 'react-ga4';
import { Link } from 'react-router-dom';

import { CvPhoto } from '../components/aboutme/portrait';
import { Subtitle } from '../components/subtitle';

export const AboutMe: FC = () => {
  ReactGa.send({
    hitType: 'pageview',
    page: '/aboutme',
    title: 'About Me',
  });

  const age = Math.floor(
    (Date.now() - new Date('2000-03-02').getTime()) / 31556839680,
  );

  return (
    <div>
      <div className="mx-auto max-w-xl px-4">
        <Subtitle subtitle="about me" />
        <p className="my-4 text-justify">
          I am a {age} year old student from Trondheim, Norway. I grew up and
          come from Oslo. Currently, I am studying informatics at NTNU in
          Trondheim. At the moment, I am at my first year of my MSc in
          Informatics with specialization in Software Engineering. I am a very
          curious person and I love to learn new things. Studying informatics
          makes it possible for me to learn a lot of new things that I never
          thought would be relevant to learn, but the more I learn, the more I
          understand how much I dont know.
        </p>
        <CvPhoto />
        <p className="my-4 text-justify">
          I love the social aspect of studying in Trondheim, and I am very happy
          to be a part of the student life here. Currently, I am a part of the
          student organization for informatics, called Online. I am also a part
          of the Business relation committee. More about Online can be found{' '}
          <a
            href="https://online.ntnu.no/"
            className="underline hover:text-gray-500"
          >
            here
          </a>
          . If you want to know more about me and what I do you should visit the{' '}
          <Link to="/cv">
            <i className="italic underline hover:text-gray-500">CV</i>
          </Link>{' '}
          and{' '}
          <Link to="/projects">
            <i className="italic underline hover:text-gray-500">projects</i>
          </Link>{' '}
          page.
        </p>
        <p className="my-4 text-justify">
          Currently I am working for{' '}
          <a
            href="https://www.dykkershop.no/"
            className="underline hover:text-gray-500"
          >
            Havsport Dykkersenter
          </a>{' '}
          as maintainer of the webshop. Also working with the development of the
          website for the shop. This is my first job relateded to IT, and has
          gived me a lot of useful experience. Mainly working with Wordpress,
          but also some other technologies.
        </p>
        <p className="my-4 text-justify">
          As a result of studying at NTNU, we are lucky to have the opportunity
          to work in different positions at NTNU. I have been working as a
          scientific assistant and teaching assistant for different courses.
          This has been a great experience and I have learned a lot from it. It
          has also been a nice opportunity to earn some extra money while
          studying.
        </p>
        <p className="my-4 text-justify">
          I am currently at my exchange semester at the University of La
          Sapienza in Rome as a part of my MSc in Informatics at NTNU. Looking
          forward to learn more about the Italian culture with food and drinks,
          and the Italian way of studying.
        </p>
      </div>
    </div>
  );
};
