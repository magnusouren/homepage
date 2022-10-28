import '../App.css';
import { Logos } from '../components/home/logos';
import Wallpaper from '../components/home/wallpaper';

export const HomeView = () => (
  <div>
    <Wallpaper></Wallpaper>
    <div className="w-96 ml-auto mr-auto m-8">
      <h2 className="text-4xl font-bold">magnus.ouren.no</h2>
      <p className="font-semibold text-gray-500">react/typescript/tailwind css</p>
      <p className="mt-8">
        Hello I'm Magnus and this is my first homepage. I am currently studying informatics at my second year at NTNU in
        Trondheim.
      </p>
      <p className="mt-8">
        This is my first ever buildt react webpage. My react-skills are self-taught, so don't be harsh. You can check
        out the repository for this webpage{' '}
        <a target="blank" href="https://github.com/magnusouren/homepage" className="underline hover:font-semibold">
          here!
        </a>
      </p>
      <p className="mt-8">
        The amazing photo you can see above was taken on my last holiday. The picture was taken in Monaco, where I was
        on a trip with my friends. Expensive stay, but a very cool place! Can be strongly recommended!
      </p>
      <Logos></Logos>
    </div>
  </div>
);
