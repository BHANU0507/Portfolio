'use strict';

// Sidebar Toggle for Mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { 
    sidebar.classList.toggle("active");
});

document.querySelectorAll('.social-image').forEach(item => {
    item.addEventListener('mouseover', function() {
      this.src = this.getAttribute('data-hover');
    });
  
    item.addEventListener('mouseout', function() {
      this.src = this.getAttribute('src').replace('-white', '');
    });
  });

// Modal Functionality for Testimonials
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

function toggleModal() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        toggleModal();
    });
});

// Custom Select Dropdown for Portfolio Filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
let lastClickedBtn = filterBtn[0];

select.addEventListener("click", function () { 
    this.classList.toggle("active");
});

selectItems.forEach(item => {
    item.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        select.classList.toggle("active");
        filterFunc(selectedValue);
    });
});

function filterFunc(selectedValue) {
    filterItems.forEach(item => {
        const categories = item.dataset.category.split(',').map(cat => cat.trim().toLowerCase());
        if (selectedValue === "all" || categories.includes(selectedValue)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
});

// Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
    input.addEventListener("input", function () {
        formBtn.disabled = !form.checkValidity();
    });
});

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
        pages.forEach((page, pageIndex) => {
            if (pageIndex === index) {
                page.classList.add("active");
                link.classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
                navigationLinks[pageIndex].classList.remove("active");
            }
        });
    });
});




