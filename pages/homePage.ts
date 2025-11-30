import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';



export class HomePage extends BasePage {
    readonly signupLoginLink: Locator;
    readonly homeMainSection: Locator;

    constructor(page: Page) {
        super(page);
        this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.homeMainSection = page.locator('#slider'); // stable element on home page
    }

    async openHome() {
        await this.goto('/');
    }
}
