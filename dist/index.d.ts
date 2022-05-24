declare module 'grizzly-localization' {
  class Localization {
    constructor(defaultLanguage: string)
    /**
     * This function added localization
     * @param langObj
     */
    addLocalization(langObj: Object): void

    /**
     *
     * @param key
     * @return Localization object
     */
    getLocalization(key: string): Object

    /**
     * This function changed default language
     * @param lang
     */
    setDefaultLanguage(lang: string): void
  }
}
