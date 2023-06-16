import { faCapsules, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ShowHideButton from '../components/showhidebutton/ShowHideButton';

const NtropyDesc = (
  <ul>
    <li>First Frontend Engineer, leading our team from Seed to Series A</li>
    <li>
      Built customer facing web app that brought in ~$100k in revenue within the
      first 3 months, expanding our market share to targeting new non-developer
      users
    </li>
    <li>
      Led all of frontend; managing 5 in-house applications, proposed, designed,
      architected and spear-headed 3 external client-facing applications
      (transaction enrichment viewer, developer portal, customer dashboard)
    </li>
    <li>
      Organized frontend environment by building an in-house ticketing tool that
      allowed non-frontend engineers to seamlessly work with the frontend team
    </li>
  </ul>
);

const UbisoftDesc = (
  <ul>
    <li>
      Monorepos, Typescript heavy, GitLab CI, Mocha/Jest testing
      (Arrange-Act-Assert pattern), e2e with cypress
    </li>
    <li>
      ReactJS, redux with redux toolkit (slice, action creators, reducers,
      selectors), code reviews, Storybook
    </li>
    <li>
      Angular JS (MVC): bindings, directives, $scope, $q, promise chaining +
      async/await
    </li>
    <li>
      Aggregate and manipulate service APIs to build controllers, models, views,
      microapps and microfrontends
    </li>
  </ul>
);

const RIWDesc = (
  <ul>
    <li>Implemented Firestore pagination</li>
    <li>Implement on page edits onSnapshotListener without reload</li>
    <li>
      Set up bootstrapped ReactJS project structure (including redux, thunk &
      auth)
    </li>
    <li>UI updates: form validations, code cleanup, custom buttons</li>
  </ul>
);

const fundmoreDesc = (
  <ul>
    <li>
      Developed UI on Storybook using Angular 9 and then transitioned to Angular
      10
    </li>
    <li>
      Developed input forms (validation), expansion panels (Angular Materiall,
      ElementRefs from Figma designs
    </li>
    <li>Created two important features for an MVP release</li>
    <li>Learned how to use the NGXS store to store and retrieve data</li>
  </ul>
);

const moneyLionDesc = (
  <ul>
    <li>Developed RESTful endpoints using SpringBoot</li>
    <li>Used vault (HamachiCorp) to securely store selected db credentials</li>
    <li>Created docker images and ran them in multiple containers</li>
    <li>Developed a dual layered encryption method using Cipher and base64</li>
    <li>Learned how to use lombok and elementary lambda expressions</li>
    <li>
      Implemented multiple string similarity algorithms using fuzzy matching
      (edit distance, dice coefficient, jaccard index)
    </li>
    <li>
      Additionally, implemented an algorithm which takes the positioning of
      words into account and assigns a score based on position
    </li>
  </ul>
);

const pharmaDesc = (
  <span>
    <ul>
      <u>Web Developer Intern</u> <span className="subDate">(Aug. - Oct.)</span>
      <li>
        Built new websites for clients in different departments (including
        PENDOPHARM) –{' '}
        <a
          href="https://pendopharm-gi.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          pendopharm-gi.com
        </a>
      </li>
      <li>
        Consolidated all hosting providers and registrars, creating a high-level
        estimate savings of $37K/year
      </li>
      <li>
        Built an operational and contextual document regarding how to manage
        domains, hosting providers... including troubleshooting methods and
        simplified how-to guides
      </li>
    </ul>
    <br />
    <ul>
      <u>Programmer Analyst</u> <span className="subDate">(May - Aug.)</span>
      <li>
        SharePoint super user and acting consultant for Communications, Legal,
        Finance and HR departments and the Pendopharm division
      </li>
      <li>
        Produced a site road map and flowchart of both companies (Pharmascience
        and Pendopharm) using <span className="customLink">draw.io</span>
      </li>
      <li>
        Created an excel database with all the websites currently under both
        companies including their provider, registrar, IP, NS Records using{' '}
        <span className="customLink">Pivot tables</span> and{' '}
        <span className="customLink">VBA</span> to streamline process
      </li>
      <li>
        Successfully adopted a new and better hosting provider for the company
        to put in action the consolidation of all websites under one hosting
        provider and one registrar
      </li>
    </ul>
  </span>
);

const otherDesc = (
  <ul>
    <li>
      Specialized Math Tutor{' '}
      <span className="subDate">
        (Oct. 2015 - Jan 2018) @ Tyndale St-Georges
      </span>
    </li>
    <li>
      Brand Ambassador / Sales Associate{' '}
      <span className="subDate">(May - Aug. 2017) @ Banana Republic</span>
    </li>
    <li>
      Cashier{' '}
      <span className="subDate">
        (May - Sep. 2017) @ McDonalds Gare Centrale
      </span>
    </li>
    <li>
      Academic Tutor{' '}
      <span className="subDate">(Sep. 2016 - Jan 2017) @ Liberty Tutoring</span>
    </li>
    <li>
      Math Tutor{' '}
      <span className="subDate">
        (Dec. 2015 - July 2016) @ English Montreal School Board
      </span>
    </li>
  </ul>
);

const workItems = [
  {
    icon: faCode,
    date: 'April 2022 - October 2022',
    name: 'Ntropy',
    location: 'Montréal, QC',
    role: 'Lead Frontend Engineer',
    desc: (
      <ShowHideButton
        btnclass={'readmore-info'}
        txtclass={'info'}
        readLessText={'read less'}
        readMoreText={'read more'}
        text={NtropyDesc}
      ></ShowHideButton>
    ),
  },
  {
    icon: faCode,
    date: 'September 2020 - April 2022',
    name: 'Ubisoft',
    location: 'Montréal, QC',
    role: 'Full Stack Web Developer',
    desc: (
      <ShowHideButton
        btnclass={'readmore-info'}
        txtclass={'info'}
        readLessText={'read less'}
        readMoreText={'read more'}
        text={UbisoftDesc}
      ></ShowHideButton>
    ),
  },
  {
    icon: faCode,
    date: 'September - December 2020',
    name: 'ReInvestWealth',
    location: 'Montréal, QC',
    role: 'Software Developer',
    desc: (
      <ShowHideButton
        btnclass={'readmore-info'}
        txtclass={'info'}
        readLessText={'read less'}
        readMoreText={'read more'}
        text={RIWDesc}
      ></ShowHideButton>
    ),
  },
  {
    icon: faCode,
    date: 'June - September 2020',
    name: 'fundmore.ai',
    location: 'Ottawa, ON',
    role: 'Fullstack Developer',
    desc: (
      <ShowHideButton
        btnclass={'readmore-info'}
        txtclass={'info'}
        readLessText={'read less'}
        readMoreText={'read more'}
        text={fundmoreDesc}
      ></ShowHideButton>
    ),
  },
  {
    icon: faCode,
    date: 'May - August 2019',
    name: 'MoneyLion',
    location: 'Kuala Lumpur, Malaysia',
    role: 'AI Engineer (Intern)',
    desc: (
      <ShowHideButton
        btnclass={'readmore-info'}
        txtclass={'info'}
        readLessText={'read less'}
        readMoreText={'read more'}
        text={moneyLionDesc}
      ></ShowHideButton>
    ),
  },
  {
    icon: faCapsules,
    date: 'May - August, August - October 2018',
    name: 'Pharmascience',
    location: 'Montréal, QC',
    role: 'Sharepoint Analyst | Web Developer Intern',
    desc: (
      <ShowHideButton
        btnclass={'readmore-info'}
        txtclass={'info'}
        readLessText={'read less'}
        readMoreText={'read more'}
        text={pharmaDesc}
      ></ShowHideButton>
    ),
  },
  {
    icon: faGlobe,
    date: '',
    name: "Other places I've worked at",
    location: 'Montréal, QC',
    role: '',
    desc: (
      <ShowHideButton
        btnclass={'readmore-info'}
        txtclass={'info'}
        readLessText={'read less'}
        readMoreText={'read more'}
        text={otherDesc}
      ></ShowHideButton>
    ),
  },
];

export default workItems;
