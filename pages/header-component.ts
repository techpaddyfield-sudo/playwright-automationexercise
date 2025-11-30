import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.base';


export class HeaderComponent extends BasePage {
    readonly loggedInAsLink: Locator;
    readonly deleteAccountLink: Locator;

    constructor(page: Page) {
        super(page);
        this.loggedInAsLink = page.locator('a', { hasText: 'Logged in as' });
        this.deleteAccountLink = page.locator('a', { hasText: 'Delete Account' });
    }
}
