export interface ProjectProps {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  repository?: string;
  secondaryImages?: string[];
  hosted?: string;
}

export interface CVBase {
  shortDescription?: string;
  longDescription?: string;
  endMonth?: string;
  endYear?: number;
  header?: string;
  href?: string;
  logo?: string;
  location: string;
  startMonth?: string;
  startYear: number;
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
