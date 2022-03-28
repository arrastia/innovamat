import type { Messages } from './Messages.types';

export type SupportedLanguages = 'es';

export type LanguageMessages = {
  [Language in SupportedLanguages]: {
    [key in Language]: {
      [Message in Messages]: string;
    };
  };
}[SupportedLanguages];
