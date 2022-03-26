import { atom, atomFamily } from 'recoil';

import type { ITag } from 'ui/_components/SearchInput/_components/InputTags/InputTags';

export const inputTagsState = atomFamily<ITag, number>({
  key: 'inputTagsState',
  default: (id: number) => ({
    id,
    value: '',
    isEditing: false
  })
});

export const inputTagsIdsState = atom<number[]>({
  key: 'inputTagsIdsState',
  default: []
});

export const isFilterPanelOpenState = atom({
  key: 'isFilterPanelOpenState',
  default: false
});
