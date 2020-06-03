const quotes = [
    {
        'quote': 'The way to get started is to quit talking and begin doing.',
        'author': 'Walt Disney'
    },
    {
        'quote': 'Like most misery, it started with apparent happiness.',
        'author': 'Markus Zusak'
    },
    {
        'quote': 'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.',
        'author': 'Steve Jobs'
    },
    {
        'quote': 'Whether you think you can or think you can’t, you’re right.',
        'author': 'Henry Ford'
    },
    {
        'quote': 'Do what you can with all you have, wherever you are.',
        'author': 'Theodore Roosevelt'
    },
    {
        'quote': 'The past is a memory. It\'s a thought arising in the present. The future is merely anticipated, it is another thought arising now. What we truly have is this moment.',
        'author': 'Sam Harris'
    }
];

const randomIdx = Object.keys(quotes)[Math.floor(Math.random() * Object.keys(quotes).length)];
const randomQuote = quotes[randomIdx]

export default randomQuote;