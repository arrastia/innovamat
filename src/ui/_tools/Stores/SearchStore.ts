import { atom, atomFamily } from 'recoil';

export const tagsState = atomFamily({
  key: 'tagsState',
  default: () => ''
});

export const tagsValuesState = atom<string[]>({
  key: 'tagsValuesState',
  default: []
});
