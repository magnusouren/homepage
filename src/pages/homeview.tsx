import '../App.css';
import { Wallpaper } from '../components/home/wallpaper';

export const HomeView = () => (
  <div className="-mt-8 md:mt-0">
    <Wallpaper />
    <div className="ml-auto mr-auto mt-8 max-w-xl px-4">
      <h2 className="text-4xl font-bold">magnus.ouren.no</h2>
      <p className="font-semibold text-gray-500">react/typescript/tailwind css</p>
      <p className="mt-8 mb-4 text-justify">
        Hello I'm Magnus and this is my first homepage. I am currently studying informatics at my second year at NTNU in
        Trondheim. This webpage is made with React, Typescript and Tailwind CSS as a hoby project to learn more about
        new technologies. Started as a workshop with a friend for learing React, but has developed into a bigger webpage
        about me, what I do, and I who am. that's reasonably selfish, but hopefully I wil add other types of content in
        the future.
      </p>
      <p className="my-4 text-justify">
        It's my first ever buildt react webpage. My react-skills are mostly self-taught, so don't be harsh. You can
        check out the repository for this webpage{' '}
        <a target="blank" href="https://github.com/magnusouren/homepage" className="underline hover:text-gray-500">
          here!
        </a>
      </p>
      <p className="my-4 text-justify">
        The amazing photo you can see above was taken on my last holiday. The picture was taken in Monaco, where I was
        on a trip with my friends. Expensive stay, but a very cool place! Can be strongly recommended!
      </p>
    </div>
  </div>
);
