// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Playwright Configuration for Tricentis Demo Web Shop
 * SQE Coursework - Lakindu De Silva
 */
module.exports = defineConfig({
  testDir: "./automation/tests",

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,

  /* Single worker for sequential execution */
  workers: 1,

  /* Reporter to use */
  reporter: [["html", { outputFolder: "./automation/reports" }], ["list"]],

  /* Global timeout */
  timeout: 60000,

  /* Shared settings for all the projects below */
  use: {
    /* Base URL for the demo web shop */
    baseURL: "https://demowebshop.tricentis.com",

    /* Collect trace when retrying the failed test */
    trace: "on-first-retry",

    /* Screenshot on failure */
    screenshot: "only-on-failure",

    /* Video on failure */
    video: "retain-on-failure",

    /* Viewport size */
    viewport: { width: 1920, height: 1080 },

    /* Action timeout */
    actionTimeout: 15000,

    /* Navigation timeout */
    navigationTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* Output folder for test artifacts */
  outputDir: "./automation/test-results",
});
