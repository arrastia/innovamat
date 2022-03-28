import { useRecoilState } from 'recoil';

import { Styles } from './InputTag.styles';

import { CloseIcon } from 'assets/icons';

import { tagsState } from 'ui/_tools/Stores/SearchStore';

import { useInputTags } from 'ui/_tools/Hooks/useInputTags';

import type { InputTagProps } from './@types/InputTag.types';

export const InputTag = ({ id }: InputTagProps) => {
  const [tag, setTag] = useRecoilState(tagsState(id));

  const { removeTag } = useInputTags();

  return (
    <Styles.TagWrapper>
      <Styles.Tag onChange={event => setTag(event.target.value)} size={tag.length} value={tag} />
      <CloseIcon onClick={() => removeTag(id)} />
    </Styles.TagWrapper>
  );
};
