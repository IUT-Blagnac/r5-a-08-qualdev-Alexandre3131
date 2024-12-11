import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { execSync } from 'child_process';
import fs from 'fs';

let phd;
let reviewer;

Given('A PhD thesis to review', function () {
  phd = 'PhD.pdf';
});

Given('a reviewer Bruel', function () {
  reviewer = 'Bruel';
});

Then("The thesis should cite the reviewer's work", function () {
  console.log(`Looking for ${reviewer} in the file: ${phd}`);
  try {
    const result = execSync(`pdfgrep ${reviewer} ${phd}`, { stdio: 'pipe' });
    console.log(result.toString());
    expect(result.toString()).to.not.be.empty;
  } catch (error) {
    console.error("Reviewer not cited.");
    expect.fail("Reviewer not cited in the thesis.");
  }
});

Then('The PhD thesis should be checked against plagiarism', function () {
  console.log('Check if https://www.compilatio.net/sso/cas/ut2/ has been used');
  const fileExists = fs.existsSync('compilatio-value.png');
  expect(fileExists).to.be.true;
});
