import { atom, atomFamily } from 'recoil';

interface ITag {
  id: string;
  value: string;
}

export const inputTagState = atomFamily<ITag, string>({
  key: 'inputTagState',
  default: (id: string) => ({ id, value: '' })
});

export const inputTagsIdsState = atom<string[]>({
  key: 'inputTagsIdsState',
  default: []
});

export const inputTagsValuesState = atom<string[]>({
  key: 'inputTagsValuesState',
  default: []
});
