import "./assets/fontawesome-free-6.5.1-web/css/all.min.css";
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

const heroSection = document.getElementById("heroSection");
const pageFooter  = document.getElementById("pageFooter");
const page_content = document.getElementById("page_content");
const loading_screen = document.getElementById("loading_screen");

window.addEventListener("load", () => {
  if(heroSection){
    heroSection.style.height = `${window.innerHeight}px`
  }
  if(pageFooter){
    pageFooter.style.height = `${window.innerHeight}px`
  }
  page_content?.classList.add("loaded");
  loading_screen?.classList.add("hide");
  document.body.classList.add("loaded");
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