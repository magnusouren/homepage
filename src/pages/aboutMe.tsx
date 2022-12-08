import { CvPhoto } from '../components/home/cvphoto';

export const AboutMe = () => (
  <div>
    <div className="w-96 ml-auto mr-auto">
      <h2 className="text-4xl font-bold my-8">about me</h2>
      <p>
        I am a 20 year old student from Trondheim, Norway. Currently studying informatics at NTNU in Trondheim. At the
        moment at the second year of the bachelor program. I am a very curious person and I love to learn new things.
      </p>
      <CvPhoto />
      <p className="my-4">
        Love the sosial aspect of studying in Trondheim, and I am very happy to be a part of the student life here.
        Currently I am a part of the student organization for informatics, called Online. Where I am also a part of the
        board for the student organization.
      </p>
      <p className="my-4">
        Currently I am working for Havsport as maintainer of the webshop. I am working with the development of the
        webshop for the company. Also working with the development of the company website. This is my first job
        relateded to IT, and gived me a lot of useful experience.
      </p>
    </div>
  </div>
);
