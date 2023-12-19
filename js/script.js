// ==================== aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active");
        showSection(this);
    })
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
// ==============================
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
    console.log(element.getAttribute("href").split("#")[1]);
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
document.querySelector(".hire-me2").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

// ========================== nav-toggler (mobile view menu option)
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// ============================== pop-up image
document.querySelectorAll('.portfolio img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
}
// ============================== TYPING
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Desktop Application Developer", "Content Writter","Logo, Card, Banner Designer"],
    typespeed:1000,
    backspeed:100,
    loop:true
})




// ================================= show video resume
function show_video(){
    document.querySelector('.vid_section').style.display = 'block';
}
function close_video(){
    document.querySelector('.vid_section').style.display = 'none';
}