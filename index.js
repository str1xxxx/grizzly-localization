let instance = null

function t(key, interpolationValues) {
  if (!instance) {
    throw new Error('Grizzly has not been initialized. Please call initGrizzly first.')
  }

  const keys = key.split('.')
  let current = instance.locales[instance.currentLang]
  for (let i = 0; i < keys.length; i++) {
    current = current[keys[i]]
    if (current === undefined) {
      return key
    }
  }

  if (interpolationValues) {
    for (const placeholder in interpolationValues) {
      current = current.replace(new RegExp(`{${placeholder}}`, 'g'), interpolationValues[placeholder])
    }
  }

  return current
}

function changeLanguage(lang) {
  if (!instance) {
    throw new Error('Grizzly has not been initialized. Please call initGrizzly first.')
  }

  if (instance.locales[lang]) {
    instance.currentLang = lang
  } else {
    console.warn(`The language "${lang}" is not loaded in Grizzly.`)
  }
}

function availableLanguages() {
  if (!instance) {
    throw new Error('Grizzly has not been initialized. Please call initGrizzly first.')
  }

  return Object.keys(instance.locales)
}

function useGrizzly(namespace = '') {
  function tNamespaced(key, interpolationValues) {
    return t(`${namespace ? namespace + '.' : ''}${key}`, interpolationValues)
  }

  return { t: tNamespaced, changeLanguage, availableLanguages }
}

export function initGrizzly(options) {
  if (!instance) {
    instance = { currentLang: options.lang, locales: options.locales }
  }
}

export { t, changeLanguage, availableLanguages, useGrizzly }
