
import { Localization } from 'grizzly-localization'

const localization = new Localization('en')

localization.addLocalization({
    auth: {
        ru: {
            button: 'Mama im gay'
        },
        en: {
            button: 'Mom Im gay'
        }
    }
})

console.log(localization.getLocalization('auth'))
localization.setDefaultLanguage('ru')
console.log(localization.getLocalization('auth'))