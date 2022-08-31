let navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach(e => {
    e.addEventListener(("click"), (el) => {
        navLinks.forEach(li => {
            li.classList.remove("active");
        })

        el.target.classList.add("active")
    })
})

//
//
// 
let portfolioLis = document.querySelectorAll(".portfolio ul li");
let boxs = Array.from(document.querySelectorAll(".portfolio .imges-container .box"));

portfolioLis.forEach((ele) => {
    ele.addEventListener("click", removeActive);
    ele.addEventListener("click", mangeImgs);
})

function removeActive() {
    portfolioLis.forEach((e) => {
        e.classList.remove("active");
        this.classList.add("active");
    })
}


function mangeImgs() {
    boxs.forEach((el) => {
        el.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    })
}

// ######################################

let sliderImegs = ["Imgs/landing.jpg", "Imgs/landing02.jpg", "Imgs/landing03.jpg"];
let currentSlide = 1;
let nextBtn = document.querySelector("#next");
let PrevBtn = document.querySelector("#prev");

nextBtn.onclick = nextSlider;
PrevBtn.onclick = prevSlider;

let landing = document.querySelector(".landing");
let bullets = document.querySelectorAll("#bullets-ul li");

theCheaker();

function theCheaker(currentSlide_para = 1) {

    removeActiveClass();

    landing.style.backgroundImage = `url(${sliderImegs[currentSlide_para - 1]})`;

    bullets[currentSlide_para - 1].classList.add("active");

    if (currentSlide_para == 1) {
        PrevBtn.classList.add("disabled");
    } else {
        PrevBtn.classList.remove("disabled");

    }

    if (currentSlide_para == sliderImegs.length) {
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");

    }

}

function removeActiveClass() {
    bullets.forEach(bullet => {
        bullet.classList.remove("active")
    })
}

function nextSlider() {
    if (nextBtn.classList.contains("disabled")) {

        return false;
    } else {

        currentSlide++
        theCheaker(currentSlide);
    }

}
function prevSlider() {

    if (PrevBtn.classList.contains("disabled")) {
        return false;

    } else {
        currentSlide--;
        theCheaker(currentSlide);

    }

}

for (let i = 0; i < bullets.length; i++) {
    bullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theCheaker(currentSlide);
    }
}

// ######################
let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let spans = document.querySelectorAll(".prog-holder .prog span");
let ourSkills = document.getElementById("skills");
let scrollUpBtn = document.querySelector(".scroll-up");

let starte = false;

window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop - 400) {
        if (!starte) {
            numbers.forEach((num) => startCount(num));
        }
        starte = true;
    }
    if (window.scrollY >= ourSkills.offsetTop - 300) {
        console.log("hello")
        spans.forEach(s => {
            s.style.width = s.dataset.progress
        })
    }
    if (this.pageYOffset >= 1200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}
function startCount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(count)
        }
    }, 1000 / goal)
}

scrollUpBtn.onclick = function () {
    window.scrollTo(0, 0);
}
//###############################################
