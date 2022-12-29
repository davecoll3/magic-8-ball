# Testing 

## Table of Contents   
* [Manual Testing](#manual-testing)
* [Lighthouse](#lighthouse)
* [Browser Compatibility](#browser-compatibility)
* [Bugs](#bugs)

## Manual Testing

### Navbar
* Expected
  * The navbar should be located at the top of the page and disappear when the user scrolls down the page.
  * On devices with a screen width of 576px and greater, the navbar should display navigation links for each of the website pages and highlight the current page in white text.
  * When clicked on, navigation links should bring the user to the relevant section of the website.
  * On laptops and desktops, the user should be provided with feedback when hovering over links to other pages as the text color changes to a lighter shade of grey.
  * On mobile devices, with a screen width of 575px or below, the navigation menu should collapse into a burger icon. All navigation links should drop down when the burger icon is clicked and the current page should be highlighted in white text.

* Testing
  * The navbar was tested on a laptop with a screen width of greater than 576px in order to verify that the navigation links were displayed across the top of the page with the current page highlighted in white text. It was also verified that the navigation links changed color by hovering over them with the cursor.
  * Chrome DevTools was used to simulate mobile devices and to check for reactiveness. A device with a screen width of less than 575px was selected to ensure that the navigation menu collapsed down into a burger icon. This icon was then selected to ensure that the navigation links were revealed and the current page was highlighted in white text.
    <details><summary>Navbar Testing</summary>
      <img src="readme-files/images/navbar-testing.gif">
    </details>

* Result
  * The navbar responded as expected in all of the above testing.
  * The navbar was found at the top of the page and disappeared when the user scrolled down the page.
  * On devices with a screen width of greater than 576px, navigation links were displayed in a row with the current page highlighted in white text. 
  * On laptops and desktops, the navigation links changed color upon hovering over them with the cursor.
  * On mobile devices, with a screen width of 575px or below, the navigation menu collapsed into a burger icon. All navigation links were revealed when the burger icon was clicked and the current page was highlighted in white text.

&nbsp;

### Callout Banner

  * Expected
    * The callout banner should display an avatar image of the site owner, a main heading (their name), and a subheading (their profession/service offered).
    * The background image should provide sufficient contrast and not interfere with the visibility of the image and heading elements.
    * All content should be horizontally aligned to the center of the page and be reactive to various devices and screen sizes.

  * Testing
    * The callout banner was tested for responsiveness on various screen sizes and devices using Chrome DevTools.
    * Testing was carried out across various devices and screen widths to ensure that the heading and text remained horizontally aligned to the center of the page.
    * The background was checked in both portrait and landscape orientations on mobile devices to ensure that it did not interfere with the visibility of the image and heading elements.
      <details><summary>Callout Banner Testing</summary>
        <img src="readme-files/images/callout-testing.gif">
      </details>

  * Result
    * The callout banner responded as expected in all of the above testing.
    * All content was horizontally aligned to the center of the page and reactive to various devices and screen sizes.
    * The background image provided sufficient contrast and did not interfere with the visibility of the image and heading elements.

&nbsp;

### About Me Section

  * Expected
    * The heading and text on the about me section should be black with a white background and sit directly under the callout banner.
    * All content should be horizontally aligned to the center of the page and be reactive to various devices and screen sizes.

  * Testing
    * The about me section was tested for responsiveness on various screen sizes and devices using Chrome DevTools.
    * Testing was carried out across various devices and screen widths to ensure that the heading and text remained horizontally aligned to the center of the page.
      <details><summary>About Me Section Testing</summary>
        <img src="readme-files/images/about-me-testing.gif">
      </details>

  * Result
    * The about me section responded as expected in all of the above testing.
    * All content was horizontally aligned to the center of the page and reactive to various devices and screen sizes.

&nbsp;

### Footer

  * Expected
    * The footer should be located at the bottom of the page and contain social media links/icons above copyright text.
    * The social media links/icons should be a shade of grey with a white background, while the copyright text should be a dark shade of grey with a light grey background.
    * When clicked on, social media links should send the user to the relevant website, opening in a new tab.
    * On laptops and desktops, the user should be provided with feedback when hovering over social media links/icons as the text color changes to a lighter shade of grey.

  * Testing
    * The footer was tested for responsiveness on various screen sizes and devices using Chrome DevTools.
    * It was verified that the social media links/icons changed color by hovering over them with the cursor.
    * All social media links/icons were clicked on to ensure that they opened the relevant link in a new tab.
    * Testing was carried out across various devices and screen widths to ensure that the social media links/icons and copyright text remained horizontally aligned to the center of the page.
      <details><summary>Footer Testing</summary>
        <img src="readme-files/images/footer-testing.gif">
      </details>

  * Result
    * The footer responded as expected in all of the above testing.
    * All content was horizontally aligned to the center of the page and reactive to various devices and screen sizes.
    * On laptops and desktops, the social media links/icons changed color upon hovering over them with the cursor.
    * All social media links/icons opened the relevant link in a new tab.
        
&nbsp;

### My Work Page

  * Expected
    * The heading and text on the my work section should be black with a white background and sit directly under the navbar.
    * The images should display directly underneath their relevant subheadings and text.
    * All images should be displayed in a single row on devices with a screen width of greater than 1199px. On devices with a screen width of between 1199px and 768px, the images drop down onto a second line. On devices with a screen width smaller than 768px the images display in a single column one on top of the other.

  * Testing
    * The my work section was tested for responsiveness on various screen sizes and devices using Chrome DevTools.
    * Testing was carried out across various devices and screen widths to ensure that the images reacted as expected, displaying in rows of three, two, and a single column depending on screen width, and that headings and text remained horizontally aligned to the center of the page.
      <details><summary>My Work Section Testing</summary>
        <img src="readme-files/images/my-work-testing.gif">
      </details>

  * Result
    * The my work section responded as expected in all of the above testing.
    * All content was horizontally aligned to the center of the page and reactive to various devices and screen sizes.
    * All images reacted as expected, displaying in rows of three, two, and a single column depending on screen width.

&nbsp;

### Gallery

  * Expected
    * The heading on the gallery section should be black with a white background and sit directly under the navbar.
    * All content should be horizontally aligned to the center of the page and be reactive to various devices and screen sizes.
    * The gallery images should be displayed in rows of three on devices with a screen width of greater than 1199px. On devices with a screen width of between 1199px and 768px, the images are displayed in rows of two. On devices with a screen width smaller than 768px the images display in a single column one on top of the other.


  * Testing
    * The gallery section was tested for responsiveness on various screen sizes and devices using Chrome DevTools.
    * Various devices and screen widths were simulated to ensure that the gallery images reacted as expected, displaying in rows of three, two, and a single column depending on screen width, and that the heading remained horizontally aligned to the center of the page.
      <details><summary>Gallery Section Testing</summary>
        <img src="readme-files/images/gallery-testing.gif">
      </details>

  * Result
    * The gallery section responded as expected in all of the above testing.
    * All content was horizontally aligned to the center of the page and reactive to various devices and screen sizes.
    * Gallery images reacted as expected, displaying in rows of three, two, and a single column depending on screen width. 

&nbsp;

### Contact Me

  * Expected
    * The heading and text on the contact me section should be black with a white background and sit directly under the navbar.
    * The contact form should consist of three text boxes (Name, Email & Project Description) and a submit/send button. The background image should provide sufficient contrast and not interfere with the visibility of the heading and form elements.
    * All text boxes should contain placeholder text stating what their content should be and provide feedback if a submission attempt is made by a user who has not entered text in all three; the email box should only accept submissions containing the '@' symbol. 
    * All content should be horizontally aligned to the center of the page and be reactive to various devices and screen sizes.
    * On laptops and desktops, the user should be provided with feedback when hovering over the submit/send button as the color changes to a darker shade of grey.

  * Testing
    * The contact me section was tested for responsiveness on various screen sizes and devices using Chrome DevTools.
    * Attempts were made to submit incomplete and partially complete forms, as well as submissions that did not contain a '@' symbol in the email field, to verify that the form would only accept a completed form with the relevant fields completed correctly.
    * It was also verified that the submit/send button changed color by hovering over it with the cursor.
    * The background was checked in both portrait and landscape orientations on mobile devices to ensure that it did not interfere with the visibility of the heading and form elements.
      <details><summary>Contact Me Section Testing</summary>
        <img src="readme-files/images/contact-me-testing.gif">
      </details>

  * Result
    * The contact me section responded as expected in all of the above testing.
    * All content was horizontally aligned to the center of the page and reactive to various devices and screen sizes.
    * The form could not be submitted until all text fields had been complete and feedback was provided if a text field was empty; the email field only accepted submissions containing a '@' symbol and provided feedback when this was lacking.
    * On laptops and desktops, the submit/send button changed color upon hovering over it with the cursor.
    * The background image provided sufficient contrast and did not interfere with the visibility of the heading and form elements.

&nbsp;

### Back to Top Button

  * Expected
    * The back to top button should be found in the bottom right corner of the page and bring the user back to the top of the page when clicked on.
    * The back to top button should be unintrusive and semi transparent.
    * On laptops and desktops, the user should be provided with feedback when hovering over the back to top button as the color changes to a darker shade of grey.

  * Testing
    * The back to top button was tested by scrolling down on all site pages and clicking on it to return to the top of the page; Chrome DevTools was used to simulate mobile devices.
    * It was also verified that the back to top button changed color by hovering over it with the cursor.
      <details><summary>Back to Top Button Testing</summary>
        <img src="readme-files/images/back-to-top-testing.gif">
      </details>

  * Result
    * The back to top button responded as expected in all of the above testing.
    * The back to top button was present and brought the user back to the top of the page on all pages, screen sizes and devices. 
    * On laptops and desktops, the back to top button changed color upon hovering over it with the cursor.

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