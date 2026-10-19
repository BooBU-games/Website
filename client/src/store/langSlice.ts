import { createSlice } from '@reduxjs/toolkit';
import type { Language } from '../i18n';

interface LangState {
  currentLang: Language;
}

const initialState: LangState = {
  currentLang: 'ru',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.currentLang = state.currentLang === 'ru' ? 'en' : 'ru';
    },
  },
});

export const { toggleLanguage } = langSlice.actions;
export default langSlice.reducer;