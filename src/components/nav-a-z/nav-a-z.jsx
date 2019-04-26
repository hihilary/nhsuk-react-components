import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const NavAZ = ({
  items,
  fullAlphabet,
  excludedItems,
  disabledItems,
  ariaLabel,
  role,
  id,
  className,
  style
}) => {
  let renderedItems;
  if (fullAlphabet) {
    renderedItems = alphabet.map(item => {
      if (!excludedItems.includes(item)) {
        return (
          <li className="nhsuk-nav-a-z__item" key={item}>
            <li className="nhsuk-nav-a-z__item">
              {disabledItems.includes(item) ? (
                <span className="nhsuk-nav-a-z__link--disabled">{item}</span>
              ) : (
                <a className="nhsuk-nav-a-z__link" href={`#${item}`}>
                  {item}
                </a>
              )}
            </li>
          </li>
        );
      }
      return null;
    });
  } else {
    renderedItems = items.map(item => {
      if (typeof item === 'string' || typeof item === 'number') {
        return (
          <li className="nhsuk-nav-a-z__item" key={item}>
            <li className="nhsuk-nav-a-z__item">
              <a className="nhsuk-nav-a-z__link" href={`#${item}`}>
                {item}
              </a>
            </li>
          </li>
        );
      }
      if (typeof item === 'object') {
        return (
          <li className="nhsuk-nav-a-z__item" key={item}>
            {item.disable ? (
              <span className="nhsuk-nav-a-z__link--disabled">
                {item.label}
              </span>
            ) : (
              <li className="nhsuk-nav-a-z__item">
                <a className="nhsuk-nav-a-z__link" href={`#${item.label}`}>
                  {item.label}
                </a>
              </li>
            )}
          </li>
        );
      }
      return null;
    });
  }
  return (
    <nav
      className={classNames('nhsuk-nav-a-z', className)}
      style={style}
      id={id}
      role={role}
      aria-label={ariaLabel}
    >
      <ol className="nhsuk-nav-a-z__list">{renderedItems}</ol>
    </nav>
  );
};

NavAZ.propTypes = {
  items: PropTypes.arrayOf([PropTypes.string, PropTypes.object]),
  excludedItems: PropTypes.arrayOf(PropTypes.string),
  disabledItems: PropTypes.arrayOf(PropTypes.string),
  fullAlphabet: PropTypes.bool,
  id: PropTypes.string,
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType
};

NavAZ.defaultProps = {
  items: [],
  excludedItems: [],
  disabledItems: [],
  fullAlphabet: false,
  id: 'nhsuk-nav-a-z',
  role: 'navigation',
  ariaLabel: 'A to Z Navigation',
  className: '',
  style: {}
};
export default NavAZ;
