/* Light & Dark Mode Toggle */ 

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

themeCheck();