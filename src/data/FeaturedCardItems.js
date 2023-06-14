import book from '../images/misc/book.jpg';
import chess from '../images/misc/chess.jpg';
import life from '../images/misc/life.jpg';

const featuredCardItems = [
  {
    title: 'About',
    url: '/about',
    backgroundImage: {
      backgroundImage: `url(${life})`,
    },
  },
  {
    title: 'Blog Posts',
    url: '/blog/',
    backgroundImage: {
      backgroundImage: `url(${book})`,
    },
  },
  {
    title: 'Uses',
    url: '/blog/post/uses/',
    backgroundImage: {
      backgroundImage: `url(${chess})`,
    },
  },
];

export default featuredCardItems;
