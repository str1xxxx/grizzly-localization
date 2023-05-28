Grizzly
=======

Grizzly is a lightweight, easy-to-use, yet powerful internationalization (i18n) library for JavaScript. It simplifies the process of translating your JavaScript applications by allowing you to load multiple languages and dynamically switch between them.

Features
--------

1. **Translation Function (`t`)**: Translate text with support for nested keys and interpolation for dynamic values.
2. **Dynamic Language Switching**: Change the language of your application on the fly.
3. **Available Languages**: Retrieve a list of all loaded languages.
4. **Namespaced Translations**: Create namespaced translation functions for more organized code.
5. **Initialization**: Start using Grizzly with your desired settings.

Installation
------------

`npm install grizzly`

API
---

**`initGrizzly(options: Object)`:** Initializes the Grizzly library with your preferred language and locales.

```javascript
initGrizzly({
  lang: 'en',
  locales: {
    en: {
      greeting: 'Hello {name}!',
    },
    es: {
      greeting: '¡Hola {name}!',
    },
  },
})
```

**`t(key: string, interpolationValues: Object)`:** Translates a key into the current language. Supports nested keys and interpolation for dynamic values.

```javascript
console.log(t('greeting', { name: 'John' }))  // Outputs: Hello John!
```

**`changeLanguage(lang: string)`:** Changes the current language. If the passed language is not loaded, a warning will be issued.

```javascript
changeLanguage('es')
```

**`availableLanguages(): string[]`:** Returns an array of the keys of all loaded languages.

```javascript
console.log(availableLanguages())  // Outputs: ['en', 'es']
```

**`useGrizzly(namespace: string)`:** Returns an object containing `t`, `changeLanguage`, and `availableLanguages` functions that will use the specified namespace for translation keys.

```javascript
const { t: tGreeting } = useGrizzly('greeting')
console.log(tGreeting({ name: 'John' }))  // Outputs: ¡Hola John!
```

Usage
-----

Here's a sample usage of Grizzly:

```javascript
import { initGrizzly, t, changeLanguage, availableLanguages, useGrizzly } from 'grizzly'

// Initialize Grizzly
initGrizzly({
  lang: 'en',
  locales: {
    en: {
      greeting: 'Hello {name}!',
    },
    es: {
      greeting: '¡Hola {name}!',
    },
  },
})

// Translate
console.log(t('greeting', { name: 'John' }))  // Outputs: Hello John!

// Change language
changeLanguage('es')

// Translate in new language
console.log(t('greeting', { name: 'John' }))  // Outputs: ¡Hola John!

// Get available languages
console.log(availableLanguages())  // Outputs: ['en', 'es']

// Use namespaced translations
const { t: tGreeting } = useGrizzly('greeting')
console.log(tGreeting({ name: 'John' }))  // Outputs: ¡Hola John!
```

Contributing
------------

Contributions are welcome! Please feel free to submit a pull request.

License
-------

Grizzly is [MIT licensed](./LICENSE).