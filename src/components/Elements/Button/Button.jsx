import React from 'react';
import PropTypes from 'prop-types';

const shapes = { circle: 'rounded-[50%]', round: 'rounded-[7px]' };
const variants = {
  fill: {
    default: 'bg-primary-600 text-grey-50',
    hover: 'bg-tertiary-600 text-grey-50',
    clicked: 'bg-primary-800 text-grey-50',
    disabled: 'bg-grey-400 text-grey-50',
  },
};

const Button = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = '',
  variant = '',
  color = '',
  ...restProps
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        (shape && shapes[shape]) || ''
      } ${(variant && variants[variant]?.[color]) || ''} ${className}`}
      {...restProps}
    >
      {!!leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!!rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(['circle', 'round']),
  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf(['default', 'hover', 'clicked', 'disabled']),
};

export { Button };
