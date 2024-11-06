const accordionContent = document.querySelectorAll('.accordion-content')
const accordionIcon = document.querySelectorAll(".accordion-icon")
const sidebar = document.getElementById("sidebar")
const sideContain = document.getElementById("sideContain")

const openSidebar = () => {
  sidebar.classList.toggle("sidebar-active")
  sideContain.classList.toggle("sideContain-active")
}

sidebar.addEventListener("click", function(e){
  e.stopPropagation()
})

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
})

const toggleAccordion = (i) => {
  if(accordionContent[i].classList.contains('accordion-active')){
    accordionContent[i].classList.remove('accordion-active')
    accordionIcon[i].classList.remove("accordion-icon-active")
  }else{
    accordionContent[i].classList.add('accordion-active')
    accordionIcon[i].classList.add("accordion-icon-active")
  }
}

function downloadFile() {
  const link = document.createElement('a');
  link.href = 'file.pdf'; 
  link.download = 'file.pdf'; 
  link.click();
}

function sendEmail() {
  window.location.href = "mailto:promo@serenitymedia.ru";
}

// SLIDER
const countdownDate = new Date("December 3, 2024 00:00:00").getTime();

const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("day").innerHTML = `<span class='text-[14px]'>дни:</span><b class='text-[16px] lg:text-[32px]'>${days > 9 ? days : `0${days}`}</b>`
  document.getElementById("hour").innerHTML = `<span class='text-[14px]'>часы:</span><b class='text-[16px] lg:text-[32px]'>${hours > 9 ? hours : `0${hours}`}</b>`
  document.getElementById("minute").innerHTML = `<span class='text-[14px]'>минуты:</span><b class='text-[16px] lg:text-[32px]'>${minutes > 9 ? minutes : `0${minutes}`}</b>`

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("day").innerHTML = `<span>00</span>`
    document.getElementById("hour").innerHTML = `<span>00</span>`
    document.getElementById("minute").innerHTML = `<span>00</span>`
  }
}, 1000);




