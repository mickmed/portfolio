import { cecl, qs } from "../Helpers/domHelper.js";
import "./image.scss";

export const Image = (src, div) => {
  let img = div.appendChild(cecl("img", "img"));
  img.src = src;

  // if (title === 'NYC Trees') {
  //   // modal.childNodes[0].childNodes[0].style.fontFamily = "Maitree"

  // } else if (title === 'Mick\'s Math Mental') {
  //   // modal.childNodes[0].childNodes[0].style.fontFamily = 'Simple'

  //   modal.childNodes[0].childNodes[0].style.color = 'rgb(203, 206, 45)'
  // }else if (title === 'Scaled'){
  //   // modal.childNodes[0].childNodes[0].style.fontFamily = "Vegan"

  // }

  // console.log("projecttitle", h2)
  // if (img.height > img.width) {
  //   modalSpan.style.transform = "skew(-10deg) translateX(-30%)"
  //   modalSpan.style.width = '60%'
  //   h2.style.transform = "skew(10deg) translate(1%)"
  //   console.log(window.innerWidth)
  //   window.addEventListener('resize', ()=>{
  //       if(window.innerWidth > 600){
  //     imgWrapper.style.width = '40%'
  //   }else{
  //     imgWrapper.style.width = '70%'
  //   }
  //   })

  //   // imgWrapper.style.width = '40%'
  //   // h2.style.
  // }

  // linkModalMore.addEventListener("click", async evt => {
  //   let res = await showSingleItemm(evt, e, "projects");

  //   document.querySelector(".main-content").innerHTML = "";
  //   navbar({ project: e });
  //   projects("project", {
  //     project: e,
  //     technologies: res.technologies,
  //     traits: res.traits
  //   });
  //   technologies("technologies", { technologies: res.technologies });
  // });

  // let linkModalSiteBtn = makeElement("button", "site-button", linkModal, {
  //   innerText: "visit site"
  // });
  // linkModalSiteBtn.addEventListener("click", evt => {
  //   location.href = e.site_url;
  //   target = "_blank";
  // });

  return img;
};
