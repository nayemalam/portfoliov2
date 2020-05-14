import React from 'react';
import LinkSharpIcon from '@material-ui/icons/LinkSharp';
import LinkOffSharpIcon from '@material-ui/icons/LinkOffSharp';

const portfolioItems = [
    {
        'image': require('../images/work/fuzzymatching.png'),
        'title': 'Fuzzy Matching',
        'description': 'Implemented multiple string similarity algorithms. Allowing you to compare the accuracy between two strings and assigns a similarity score.',
        'date': 'July 23, 2019',
        'link': 'https://github.com/nayemalam/fuzzyMatching',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','personal'],
        'tags': ['Java', 'JS', 'HTML', 'CSS']
    },
    {
        'image': require('../images/work/mcgillcoop.png'),
        'title': 'McGill Coop Program',
        'description': 'Class project requiring us to build a version of what our McGill Coop program should look like. Tech: Java Spring + Vue.js.',
        'date': 'February 5, 2019',
        'link': 'https://github.com/nayemalam/McGillCoop',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','academic','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/webscraper.png'),
        'title': 'FinScrape | Hackerfest',
        'description': 'Created a web scraper for FormFintech that pulls 5 major bank\'s chequing information.',
        'date': 'August 14, 2018',
        'link': 'https://github.com/nayemalam/Hackerfest',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','hackathons'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/speakupmtl.png'),
        'title': 'Speak Up Montreal',
        'description': 'Something I started in 2014 and it has gained momentum since expanding all over Montreal (feel free to ask me more about this).',
        'date': 'February 26, 2014',
        'link': 'https://speakupmtl.com/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','personal','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/argyle.png'),
        'title': 'Argyle Tech',
        'description': 'A student wanting to build an AI that will perform gene screening to figure out any inherent diseases that you might have or prone to - client.',
        'date': 'September 23, 2018',
        'link': 'https://argyle.tech/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/medlife.png'),
        'title': 'Medlife Concordia',
        'description': 'President and founder of Medlife Concordia reached out to me to build their website for more traction - client.',
        'date': 'August 26, 2018',
        'link': 'https://medlifeconcordia.com',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/joysofsolotravel.png'),
        'title': 'Joys of Solo Travel',
        'description': 'An ambitious student and his startup documenting trips about the satisfaction of solo travelling - client.',
        'date': 'December 21, 2018',
        'link': 'https://joysofsolotravel.com/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/mcgillchemecar.png'),
        'title': 'McGill Chem-E Car',
        'description': 'I was a part of this club as a Web Master and built this website.',
        'date': 'October 18, 2018',
        'link': 'http://mcgillchemecar.com/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/supranootropics.png'),
        'title': 'SupraNootropics',
        'description': 'A student started a startup in McGill providing supplements for stress-relief - client.',
        'date': 'September 7, 2018',
        'link': 'https://supranootropics.com/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/nauvelty.png'),
        'title': 'Nauvelty Clothing Brand',
        'description': 'One of my failed startups. I sourced 8 clothes and shipped out 3, clothing quality was dull and team dispatched. Discontinued.',
        'date': 'January 5, 2018',
        'link': '',
        'LinkIcon': <LinkOffSharpIcon />,
        'filters': ['all','personal','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/nobemcgill.png'),
        'title': 'NOBE McGill',
        'description': 'I\'ve been a part of this club for 3 years and still continuing. I built this website as a web dev.',
        'date': 'February 28, 2018',
        'link': 'https://nobemcgill.org/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/istrive.png'),
        'title': 'IStrive',
        'description': 'Personal trainer reached out to me to build his brand and his movement - client.',
        'date': 'January 2, 2019',
        'link': 'https://istrive.ca/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/react-portfolio-template.png'),
        'title': 'React Portfolio Template',
        'description': 'This is a free template made with React with fixed material sidebar.',
        'date': 'March 29, 2019',
        'link': 'https://github.com/nayemalam/ReactPortfolioTemplate/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','personal','academic'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/xplore.png'),
        'title': 'Xplore | HackDartmouth',
        'description': 'Xplore is a cross-platform communication tool built to help people connect with one another regardless of barriers such as language.',
        'date': 'April 6, 2019',
        'link': 'https://github.com/nayemalam/Xplore/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','hackathons'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/francochrome.png'),
        'title': 'FrancoChrome | ConUHacks',
        'description': 'A french language learning tool that allows Chrome users to learn a new word everytime they open a new tab - Chrome Extension.',
        'date': 'January 25, 2019',
        'link': 'https://github.com/nayemalam/FrancoChrome/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','hackathons','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/pendopharm.png'),
        'title': 'Pendopharm: G.I. Solutions',
        'description': 'Worked with an amazing brand manager who asked me to revamp their website - client.',
        'date': 'January 25, 2019',
        'link': 'http://pendopharm-gi.com/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/midroni.png'),
        'title': 'Cooper Midroni',
        'description': 'Built a personal website for my good friend Cooper.',
        'date': 'January 11, 2020',
        'link': 'https://midroni.com/',
        'LinkIcon': <LinkSharpIcon />,
        'filters': ['all','sites'],
        'tags': ['Java', 'JS', 'HTML']
    },
    {
        'image': require('../images/work/supranootropics-pillbottle.jpg'),
        'title': 'Pill Bottle Design',
        'description': 'FDA bottle design built for SupraNootropics.',
        'date': 'January 6, 2019',
        'link': '',
        'LinkIcon': <LinkOffSharpIcon />,
        'filters': ['all',''],
        'tags': ['Java', 'JS', 'HTML']
    }
];

export default portfolioItems;