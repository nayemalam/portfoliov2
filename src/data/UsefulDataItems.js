import React from 'react';
import Grid from '@material-ui/core/Grid';

const content = [
    {
        'title': 'Fav TV Shows',
        'desc': ['hello', 'swello']
    },
    {
        'title': 'Fav Movies',
        'desc': ['Hello2']
    },
    {
        'title': 'How I built this website',
        'desc': ['React JS']
    },
    {
        'title': 'Pet Peeves',
        'desc': ['Hello3']
    }
]
const usefulDataItems = 
<div className='dataItems'>
    <Grid container spacing={4}>
        {content.map((item, id) => (
            <Grid key={id} item xs={12} sm={4} style={{textAlign: 'center'}}>
                <h4>{item.title}</h4>
                <div className='useful-desc'>
                    {item.desc.map((desc, descId) => (
                        <span key={descId}>{desc}</span>
                    ))}
                </div>

            </Grid>
        ))}
    </Grid>
</div>

export default usefulDataItems;