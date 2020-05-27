import React from 'react';
import { faCode, faCapsules, faTshirt } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from '../components/togglebutton/ToggleButton';

const workItems = [
    {
        'icon': faCode,
        'date': 'May - August 2019',
        'name': 'MoneyLion',
        'location': 'Kuala Lumpur, Malaysia',
        'role': 'AI Engineer (Intern)',
        'desc': <ToggleButton 
                    btnclass={'readmore-info'}
                    txtclass={'info'}
                    readLessText={'read less'} 
                    readMoreText={'read more'} 
                    text={<p>some text here 1</p>}>
                </ToggleButton>
    },
    {
        'icon': faCapsules,
        'date': 'May - August, August - October 2018',
        'name': 'Pharmascience',
        'location': 'Montréal, QC',
        'role': 'Sharepoint Analyst | Web Developer Intern',
        'desc': <ToggleButton 
                    btnclass={'readmore-info'}
                    txtclass={'info'}
                    readLessText={'read less'} 
                    readMoreText={'read more'} 
                    text={<p>some text here 2</p>}>
                </ToggleButton>
    },
    {
        'icon': faTshirt,
        'date': 'May - August 2017',
        'name': 'Banana Republic',
        'location': 'Montréal, QC',
        'role': 'Brand Ambassador / Sales Associate',
        'desc': <ToggleButton 
                    btnclass={'readmore-info'}
                    txtclass={'info'}
                    readLessText={'read less'} 
                    readMoreText={'read more'} 
                    text={<p>some text here 3</p>}>
                </ToggleButton>
    }

];

export default workItems;