import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';



export class SignupLoginPage extends BasePage {
    readonly newUserHeader: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupButton: Locator;

    constructor(page: Page) {
        super(page);
        this.newUserHeader = page.getByRole('heading', { name: 'New User Signup!' });
        this.signupNameInput = page.locator('input[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');
    }

    async signupNewUser(name: string, email: string) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }
}
