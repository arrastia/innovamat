import { atom, atomFamily } from 'recoil';

export const isDarkModeState = atom({
  key: 'isDarkModeState',
  default: false
});

export const likedResourcesState = atom({
  key: 'likedResourcesState',
  default: []
});

export const likedCardState = atomFamily({
  key: 'likedCardState',
  default: (id: string) => ({ id, isLiked: false })
});
