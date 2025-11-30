import { expect, test } from "../fixtures/baseTest";


test.describe('Test Case 1: Register User - Fixture + App + POM', () => {
    test('Register, login and delete account', async ({ app, user, page }) => {
        // app.home, app.signupLogin, app.accountInfo, app.accountCreated, app.header

        // 1–3. Launch browser, navigate, verify home page
        await app.home.openHome();
        await app.home.expectUrlContains(/automationexercise\.com/);
        await expect(app.home.homeMainSection).toBeVisible();

        // 4–5. Go to Signup / Login
        await app.home.signupLoginLink.click();
        await expect(app.signupLogin.newUserHeader).toBeVisible();

        // 6–7. Enter name/email & click signup
        await app.signupLogin.signupNewUser(user.name, user.email);

        // 8. Verify 'ENTER ACCOUNT INFORMATION'
        await expect(app.accountInfo.enterAccountInfoHeader).toBeVisible();

        // 9–12. Fill details and create account
        await app.accountInfo.fillAccountDetails(user.accountDetails);
        await app.accountInfo.submitCreateAccount();

        // 14. Verify 'ACCOUNT CREATED!'
        await expect(app.accountCreated.accountCreatedHeader).toHaveText('Account Created!');

        // 15. Click 'Continue'
        await app.accountCreated.continueButton.click();

        // Handle possible overlay/ads
        await page.waitForTimeout(1000);

        // 16. Verify 'Logged in as username'
        await expect(app.header.loggedInAsLink).toContainText(user.name);

        // 17. Click 'Delete Account'
        await app.header.deleteAccountLink.click();

        // 18. Verify 'ACCOUNT DELETED!' and click 'Continue'
        await expect(app.accountCreated.accountDeletedHeader).toHaveText('Account Deleted!');
        await app.accountCreated.continueAfterDeleteButton.click();
    });
});
