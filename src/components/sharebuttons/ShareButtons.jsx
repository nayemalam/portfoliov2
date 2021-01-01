import React from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';

const ShareButtons = ({ title, url, twitterHandle, tags, media }) => {
  return (
    <div>
      <FacebookShareButton url={url} className="hvr-grow">
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
        className="hvr-grow"
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} className="hvr-grow">
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <EmailShareButton url={url} className="hvr-grow">
        <EmailIcon size={40} round={true} />
      </EmailShareButton>

      <PinterestShareButton url={url} media={media} className="hvr-grow">
        <PinterestIcon size={40} round={true} />
      </PinterestShareButton>
    </div>
  );
};
export default ShareButtons;
