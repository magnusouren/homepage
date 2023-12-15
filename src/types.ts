export interface ProjectProps {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  url?: string;
  secondaryImages?: string[];
}

export interface CvContentProps {
  description?: string | JSX.Element;
  endMonth?: string;
  endYear?: number;
  header: string;
  href?: string;
  logo?: string;
  location: string;
  startMonth?: string;
  startYear: number;
}

export interface CvEducationProps {
  degree: string;
  description?: string;
  endYear?: number;
  endmonth?: string;
  fieldOfStudy: string;
  institution: string;
  location: string;
  logo: string;
  startYear: number;
  startMonth?: string;
}

export interface CVJobProps {
  company: string;
  endMonth?: string;
  endYear?: number;
  href?: string;
  jobDescription: string;
  jobTitle: string;
  logo: string;
  location: string;
  startMonth?: string;
  startYear: number;
}

export interface CvVoluntaryWorkProps {
  position: string;
  description: string;
  endYear?: number;
  endMonth?: string;
  institution: string;
  location: string;
  logo: string;
  startYear: number;
  startMonth?: string;
}
