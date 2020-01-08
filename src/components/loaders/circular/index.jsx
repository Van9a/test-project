import React from 'react';
import classnames from 'classnames';
import './styles/index.scss';

type Props = {
  className?: string,
  isCurrentColor?: boolean,
}

const defaultProps: Props = {
  className: '',
  isCurrentColor: false,
};

const CircularLoader = ({ className, isCurrentColor }: Props) => (
  <div className={ classnames('circular-loader', { 'circular-loader--current-color': isCurrentColor }, className) }>
    <svg className="circular-loader__circle" viewBox="25 25 50 50">
      <circle
        className="circular-loader__circle-path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  </div>
);

CircularLoader.defaultProps = defaultProps;

export default CircularLoader;
