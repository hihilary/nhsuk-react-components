import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const Fieldset = ({
  title,
  describedBy,
  asPageHeading,
  children,
  className,
  style
}) => (
  <fieldset
    aria-describedby={describedBy}
    className={classNames('nhsuk-fieldset', className)}
    style={style}
  >
    <legend
      className={classNames('nhsuk-fieldset__legend', {
        'nhsuk-fieldset__legend--xl': asPageHeading
      })}
    >
      {asPageHeading ? (
        <h1 className="nhsuk-fieldset__heading nhsuk-fieldset__legend--l">
          {title}
        </h1>
      ) : (
        title
      )}
    </legend>
    {children}
  </fieldset>
);

Fieldset.propTypes = {
  title: PropTypes.string,
  describedBy: PropTypes.string,
  asPageHeading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

Fieldset.defaultProps = {
  title: '',
  describedBy: '',
  asPageHeading: false,
  className: '',
  style: {}
};

export default Fieldset;
