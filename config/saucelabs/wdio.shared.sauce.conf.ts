import { config } from '../wdio.shared.conf';

// ========
// Services
// ========
config.services = (config.services ? config.services : []).concat([
    [
        'sauce',
        {
            // For Sauce Options see https://webdriver.io/docs/sauce-service#sauce-service-options
        },
    ],
]);

// =================
// Service Providers
// =================
config.hostname = 'ondemand.us-west-1.saucelabs.com';
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.port = 443;
config.baseUrl = 'wd/hub';
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs Virtual cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
//config.region = process.env.REGION || 'us';
// Increase for real device support
//config.connectionRetryTimeout = 180000;

export default config;