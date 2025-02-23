import React, { useState } from 'react';
import { config, supportedLanguages } from './lang_config';
export const LanguagePage = () => {
  const [language, setLanguage] = useState('en');
  const setLanguageHandler = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <div>
      <div>
        <select
          onChange={(e) => setLanguageHandler(e)}
          value={language}
          selected={language}
        >
          {Object.keys(supportedLanguages).map((key) => {
            return <option value={key}>{supportedLanguages[key]}</option>;
          })}
        </select>
      </div>
      <div>
        <h1>{config[language].heading}</h1>
        <ps>{config[language].description}</ps>
      </div>
    </div>
  );
};
