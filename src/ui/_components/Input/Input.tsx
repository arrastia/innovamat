import { useRecoilCallback, useRecoilValue } from 'recoil';

import { Styles } from './Input.styles';

import { InputTag } from './_components/InputTag';

import { inputTagsIdsState, inputTagsState } from 'ui/_tools/Stores/SearchStore';

import type { InputProps } from './@types/Input.types';

export const Input = ({ onChange, onKeyDown, placeholder, value }: InputProps) => {
  const tagIds = useRecoilValue(inputTagsIdsState);

  const createTag = useRecoilCallback(
    ({ set }) =>
      (id: number, value: string) => {
        set(inputTagsIdsState, currVal => [...currVal, id]);
        set(inputTagsState(id), { id, value, isEditing: false });
      },
    []
  );

  const removeTag = useRecoilCallback(({ set }) => (id: number) => {
    set(inputTagsIdsState, currVal => currVal.filter(currId => currId !== id));
  });

  const onCreateTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') createTag(tagIds.length, value);

    onKeyDown(event);
  };

  return (
    <Styles.InputWrapper>
      {tagIds.map((tagId: number) => (
        <InputTag id={tagId} key={tagId} onRemoveTag={removeTag} />
      ))}
      <Styles.Input onChange={onChange} onKeyDown={onCreateTag} placeholder={placeholder} value={value} />
    </Styles.InputWrapper>
  );
};
