import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.deepCss('app-root ion-content')).getText();
    }

    getIonTitle() {
        return element(by.deepCss('app-root ion-title')).getText();
    }

}
