import { test as base, expect } from '@playwright/test';
import { AppPages } from '../pages/app.pages';
import { createDefaultUser, TestUser } from '../test-data/user-data';


type MyFixtures = {
    app: AppPages;
    user: TestUser;
};

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        const appPages = new AppPages(page);
        await use(appPages);
    },

    user: async ({ }, use) => {
        const user = createDefaultUser();
        await use(user);
    },
});

export { expect };
