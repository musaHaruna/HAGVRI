'use strict'

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector('[data-nav-open-btn]')
const navbar = document.querySelector('[data-navbar]')
const navCloseBtn = document.querySelector('[data-nav-close-btn]')

const navElemArr = [navOpenBtn, navCloseBtn]

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener('click', function () {
    navbar.classList.toggle('active')
  })
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll('[data-nav-link]')

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', function () {
    navbar.classList.remove('active')
  })
}

/**
 * header active when window scrolled down
 */

const header = document.querySelector('[data-header]')

window.addEventListener('scroll', function () {
  window.scrollY >= 50
    ? header.classList.add('active')
    : header.classList.remove('active')
})
const missionButton = document.querySelector('.tab-btn[data-tab="mission"]')
const visionButton = document.querySelector('.tab-btn[data-tab="vision"]')
const missionContent = document.querySelector(
  '.tab-content[data-tab="mission"]'
)
const visionContent = document.querySelector('.tab-content[data-tab="vision"]')

// Function to toggle tabs
function toggleTab(tabButton, tabContent) {
  // Remove the 'active' class from all tabs
  document
    .querySelectorAll('.tab-btn')
    .forEach((btn) => btn.classList.remove('active'))
  document
    .querySelectorAll('.tab-content')
    .forEach((content) => (content.style.display = 'none'))

  // Add the 'active' class to the selected tab
  tabButton.classList.add('active')
  // Display the corresponding content
  tabContent.style.display = 'block'
}

// Event listeners for tab buttons
missionButton.addEventListener('click', function () {
  toggleTab(this, missionContent)
})

visionButton.addEventListener('click', function () {
  toggleTab(this, visionContent)
})
