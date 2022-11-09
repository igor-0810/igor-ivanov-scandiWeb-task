import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const theme = {
  ...colors,
};

const GlobalStyle = createGlobalStyle`
	*{
    margin: 0;
  }
h1{
  font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 42px;
line-height: 160%;
color: ${colors.blak};
}

h2{
  font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 27px;
color: ${colors.blak};
}
h3 {
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 18px;
color: ${colors.blak};
}

h4 {
  font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
color: ${colors.blak};
}

h5{
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 160%;
color: ${colors.blak};
}

h6{
  font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: ${colors.blak};
}

p{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 159.96%;
color: ${colors.blak};
}

span {
  font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
color: ${colors.blak};
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${colors.primary.main};

  position: fixed;
  z-index: 1031;
  top: 79px;
  left: 0;

  width: 100%;
  height: 3px;
}


#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${colors.primary.main}, 0 0 5px ${colors.primary.main};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}


#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 100px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${colors.primary.main};
  border-left-color: ${colors.primary.main};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

pre {
  white-space: pre-wrap;
  word-wrap: normal;
  word-break: keep-all;
  font-family:  'Source Sans Pro','Poppins', 'BlinkMacSystemFont';
  font-size: 14px;
}

`;

export default GlobalStyle;

