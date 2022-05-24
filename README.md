
# GRIZZLY LOCALIZATION
## The easy localization for your app

How to use? 

```js import { Localization } from 'grizzly-localization'
    
    const localization = new Localization('en')
    
    localization.addLocalization({
      auth: {
        ru: {
          button: 'Привет',
        },
        en: {
          button: 'Hello',
        },
      },
    })
    
    console.log(localization.getLocalization('auth'))
    localization.setDefaultLanguage('ru')
    console.log(localization.getLocalization('auth'))
```    
