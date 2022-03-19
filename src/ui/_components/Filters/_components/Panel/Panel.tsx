import { Styles } from './Panel.styles';

type Props = {
  isVisible: boolean;
};

export const Panel = ({ isVisible }: Props) => {
  return <Styles.Panel isVisible={isVisible}>Panel</Styles.Panel>;
};
