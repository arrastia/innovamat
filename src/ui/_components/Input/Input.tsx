import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Styles } from './Input.styles';

import { InputTag } from './_components/InputTag';

import { inputTagsIdsState } from 'ui/_tools/Stores/SearchStore';

import { useInputTags } from 'ui/_tools/Hooks/useInputTags';

import type { ChangeEvent } from 'react';

export const Input = () => {
  const navigate = useNavigate();
  const tagIds = useRecoilValue(inputTagsIdsState);

  const { createTag } = useInputTags();

  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onCreateTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value !== '') createTag(value);

    if (event.key === 'Enter' && value !== '') {
      if (event.ctrlKey) navigate('search');

      setValue('');
    }
  };

  return (
    <Styles.InputWrapper>
      {tagIds.map((tagId: string) => (
        <InputTag id={tagId} key={tagId} />
      ))}
      <Styles.Input onChange={onChange} onKeyDown={onCreateTag} placeholder="Introduce un texto" value={value} />
    </Styles.InputWrapper>
  );
};
