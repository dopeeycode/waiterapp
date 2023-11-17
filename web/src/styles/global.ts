import { createGlobalStyle } from 'styled-components'

import GeneralSansMediumTtf from '../assets/fonts/GeneralSans-Medium.ttf'
import GeneralSansMediumWoff from '../assets/fonts/GeneralSans-Medium.woff'
import GeneralSansMediumWoff2 from '../assets/fonts/GeneralSans-Medium.woff2'
import GeneralSansRegularTtf from '../assets/fonts/GeneralSans-Regular.ttf'
import GeneralSansRegularWoff from '../assets/fonts/GeneralSans-Regular.woff'
import GeneralSansRegularWoff2 from '../assets/fonts/GeneralSans-Regular.woff2'
import GeneralSansSemiboldTtf from '../assets/fonts/GeneralSans-Semibold.ttf'
import GeneralSansSemiboldWoff from '../assets/fonts/GeneralSans-Semibold.woff'
import GeneralSansSemiboldWoff2 from '../assets/fonts/GeneralSans-Semibold.woff2'

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansRegularWoff2}') format('woff2'),
          url('${GeneralSansRegularWoff}') format('woff'),
          url('${GeneralSansRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansMediumWoff2}') format('woff2'),
          url('${GeneralSansMediumWoff}') format('woff'),
          url('${GeneralSansMediumTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansSemiboldWoff2}') format('woff2'),
          url('${GeneralSansSemiboldWoff}') format('woff'),
          url('${GeneralSansSemiboldTtf}') format('truetype');
  }

  small {
    font-weight: 500;
    color: #333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`
