import { ProjectType } from '../../components/projects/project';
import TrainingDiary from '../../img/projects/trainingDiary/trainingDiary.png';
import Strength from '../../img/projects/trainingDiary/strength.png';
import Run from '../../img/projects/trainingDiary/run.png';
import Cardsnap from '../../img/projects/cardsnap/cardsnap.png';
import NewCard from '../../img/projects/cardsnap/newCard.png';
import PlayDeck from '../../img/projects/cardsnap/playDeck.png';
import WOShare from '../../img/projects/woshare/main.png';
import Sessions from '../../img/projects/woshare/sessions.png';
import Programs from '../../img/projects/woshare/programs.png';
import Profile from '../../img/projects/woshare/profile.png';
import Feed from '../../img/projects/woshare/feed.png';
import CreateSession from '../../img/projects/woshare/create_session.png';
import CreateProgram from '../../img/projects/woshare/create_program.png';

export const projects: ProjectType[] = [
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
    tags: ['Java', 'React', 'Typescript', 'TailwindCSS', 'Agile development', 'Scrum'],
    url: 'https://github.com/magnusouren/Cardsnap',
    secondaryImages: [NewCard, PlayDeck],
  },
  {
    title: 'Training diary',
    image: TrainingDiary,
    shortDescription:
      'I Created a training diary app with Java and JavaFx. This was a school project in the course TDT4100, Object-Oriented Programming, at NTNU. Isnt the most beautiful app, but it works, and I learned a lot about OOP!',
    longDescription:
      'This was a individual project for learning object ' +
      'oriented programming in Java. The main purpose of the project was to ' +
      'learn more about object-oriented programming, and how to apply it in ' +
      'practice. The program is a training diary, where the user can add ' +
      'exercises to a workout, and add workouts to a training diary. The user can save two types of workouts, running and strength.' +
      'The user can save diaries to a txt-file, and load them back from the files stored locally. ' +
      'The project was made in Java, and the GUI was made with FXML.' +
      'I used Visual Studio Code as my IDE, and Git for version control.' +
      'For the project I used the JavaFX library for the GUI, and the JUnit library for testing.',
    tags: ['Object-Oriented Programming', 'Java', 'FXML'],
    url: 'https://github.com/magnusouren/Training-diary',
    secondaryImages: [Strength, Run],
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
    tags: ['React', 'Typescript', 'TailwindCSS', 'Firebase', 'Agile development', 'Scrum'],
    url: 'https://github.com/magnusouren/woshare',
    secondaryImages: [Sessions, Programs, Profile, Feed, CreateSession, CreateProgram],
  },
];
