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

//body > div > header > nav > a:nth-child(1)

//nav
const navEl = document.querySelector('nav');
let navServices = document.querySelector('a');
navServices.textContent = siteContent["nav"]["nav-item-1"];
let navProduct = navServices.nextElementSibling;
navProduct.textContent = siteContent["nav"]["nav-item-2"];
let navVision = navProduct.nextElementSibling;
navVision.textContent = siteContent["nav"]["nav-item-3"];
let navFeatures = navVision.nextElementSibling;
navFeatures.textContent = siteContent["nav"]["nav-item-4"];
let navAbout = navFeatures.nextElementSibling;
navAbout.textContent = siteContent["nav"]["nav-item-5"];
let navContact = navAbout.nextElementSibling;
navContact.textContent = siteContent["nav"]["nav-item-6"];
const bonus = document.createElement('a')
bonus.href = '#';
bonus.textContent = 'Bonus';
const staff = document.createElement('a')
staff.href = '#';
staff.textContent = 'Staff';
navEl.appendChild(bonus);
navEl.prepend(staff);
const anchor = document.querySelectorAll('a');
anchor.forEach((a) => a.style.color = 'green')

//body
const midHeadline = document.querySelector('h1');
midHeadline.textContent = siteContent['cta']['h1'];
const startButton = document.querySelector('button');
startButton.textContent = siteContent['cta']['button'];
let midImg = document.querySelector('#cta-img');
midImg.setAttribute('src', siteContent['cta']['img-src']);

//main-content(top)
const features = document.querySelector('div.top-content > div.text-content:nth-child(1) > h4');
features.textContent = siteContent['main-content']['features-h4'];
const featuresCon = features.nextElementSibling;
featuresCon.textContent = siteContent['main-content']['features-content'];

const about = document.querySelector('div.top-content > div:nth-child(2) > h4');
about.textContent = siteContent['main-content']['about-h4'];
const aboutCon = document.querySelector('div.top-content > div:nth-child(2) > p');
aboutCon.textContent = siteContent['main-content']['about-content'];

//main-content(bottom)
const mainMidImg = document.querySelector('#middle-img');
mainMidImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const services = document.querySelector('div.bottom-content > div:nth-child(1) > h4');
services.textContent = siteContent['main-content']['services-h4'];
const servicesCon = services.nextElementSibling;
servicesCon.textContent = siteContent['main-content']['services-content'];

const product = document.querySelector('div.bottom-content > div:nth-child(2) > h4');
product.textContent = siteContent['main-content']['product-h4'];
const productCon = product.nextElementSibling;
productCon.textContent = siteContent['main-content']['product-content'];

const vision = document.querySelector('div.bottom-content > div:nth-child(3) > h4');
vision.textContent = siteContent['main-content']['vision-h4'];
const visionCon = vision.nextElementSibling;
visionCon.textContent = siteContent['main-content']['vision-content'];

//contact section
const contactt = document.querySelector('section.contact > h4');
contactt.textContent = siteContent['contact']['contact-h4'];
const contactAddr = contactt.nextElementSibling;
contactAddr.textContent = siteContent['contact']['address'];
const contactNum = contactAddr.nextElementSibling;
contactNum.textContent = siteContent['contact']['phone'];
const contactEmail = contactNum.nextElementSibling;
contactEmail.textContent = siteContent['contact']['email'];

//footer
const foot = document.querySelector('footer > p');
foot.textContent = siteContent['footer']['copyright'];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
