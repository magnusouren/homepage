import { ProjectType } from '../../components/projects/project';
import TrainingDiary from '../../img/projects/trainingDiary/trainingDiary.png';
import Strength from '../../img/projects/trainingDiary/strength.png';
import Summary from '../../img/projects/trainingDiary/summary.png';

export const projects: ProjectType[] = [
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
    secondaryImages: [Strength, Summary],
  },
];
