import React, { Component } from 'react';
import ShowHideButton from '../showhidebutton/ShowHideButton';

class Description extends Component {
  render() {
    const text = (
      <p>
        <span style={{ display: 'block', marginBottom: '16px' }}>
          On my free time, I like to play basketball, workout, dev-reading and
          spend time with family. I’m always excited to work on projects as I’ve
          been continuously working on{' '}
          <a href="http://speakupmtl.com/">
            <span className="customLink">Speak Up</span>
          </a>
          , which is a unique slam poetry competition to give our youth an
          outlet to express themselves. I also run a side hustle,{' '}
          <a href="http://emreld.com/">
            <span className="customLink">Emreld</span>
          </a>
          , which is a web design agency to help jumpstart their business(es) at
          an affordable rate. I enjoy clean, elegant styling, and I have lots of
          experience in the production of modern websites. I love designing
          aesthetically pleasing sites as per my clients’ needs. Finally, I was
          once a content creator back in grades 7 to 9 making{' '}
          <a href="https://www.youtube.com/user/TechTutorialsz">
            <span className="customLink">YouTube</span>
          </a>{' '}
          videos!
        </span>
        <span>
          During my undergrad, I’ve devoted my extra-curricular time to being
          the head of marketing of McGill’s{' '}
          <a href="https://www.mcgilleus.ca/juniorcounil">
            <span className="customLink">Junior Council</span>
          </a>
          , the project manager, director of corporate relations and web
          designer for the{' '}
          <a href="https://nobemcgill.org/">
            <span className="customLink">
              National Organization of Business & Engineering
            </span>
          </a>{' '}
          and the web master for{' '}
          <a href="http://mcgillchemecar.com/">
            <span className="customLink">McGill Chem-E Car</span>
          </a>
          . Finally, I've also worked closely with the{' '}
          <a href="https://www.mcgill.ca/engine/">
            <span className="customLink">McGill EngInE</span>
          </a>{' '}
          team to curate the{' '}
          <a href="http://mcgilldesignconsultancy.com/">
            <span className="customLink">McGill Design Consultancy</span>
          </a>
          ; whose goal is to provide a centralized place for all design-related
          questions, websites and logos for McGill based startups and clubs.
        </span>
      </p>
    );

    return (
      <div className="description">
        <div className="info">
          Welcome! I'm Nayem Alam, a technology enthusiast with a specialty in
          Electrical and Software Engineering from McGill University. As a
          driven individual with a passion for innovation and problem-solving,
          I've had the privilege of working with various teams and companies,
          from startups to large tech companies. Throughout my career, I've
          always been driven to challenge the status quo and explore new avenues
          in entrepreneurship, arts, and technology. My expertise lies in
          designing and developing innovative and engaging user experiences
          while managing and delegating tasks effectively. I thrive on solving
          complex problems and believe in utilizing the power of technology and
          data to create a better tomorrow. Beyond my professional life, I'm an
          ardent traveler, avid basketball player, writer, and a dedicated team
          contributor, always eager to collaborate and innovate. I have a knack
          for connecting with people from diverse backgrounds, which helps me
          adapt and thrive in any team.
          <ShowHideButton text={text} btnclass={'btn'} txtclass={'info'} />
        </div>

        <p className="info">
          Feel free to check out my projects, and connect with me on my other
          platforms. If you’d like to get to know me, the best way is by
          connecting with me.{' '}
          <span role="img" aria-label="smiling emoji">
            🙂
          </span>
        </p>
      </div>
    );
  }
}

export default Description;
