import config from './wdio.shared.sauce.conf';
const buildName = `Uplink Demo App, iOS: ${new Date().getTime()}`;

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    // iOS iPhone 15.4
    {
        // The defaults you need to have in your config
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 11 Simulator',
        'appium:platformVersion': '15.4',
        // The path to the app
        'appium:app': 'storage:filename=Runner.zip',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        //'appium:noReset': true,
        //'appium:newCommandTimeout': 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        //'appium:language': 'en',
        //'appium:locale': 'en',
        // Sauce Labs specific options
        'sauce:options':{
            // Group builds by build name
            build: buildName,
            // Name
            name: 'Uplink Satellite Tests',
            appiumVersion: '1.22.3',
        },
    },
];

config.maxInstances = 25;

exports.config = config;