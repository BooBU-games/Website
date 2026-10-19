import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { toggleLanguage } from '../store/langSlice';
import { translations } from '../i18n';
import booBuImg from '../assets/boobu.png';

export const Header = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.lang.currentLang);
  const t = translations[currentLang].header;

  return (
    <div>
      <img src={booBuImg} alt="BooBU Games" />
      <button onClick={() => dispatch(toggleLanguage())}>
        {t.changeLangBtn}
      </button>
    </div>
  );
};