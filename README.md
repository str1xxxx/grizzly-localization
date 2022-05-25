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
    ua: {
      button: 'Привіт',
    },
  },
})

let locale = localization.getLocalization('auth')

console.log(locale.button)

localization.setDefaultLanguage('ru')
locale = localization.update('auth')


console.log(locale.button)
```
