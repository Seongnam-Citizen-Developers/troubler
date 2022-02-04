import { createI18n } from 'vue-i18n'

// https://developer.mozilla.org/ko/docs/Web/API/Navigator/language
const i18n = createI18n({
  locale: navigator.language,
})

export { i18n }