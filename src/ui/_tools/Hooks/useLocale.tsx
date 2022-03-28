import { useRecoilValue } from 'recoil';

import { messagesState, selectedLanguageState } from 'ui/_tools/Stores/LocaleStore';

export const useLocale = () => {
  const messages = useRecoilValue(messagesState);
  const selectedLanguage = useRecoilValue(selectedLanguageState);

  return messages[selectedLanguage];
};
