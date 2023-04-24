var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  user: process.env.BROWSERSTACK_USERNAME || 'ksarmalkar_xsNtUj',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'nePzDoPbAoKrDLWpvQRx',

  specs: [
    "./test/specs/e2e/e2e.spec.js",
    // "./test/specs/login/*.spec.js",
    // "./test/specs/offers/*.spec.js",
    // "./test/specs/user/*.spec.js",
    // "./test/specs/cart/*.spec.js",
  ],

  capabilities: [
    {
      maxInstances: 2,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID || 'bs://f79d95730a7a3f5321b3f099ce18f4b486eb42a8',
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      maxInstances: 2,
      device: "iPhone 8",
      os_version: "15",
      app: process.env.BROWSERSTACK_ANDROID_APP_ID || 'bs://a5aa30a1dab4e20755bde713f3c4264a36d87255',
      autoGrantPermissions: true,
      platformName: "iOS",
      'browserstack.debug': true,
      'browserstack.resignApp': false,
      'browserstack.autoAcceptAlerts': true,
      'browserstack.autoGrantPermissions': true,
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
