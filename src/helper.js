import i18n from "./i18n";
import './App.css';

 const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    const body = document.body;

    if (lang === 'fa') {
        body.classList.add('fa');
        body.setAttribute('lang', 'fa');
    }
    else {
        body.classList.remove('fa');
        body.setAttribute('lang', 'en');
    }

}

export default changeLanguage