import LinkOffSharpIcon from '@material-ui/icons/LinkOffSharp';
import LinkSharpIcon from '@material-ui/icons/LinkSharp';
import React from 'react';
import argyleImg from '../images/work/argyle.png';
import calorieCounterImg from '../images/work/caloriecounter.png';
import colorGameImg from '../images/work/colorgame.png';
import faceDetectionImg from '../images/work/face-detection.png';
import francochromeImg from '../images/work/francochrome.png';
import fuzzymatchingImg from '../images/work/fuzzymatching.png';
import iStriveImg from '../images/work/istrive.png';
import joysOfSoloTravelImg from '../images/work/joysofsolotravel.png';
import mcgillchemecarImg from '../images/work/mcgillchemecar.png';
import mcgillcoopImg from '../images/work/mcgillcoop.png';
import mdcImg from '../images/work/mdc.png';
import medlifeImg from '../images/work/medlife.png';
import midroniImg from '../images/work/midroni.png';
import nauveltyImg from '../images/work/nauvelty.png';
import nobeMcgillImg from '../images/work/nobemcgill.png';
import pendopharmImg from '../images/work/pendopharm.png';
import portfolioV1Img from '../images/work/portfoliov1.png';
import reactPortfolioTemplateImg from '../images/work/react-portfolio-template.png';
import speakupmtlImg from '../images/work/speakupmtl.png';
import superheroImg from '../images/work/superhero.png';
import suporaNootropicsPillBottleImg from '../images/work/supranootropics-pillbottle.jpg';
import supraNootropicsImg from '../images/work/supranootropics.png';
import webscraperImg from '../images/work/webscraper.png';
import xploreImg from '../images/work/xplore.png';
import yulrealtorImg from '../images/work/yulrealtor.png';

const portfolioItems = [
  {
    image: superheroImg,
    title: 'SuperHero Squad',
    description:
      'Dynamically search through an API of all the superheroes and villains from all universes, add to your squad and more.',
    date: 'June 13, 2020',
    link: 'https://github.com/nayemalam/superhero',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'personal'],
    tags: ['React.js', 'HTML', 'SASS'],
  },
  {
    image: fuzzymatchingImg,
    title: 'Fuzzy Matching',
    description:
      'Implemented multiple string similarity algorithms. This algorithm compares the accuracy between two strings and assigns a similarity score.',
    date: 'July 23, 2019',
    link: 'https://github.com/nayemalam/fuzzyMatching',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'personal'],
    tags: ['Java'],
  },
  {
    image: mcgillcoopImg,
    title: 'McGill Coop Program',
    description:
      'Class project requiring us to build a version of what our McGill Coop program should look like.',
    date: 'February 5, 2019',
    link: 'https://github.com/nayemalam/McGillCoop',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'academic', 'sites'],
    tags: ['Java Spring', 'Vue.js', 'HTML', 'CSS', 'Heroku'],
  },
  {
    image: webscraperImg,
    title: 'FinScrape | Hackerfest',
    description:
      "Created a web scraper for FormFintech that pulls 5 major bank's chequing information.",
    date: 'August 14, 2018',
    link: 'https://github.com/nayemalam/Hackerfest',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'hackathons'],
    tags: ['Python'],
  },
  {
    image: speakupmtlImg,
    title: 'Speak Up Montreal',
    description:
      'Something I started in 2014 and it has gained momentum since expanding all over Montreal (feel free to ask me more about this).',
    date: 'February 26, 2014',
    link: '',
    LinkIcon: <LinkOffSharpIcon />,
    filters: ['all', 'personal', 'sites'],
    tags: ['Wordpress'],
  },
  {
    image: argyleImg,
    title: 'Argyle Tech',
    description:
      'A student wanting to build an AI that will perform gene screening to figure out any inherent diseases that you might have or prone to.',
    date: 'September 23, 2018',
    link: 'https://argyle.tech/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress', 'MailChimp', 'Client'],
  },
  {
    image: medlifeImg,
    title: 'Medlife Concordia',
    description:
      'President and founder of Medlife Concordia reached out to me to build their website for more traction.',
    date: 'August 26, 2018',
    link: 'https://medlifeconcordia.com',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress', 'Client'],
  },
  {
    image: joysOfSoloTravelImg,
    title: 'Joys of Solo Travel',
    description:
      'An ambitious student and his startup documenting trips about the satisfaction of solo travelling.',
    date: 'December 21, 2018',
    link: 'https://joysofsolotravel.com/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress', 'WooCommerce', 'Client'],
  },
  {
    image: mcgillchemecarImg,
    title: 'McGill Chem-E Car',
    description:
      'I was a part of this club as a Web Master and built this website.',
    date: 'October 18, 2018',
    link: 'http://mcgillchemecar.com/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress'],
  },
  {
    image: supraNootropicsImg,
    title: 'SupraNootropics',
    description:
      'A student started a startup in McGill providing supplements for stress-relief.',
    date: 'September 7, 2018',
    link: 'https://supranootropics.com/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress', 'Client'],
  },
  {
    image: nauveltyImg,
    title: 'Nauvelty Clothing Brand',
    description:
      'One of my failed startups. I sourced 8 clothes and shipped out 3, clothing quality was dull and team dispatched. Discontinued.',
    date: 'January 5, 2018',
    link: '',
    LinkIcon: <LinkOffSharpIcon />,
    filters: ['all', 'personal', 'sites'],
    tags: ['Shopify'],
  },
  {
    image: nobeMcgillImg,
    title: 'NOBE McGill',
    description:
      "I've been a part of this club during my entire 4 years of undergrad. I built this website as the web dev at that time.",
    date: 'February 28, 2018',
    link: 'https://nobemcgill.org/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress'],
  },
  {
    image: iStriveImg,
    title: 'IStrive',
    description:
      'Personal trainer reached out to me to build his brand and his movement.',
    date: 'January 2, 2019',
    link: 'https://istrive.ca/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress', 'MailChimp', 'Client'],
  },
  {
    image: reactPortfolioTemplateImg,
    title: 'React Portfolio Template',
    description:
      'This is a free template made with React with fixed material sidebar. Feel free to clone and use it :)',
    date: 'March 29, 2019',
    link: 'https://github.com/nayemalam/ReactPortfolioTemplate/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'personal', 'academic'],
    tags: ['React.js', 'HTML', 'CSS'],
  },
  {
    image: xploreImg,
    title: 'Xplore | HackDartmouth',
    description:
      'Xplore is a cross-platform communication tool built to help people connect with one another regardless of barriers such as language.',
    date: 'April 6, 2019',
    link: 'https://github.com/nayemalam/Xplore/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'hackathons'],
    tags: ['Android Studio', 'React Native'],
  },
  {
    image: francochromeImg,
    title: 'FrancoChrome | ConUHacks',
    description:
      'A french language learning tool that allows Chrome users to learn a new word everytime they open a new tab.',
    date: 'January 25, 2019',
    link: 'https://github.com/nayemalam/FrancoChrome/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'hackathons', 'sites'],
    tags: ['Vanilla JS', 'HTML', 'CSS'],
  },
  {
    image: pendopharmImg,
    title: 'Pendopharm: G.I. Solutions',
    description:
      'Worked with an amazing brand manager who asked me to revamp their website.',
    date: 'January 25, 2019',
    link: 'http://pendopharm-gi.com/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress', 'Client'],
  },
  {
    image: midroniImg,
    title: 'Cooper Midroni',
    description: 'Built a personal website for my good friend Cooper.',
    date: 'January 11, 2020',
    link: 'https://midroni.com/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress'],
  },
  {
    image: suporaNootropicsPillBottleImg,
    title: 'Pill Bottle Design',
    description: 'FDA bottle design built for SupraNootropics.',
    date: 'January 6, 2019',
    link: '',
    LinkIcon: <LinkOffSharpIcon />,
    filters: ['all', 'personal'],
    tags: ['Graphics'],
  },
  {
    image: calorieCounterImg,
    title: 'Calorie Counter',
    description: 'Calculate your daily calorie intake under 30 seconds.',
    date: 'July 29, 2019',
    link: 'https://nayemalam.github.io/CalorieCounter/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'personal'],
    tags: ['Vanilla JS', 'HTML', 'CSS'],
  },
  {
    image: colorGameImg,
    title: 'Color Game',
    description:
      'Guess the color based on RGB. Test your RGB value skills. Game starts with "Hard" mode.',
    date: 'July 10, 2019',
    link: 'https://nayemalam.github.io/ColorGame/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'personal'],
    tags: ['Vanilla JS', 'HTML', 'CSS'],
  },
  {
    image: faceDetectionImg,
    title: 'Face Detection',
    description:
      'Computer Vision | Train a model from 30 given images in order to detect faces.',
    date: 'December 4, 2018',
    link: 'https://github.com/nayemalam/ComputerVision/blob/master/Face%20Detection/FaceDetectionA4.ipynb',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'academic', 'personal'],
    tags: ['Python'],
  },
  {
    image: portfolioV1Img,
    title: 'Previous Portfolio',
    description:
      "The first complete portfolio I've ever developed with vanilla JS and some open source libraries. Feel free to check out the codebase.",
    date: 'April 1, 2019',
    link: 'https://github.com/nayemalam/portfolio',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'personal'],
    tags: ['Vanilla JS', 'jQuery', 'HTML', 'CSS'],
  },
  {
    image: yulrealtorImg,
    title: 'YUL Realtor',
    description:
      'One of my friend is a great broker here in Montreal and Brossard, here is a website designed and developed for her.',
    date: 'October 2, 2019',
    link: 'https://yulrealtor.com/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites'],
    tags: ['Wordpress'],
  },
  {
    image: mdcImg,
    title: 'McGill Design Consultancy',
    description:
      'Started a non-profit hub to help local McGill startups and clubs scale digitally; through building websites and logos.',
    date: 'January 27, 2020',
    link: 'https://mcgilldesignconsultancy.com/',
    LinkIcon: <LinkSharpIcon />,
    filters: ['all', 'sites', 'personal', 'academic'],
    tags: ['Wordpress', 'Graphics'],
  },
];

export default portfolioItems;
