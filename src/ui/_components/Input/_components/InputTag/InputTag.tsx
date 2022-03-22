import { CloseIcon } from 'assets/icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Button } from 'ui/_components/Button';
import { inputTagsState } from 'ui/_tools/Stores/SearchStore';
import { Styles } from './InputTag.styles';

type InputTagProps = {
  id: number;
  onRemoveTag: (id: number) => void;
};

export const InputTag = ({ id, onRemoveTag }: InputTagProps) => {
  const [tag, setTag] = useRecoilState(inputTagsState(id));

  return (
    <Styles.TagWrapper>
      <Styles.Tag
        onChange={event =>
          setTag(prevState => ({
            ...prevState,
            value: event.target.value
          }))
        }
        size={tag.value.length}
        value={tag.value}
      />
      <CloseIcon onClick={() => onRemoveTag(id)} />
    </Styles.TagWrapper>
  );
};
