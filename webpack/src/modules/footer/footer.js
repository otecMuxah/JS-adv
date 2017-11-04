import builder from '../elementBuilder';
import './footer.scss';

export default () => {
    const content = `<a href="/">Easycode 2017</a>`;
    return builder('footer',content,'footer');
};

