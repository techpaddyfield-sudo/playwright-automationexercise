import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.base';


export class AccountCreatedPage extends BasePage {
    readonly accountCreatedHeader: Locator;
    readonly continueButton: Locator;
    readonly accountDeletedHeader: Locator;
    readonly continueAfterDeleteButton: Locator;

    constructor(page: Page) {
        super(page);
        this.accountCreatedHeader = page.locator('h2[data-qa="account-created"]');
        this.continueButton = page.locator('a[data-qa="continue-button"]');
        this.accountDeletedHeader = page.locator('h2[data-qa="account-deleted"]');
        this.continueAfterDeleteButton = page.locator('a[data-qa="continue-button"]');
    }
}
