// define element
// box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;

const element = document.getElementById("element");
const Hoffset = document.getElementById("h-shadow");
const Voffset = document.getElementById("v-shadow");
const blur = document.getElementById("blur-raduis");
const spread = document.getElementById("spread-radius");
const shdowColor = document.getElementById("shadow-color");
const shdowColorOpacity = document.getElementById("shadow-color-opacity");
const inset = document.getElementById("shadow-inset");
const textArea = document.querySelector(".code-wrapper textarea");
const CopyBtn = document.querySelector(".code-wrapper button");


document.querySelectorAll("input").forEach( InputElement => {
    InputElement.addEventListener("change", () => {
        const insetShadow = inset.checked ? "inset" : "";
        const Rgb = hexToRGB(shdowColor.value)
        const alpha = shdowColorOpacity.value
        element.style.boxShadow = `${Hoffset.value}px ${Voffset.value}px ${blur.value}px ${spread.value}px  rgba(${Rgb},${alpha}) ${insetShadow}`;
        textArea.innerHTML = element.style.boxShadow ;
    });
});

CopyBtn.addEventListener("click" , () => {
    navigator.clipboard.writeText(textArea.innerHTML);
    CopyBtn.innerHTML = "COPIED SHADOW!";
    setInterval(()=>{
        CopyBtn.innerHTML = "COPY";
    },2000);
});

