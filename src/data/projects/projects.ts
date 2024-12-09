import BWDarkmode from '../../img/projects/bingewatcher/BWDarkmode.png';
import BWDetails from '../../img/projects/bingewatcher/BWDetails.png';
import BWDetails2 from '../../img/projects/bingewatcher/BWDetails2.png';
import BWFilter from '../../img/projects/bingewatcher/BWFilter.png';
import BWHome from '../../img/projects/bingewatcher/BWHome.png';
import BWSearch from '../../img/projects/bingewatcher/BWSearch.png';
import BWWatchlist from '../../img/projects/bingewatcher/BWWatchlist.png';
import Cardsnap from '../../img/projects/cardsnap/cardsnap.png';
import NewCard from '../../img/projects/cardsnap/newCard.png';
import PlayDeck from '../../img/projects/cardsnap/playDeck.png';
import EMCDrink from '../../img/projects/enjoyMyCocktail/EMCDrink.png';
import EMCDrinks from '../../img/projects/enjoyMyCocktail/EMCDrinks.png';
import EMCFavorites from '../../img/projects/enjoyMyCocktail/EMCFavorites.png';
import EMCHomePage from '../../img/projects/enjoyMyCocktail/EMCHomepage.png';
import Deficiencies from '../../img/projects/proto/deficiencies.png';
import Routine from '../../img/projects/proto/routine.png';
import Search from '../../img/projects/proto/Searchpage.png';
import Run from '../../img/projects/trainingDiary/run.png';
import Strength from '../../img/projects/trainingDiary/strength.png';
import TrainingDiary from '../../img/projects/trainingDiary/trainingDiary.png';
import CreateProgram from '../../img/projects/woshare/create_program.png';
import CreateSession from '../../img/projects/woshare/create_session.png';
import Feed from '../../img/projects/woshare/feed.png';
import WOShare from '../../img/projects/woshare/main.png';
import Profile from '../../img/projects/woshare/profile.png';
import Programs from '../../img/projects/woshare/programs.png';
import Sessions from '../../img/projects/woshare/sessions.png';
import { type ProjectProps } from '../../types';

export const projects: ProjectProps[] = [
  {
    title: 'Proto',
    image: Search,
    shortDescription:
      'The bachelor project in the last semester of my bachelor degree in Informatics. We developed a prototype to enchance the internal Quality Management System (QMS) in Trondheim Municipality. We fetched the existing data from the current system, implemented a search engine with Elasticsearch making easier to retrieve routines. Furthermore a detailed dashboard-view to highlight deficiencies was developed to raise awareness for users of work needed to be done. Black boxes have been added to the screenshots to hide the content because of an existing NDA concerning the applications data content.',
    longDescription:
      'Initially, a significant amount of research was conducted to understand the project scope. Through continued dialogue with the customer, we identified the main pain points of the current system. The primary goal of the project was to develop a prototype to enhance the internal Quality Management System (QMS) in Trondheim Municipality. The prototype was developed using Next.js, React, Typescript, and TailwindCSS, along with TailwindUI. The backend was built using Node.js, Next.js, and Postgres DB. A substantial portion of the work involved fetching data from the existing system API and restructuring it into a new Postgres database. This process was time-consuming but ultimately provided us with extensive possibilities to develop new functionality through database queries instead of relying solely on simple API endpoints. This allowed for detailed views of deficiencies and the use of Elasticsearch for efficient routine retrieval. Minio S3 Object Storage was used for storing PDF files. The dashboard view was designed to highlight deficiencies, enabling users to easily identify tasks that need attention. The application was containerized using Docker, and worked out really well. The project was a great learning experience, and we are proud of the result we achieved in the end. Thanks to Trondheim Municipality for the opportunity to work on this project.',
    tags: [
      'Next.js',
      'React',
      'Typescript',
      'TailwindCSS',
      'Postgres',
      'Elasticsearch',
      'Docker',
      'Minio',
    ],
    secondaryImages: [Routine, Deficiencies],
    startTime: { year: 2024, month: 1 },
    endTime: { year: 2024, month: 5 },
  },
  {
    title: 'Bingewatcher',
    image: BWHome,
    shortDescription:
      'The biggest and most important project in IT2810. We developed a web application for searching for movies from a big dataset. Frontend is made with React, Typescript, and SCSS. Backend is made with Node.js, Apollo Server, Mongoose and GrapgQL. Database is made with MongoDB. All servives is hosted on a virtual machine at NTNU.',
    longDescription:
      'Our project was an extensive venture into web development, focusing on managing large datasets. We chose to develop a web application that allows users to search through a substantial movie database, offering features like adding movies to a watchlist. The application was built using Vite, React, and TypeScript, with SCSS for styling.' +
      'For data retrieval, we utilized Axios, while Apollo Client MemoryCache was employed for efficient caching, minimizing redundant API calls. Testing was conducted using Vitest and React Testing Library, incorporating snapshot tests for all components and unit tests for most functions. API call simulations in testing were achieved using mocks.' +
      'The backend infrastructure comprises Node.js, Apollo Server, Mongoose, and GraphQL, with MongoDB for database management. Apollo facilitated backend query handling, supported by custom resolvers for queries and mutations. The applications robustness was ensured through unit testing of resolvers and frontend components, complemented by Playwright for end-to-end testing.',
    tags: [
      'React',
      'Typescript',
      'SCSS',
      'Node.js',
      'Apollo Server',
      'Mongoose',
      'GraphQL',
      'MongoDB',
    ],
    repository: 'https://github.com/magnusouren/it2810-project2',
    hosted: 'https://bingewatcher.magnusbyrkjeland.no/',
    secondaryImages: [
      BWSearch,
      BWDetails,
      BWDetails2,
      BWFilter,
      BWWatchlist,
      BWDarkmode,
    ],
    startTime: { year: 2023, month: 8 },
    endTime: { year: 2023, month: 11 },
  },
  {
    title: 'Enjoy My Cocktail',
    image: EMCHomePage,
    shortDescription:
      'A project from the IT2810 course at NTNU. The project was to create a web application. We chose to create a web application for cocktails. The web application is a tool for users to find recipies for cocktails. We have used React, Typescript, and vanilla CSS to create this application.',
    longDescription:
      'This project was a group project with me and 3 other classmates. The task was to fetch some data from an optional API, and create a web application. We chose to create a web application for cocktails. The web application is a tool for users to find recipies for different types of cocktail. The project is created with Vite, using React and Typescript. For styling we was only allowed to use vanilla CSS. The data is fetched with axios, and caching is handled with Tanstack to avoid unnecessary API calls. Furthermore, testing is done with Vitest and React Testing Library. We have written snapshot-test for all components, and unit tests for the most of the functions. We have used mocks to mock the API calls in testing. The project is per now hosted on our virtual machine at NTNU, and can be found at http://it2810-16.idi.ntnu.no/project1 if you are connected to NTNU network. In the future I will host it on my own domain.',
    tags: ['React', 'Typescript', 'CSS', 'Vite', 'Vitest', 'Tanstack'],
    repository: 'https://github.com/magnusouren/it2810-project1',
    secondaryImages: [EMCDrinks, EMCDrink, EMCFavorites],
    hosted: 'https://cocktail.magnusbyrkjeland.no/',
    startTime: { year: 2023, month: 8 },
    endTime: { year: 2023, month: 9 },
  },
  {
    title: 'WO Share',
    image: WOShare,
    shortDescription:
      'Group project in the course TDT4140 - Software development at NTNU. The main focus during the project was to learn agile development in Scrum. Our product owner ordered a web application for sharing workouts and programs. The application is made with React, Typescript, and TailwindCSS. We used Firebase as BaaS (Backend-as-a-Service). The project was made in a group of 6 people.',
    longDescription:
      'This was a group project for learning agile ' +
      'development in a group. The main purpose of the project was to ' +
      'learn more about agile development, and how to apply it in ' +
      'practice. The program we created is a web application for sharing workouts and programs. ' +
      'The backend is made with Firebase, and the frontend is made with React, Typescript, and TailwindCSS. ' +
      'Firebase was used for authentication, and for storing data. ' +
      'Our team had a interdisciplinary approach, from different studies' +
      'and different years. We had a product owner, and the role as scrum master rolled. ' +
      'We learned a lot about agile development, and how to work in a group. ' +
      'The project lasted for 8 weeks, and was divided into 2 sprints for 4 weeks each. \n ' +
      'Our product let the user create workouts and programs, and share them with other users. ' +
      'The user can also search for others users, follow them, and see their publishes content.',
    tags: ['React', 'Typescript', 'TailwindCSS', 'Firebase'],
    repository: 'https://github.com/magnusouren/woshare',
    secondaryImages: [
      Sessions,
      Programs,
      Profile,
      Feed,
      CreateSession,
      CreateProgram,
    ],
    startTime: { year: 2023, month: 1 },
    endTime: { year: 2023, month: 5 },
  },
  {
    title: 'Cardsnap',
    image: Cardsnap,
    shortDescription:
      'School project in the course IT1901, Informatics project work, at NTNU. The project was to create an application. We chose to create a web application for flash-cards. The web application is a tool for students to create and study flash-cards. The application is made with React, Typescript, and TailwindCSS. The backend is made with Java. The project was made in a group of 4 people.',
    longDescription:
      'This was a group project for learning agile ' +
      'development in a group. The main purpose of the project was to ' +
      'learn more about agile development, and how to apply it in ' +
      'practice. The program we created is a web application for creating and studying ' +
      'flash-cards. The user can create decks of flash-cards, and study them. ' +
      'The backend is made with Java, and the frontend is made with React, Typescript, and TailwindCSS. ' +
      'This was the first time I used React, and I learned a lot about it. ' +
      'We created the backend first with Java, and then created the frontend. ' +
      'The backend is a Rest API, hosted locally, communicating with the frontend with HTTP requests. ' +
      'Backend unit- and integrationtests is tested with Junit. ' +
      'The frontend is tested with Vitest and React Testing Library. ' +
      'End to end testing is done with Playwrigth. ',
    tags: ['Java', 'React', 'Typescript', 'TailwindCSS'],
    repository: 'https://github.com/magnusouren/Cardsnap',
    secondaryImages: [NewCard, PlayDeck],
    startTime: { year: 2022, month: 9 },
    endTime: { year: 2022, month: 12 },
  },
  {
    title: 'Training diary',
    image: TrainingDiary,
    shortDescription:
      'I Created a training diary app with Java and JavaFx. This was a school project in the course TDT4100, Object-Oriented Programming, at NTNU. Isnt the most beautiful app, but it works, and I learned a lot about OOP!',
    longDescription:
      'This was an individual project for learning object ' +
      'oriented programming in Java. The main purpose of the project was to ' +
      'learn more about object-oriented programming, and how to apply it in ' +
      'practice. The program is a training diary, where the user can add ' +
      'exercises to a workout, and add workouts to a training diary. The user can save two types of workouts, running and strength.' +
      'The user can save diaries to a txt-file, and load them back from the files stored locally. ' +
      'The project was made in Java, and the GUI was made with FXML.' +
      'I used Visual Studio Code as my IDE, and Git for version control.' +
      'For the project I used the JavaFX library for the GUI, and the JUnit library for testing.',
    tags: ['OOP', 'Java', 'FXML'],
    repository: 'https://github.com/magnusouren/Training-diary',
    secondaryImages: [Strength, Run],
    startTime: { year: 2022, month: 3 },
    endTime: { year: 2022, month: 4 },
  },
];
