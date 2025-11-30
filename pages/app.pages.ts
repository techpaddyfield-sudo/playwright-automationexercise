import { Page } from '@playwright/test';
import { HomePage } from './homePage';
import { SignupLoginPage } from './signup-loginPage';
import { AccountInfoPage } from './account-infopage';
import { AccountCreatedPage } from './account-created.page';
import { HeaderComponent } from './header-component';

export class AppPages {
    readonly home: HomePage;
    readonly signupLogin: SignupLoginPage;
    readonly accountInfo: AccountInfoPage;
    readonly accountCreated: AccountCreatedPage;
    readonly header: HeaderComponent;

    constructor(page: Page) {
        this.home = new HomePage(page);
        this.signupLogin = new SignupLoginPage(page);
        this.accountInfo = new AccountInfoPage(page);
        this.accountCreated = new AccountCreatedPage(page);
        this.header = new HeaderComponent(page);
    }
}
