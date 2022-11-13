import * as sdk from 'botpress/sdk'

import en from '../translations/en.json'
import es from '../translations/es.json'
import fr from '../translations/fr.json'
import tr from '../translations/tr.json'

import api from './api'
import db from './db'

const onServerStarted = async (bp: typeof sdk) => {
  await db(bp).initialize()
}

const onServerReady = async (bp: typeof sdk) => {
  await api(bp, db(bp))
}

const entryPoint: sdk.ModuleEntryPoint = {
  onServerStarted,
  onServerReady,
  translations: { en, fr, es, tr },
  definition: {
    name: 'bot-improvement',
    menuIcon: 'thumbs-up',
    menuText: 'Bot Improvement',
    noInterface: false,
    experimental: true,
    fullName: 'Bot Improvement',
    homepage: 'https://abra.partners'
  }
}

export default entryPoint
