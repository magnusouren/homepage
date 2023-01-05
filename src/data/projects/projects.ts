import { ProjectType } from '../../components/projects/project';
import TrainingDiary from '../../img/projects/trainingDiary/trainingDiary.png';
import Strength from '../../img/projects/trainingDiary/strength.png';
import Run from '../../img/projects/trainingDiary/run.png';
import Cardsnap from '../../img/projects/cardsnap/cardsnap.png';
import NewCard from '../../img/projects/cardsnap/newCard.png';
import PlayDeck from '../../img/projects/cardsnap/playDeck.png';

export const projects: ProjectType[] = [
  {
    title: 'Cardsnap',
    image: Cardsnap,
    shortDescription:
      'School project in the course IT1901, Informatics project work, at NTNU. The project was to create an application. We chose to create a web application for flash-cards. The web application is a tool for students to create and study flash-cards. The application is made with React, Typescript, and TailwindCSS. The backend is made with Java. The project was made in a group of 4 people. Since it was a school project the code is not available right now due to grading.',
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
    url: '',
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
];
