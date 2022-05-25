export class Localization {
  private localizations = {}

  constructor(public defaultLanguage: string) {}

  public addLocalization(langObj: Object) {
    this.localizations = { ...this.localizations, ...langObj }
  }

  public getLocalization(key: string): Object {
    if (!this.localizations[key]) {
      return 'Localization does not exist'
    }

    if (!this.localizations[key][this.defaultLanguage]) {
      return 'Default language does not exist'
    }

    return {...this.localizations[key][this.defaultLanguage], update: this.update}
  }

  public getAllLocalizations(): Object {
    return this.localizations
  }

  public setDefaultLanguage(lang: string) {
    this.defaultLanguage = lang
  }

  public getDefaultLanguage(): string {
    return this.defaultLanguage
  }
 
  public update(key: string) {
    return this.getLocalization(key)
  }
}