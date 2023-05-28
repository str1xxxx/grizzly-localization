declare module 'grizzly-localization' {
  type InterpolationValues = Record<string, string | number>

  type Locales = Record<string, Record<string, string>>

  interface GrizzlyOptions {
    lang: string
    locales: Locales
  }

  interface GrizzlyInstance {
    t: (key: string, interpolationValues?: InterpolationValues) => string
    changeLanguage: (lang: string) => void
    availableLanguages: () => string[]
    useGrizzly: (namespace?: string) => GrizzlyInstance
  }

  export function initGrizzly(options: GrizzlyOptions): void

  export function t(key: string, interpolationValues?: InterpolationValues): string

  export function changeLanguage(lang: string): void

  export function availableLanguages(): string[]

  export function useGrizzly(namespace?: string): GrizzlyInstance
}
