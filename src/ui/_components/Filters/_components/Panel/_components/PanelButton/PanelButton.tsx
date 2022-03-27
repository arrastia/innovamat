import { useState } from 'react';

import { Button } from 'ui/_components/Button';

import { useInputTags } from 'ui/_tools/Hooks/useInputTags';

import type { IButton } from 'ui/_components/Button/@types/Button.types';

interface PanelButtonProps extends IButton {
  id: string;
}

export const PanelButton = ({ className, id, label, size }: PanelButtonProps) => {
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

  return <Button size={size} label={label} onClick={onCreateTag} type={isSelected ? 'selected' : 'unselected'} />;
};
