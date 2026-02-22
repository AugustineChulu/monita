import "./assets/fontawesome-free-6.5.1-web/css/all.min.css";
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import "./views/landing_page.ts"
import "./components/footer/footer.ts"
import "./components/navbar/navbar.ts"

declare global {
  interface Window {
    // appState: {
    //   currentPage: string;
    //   isWindowFocused: boolean;
    // };
  }
}

const herSection = document.getElementById("heroSection");
const pageFooter  = document.getElementById("pageFooter")

window.addEventListener("load", () => {
  if(herSection){
    herSection.style.height = `${window.innerHeight}px`
  }
  if(pageFooter){
    pageFooter.style.height = `${window.innerHeight}px`
  }
})

window.addEventListener("resize", () => {
  if(pageFooter){
    pageFooter.style.height = `${window.innerHeight}px`
  }
})

// window.appState = {
//   currentPage: "landing_page",
//   isWindowFocused: true,
// };

// const handleBlur = () => {
//   window.appState.isWindowFocused = false;
// };

// const handleFocus = () => {
//   window.appState.isWindowFocused = true;
// };

// window.addEventListener("blur", handleBlur);
// window.addEventListener("focus", handleFocus);