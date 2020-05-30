const quotes = [
    {
        'quote': 'The Way to Get Started Is To Quit Talking And Begin Doing.',
        'author': 'Walt Disney'
    },
    {
        'quote': 'Like most misery, it started with apparent happiness.',
        'author': 'Markus Zusak'
    },
    {
        'quote': 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
        'author': 'Steve Jobs'
    },
    {
        'quote': 'Whether You Think You Can Or Think You Can’t, You’re Right.',
        'author': 'Henry Ford'
    },
    {
        'quote': 'Do What You Can With All You Have, Wherever You Are.',
        'author': 'Theodore Roosevelt'
    },
];

const randomIdx = Object.keys(quotes)[Math.floor(Math.random() * Object.keys(quotes).length)];
const randomQuote = quotes[randomIdx]

export default randomQuote;