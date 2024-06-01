export interface YearMonth {
  year: number;
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export interface ProjectProps {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  repository?: string;
  secondaryImages?: string[];
  hosted?: string;
  startTime: YearMonth;
  endTime?: YearMonth;
}

export interface CVBase {
  shortDescription?: string;
  longDescription?: string;
  startTime: YearMonth;
  header?: string;
  href?: string;
  logo?: string;
  location: string;
  endTime?: YearMonth;
  readMoreURL?: string;
}

export interface CvEducation extends CVBase {
  degree: string;
  fieldOfStudy: string;
  institution: string;
}

export interface CvJob extends CVBase {
  company: string;
  jobTitle: string;
}

export interface CvVoluntaryWork extends CVBase {
  position: string;
  institution: string;
}
