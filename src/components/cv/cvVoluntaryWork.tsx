import React from 'react'

import { CvContent } from './cvContent'

export interface CvVoluntaryWorkProps {
  position: string
  description: string
  endYear?: number
  endMonth?: string
  institution: string
  location: string
  logo: string
  startYear: number
  startMonth?: string
}

export const CvVoluntaryWork: React.FC<CvVoluntaryWorkProps> = ({
  position,
  description,
  endYear,
  endMonth = '',
  institution,
  location,
  logo,
  startYear,
  startMonth = ''
}: CvVoluntaryWorkProps) => (
  <div className="mb-4">
    <CvContent
      header={position + ' at ' + institution}
      location={location}
      logo={logo}
      startYear={startYear}
      startMonth={startMonth}
      endMonth={endMonth}
      endYear={endYear}
      description={description}
    />
  </div>
)
