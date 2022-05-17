
import IconButton from '../UI/Buttons/IconButton';
import Tooltip from '../UI/Tooltip/Tooltip';
import { LocalStorage } from '../../modules/LocalStorage';

export default function LanguageSelector(properties) {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (language) => {
    await i18n.changeLanguage(language);
    LocalStorage.setLanguage(language);
    document.dir = i18n.dir();
  };

  const languageToggle = async () => {
    await changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  };

  return (
    <div {...properties}>
      <Tooltip className="bottom-[200%] left-[-80%]" tooltip={t('Language')}>
        <IconButton className="block" id="language-toggle-button" onClick={languageToggle}>
          <IconCarbonLanguage />
        </IconButton>
      </Tooltip>
    </div>
  );
}
