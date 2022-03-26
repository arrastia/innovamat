import { useRecoilCallback } from 'recoil';

import { inputTagsIdsState, inputTagState } from '../Stores/SearchStore';

export const useInputTags = () => {
  const createTag = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        const id = `${new Date().getTime()}`;

        set(inputTagsIdsState, currVal => [...currVal, id]);
        set(inputTagState(id), { id, value });
      },
    []
  );

  const removeTag = useRecoilCallback(({ set }) => (id: string) => {
    set(inputTagsIdsState, currVal => currVal.filter(currId => currId !== id));
  });

  return { createTag, removeTag };
};
