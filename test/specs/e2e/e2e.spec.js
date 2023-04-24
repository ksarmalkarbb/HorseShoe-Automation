const HomePage = require("../../pages/home.page");
const SubscriptionPage = require("../../pages/subscription.page");

describe('End to End test', async () => {
    
    it(`User should be able to see the homepage and see index strip`, async () => {
        await driver.pause(5000);
        await SubscriptionPage.closeSubscription();
        await driver.pause(5000);

        await HomePage.scrollToIndexStrip();
    });
});
