import type { MessageSections, NotFoundMessages } from './Messages.types';

export type SupportedLanguages = 'es';

export type SingleLanguageMessages = {
  [Language in SupportedLanguages]: {
    [key in Language]: {
      [Section in MessageSections]: {
        [key in NotFoundMessages]: string;
      };
    };
  };
}[SupportedLanguages];

export type LanguagesMessages = {
  [Language in SupportedLanguages]: {
    [Section in MessageSections]: {
      [key in NotFoundMessages]: string;
    };
  };
};
