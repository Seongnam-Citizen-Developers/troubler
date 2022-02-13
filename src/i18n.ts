import { createI18n } from 'vue-i18n'

const SupportedLocales = ['ko', 'en', 'ja'] as const
type SupportedLocale = typeof SupportedLocales[number]

// https://developer.mozilla.org/ko/docs/Web/API/Navigator/language
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: navigator.language, // set locale
  fallbackLocale: 'en', // set fallback locale
})

export { SupportedLocale, SupportedLocales, i18n }
