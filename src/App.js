import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

export default () => {
  const { t, i18n } = useTranslation();
  return <div>
    <h1>{t('Welcome to React')}</h1>
    <select onChange={(e) => { i18n.changeLanguage(e.target.value) }}>
      <option value="en">English</option>
      <option value="cn">Chinese</option>
    </select>
  </div>
}