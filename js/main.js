/* Light & Dark Mode Logos 

var userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
var toggleDark = document.getElementById('toggle-dark');
var toggleLight = document.getElementById('toggle-light');
var htmlElem = document.querySelector('html');

if (userPrefersDark.matches)) {
  htmlElem.classList.add('dark');
  toggleDark.classList.add('visible');
  toggleLight.classList.remove('hidden');
} else {
  toggleLight.classList.add('visible');
  toggleDark.classList.remove('hidden');
}

toggleLight.addEventListener('click', function () {
    localStorage.setItem('theme', 'light');
    htmlElem.classList.remove('dark');
    toggleDark.classList.add('visible');
    toggleDark.classList.remove('hidden');
    toggleLight.classList.add('hidden');
    toggleLight.classList.remove('visible');
  });
  
  toggleDark.addEventListener('click', function () {
    localStorage.setItem('theme', 'dark');
    htmlElem.classList.add('dark');
    toggleLight.classList.add('visible');
    toggleLight.classList.remove('hidden');
    toggleDark.classList.add('hidden');
    toggleDark.classList.remove('visible');
  });
*/

/* Light & Dark Mode Toggle  

const darkIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const iconToggle = () => {
    darkIcon.classList.toggle('display-none');
    lightIcon.classList.toggle('display-none');
}

const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        darkIcon.classList.add('display-none');
        return;
    }
    lightIcon.classList.add('display-none');
}

const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    iconToggle();
}

lightIcon.addEventListener('click', () => {
    themeSwitch();
})

darkIcon.addEventListener('click', () => {
    themeSwitch();
})

themeCheck();*/