// src/components/AboutMe.js

import React from 'react';

const WorkExperience = () => {
  return (
    <div className='aboutme-text'>
        <div className='title'>Work Experience</div>
        <div className='subtitle'>&#x2022;Visualforma</div>
        <div className='text'>  <p> Jun. 2021 - Sep. 2021 / Feb 2022 - Jul. 2022 (internship) Front-end developer Faro, Portugal;</p>
        <div className='description'>Responsible for website development, usually working in small teams, for various municipalities and public entities in Portugal.
         Main technologies used were React, C#, SASS, JavaScript and SQL. Implemented databases and created a CMS for various webapps and mupi's.
         </div>

        </div>
        <div className='subtitle'>&#x2022;Câmara Municipal de Loulé</div>
        <div className='text'>
        <p>  May 2019 - Aug. 2019 IT Technician - Internship Loulé, Portugal</p>
        <div className='description'>Responsible for providing general IT support</div>
        </div>
      </div>
  );
};

export default WorkExperience;

