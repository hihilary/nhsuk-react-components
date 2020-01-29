import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Logo = ({ className, style, src, xlinkHref, white, ...rest }) => (
  <div className={classNames('nhsuk-header__logo', className)} style={style}>
    <a className="nhsuk-header__link" {...rest}>
      <svg
        className={classNames('nhsuk-logo', { 'nhsuk-logo--white': white })}
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        focusable="false"
        viewBox="0 0 40 16"
      >
        <path fill="#fff" d="M0 0h40v16H0z"></path>
        <path
          fill="#005eb8"
          d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"
        ></path>
        <image src={src} xlinkHref={xlinkHref} alt="nhs-logo"></image>
      </svg>
    </a>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  src: PropTypes.string,
  xlinkHref: PropTypes.string,
  white: PropTypes.bool
};

Logo.defaultProps = {
  className: '',
  style: {},
  src: 'https://assets.nhs.uk/images/nhs-logo.png',
  xlinkHref: '',
  white: true
};

export default Logo;
