import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.base';


export interface AccountDetails {
    title: 'Mr' | 'Mrs';
    password: string;
    day: string;
    month: string;
    year: string;
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
    newsletter?: boolean;
    specialOffers?: boolean;
}

export class AccountInfoPage extends BasePage {
    readonly enterAccountInfoHeader: Locator;
    readonly mrRadio: Locator;
    readonly mrsRadio: Locator;
    readonly passwordInput: Locator;
    readonly daySelect: Locator;
    readonly monthSelect: Locator;
    readonly yearSelect: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly address1Input: Locator;
    readonly address2Input: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileInput: Locator;

    readonly createAccountButton: Locator;

    constructor(page: Page) {
        super(page);

        this.enterAccountInfoHeader = page.getByRole('heading', {
            name: 'Enter Account Information',
            exact: false,
        });

        this.mrRadio = page.locator('#id_gender1');
        this.mrsRadio = page.locator('#id_gender2');
        this.passwordInput = page.locator('input[data-qa="password"]');
        this.daySelect = page.locator('select[data-qa="days"]');
        this.monthSelect = page.locator('select[data-qa="months"]');
        this.yearSelect = page.locator('select[data-qa="years"]');

        this.newsletterCheckbox = page.locator('#newsletter');
        this.offersCheckbox = page.locator('#optin');

        this.firstNameInput = page.locator('input[data-qa="first_name"]');
        this.lastNameInput = page.locator('input[data-qa="last_name"]');
        this.companyInput = page.locator('input[data-qa="company"]');
        this.address1Input = page.locator('input[data-qa="address"]');
        this.address2Input = page.locator('input[data-qa="address2"]');
        this.countrySelect = page.locator('select[data-qa="country"]');
        this.stateInput = page.locator('input[data-qa="state"]');
        this.cityInput = page.locator('input[data-qa="city"]');
        this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
        this.mobileInput = page.locator('input[data-qa="mobile_number"]');

        this.createAccountButton = page.locator('button[data-qa="create-account"]');
    }

    async fillAccountDetails(details: AccountDetails) {
        if (details.title === 'Mr') {
            await this.mrRadio.check();
        } else {
            await this.mrsRadio.check();
        }

        await this.passwordInput.fill(details.password);
        await this.daySelect.selectOption(details.day);
        await this.monthSelect.selectOption(details.month);
        await this.yearSelect.selectOption(details.year);

        if (details.newsletter) {
            await this.newsletterCheckbox.check();
        }
        if (details.specialOffers) {
            await this.offersCheckbox.check();
        }

        await this.firstNameInput.fill(details.firstName);
        await this.lastNameInput.fill(details.lastName);
        await this.companyInput.fill(details.company);
        await this.address1Input.fill(details.address1);
        await this.address2Input.fill(details.address2);
        await this.countrySelect.selectOption(details.country);
        await this.stateInput.fill(details.state);
        await this.cityInput.fill(details.city);
        await this.zipcodeInput.fill(details.zipcode);
        await this.mobileInput.fill(details.mobile);
    }

    async submitCreateAccount() {
        await this.createAccountButton.click();
    }
}
