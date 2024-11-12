
// ================= CHange background header=============
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

// =======================SWipper Popular===============
var swiperPopular = new Swiper (".popular__container", {
  spaceBetween:32,
  grabCursor: true,
  centredSlides: true,
  slidesPerView: 'auto',
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// ======================Value Accordion===================
const accordionItems = document.querySelectorAll('.value__accordion-item')
accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector('.value__accordion-header')

  accordionHeader.addEventListener('click', () =>{
    toggleItem(item)


    toggleItem(item)
    if(openItem && openItem!== item)
    toggleItem(openItem)
    console.log(accordionHeader);
  })
})
const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.value__accordion-content')


  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}
// =====================SCROLL Sections ACTIVE LINKS=================================
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

          console.log(scrollY);
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
  console.log(sections);
}
window.addEventListener('scroll', scrollActive)

// ========================Show SCROLL UP===================================
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) {
    scrollUp.classList.add('show-scroll')
  }else{
    scrollUp.classList.remove('show-scroll')

  }
}
window.addEventListener('scroll', scrollUp)


// ==========================DARK LIGHT THEME==========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the inference has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme){
  // if the validation is fulfilled, we ask what the issue was to  know if we activited
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'] (iconTheme)
}


// Active /deactive the theme manually width the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark /icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// ======SCROLL REVEAL ANIMATION=====================
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__title, popular__container, .subscribe__container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})


const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;


function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add('fixed');
  }else{
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixedNav);
