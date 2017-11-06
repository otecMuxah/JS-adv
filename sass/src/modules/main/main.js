import builder from '../elementBuilder';
import './main.scss';


export const main = () => {
    const date = new Date().toDateString();
    let list = '';
    (() => {
        for (let i=0;i<10;i++) {
            list += `<li class="list_item${i}">${i}</li>`
        }
    })();

    const content = `<a href="/">Logo</a><br>${date}<ul>${list}</ul>`;
    return builder('main',content,'main');
};
