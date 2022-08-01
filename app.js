// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
// onload((event)=>{
  let menuOverLay = document.getElementById('overlay');
  let leftSideBar = document.getElementById('left-side');
    var mobileMenuOpen = document.getElementById('checkbtn');
    // console.log(mobileMenuOpen)
  mobileMenuOpen.onclick=(event)=>{
    console.log("I am clicked")
    leftSideBar.classList.remove('hide')
    menuOverLay.classList.remove('hide')
    mobileMenuOpen.classList.remove('show')
    leftSideBar.classList.add(['show'])
    menuOverLay.classList.add(['show'])
    mobileMenuOpen.classList.add(['hide'])
  }
  menuOverLay.onclick=(event)=>{
    console.log("I am clicked")
    leftSideBar.classList.remove('show')
    menuOverLay.classList.remove('show')
    mobileMenuOpen.classList.remove('hide')
    leftSideBar.classList.add(['hide'])
    menuOverLay.classList.add(['hide'])
    mobileMenuOpen.classList.add(['show'])
  }
// })


