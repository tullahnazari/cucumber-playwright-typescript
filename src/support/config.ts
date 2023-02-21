import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  headless: false,
  slowMo: 0,
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream',
    '--start-maximized',
  ],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const config = {
  screenshot: 'only-on-failure',
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: 'https://www.gravie.com/',
};
