import builder from '../elementBuilder';
import './main.scss';


export const main = () => {
    const date = new Date().toDateString();
    const content = `<a href="/">Logo</a><br> ${date}`;
    return builder('main',content,'main');
};
