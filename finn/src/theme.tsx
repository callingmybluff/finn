const Theme = {
  font: {
    url: 'https://fonts.google.com/specimen/Poppins',
    family: 'Poppins',
    weight: {
      light: '500',
      heavy: '700',
    },
    size: '18px',
  },
  color: {
    primary: {
      cyan: 'hsl(180, 66%, 49%)',
      darkViolet: 'hsl(257, 27%, 26%)',
    },
    secondary: {
      red: 'hsl(0, 87%, 67%)',
    },
    neutral: {
      gray: 'hsl(0, 0%, 75%)',
      grayishViolet: 'hsl(257, 7%, 63%)',
      veryDarkBlue: 'hsl(255, 11%, 22%)',
      veryDarkViolet: 'hsl(260, 8%, 14%)',
    },
  },
  // This could be somewhere else, but only 2 number so we may as well have them here
  size: {
    mobile: '375px',
    desktop: '1440px',
    margin: '50px',
    marginMobile: '25px',
  }
}

interface ITheme {
  font: IFont
  color: IColor
  size: ISize
}
interface IFont {
  url: string
  family: string
  weight: IWeight
  size: string
}
interface IColor {
  primary: IPrimary
  secondary: ISecondary
  neutral: INeutral
}
interface IPrimary {
  cyan: string
  darkViolet: string
}
interface ISecondary {
  red: string
}
interface INeutral {
  gray: string
  grayishViolet: string
  veryDarkBlue: string
  veryDarkViolet: string
}
interface ISize {
  mobile: string
  desktop: string
}
interface IWeight {
  light: string
  heavy: string
}

export default Theme
export type {
  ITheme
}