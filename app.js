const langCarousel = document.getElementById("languageCarousel");
const langHolder = document.getElementById("languageHolder")

const languages = ['./imgs/python-logo-only.svg', './imgs/icons8-javascript.svg', './imgs/icons8-css-logo.svg', './imgs/icons8-html-logo.svg', "./imgs/icons8-git-logo.svg", "./imgs/blender_community_badge_white.svg", 
'./imgs/react-2.svg','./imgs/npm.svg', './imgs/visual-studio-code-icons/visual-studio-code-icons/vscode.svg']


function createLangEle(){
 

    for(i=0; i<languages.length;i++){
        const langElement = document.createElement("img");
        langElement.className = "langElement";
        langElement.src = languages[i];
        
        // langElement.style.border = "1px dashed #939E65";
        // langElement.style.borderRadius = "15px"
        langElement.style.padding = "10px"

        langHolder.appendChild(langElement);

    }
    }

createLangEle();

const scrollers = document.querySelectorAll("#languageCarousel")

if (!window.matchMedia("(prefers-reduced-motion:reduce").matches){
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