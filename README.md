
# GRIZZLY LOCALIZATION
## The easy localization for your app

How to use? 

    import { Localization } from 'grizzly-localization'
    
    const localization = new Localization('en')
    
    localization.addLocalization({
      auth: {
        ru: {
          button: 'Я Да',
        },
        en: {
          button: 'I am yes',
        },
      },
    })
    
    console.log(localization.getLocalization('auth'))
    localization.setDefaultLanguage('ru')
    console.log(localization.getLocalization('auth'))
    
