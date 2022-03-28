import { Styles } from './Button.styles';

import type { ButtonProps } from './@types/Button.types';

export const Button = ({ className, icon, isDisabled, label, onClick, style, type, size }: ButtonProps) => {
  const onButtonClick = () => {
    if (isDisabled || !onClick) return;

    onClick();
  };

  const renderIcon = () => (icon ? <Styles.Icon>{icon}</Styles.Icon> : null);

  const renderLabel = () => (label ? <Styles.Text>{label}</Styles.Text> : null);

  return (
    <Styles.ButtonWrapper className={`${className} ${size} ${type} ${isDisabled ? 'disabled' : ''}`} onClick={onButtonClick} style={style}>
      {renderIcon()}
      {renderLabel()}
    </Styles.ButtonWrapper>
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
