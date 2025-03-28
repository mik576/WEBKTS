document.addEventListener("DOMContentLoaded", function () {
    // Xử lý menu2 (Top Resort, Tour, Combo)
    const menu2Buttons = document.querySelectorAll(".menu2-btn");
    const content2Sections = document.querySelectorAll(".content2");

    menu2Buttons.forEach(button => {
        button.addEventListener("click", function () {
            menu2Buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("data-target");

            content2Sections.forEach(section => {
                section.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";
        });
    });

    // Xử lý menu3 (Phú Yên, Đà Nẵng, Ninh Thuận, Bình Thuận)
    const menu3Buttons = document.querySelectorAll(".menu3-btn");
    const content3Sections = document.querySelectorAll(".content");

    menu3Buttons.forEach(button => {
        button.addEventListener("click", function () {
            menu3Buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("data-target");

            content3Sections.forEach(section => {
                section.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const resortList = document.querySelector(".resort-list");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    nextBtn.addEventListener("click", function () {
        resortList.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        resortList.scrollBy({ left: -300, behavior: "smooth" });
    });
});


    // Dropdown đa cấp Bootstrap 5
    document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function (e) {
            let nextEl = this.nextElementSibling;
            if (nextEl && nextEl.classList.contains('dropdown-menu')) {
                nextEl.classList.add('show');
                nextEl.style.top = this.offsetTop + "px";
                nextEl.style.left = this.offsetWidth + "px";
            }
        });

    dropdown.parentElement.addEventListener('mouseleave', function (e) {
        let subMenu = this.querySelector('.dropdown-menu');
    if (subMenu) {
        subMenu.classList.remove('show');
            }
        });
    });


document.addEventListener("DOMContentLoaded", function () {
    // Dropdown toggle click mobile
    const dropdowns = document.querySelectorAll('.dropdown > a, .dropdown-item.dropdown-toggle');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('show');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Nút mở menu mobile
    const toggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.header-nav .navbar-nav');

    toggler.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Dropdown mở khi click mobile
    const dropdowns = document.querySelectorAll('.dropdown > a, .dropdown-item.dropdown-toggle');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('show');
            }
        });
    });
});
