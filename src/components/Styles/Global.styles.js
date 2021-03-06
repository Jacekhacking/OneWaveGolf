import {createGlobalStyle} from "styled-components"
import styled from "styled-components"

const GlobalStyles = createGlobalStyle`

  /*---------------------*/
  /*--CUSTOM PROPERTIES--*/
  /*---------------------*/


  :root {
    /*colors*/
    --clr-green: 121, 39%, 29%;
    --clr-transition-color-1: 138, 39%, 29%;
    --clr-transition-color-2: 157, 39%, 29%;
    --clr-transition-color-3: 177, 39%, 29%;
    --clr-transition-color-4: 193, 39%, 29%;
    --clr-blue: 200, 39%, 29%;
    --clr-black: 193, 0%, 11%;
    --clr-offwhite: 52, 4%, 96%;


    /* font-sizes */
    --fs-900: 9.375rem;
    --fs-800: 5.25rem;
    --fs-700: 3.5rem;
    --fs-600: 2.25rem;
    --fs-500: 1.75rem;
    --fs-400: 1.425rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;

    /*fonts*/

    --ff-cursive: 'Permanent Marker', cursive;


  }


  /*Box sizing*/


  *,
  *::before,
  *::after {
    box-sizing: border-box;


  }


  /*---------------------*/
  /*-----CSS RESET-------*/
  /*---------------------*/


  /*Reset margins*/
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }

  body::backdrop {
    background-color: white;
  }

  /* reset weight/boldness */
  h1,
  h2,
  h3 {
    font-weight: 600;
  }

  h4,
  h5,
  h6,
  p {
    font-family: var(--ff-body);
    font-weight: 300;
  }

  /* set up body */
  body {
    line-height: 2;
    min-height: 100vh;
    font-size: var(--fs-500);
    letter-spacing: 0.1em;
    background-color: hsl(var(--clr-offwhite));
  }

  html {
    scroll-behavior: smooth;
  }

  /*make images easier to work with*/
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /*make form elements easier to work with*/

  input,
  button,
  textarea,
  select {
    font: inherit;
  }


  /* remove animations for people who've turned them off */

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }


  a {
    color: var(--clr-dark-gray);
    border: 0;
    outline: none;
    border-radius: 5px;
    font-weight: 600;
    padding: 2px 4px;
    margin-left: -2px;
    margin-right: -2px;
    text-decoration: none;
  }

  a:visited {
    color: black
  }

  a:active {
    color: hsl(var(--clr-sandy-brown));
  }

  a:hover {
    color: hsl(var(--clr-mint-offwhite));
  }

  ul {
    list-style-type: none;
  }

  li {
    list-style: none;
  }


  /*---------------------*/
  /*   Utility Classes   */
  /*---------------------*/


  .flex {
    display: flex;
    gap: var(--gap, 1rem);
  }

  .wrap {
    flex-wrap: wrap;
  }

  .grid {
    display: grid;
    gap: var(--gap, 1rem);
  }


  /* targets any element that has a previous sibling */
  .flow > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }

  .container {
    padding-inline: 2em;
    margin-inline: auto;
    max-width: 80rem;
  }


  /* Screen reader only!!! */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /*added line*/
    border: 0;
  }


  /*  colors  */


  .bg-green {
    background-color: hsl(var(--clr-green))
  }

  .bg-blue {
    background-color: hsl(var(--clr-blue))
  }


  .gradient-background {
    background: linear-gradient(90deg,
    hsl(var(--clr-green), .7) 50%,
    hsl(var(--clr-transition-color-1), .7),
    hsl(var(--clr-transition-color-2), .7),
    hsl(var(--clr-transition-color-3), .7),
    hsl(var(--clr-transition-color-4), .7),
    hsl(var(--clr-blue), .7));
  }

  /* typography   */


  .ff-cursive {
    font-family: var(--ff-cursive)
  }

  .letter-spacing-1 {
    letter-spacing: 4.75px;
  }

  .letter-spacing-2 {
    letter-spacing: 2.7px;
  }

  .letter-spacing-3 {
    letter-spacing: 2.35px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .fs-900 {
    font-size: var(--fs-900);
  }

  .fs-800 {
    font-size: var(--fs-800);
  }

  .fs-700 {
    font-size: var(--fs-700);
  }

  .fs-600 {
    font-size: var(--fs-600);
  }

  .fs-500 {
    font-size: var(--fs-500);
  }

  .fs-400 {
    font-size: var(--fs-400);
  }

  .fs-300 {
    font-size: var(--fs-300);
  }

  .fs-200 {
    font-size: var(--fs-200);
  }


  .fs-900,
  .fs-800,
  .fs-700,
  .fs-600 {
    line-height: 1.1;
  }


  .accent-line {
    height: 3px;
    width: 200px;
    background-color: hsl(var(--clr-black), .4);
  }

  .accent-box {
    height: 10px;
    width: 40px;
    background-color: hsl(var(--clr-black), .4);
  }
`

export default GlobalStyles


export const TextParagraph = styled.p`

  padding: 2em;
  margin: auto;
  max-width: 80rem;
  font-size: var(--fs-500);

  @media (max-width: 1300px) {
    font-size: var(--fs-400);
  }
  @media (max-width: 600px) {
    font-size: var(--fs-300);
  }



`