import React from 'react';
import { faCode, faCapsules, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ShowHideButton from '../components/showhidebutton/ShowHideButton';

// const fundmoreDesc = 
// <ul>
//     <li>Develop MVP using Angular 9,10 on Storybook</li>
// </ul>

const moneyLionDesc = 
<ul>
    <li>Developed RESTful endpoints using SpringBoot</li>
    <li>Used vault (HamachiCorp) to securely store selected db credentials</li>
    <li>Created docker images and ran them in multiple containers</li>
    <li>Developed a dual layered encryption method using Cipher and base64</li>
    <li>Learned how to use lombok and elementary lambda expressions</li>
    <li>Implemented multiple string similarity algorithms using fuzzy matching (edit distance, dice coefficient, jaccard index)</li>
    <li>Additionally, implemented an algorithm which takes the positioning of words into account and assigns a score based on position</li>
</ul>

const pharmaDesc = 
<span>
    <ul>
        <u>Web Developer Intern</u> <span className='subDate'>(Aug. - Oct.)</span>
        <li>Built new websites for clients in different departments (including PENDOPHARM) – <a href='https://pendopharm-gi.com/' rel='noopener noreferrer' target='_blank'>pendopharm-gi.com</a></li>
        <li>Consolidated all hosting providers and registrars, creating a high-level estimate savings of $37K/year</li>
        <li>Built an operational and contextual document regarding how to manage domains, hosting providers... including troubleshooting methods and simplified how-to guides</li>
    </ul>
    <br/>
    <ul>
        <u>Programmer Analyst</u> <span className='subDate'>(May - Aug.)</span>
        <li>SharePoint super user and acting consultant for Communications, Legal, Finance and HR departments and the Pendopharm division</li>
        <li>Produced a site road map and flowchart of both companies (Pharmascience and Pendopharm) using <span className='customLink'>draw.io</span></li>
        <li>Created an excel database with all the websites currently under both companies including their provider, registrar, IP, NS Records using <span className='customLink'>Pivot tables</span> and <span className='customLink'>VBA</span> to streamline process</li>
        <li>Successfully adopted a new and better hosting provider for the company to put in action the consolidation of all websites under one hosting provider and one registrar</li>
    </ul>
</span>

const otherDesc = 
<ul>
    <li>Specialized Math Tutor <span className='subDate'>(Oct. 2015 - Jan 2018) @ Tyndale St-Georges</span></li>
    <li>Brand Ambassador / Sales Associate <span className='subDate'>(May - Aug. 2017) @ Banana Republic</span></li>
    <li>Cashier <span className='subDate'>(May - Sep. 2017) @ McDonalds Gare Centrale</span></li>
    <li>Academic Tutor <span className='subDate'>(Sep. 2016 - Jan 2017) @ Liberty Tutoring</span></li>
    <li>Math Tutor <span className='subDate'>(Dec. 2015 - July 2016) @ English Montreal School Board</span></li>
</ul>

const workItems = [
    {
        'icon': faCode,
        'date': 'June - Present',
        'name': 'fundmore.ai',
        'location': 'Ottawa, ON',
        'role': 'Fullstack Developer',
        // 'desc': <ShowHideButton 
        //             btnclass={'readmore-info'}
        //             txtclass={'info'}
        //             readLessText={'read less'} 
        //             readMoreText={'read more'} 
        //             text={fundmoreDesc}>
        //         </ShowHideButton>
    },
    {
        'icon': faCode,
        'date': 'May - August 2019',
        'name': 'MoneyLion',
        'location': 'Kuala Lumpur, Malaysia',
        'role': 'AI Engineer (Intern)',
        'desc': <ShowHideButton 
                    btnclass={'readmore-info'}
                    txtclass={'info'}
                    readLessText={'read less'} 
                    readMoreText={'read more'} 
                    text={moneyLionDesc}>
                </ShowHideButton>
    },
    {
        'icon': faCapsules,
        'date': 'May - August, August - October 2018',
        'name': 'Pharmascience',
        'location': 'Montréal, QC',
        'role': 'Sharepoint Analyst | Web Developer Intern',
        'desc': <ShowHideButton 
                    btnclass={'readmore-info'}
                    txtclass={'info'}
                    readLessText={'read less'} 
                    readMoreText={'read more'} 
                    text={pharmaDesc}>
                </ShowHideButton>
    },
    {
        'icon': faGlobe,
        'date': '',
        'name': 'Other places I\'ve worked at',
        'location': 'Montréal, QC',
        'role': '',
        'desc': <ShowHideButton 
                    btnclass={'readmore-info'}
                    txtclass={'info'}
                    readLessText={'read less'} 
                    readMoreText={'read more'} 
                    text={otherDesc}>
                </ShowHideButton>
    }

];

export default workItems;