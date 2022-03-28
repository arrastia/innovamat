import { useState } from 'react';

import { Button } from 'ui/_components/Button';

import { useInputTags } from 'ui/_tools/Hooks/useInputTags';

import type { PanelButtonProps } from './@types/PanelButton.types';

export const PanelButton = ({ id, label, size }: PanelButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const { createTag, removeTag } = useInputTags();

  const onCreateTag = () => {
    if (!isSelected) {
      createTag(id);
      setIsSelected(true);
    } else {
      removeTag(id);
      setIsSelected(false);
    }
  };

  return <Button label={label} onClick={onCreateTag} size={size} type={isSelected ? 'selected' : 'unselected'} />;
};
