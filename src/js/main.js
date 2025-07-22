const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })

      mobileMenu.classList.add("hidden")
    }
  })
})

const backToTopButton = document.getElementById("back-to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible")
    backToTopButton.classList.add("opacity-100", "visible")
  } else {
    backToTopButton.classList.remove("opacity-100", "visible")
    backToTopButton.classList.add("opacity-0", "invisible")
  }
})

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

const contactForm = document.getElementById("contact-form")
const successModal = document.getElementById("success-modal")
const closeModal = document.getElementById("close-modal")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  contactForm.reset()

  successModal.classList.remove("hidden")
})

closeModal.addEventListener("click", () => {
  successModal.classList.add("hidden")
})

successModal.addEventListener("click", (e) => {
  if (e.target === successModal) {
    successModal.classList.add("hidden")
  }
})
