import React from 'react';
import classNames from 'classnames';

import { ReactComponent as MailIcon } from 'assets/images/socials/mail.svg';
import { ReactComponent as LinkedInIcon } from 'assets/images/socials/linkedin.svg';
import { ReactComponent as GithubIcon } from 'assets/images/socials/github.svg';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:richardhsusw@outlook.com" target="_blank" rel="noopener noreferrer">
            <MailIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/swrichard-hsu/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/richardhsw" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;