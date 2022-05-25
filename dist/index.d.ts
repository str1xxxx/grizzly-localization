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
     *
     * @return All localizations
     */
    getAllLocalizations(): Object

    /**
     * This function changed default language
     * @param lang
     */
    setDefaultLanguage(lang: string): void

    /**
     * This function return default language
     * @return string
     */
    getDefaultLanguage(): string

    /**
     * This function update localization
     * @return string
     */
    update(key: string): Object
  }
}
