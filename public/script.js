


const downloadCv = document.querySelector("#downloadCv");
const downloadText = document.querySelector(".download-text");
const spinnerAnim = document.querySelector(".spinner-anim");

downloadCv.addEventListener("click", () => {
    downloadText.style.top = "-100px";
    downloadCv.style.pointerEvents = "none";
    setTimeout(() => {
        downloadCv.innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
    }, 250);
    setTimeout(() => {
        downloadCv.innerHTML = 'Connect Wallet'
    }, 7000);
})



const nthAll = document.querySelectorAll("#nth a");
const dotLinkEffect = document.querySelector(".dot-link-effect");

function removeAllClass_fromNth() {
    const nthAll = document.querySelectorAll("#nth a");
    for (let i = 0; i < nthAll.length; i++) {
        dotLinkEffect.classList.remove("active" + i)
    }
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("click", () => {
        removeAllClass_fromNth()
        dotLinkEffect.classList.add("active" + i)
    })
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("mouseover", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = ".30"
        }
        nthAll[i].style.opacity = "1"
    })

    nthAll[i].addEventListener("mouseout", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = "1"
        }
    })
}

const menuBtn = document.querySelector(".menu-btn");
const navbarLinksM = document.querySelector(".nav-links");
const navLinkContainer = document.querySelector(".nav-link-container");
const downloadBtn = document.querySelector(".download-cv");



document.addEventListener("click", (e) => {
    target = e.target.parentNode;

    if (target === menuBtn) {
        navbarLinksM.classList.toggle("active-nav")


        setTimeout(() => {
            navbarLinksM.classList.toggle("anim-navs")
        }, 100);
    }

    if (target != menuBtn && target != navLinkContainer && target != downloadBtn && target != navbarLinksM) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")

    }


});