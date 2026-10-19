import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { translations } from '../i18n';

export const About_we = () => {
  const currentLang = useSelector((state: RootState) => state.lang.currentLang);
  const t = translations[currentLang].about;

  return (
    <div>
      <h3>{t.title}</h3>
      <p>{t.description}</p>
    </div>
  );
};