import { Link } from 'react-router-dom';
import { CvPhoto } from '../components/aboutme/portrait';
import { Subtitle } from '../components/subtitle';

export const AboutMe = () => (
  <div>
    <div className="ml-auto mr-auto max-w-xl px-4">
      <Subtitle subtitle="about me" />
      <p className="my-4 text-justify">
        I am a 22 year old student from Trondheim, Norway. I grew up and come from Oslo. Currently, I am studying
        informatics at NTNU in Trondheim. At the moment, I am in the second year of the bachelor program. I am a very
        curious person and I love to learn new things. Studying informatics makes it possible for me to learn a lot of
        new things that I never thought would be relevant to learn, but the more I learn, the more I understand how much
        I don't know.
      </p>
      <CvPhoto />
      <p className="my-4 text-justify">
        I love the social aspect of studying in Trondheim, and I am very happy to be a part of the student life here.
        Currently, I am a part of the student organization for informatics, called Online. I am also a part of the board
        for the student organization. My role in the board is to represent the Business relation committee. More about
        Online can be found.{' '}
        <a href="https://online.ntnu.no/" className="underline hover:text-gray-500">
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
        <a href="https://www.dykkershop.no/" className="underline hover:text-gray-500">
          Havsport Dykkersenter
        </a>{' '}
        as maintainer of the webshop. Also working with the development of the website for the shop. This is my first
        job relateded to IT, and has gived me a lot of useful experience. Mainly working with Wordpress, but also some
        other technologies.
      </p>
      <p className="my-4 text-justify">
        I am not a big fan of writing about myself, so I will leave it at that. But something that is really cool is
        that mostly of this content is generated with Github Copilot and I am very impressed with the results. And yes I
        have made sure that the content is correct.
      </p>
    </div>
  </div>
);
