import { atom } from 'recoil';

export const likedResourcesState = atom<string[]>({
  key: 'likedResourcesState',
  default: [],
  effects: [
    ({ onSet, setSelf }) => {
      const savedValue = localStorage.getItem('innovamat-favorite-ids');

      if (savedValue) {
        setSelf(JSON.parse(savedValue));
      }

      onSet(newValue => {
        localStorage.setItem('innovamat-favorite-ids', JSON.stringify(newValue));
      });
    }
  ]
});
