const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// const ctaImg = document.getElementById('#cta-img');
// ctaImg.src = siteContent['cta']['img-src'];

// Navigation manipulation
const nav = document.querySelectorAll('nav a');
nav[0].textContent = siteContent.nav['nav-item-1'];
nav[1].textContent = siteContent.nav['nav-item-2'];
nav[2].textContent = siteContent.nav['nav-item-3'];
nav[3].textContent = siteContent.nav['nav-item-4'];
nav[4].textContent = siteContent.nav['nav-item-5'];
nav[5].textContent = siteContent.nav['nav-item-6'];

// CTA

const cta = document.querySelector('.cta-text');

const ctaButton = cta.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

const ctaH1 = cta.querySelector('h1');
ctaH1.textContent = siteContent.cta.h1;


// Main Content Headers

const h4Headers = document.querySelectorAll('h4');

h4Headers[0].textContent = siteContent['main-content']['features-h4'];
h4Headers[1].textContent = siteContent['main-content']['about-h4'];
h4Headers[2].textContent = siteContent['main-content']['services-h4'];
h4Headers[3].textContent = siteContent['main-content']['product-h4'];
h4Headers[4].textContent = siteContent['main-content']['vision-h4'];























// Things I tried that didn't work

// const content = document.querySelectorAll('div');


// content[0].setAttribute('h4' , siteContent['main-content']['features-h4']);
// content[1].setAttribute('p', siteContent['main-content']['features-content']);
// content[2].setAttribute('h4' , siteContent['main-content']['features-h4']);
// content[3].setAttribute('p', siteContent['main-content']['features-content']);
// content[4].setAttribute('h4' , siteContent['main-content']['features-h4']);
// content[5].setAttribute('p', siteContent['main-content']['features-content']);
// content[6].setAttribute('h4' , siteContent['main-content']['features-h4']);
// content[7].setAttribute('p', siteContent['main-content']['features-content']);


