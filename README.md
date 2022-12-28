# The Magic 8 Ball

The Magic 8 Ball is used for fortune telling or seeking advice. This is a fun website where users can ask a question and receive a response that affirms or rejects their query; it can also provide a neutral response.

The primary technologies used to form the basis of this website are the coding languages HTML5, CSS3 and JavaScript ES6 which were complemented by use of the Bootstrap framework.

[View the live site here](https://davecoll3.github.io/magic-8-ball/)

&nbsp;

![Responsive Mockup](/readme-files/images/am-i-responsive.webp)

&nbsp;

# Table of Contents
  * [UX and UI](#ux-and-ui)
    * [Research](#research)
    * [Owner Goals](#owner-goals)
    * [User Stories](#user-stories)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
    * [Design](#design)
    * [Wireframes](#wireframes)
  * [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to be Implemented in the Future](#features-to-be-implemented-in-future)
  * [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Frameworks and Libraries](#frameworks-and-libraries)
    * [Testing and Validation Tools](#testing-and-validation-tools)
  * [Testing](#testing)
  * [Validation](#validation)
    * [HTML](#html)
    * [CSS](#css)
    * [Color Contrast](#color-contrast)
  * [Deployment](#deployment)
    * [Forking the GitHub Repository](#forking-the-github-repository)
    * [Making a Local Clone](#making-a-local-clone)
  * [Credits](#credits)

&nbsp;

# UX and UI

## Research

Research for the creation of this site was carried out by searching for various forms and variations on the 

* [Origami Fortune Teller](https://www.horoscope.com/us/games/divination/game-origami-fortune-teller.aspx)
* [Ask the Crystal Ball](https://www.crystalballfree.com/)
* [Magic 8 Ball](https://legomenon.com/ask-magic-8-ball-game-online.html)
* [Fortune Cookie](https://fortune-telling-online.com/readings/free-oracles-and-games/fortune-cookie/)
* [Cuppy Fortune Teller](https://www.buzzfeed.com/morgansloss1/this-interactive-fortune-telling-quiz-will-predict-your)

&nbsp;

## Owner Goals

  * Create a short but fun advice/fortune telling game.
  * To generate interest in their games.
  * Potentially generate enough traffic to attract advertisers.

&nbsp;

## User Stories

### First Time Visitor

  * As a first time user, I want to understand the main purpose of the site.
  * As a first time user, I want to easily understand how the game works.
  * As a first time user, I want feedback if I am doing something wrong.

### Returning Visitor

  * As a returning user, I want to be easily able to replay the game.
  * As a returning user, I want to be able to quickly identify who produced the website/game.

&nbsp;

## User Requirements and Expectations

### Requirements

  * Familiar and intuitive design that negates any learning curve.
  * A reactive site that is user friendly and well presented on all types of device and screen sizes.
  * An easy and logical means of playing the game.
  * Adequate levels of color contrast across the site that presents content in an accessible and easy to read manner.
  * Appealing graphics and animations that enhance the user experience.

### Expectations

  * Feedback when interacting with the game that is also instructive. 
  * Clicking on the "Shake!" button should result in a shake effect on the Magic 8 Ball.
  * A response should be displayed once a question has been submitted.

&nbsp;

## Design

### Imagery
* An image of the Orion Nebula was used to create a visual link to mysticism that is intrinsically conected to space and space iconography. It has a vibrant, colourful aesthetic that is visually appealing. 

### Color Scheme

* Black and white colours were used on the Eight Ball as is traditional and white text was used to provide good contrast; adhering to the WCAG 2.1 contrast guidelines. Magenta, cyan, and white was used to help blend the Eight Ball into the background image. In keeping with this theme, various shades of purple were used on the "Shake!" button and on the back area of the Eight Ball itself to provide some shading and make it seem less two dimensional.

### Fonts

* The Google font of Nunito was chosen as it is a well balanced typeface with a slightly rounded edge which fits in with the overall look of the site, providing good definition without detracting form the imagary.

### Structure

* This is a single-product website that does not require any navigation links. In the future, this site could be incorporated into a multi-page website containing additional games or content.

&nbsp;

## Wireframes

* Balsamiq Wireframes was used to create the wireframes for this site. 
Wireframes for mobile, tablet, and desktop can be found below:

  ### [Mobile Wireframe](/readme-files/wireframes/mobile-device.pdf)

  ### [Tablet Wireframe](/readme-files/wireframes/tablet.pdf)

  ### [Desktop Wireframe](/readme-files/wireframes/desktop.pdf)

&nbsp;

[Back to top &uarr;](#the-magic-8-ball)

# Features 

## Existing Features

* Navigation Bar

  * Featured on all four pages, the full responsive navigation bar includes links to the Home, My Work, Gallery and Sign Up pages and is identical on each page to allow for easy navigation.
  * This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 
  * The user's current location is indicated by white text in the menu list items with the other items in a muted shade of grey; menu items are also highlighted when hovering over them, adding a responsive element.
  * The navigation menu will collapse into a burger icon on mobile screens allowing for a more user friendly and aesthetically pleasing experience.

    ![Nav Bar](/readme-files/images/nav-bar.png)

* Callout Banner

  * The callout banner serves to introduce the user to the site owner with an eye catching avatar and background image used to grab their attention.  

    ![Landing Page](/readme-files/images/callout-banner.png)

* About Me Section

  * The about me section will further introduce the user to the site owner, informing them of their skills and education background. 

    ![About Me](/readme-files/images/about-me.png)

* The Footer

  * The footer section includes links to the relevant social media sites for the site owner; all links open to a new tab to allow easy navigation for the user.     
  * The footer is valuable to the user as it encourages them to keep connected via social media.
  * There is also copyright information contained in the footer to remind the user that the site's content is not licence free.

    ![Footer](/readme-files/images/footer.png)

* The My Work Page

  * This page will allow the user to see some examples of the work already created by the site owner by describing and showcasing a varied selection of their work.

    ![My Work](/readme-files/images/my-work.png)

* Gallery

  * The gallery will provide the user with a variety of original illustrations created by the site owner.
  * This section is valuable to the user as it provides a clear representation of the various illustration styles used by the site owner. 

    ![Gallery](/readme-files/images/gallery.png)

* Contact Me

  * The contact me page will provide a form for the user to submit a message in order to make enquiries or request a commission. 
  * The user will be asked to submit their name, email address and a message describing their proposal. 

    ![Contact Me](/readme-files/images/contact-me.png)

* Back to Top Button

  * A floating back to top button was used to allow the user an easy means of returning to the nav bar, this is especially important for mobile devices where the content is stretched vertically.

     ![Back to Top Button](/readme-files/images/back-to-top-btn.png)

## Features to be Implemented in Future

  * Adding an isotope filter to the gallery page once I have a better understanding of JavaScript. This will allow users to more easily view illustrations that share a common theme or style.
  * Additionally, I would like to use JavaScript to better control the positioning of the back to top button; having it fade in as you scroll down the page.
  * An extra shop page that allows users to purchase items such as prints, cards and badges directly from the owner. 

&nbsp;

[Back to top &uarr;](#the-magic-8-ball)

# Technologies Used

## Languages
  * [HTML5](https://en.wikipedia.org/wiki/HTML5)
  * [CSS3](https://en.wikipedia.org/wiki/CSS)

## Frameworks and Libraries

  * [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
    * Bootstrap v4.1.3 was used to help style and implement Java elements to the site, namely on the nav bar. 
  * [Font Awesome](https://fontawesome.com/)
    * The Font Awesome v6.1.2 library was used to supply the social media icons, on the site footer, and the chevron icon used for the back to top button.
  * [Google Fonts](https://fonts.google.com/)
    * Google Fonts was used to import the 'Barlow' font used throughout the site.

## Testing and Validation Tools
  * [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    * Google Chrome DevTools was used to carry out manual testing on the website and to simulate mobile devices.
  * [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input)
    * The W3C Markup Validation Service was used to check the markup validity of the html code. 
  * [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_uri)
    * The W3C CSS Validation Service was used to validate the css code. 
  * [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
    * Lighthouse was used to audit performance, accessibility, best practices and SEO across the website.
  * [a11y](https://color.a11y.com/)
    * The a11y Color Contrast Accessibility Validator was used to verify that the colour contrast across the site adhered to the WCAG 2.1 Guidelines.
  * [LambdaTest](https://www.lambdatest.com/)
    * LambdaTest was used to perform cross browser testing.

&nbsp;

[Back to top &uarr;](#the-magic-8-ball)

# Testing 

Testing information can be found in the [testing file][TESTING.md].

&nbsp;

[Back to top &uarr;](#the-magic-8-ball)

# Validation

## HTML
The [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) was used to validate the code.
All pages were successfully validated with no errors or warnings.

<details><summary>Home</summary>
<img src="readme-files/images/w3c-index.png" alt="Validation of Home page">
</details>

<details><summary>My Work</summary>
<img src="readme-files/images/w3c-my-work.png" alt="Validation of My Work page">
</details>

<details><summary>Gallery</summary>
<img src="readme-files/images/w3c-gallery.png" alt="Validation of Gallery page">
</details>

<details><summary>Contact Me</summary>
<img src="readme-files/images/w3c-contact-me.png" alt="Validation of Contact Me page">
</details>

&nbsp;

## CSS
The [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_uri) was used to validate the code.
No errors were found but four warnings were highlighted; as these related to the imported google fonts stylesheet and prefixes relating to different browsers, they are not of concern.

<details><summary>CSS Validation</summary>
<img src="readme-files/images/w3c-css.png" alt="Validation of CSS>
</details>

<details><summary>CSS Warnings</summary>
<img src="readme-files/images/w3c-css-warnings.png" alt="CSS validation warnings">
</details>

&nbsp;

## Color Contrast
The color contrast accessibility validator [a11y](https://color.a11y.com/) was used to verify that the colour contrast across the site adhered to the [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/).

<details>
<summary>Homepage</summary>

![Index Page](/readme-files/images/index-contrast-validation.png)
</details>

<details>
<summary>My Work Page</summary>

![My Work Page](/readme-files/images/my-work-contrast-validation.png)
</details>

<details>
<summary>Gallery Page</summary>

![Gallery Page](/readme-files/images/gallery-contrast-validation.png)
</details>

<details>
<summary>Contact Me Page</summary>

![Contact Me Page](/readme-files/images/contact-me-contrast-validation.png)
</details>

&nbsp;

[Back to top &uarr;](#the-magic-8-ball)

# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
  1. Log in to GitHub and locate the repository: [magic-8-ball](https://github.com/davecoll3/magic-8-ball).
  2. Once in the repository, navigate to the Settings tab at the top of the page.
  3. On the settings page, locate the Pages option on the left hand menu.
  4. Under the Build and deployment heading, navigate to the "Deploy from a branch" dropdown menu under the subheading Source; select master.
  5. Save your changes.
  6. After a few minutes, return to/refresh this page and a link will now be supplied at the top of the Pages section. 

The live link can be found [here](https://davecoll3.github.io/magic-8-ball/)

&nbsp;

## Forking the GitHub Repository

Forking the GitHub Repository makes a copy of the original repository on our GitHub account; allowing us to view and/or make changes without affecting the original repository and can be done by using the following steps.
  1. Log in to GitHub and locate the repository: [magic-8-ball](https://github.com/davecoll3/magic-8-ball).
  2. Once in the repository, navigate to the "Fork" button at the top right of the page; just above the settings button on the menu.
  3. You should now have a copy of the original repository in your GitHub account.

&nbsp;

## Making a Local Clone
  1. Log in to GitHub and locate the repository: [magic-8-ball](https://github.com/davecoll3/magic-8-ball).
  2. Under the repository name, click "Clone or download".
  3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
  4. Open Git Bash
  5. Change the current working directory to the location where you want the cloned directory to be made.
  6. Type `git clone` and then paste the URL you copied in Step 3.
  ```
  $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
  ```

  7. Press Enter. Your local clone will be created.

  ```
  $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
  > Cloning into `CI-Clone`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

&nbsp;

[Back to top &uarr;](#the-magic-8-ball)

# Credits 

## Content 

  * The icons in the footer and back to top button were taken from [Font Awesome](https://fontawesome.com/)
  * The Code Institute readme-template provided the basic structure for the readme.md file.

## Media

  * All of the images used across the site are original creations of Marine Wong Kwok Chuen and were used with her permission.

## Code

  * The CSS code for the gallery was taken from the LogRocket article [How to create a responsive image gallery with CSS flexbox](https://blog.logrocket.com/how-create-responsive-image-gallery-css-flexbox/) and is fully credited in the stylesheet.

  &nbsp;

  [Back to top &uarr;](#the-magic-8-ball)

[TESTING.md]: TESTING.md