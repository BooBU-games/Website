import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { translations } from '../i18n';

export const Footer = () => {
  const currentLang = useSelector((state: RootState) => state.lang.currentLang);
  const t = translations[currentLang].footer;

  return (
    <div>
      <h2>{t.socials}</h2>
    </div>
  );
};