const signInBtnLink = document.querySelector('.signInBtn');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => { 
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => { 
    wrapper.classList.toggle('active');
});



1212