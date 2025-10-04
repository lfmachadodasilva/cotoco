import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  return (
    <>
      <LanguageSwitcher />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('app_title')}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('count_button', { count })}
        </button>
        <p>
          <Trans i18nKey="edit_instruction">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">
        {t('learn_more')}
      </p>
    </>
  )
}

export default App
