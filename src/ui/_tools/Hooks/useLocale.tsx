import { MessageSections } from 'configuration/locales/@types/Messages.types';
import { useRecoilValue } from 'recoil';

import { messagesState, selectedLanguageState } from '../Stores/LocaleStore';

export const useLocale = () => {
  const messages = useRecoilValue(messagesState);
  const selectedLanguage = useRecoilValue(selectedLanguageState);

  return messages[selectedLanguage];
};
