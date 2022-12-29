# Testing 

## Table of Contents   
* [Manual Testing](#manual-testing)
* [Lighthouse](#lighthouse)
* [Browser Compatibility](#browser-compatibility)
* [Bugs](#bugs)

## Manual Testing

### Header
* Expected
  * The header should be located at the top of the page and the text of both elements, within the header, should maintain good contrast with the background image on all devices and screen sizes.
  * On devices with a screen width of 768px or smaller, the font size of the h1 and p elements should reduce; reducing further at the screen width break points of 480px and 339px. 

* Testing
  * The header was tested on a laptop with a screen width of greater than 768px in order to verify that the font size and text/background contrast was sufficent. 
  * Chrome DevTools was used to simulate mobile devices and to check for reactiveness.
    <details><summary>Header Testing</summary>
      <img src="">
    </details>

* Result
  * The heading responded as expected in all of the above testing.
  * The header is located at the top of the page and the text of both elements, within the header, maintain good contrast with the background image on all devices and screen sizes.
  * On devices with a screen width of 768px or smaller, the font size of the h1 and p elements reduce in size as expected; reducing further at the screen width break points of 480px and 339px. 

&nbsp;

### 8 Ball

  * Expected
    * The 8 Ball should be located centrally below the header and consist of an outer black circle and an inner white circle. The holding text should be a black number "8". 
    * A glow effect should be visable around the outer edge of the black circle which blends well with the background image.
    * On devices with a screen width of 768px or smaller, the 8 ball, and text within, should reduce in size; reducing further at the screen width break points of 480px and 339px. 

  * Testing
    * The 8 Ball was tested on a laptop with a screen width of greater than 768px in order to verify that the size and contrast with the background image was sufficent. 
    * Chrome DevTools was used to simulate mobile devices and to check for reactiveness.
    * The 8 Ball was checked in both portrait and landscape orientations on mobile devices to ensure that it continued to function sufficently well.
      <details><summary>8 Ball Testing</summary>
        <img src="">
      </details>

  * Result
    * The 8 Ball responded as expected in all of the above testing.
    * All content was horizontally aligned to the center of the page and reactive to various devices and screen sizes.
    * A glow effect is visable around the outer edge of the black circle and blends well with the background image.
    * The 8 Ball functions well on mobile devices in both portrait and landscape orientation.

&nbsp;

### 8 Ball Animation

  * Expected
    * When a user submits a valid question, using either the enter key or "Shake!" button, a 1 second animation should shake the 8 Ball from side-to-side.
    * When the animation has ended, an answer should be displayed, at the center of the 8 ball, for 2 seconds.
    * The 8 Ball should then return to its default state.  

  * Testing
    * A valid question was submitted to trigger the 8 ball.
    * The 8 Ball animation was checked in both portrait and landscape orientations on mobile devices to ensure that it continued to function sufficently well.
      <details><summary>8 Ball Animation Testing</summary>
        <img src="">
      </details>

  * Result
    * When a valid question was submitted, the 8 Ball animation began as expected, lasting 1 second.
    * After the animation, an answer was displayed, at the center of the 8 Ball, for 2 seconds.
    * The 8 Ball then returned to its default state.
    * The 8 Ball animation functions well on mobile devices in both portrait and landscape orientation.

&nbsp;

### User Input

  * Expected
    * The user input should consist of a text input and a button element.
    * Placeholder text should be displayed, within the text input, prompting the user to submit a question.
    * The "Shake!" button should provide feedback when the user hovers over it or clicks on it, when used on a desktop device..
    * It should be possible to submit a valid question by either an 'enter' key press or by clicking on the "Shake!" button.
    * Once a valid question has been submitted, it should not be possible to submit a subsequent question until after the 8 Ball animation, and dispying of the answer text, has ended.
    * When the 8 Ball animation and dispying of the answer text have ended, the text input field should be cleared of the previous question.

  * Testing
    * A valid question was submitted using first the 'enter' key and subsequently by clicking on the "Shake!" button.
    * Attempts to resubmit a question were made while the 8 Ball animation was running and answer was being displayed.
    * The "Shake!" button was checked for feedback upon hover over and click events, when used on a desktop device.
      <details><summary>User Input Testing</summary>
        <img src="">
      </details>

  * Result
    * Placeholder text is displayed, within the text input, prompting the user to submit a question.
    * The "Shake!" button provides feedback when the user hovers over it or clicks on it, when used on a desktop device..
    * A valid question can be submitted by either an 'enter' key press or by clicking on the "Shake!" button. 
    * When a valid question is submitted, it is not be possible to submit a subsequent question until after the 8 Ball animation, and dispying of the answer text, has ended.
    * When the 8 Ball animation and dispying of the answer text end, the text input field is cleared of the previous question.
        
&nbsp;

### Error Message

  * Expected
    * When the user attempts to submit a question, without typing anything into the text input field, an error message should appear below the "Shake!" button, prompting them to ask a question.
    * The error message should disappear after 1.5 seconds.

  * Testing
    * Multiple attempts were made to submit an empty text input field using both the 'enter' key and by clicking on the "Shake!" button.
    * Testing was carried out across various devices and screen widths to ensure that the error message appeared as expected and that the text remained horizontally aligned to the center of the page while maintaining good contrast with the background image.
      <details><summary>Error Message Testing</summary>
        <img src="">
      </details>

  * Result
    * When a user attempted to submit a question, without typing anything into the text input field, an error message appears below the "Shake!" button, prompting them to ask a question.
    * The error message disappears after 1.5 seconds.
    * The error message appears as expected, on all devices and screen sizes, and the text remains horizontally aligned to the center of the page while maintaining good contrast with the background image.

&nbsp;

### Footer

  * Expected
    * The footer should be located at the bottom of the page and contain copyright text, aligned centrally.
    * The footer text should have good contrast with the background image.

  * Testing
    * The footer was tested for responsiveness on various screen sizes and devices using Chrome DevTools.
    * It was verified that the footer text maintained good contrast with the background image.
    * Testing was carried out across various devices and screen widths to ensure that the footer text remained horizontally aligned to the center of the page.
      <details><summary>Footer Testing</summary>
        <img src="">
      </details>

  * Result
    * The footer is located at the bottom of the page and contains the copyright text.
    * The footer text has good contrast is horizontally aligned to the center of the page on all devices and screen sizes.

&nbsp;

[Back to top &uarr;](#testing)

## Lighthouse
[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used to audit performance, accessibility, best practices and SEO across the website.

  * [Lighthouse Report: Home Page](/readme-files/lighthouse/lighthouse-report-index.pdf)
  * [Lighthouse Report: My Work Page](/readme-files/lighthouse/lighthouse-report-my-work.pdf)
  * [Lighthouse Report: Gallery Page](/readme-files/lighthouse/lighthouse-report-gallery.pdf)
  * [Lighthouse Report: Contact Me Page](/readme-files/lighthouse/lighthouse-report-contact-me.pdf)

&nbsp;

[Back to top &uarr;](#testing)

## Browser Compatibility

[LambdaTest](https://www.lambdatest.com/) was used to test the site across a number of browsers, including:

### Chrome: Windows
  <details><summary>Home Page</summary>
  <img src="readme-files/images/chrome_home.png" alt="Home page on Chrome browser">
  </details>
  <details><summary>My Work Page</summary>
  <img src="readme-files/images/chrome_work.png" alt="My Work page on Chrome browser">
  </details>
  <details><summary>Gallery Page</summary>
  <img src="readme-files/images/chrome_gallery.png" alt="Gallery page on Chrome browser">
  </details>
  <details><summary>Contact Me Page</summary>
  <img src="readme-files/images/chrome_contact.png" alt="Contact Me page on Chrome browser">
  </details>  
  
  &nbsp;

  ### Chrome: Android
  <details><summary>Home Page</summary>
  <img src="readme-files/images/android_home.png" alt="Home page on Chrome (Android) browser">
  </details>
  <details><summary>My Work Page</summary>
  <img src="readme-files/images/android_work.png" alt="My Work page on Chrome (Android) browser">
  </details>
  <details><summary>Gallery Page</summary>
  <img src="readme-files/images/android_gallery.png" alt="Gallery page on Chrome (Android) browser">
  </details>
  <details><summary>Contact Me Page</summary>
  <img src="readme-files/images/android_contact.png" alt="Contact Me page on Chrome (Android) browser">
  </details>

  &nbsp;

  ### Safari: MacOS
  <details><summary>Home Page</summary>
  <img src="readme-files/images/safari_home.png" alt="Home page on Safari browser">
  </details>
  <details><summary>My Work Page</summary>
  <img src="readme-files/images/safari_work.png" alt="My Work page on Safari browser">
  </details>
  <details><summary>Gallery Page</summary>
  <img src="readme-files/images/safari_gallery.png" alt="Gallery page on Safari browser">
  </details>
  <details><summary>Contact Me Page</summary>
  <img src="readme-files/images/safari_contact.png" alt="Contact Me page on Safari browser">
  </details>

  &nbsp;

  ### Safari: iOS
  <details><summary>Home Page</summary>
  <img src="readme-files/images/ios_home.png" alt="Home page on Safari (iOS) browser">
  </details>
  <details><summary>My Work Page</summary>
  <img src="readme-files/images/ios_work.png" alt="My Work page on Safari (iOS) browser">
  </details>
  <details><summary>Gallery Page</summary>
  <img src="readme-files/images/ios_gallery.png" alt="Gallery page on Safari (iOS) browser">
  </details>
  <details><summary>Contact Me Page</summary>
  <img src="readme-files/images/ios_contact.png" alt="Contact Me page on Safari (iOS) browser">
  </details>

  &nbsp;

  ### MS Edge: Windows
  <details><summary>Home Page</summary>
  <img src="readme-files/images/edge_home.png" alt="Home page on MS Edge browser">
  </details>
  <details><summary>My Work Page</summary>
  <img src="readme-files/images/edge_work.png" alt="My Work page on MS Edge browser">
  </details>
  <details><summary>Gallery Page</summary>
  <img src="readme-files/images/edge_gallery.png" alt="Gallery page on MS Edge browser">
  </details>
  <details><summary>Contact Me Page</summary>
  <img src="readme-files/images/edge_contact.png" alt="Contact Me page on MS Edge browser">
  </details>

  &nbsp;

  ### Firefox: Windows
  <details><summary>Home Page</summary>
  <img src="readme-files/images/moz_home.png" alt="Home page on Firefox browser">
  </details>
  <details><summary>My Work Page</summary>
  <img src="readme-files/images/moz_work.png" alt="My Work page on Firefox browser">
  </details>
  <details><summary>Gallery Page</summary>
  <img src="readme-files/images/moz_gallery.png" alt="Gallery page on Firefox browser">
  </details>
  <details><summary>Contact Me Page</summary>
  <img src="readme-files/images/moz_contact.png" alt="Contact Me page on Firefox browser">
  </details>

  &nbsp;

  ### Opera: Windows
  <details><summary>Home Page</summary>
  <img src="readme-files/images/opera_home.png" alt="Home page on Opera browser">
  </details>
  <details><summary>My Work Page</summary>
  <img src="readme-files/images/opera_work.png" alt="My Work page on Opera browser">
  </details>
  <details><summary>Gallery Page</summary>
  <img src="readme-files/images/opera_gallery.png" alt="Gallery page on Opera browser">
  </details>
  <details><summary>Contact Me Page</summary>
  <img src="readme-files/images/opera_contact.png" alt="Contact Me page on Opera browser">
  </details>

&nbsp;

[Back to top &uarr;](#testing)

## Bugs

### Navbar/Hamburger Menu
  During testing of the navigation bar, it was noted that while the navigation menu collapsed into a hamburger menu, on mobile devices, it was not displaying the drop-down menu upon clicking. After much troubleshooting it was discovered that the lack of bootstrap JavaScript links was the cause of this issue. Once the requisite links were included, as shown below, the hamburger drop-down menu responded as expected.

  ```
  <script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"
  ></script>

  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"
  ></script>

  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"
  ></script>
  ```

  <details><summary>Navbar Bug Screenshot</summary>
  <img src="readme-files/images/navbar-bug.gif">
  </details>

  &nbsp;

### Callout Avatar/Headings
  When positioning the avatar image and headings within the callout banner, the contrast with the background image was taken into consideration; as when the bottom of the image overlaps with the heading, it causes contrast issues. Additionally, the background image was set to occupy the entire viewport. The positioning was initially set using absolute units, however, during testing it was noted that when a mobile device was changed from portrait to landscape orientation, it caused an overlap and made the headings difficult to read. After much trial and error, the relative units, as shown below, were used allowing the avatar image and headings to be responsive to all viewport sizes and orientations while maintaining good contrast with the background image.

  ```
  .callout {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6vmin;
  }

  .avatar {
    width: 40vmin;
    height: 40vmin;
    border-radius: 50%;
    margin-bottom: 2vmin;
  }

  .callout hr {
    background-color: #fff;
    margin: 1.25vmin;
  }

  ...

  #callout-main-heading {
    font-size: 7vmin;
    font-weight: 700;
    margin: 1vmin;
  }

  #callout-sub-heading {
    font-size: 5vmin;
    font-weight: 500;
    margin: 1vmin;
  }
  ```

  <details><summary>Callout Bug Screenshot</summary>
  <img src="readme-files/images/callout-bug.gif">
  </details>

  &nbsp;

### Footer Social Media Links
  When testing the social media links in the footer, it was noted that small black dots were appearing between the social media icons upon hover over. After unsuccessfully troubleshooting this problem, a post was placed on the slack project-milestone-1 page where user jo_ci highlighted that it was being caused by the < a > element. This element was targeted, as shown below, which resolved the issue. 

  ```
  .social-networks a:hover {
  text-decoration: none;
  }
  ```

  <details><summary>Footer Bug Screenshot</summary>
  <img src="readme-files/images/footer-bug.gif">
  </details>

&nbsp;

[Back to top &uarr;](#testing)

[Back to README.md doc](README.md)