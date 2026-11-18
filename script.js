//1. find the button in our HTML 
const themeBtn = document.getElementById('themeBtn');
//2.listen for a click on the button
themeBtn.addEventListener('click', function(){
    //3.taggle the 'dark mode' class on the body
    document.body.classList.toggle('dark-mode');
    //4. change the button text based on the mode
    if (document.body.classList.contains('dark-mode')){
        themeBtn.textContent = 'Light Mode';
    } else{
        themeBtn.textContent = 'Dark Mode';
    }
});