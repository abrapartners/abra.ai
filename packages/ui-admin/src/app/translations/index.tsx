import { lang } from 'botpress/shared'

import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import tr from './tr.json'

const translations = { en, fr, es, tr }

const initializeTranslations = () => {
  lang.extend(translations)
  lang.init()
}

export { initializeTranslations }
