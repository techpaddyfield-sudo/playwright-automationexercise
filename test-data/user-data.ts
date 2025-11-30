import { AccountDetails } from "../pages/account-infopage";


export interface TestUser {
    name: string;
    email: string;
    accountDetails: AccountDetails;
}

function uniqueEmail(prefix: string = 'auto_user'): string {
    return `${prefix}_${Date.now()}@example.com`;
}

export function createDefaultUser(): TestUser {
    const firstName = 'Tech';
    const lastName = 'Paddy';

    const accountDetails: AccountDetails = {
        title: 'Mr',
        password: 'Password@123',
        day: '10',
        month: '5',
        year: '1990',
        firstName,
        lastName,
        company: 'TCS',
        address1: 'Street 1, Some Area',
        address2: 'Near Metro Station',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Chennai',
        zipcode: '600001',
        mobile: '9876543210',
        newsletter: true,
        specialOffers: true,
    };

    return {
        name: `${firstName} ${lastName}`,
        email: uniqueEmail('techpaddy'),
        accountDetails,
    };
}
