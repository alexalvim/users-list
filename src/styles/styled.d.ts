import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      mainColor: string
      darkestColor: string
      lightestColor: string
      dangerRed: string
      darkGray: string
      lightGray: string
      lightestGray: string
      mediumGray: string
      defaultBoxShadow: string
    }

    spaces: {
      tiny: string
      small: string
      medium: string
      base: string
      large: string
      largest: string
      containerWidth: string
    }

    typo: {
      tiny: string
      small: string
      medium: string
      large: string
    }
  }
}
