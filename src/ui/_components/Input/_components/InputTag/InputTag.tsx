import { useRecoilState } from 'recoil';

import { Styles } from './InputTag.styles';

import { CloseIcon } from 'assets/icons';

import { inputTagState } from 'ui/_tools/Stores/SearchStore';

import { useInputTags } from 'ui/_tools/Hooks/useInputTags';

import type { InputTagProps } from './@types/InputTag.types';

export const InputTag = ({ id }: InputTagProps) => {
  const [tag, setTag] = useRecoilState(inputTagState(id));

  const { removeTag } = useInputTags();

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
      <CloseIcon onClick={() => removeTag(id)} />
    </Styles.TagWrapper>
  );
};
