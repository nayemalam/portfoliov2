import React from 'react';
import { MenuItem, MenuList } from '@material-ui/core';
import { socialItems } from '../../data/NavigationItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';

const PostAuthor = ({ article }) => {
  return (
    <div className="post-author">
      <div className="image">
        {article.author.picture && (
          <Img
            fixed={article.author.picture.childImageSharp.fixed}
            imgStyle={{
              position: 'static',
              borderRadius: '50%',
              objectFit: 'contain',
            }}
          />
        )}
      </div>
      <div>
        <div className="name">{article.author.name}</div>
        <div>
          <MenuList className="social">
            {socialItems.map((item, id) => (
              <a key={id} className="linkWithNoDecoration" href={item.link}>
                <MenuItem>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="lg"
                    style={{
                      color: '#757575',
                    }}
                  />
                </MenuItem>
              </a>
            ))}
          </MenuList>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
