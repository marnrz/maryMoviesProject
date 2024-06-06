import { createGlobalStyle } from "styled-components";
import { colorPallet } from "./commonStyle";

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 10px;
    background:${colorPallet.darkPrimaryBackgroundColor};
    overflow-x: hidden;
}
body {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-style: normal;
}
ul,ol {
    list-style: none;
}
a {
    text-decoration: none;
}
* {
    margin:0;
    padding:0;
}
*, *:after, *:before {
    box-sizing: border-box;
}

.relative {
    position:relative;
}
.absolute {
    position:absolute;
}
.fixed {
    position: fixed;
}
.flex {
    display:flex;
}
.justifyBetween {
    justify-content: space-between
}
.justifyCenter {
    justify-content: center;
}
.alignCenter {
    align-items: center
}
.textCenter {
    text-align:center
}
.column {
    flex-direction:column;
}
.wrap {
    flex-wrap:wrap;
}
.wrapperFull {
    width:100%;
    padding:0 15px;
}
.wrapper {
    width: 88%;
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1600px;
}
.wrapperBox {
    width:780px;
    padding:0 15px;
    margin:0 auto;
}
.z-2 { 
    z-index:2;
}
/* col */
[class^="col-"]{
    padding:0 15px;
}
.col-1 {
    width:8.33%;
}
.col-2 {
    width:16.66%;
}
.col-3 {
    width:25%;
}
.col-4 {
    width:33.33%;
}
.col-5 {
    width:41.67%;
}
.col-6 {
    width:50%;
}
.col-7 {
    width:58.33%;
}
.col-8 {
    width:66.67%;
}
.col-9 {
    width:75%;
}
.col-10 {
    width:83.33%;
}
.col-11 {
    width:91.67%;
}
.col-12 {
    width:100%;
}

// padding-left
.pl-1 {
    padding-left: 5px;
}
.pl-2 {
    padding-left: 10px;
}
.pl-3 {
    padding-left: 15px;
}
.pl-4 {
    padding-left: 20px;
}
.pl-5 {
    padding-left: 25px;
}
.pl-6 {
    padding-left: 30px;
}
/* padding-right  */
.pr-1 {
    padding-right: 5px;
}
.pr-2 {
    padding-right: 10px;
}
.pr-3 {
    padding-right: 15px;
}
.pr-4 {
    padding-right: 20px;
}
.pr-5 {
    padding-right: 25px;
}
.pr-6 {
    padding-right: 30px;
};

// margin-bottom
.mb-1 {
    margin-bottom: 5px;
}
.mb-2 {
    margin-bottom: 10px;
}
.mb-3 {
    margin-bottom: 15px;
}
.mb-4 {
    margin-bottom: 20px;
}
.mb-5 {
    margin-bottom: 25px;
}
.mb-6 {
    margin-bottom: 30px;
}
.mb-7 {
    margin-bottom: 35px;
}

// margin-top
.mt-1 {
    margin-top: 5px;
}
.mt-2 {
    margin-top: 10px;
}
.mt-3 {
    margin-top: 15px;
}
.mt-4 {
    margin-top: 20px;
}
.mt-5 {
    margin-top: 25px;
}
.mt-6 {
    margin-top: 30px;
}
.mt-7 {
    margin-top: 35px;
}
.mt-8 {
    margin-top: 40px;
}

/* gap */
.gap-1 {
    gap:5px;
}
.gap-2 {
    gap:10px;
}
.gap-3 {
    gap:15px;
}
.gap-4 {
    gap:20px;
}
.gap-5 {
    gap:25px;
}
.gap-6 {
    gap:30px;
}
.gap-7 {
    gap:35px;
}
.gap-8 {
    gap:40px;
}
/* @media */
/* @media (max-width: 1240px) {
    .wrapperFull {
      width: 1000px;
      margin: 0 auto;
    }} */
`;

export default GlobalStyle;
