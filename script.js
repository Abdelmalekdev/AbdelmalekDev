
AOS.init();

//BURGER MENU

const burgerButton = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");
const burgerNavLink = burgerMenu.children ;

burgerButton.addEventListener("click", function (){
    if (burgerMenu.classList.contains("hidden")){
        burgerMenu.classList.remove("hidden");
        burgerButton.classList.remove("text-[var(--color-g-btw)]");
        burgerButton.classList.add("text-white");
    }
    else{
        burgerMenu.classList.add("hidden");
        burgerButton.classList.remove("text-white");
        burgerButton.classList.add("text-[var(--color-g-btw)]");
    }
})

for (let i = 0 ; i< burgerNavLink.length ; i++){
    burgerNavLink[i].addEventListener("click", burgerMenucloseBylink);
}

function burgerMenucloseBylink(){
    burgerMenu.classList.add("hidden");
    burgerButton.classList.remove("text-white");
        burgerButton.classList.add("text-[var(--color-g-btw)]");
}

//STICKY NAVBAR + SCROLL UP BUTTON

const navbar = document.getElementById("navbar");
const upButton = document.getElementById("up-button");

const stickyClasses = ["bg-[var(--bg-color)]/80" , "backdrop-blur-sm" , "shadow-xl" , "fixed"];
const initialClasses = ["absolute"];
const stickyburgerClasses = ["bg-[var(--bg-color)]/80" , "backdrop-blur-sm" , "shadow-xl"];

window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY;

    if(scrollPosition > 50){
        navbar.classList.add(...stickyClasses);
        navbar.classList.remove(...initialClasses);
        burgerMenu.classList.remove(...stickyburgerClasses);

        upButton.classList.add("opacity-100");
        upButton.classList.add("opacity-0");
        upButton.classList.remove("pointer-events-none");
    }
    else if(window.scrollY === 0){
        navbar.classList.remove(...stickyClasses);
        navbar.classList.add(...initialClasses);
        burgerMenu.classList.add(...stickyburgerClasses);

        upButton.classList.add("opacity-0");
        upButton.classList.remove("opacity-100");
        upButton.classList.add("pointer-events-none");

    }
})

//CAROUSEL
const carousel = document.getElementById("carousel-container");
const carouselItems = carousel.children;
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
const itemWidth = carouselItems[0].clientWidth + gap;

let currentIndex = 0;

prevButton.addEventListener("click", function(){
    carousel.scrollBy({
        left: -itemWidth,
    })
    currentIndex--;
})

nextButton.addEventListener("click", function(){
    carousel.scrollBy({
        left: itemWidth,
    })
     currentIndex++;
})

function updateButtonsState() {
    const scrollLeft = carousel.scrollLeft;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    prevButton.disabled = scrollLeft <= 1;
    prevButton.classList.toggle("opacity-40", prevButton.disabled);
    prevButton.classList.toggle("cursor-not-allowed", prevButton.disabled);

    nextButton.disabled = scrollLeft >= maxScrollLeft - 2;
    nextButton.classList.toggle("opacity-40", nextButton.disabled);
    nextButton.classList.toggle("cursor-not-allowed", nextButton.disabled);
}

carousel.addEventListener("scroll", updateButtonsState);
updateButtonsState();

