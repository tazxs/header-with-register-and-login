'use strict';
const loginBtn = document.querySelector('.login_btn');
const registerBtn = document.querySelector('.register_btn');
const loginModal = document.querySelector('.login_modal');
const registerModal = document.querySelector('.register_modal');
const closeButtons = document.querySelectorAll('.close_modal');
const overlay = document.querySelector('.overlay');
const hidden = document.querySelector('.hidden');
const closeModals = function () {
    if (!loginModal.classList.contains('hidden')) {
        loginModal.classList.add('hidden');
    }
    if (!registerModal.classList.contains('hidden')) {
        registerModal.classList.add('hidden');
    }
    overlay.classList.add('hidden');
};
closeButtons.forEach(button => {
    button.addEventListener('click', closeModals);
});
const openLoginModal = function (){
    loginModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    loginModal.style.opacity = '1';
}
const openRegisterModal = function (){
    registerModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    registerModal.style.opacity = '1';
}
loginBtn.addEventListener('click',openLoginModal);
registerBtn.addEventListener('click', openRegisterModal)
overlay.addEventListener('click', closeModals);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && (!loginModal.classList.contains('hidden') || !registerModal.classList.contains('hidden'))) {
        closeModals();
    }
});
document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        e.target.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    });

    link.addEventListener('mouseout', (e) => {
        e.target.style.transform = 'translate(0, 0)';
    });
});
document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', function(e) {
        const circle = document.createElement("span");
        const diameter = Math.max(link.clientWidth, link.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - link.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - link.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = link.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        link.appendChild(circle);
    });
});

