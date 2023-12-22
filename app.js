const langCarousel = document.getElementById("languageCarousel");
const langHolder = document.getElementById("languageHolder")

const languages = ['./imgs/python-logo-only.svg', './imgs/icons8-javascript.svg', './imgs/icons8-css-logo.svg', './imgs/npm.svg', './imgs/visual-studio-code-icons/visual-studio-code-icons/vscode.svg','./imgs/icons8-html-logo.svg', "./imgs/icons8-git-logo.svg", "./imgs/blender_community_badge_white.svg", 
'./imgs/react-2.svg']


function createLangEle(){
    for(i=0; i<languages.length;i++){
        const liLang = document.createElement("li");
        const langElement = document.createElement("img");
        liLang.className = 'liLang';
        langElement.className = "langElement";
        langElement.src = languages[i];
       

        liLang.appendChild(langElement)
        langHolder.appendChild(liLang);

    }
    }

createLangEle();

const scrollers = document.querySelectorAll("#languageCarousel")

if (!window.matchMedia("(prefers-reduced-motion: reduce").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller =>{
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector("#languageHolder");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item =>{
            const duplicatedItem = item.cloneNode(true)
            duplicatedItem.setAttribute("aria-hidden", true)
            scrollerInner.appendChild(duplicatedItem)
        })
    })
}

function toggleMode(){
    const element = document.body;

    element.classList.toggle('dark');
    console.log(element.classList)
}


document.querySelector(".colorMode").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");

})