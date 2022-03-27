import { Styles } from './Button.styles';

import type { IButton } from './@types/Button.types';

export const Button = ({ className, icon, iconSize, isDisabled, isLoading, label, onClick, style, type, size, ...rest }: IButton) => {
  const onButtonClick = () => {
    if (isDisabled || isLoading || !onClick) return;

    onClick();
  };

  const renderIcon = () => (icon ? <Styles.Icon iconSize={iconSize}>{icon}</Styles.Icon> : null);

  const renderLabel = () => (label ? <Styles.Text>{label}</Styles.Text> : null);

  return (
    <Styles.Button className={`${className} ${size} ${type} ${isDisabled ? 'disabled' : ''}`} onClick={onButtonClick} style={style} {...rest}>
      {renderIcon()}
      {renderLabel()}
    </Styles.Button>
  );
};

Button.defaultProps = {
  className: '',
  icon: undefined,
  isDisabled: false,
  label: '',
  onClick: () => {},
  style: {},
  type: 'primary'
};
