'use-client'

import {Locale} from '../config/i18n.config'
import { defaultDictionary } from './default-dictionaries';

export const getDictionaryServerOnly = (locale) =>{
    return defaultDictionary[locale] ?? defaultDictionary['en-US']
}