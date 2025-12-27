
//
//
//
//
const translations = {
  en:{
    title:"Books",
    desc :"Order your favorite book online and it will be delivered to your door."

  },
  ar:{
    title:"كتب ",
    desc : " احجز كتبك المفضلة أونلاين واستلمها لحد باب بيتك "
  }
};

let currentlang = "en"; 

function setLang(leng) {
  document.getElementById("title").textContent=translations[lang].title;
  document.getElementById("desc").textContent=translations[lang].desc;

  document.body.dir = lang === "ar"? "rtl" : "ltr";
}
setLang(currentlang); 