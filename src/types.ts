export interface ProjectProps {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  url?: string;
  secondaryImages?: string[];
}

export interface CVBaseProps {
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

export interface CvEducationProps extends CVBaseProps {
  degree: string;
  fieldOfStudy: string;
  institution: string;
}

export interface CVJobProps extends CVBaseProps {
  company: string;
  jobTitle: string;
}

export interface CvVoluntaryWorkProp extends CVBaseProps {
  position: string;
  institution: string;
}
