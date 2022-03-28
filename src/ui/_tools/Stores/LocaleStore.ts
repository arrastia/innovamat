import { atom } from 'recoil';

import { messages } from 'configuration/locales';

import type { SupportedLanguages } from 'configuration/locales/@types/Locales.types';

export const messagesState = atom({
  key: 'messagesState',
  default: messages
});

export const selectedLanguageState = atom<SupportedLanguages>({
  key: 'selectedLanguageState',
  default: 'es'
});
