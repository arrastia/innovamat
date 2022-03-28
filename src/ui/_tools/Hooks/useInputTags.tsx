import { useRecoilCallback } from 'recoil';

import { tagsState, tagsValuesState } from 'ui/_tools/Stores/SearchStore';

export const useInputTags = () => {
  const createTag = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(tagsValuesState, prevState => {
          if (prevState.includes(value)) return prevState;

          return [...prevState, value];
        });
        set(tagsState(value), value);
      },
    []
  );

  const removeTag = useRecoilCallback(({ set }) => (id: string) => {
    set(tagsValuesState, prevState => prevState.filter(currId => currId !== id));
  });

  return { createTag, removeTag };
};
