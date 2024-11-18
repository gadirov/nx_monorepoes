import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector'

export const i18nInstance = i18n.createInstance({
    lng: 'az',                                       
    ns:['common', 'test'],                                          
    keySeparator: '.',                                
    nsSeparator: ":",                                 
    defaultNS: 'common',                            
    fallbackLng: 'az',                                
    supportedLngs: ['az', 'ru', 'en'],                
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'      
    },
    detection:{
        htmlTag: document.documentElement,
        lookupCookie: 'lang',
        lookupLocalStorage: 'lang',
        cookieMinutes: 525949,
        order: ['cookie', 'localStorage'],
        caches: ['cookie', 'localStorage']
    },
})
.use(languageDetector)
.use(HttpApi)
.use(initReactI18next)

