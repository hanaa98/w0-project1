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
    "middle-img-src": "img/mid-page.jpg",
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
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 
var navElemnts = document.querySelectorAll('a')
console.log(navElemnts)
navElemnts[0].textContent = 'Services'
navElemnts[1].textContent = 'Product'
navElemnts[2].textContent = 'Vision'
navElemnts[3].textContent = 'Features'
navElemnts[4].textContent = 'About'
navElemnts[5].textContent = 'Contact'

var newEL = document.createElement('a')
console.log(newEL)
newEL.textContent = "dfpgo"
document.body.append(newEL)

var newEL2 = document.createElement('a')
console.log(newEL2)
newEL2.textContent = "rsgv"
document.body.append(newEL2)

document.querySelector('nav').append(newEL2)
document.querySelector('nav').append(newEL)

document.getElementById("logo-img").src="./../img/logo.png";
document.getElementById("cta-img").src="./../img/header-img.png";
document.getElementById("middle-img").src="./../img/mid-page.jpg";

var navHE1 = document.createElement('h1')
navHE1.textContent = "FEATUERS"
document.body.append(navHE1)

var navHE2 = document.createElement('h2')
navHE1.textContent = "ABOUT"
document.body.append(navHE2)

var navHE3 = document.createElement('h3')
navHE3.textContent = "SERVICES"
document.body.append(navHE3)

var navHE4 = document.createElement('h4')
navHE4.textContent = "PRODUCT"
document.body.append(navHE4)

var navHE5 = document.createElement('h5')
navHE5.textContent = "VISION"
document.body.append(navHE5)

var navHE6 = document.createElement('h6')
navHE1.textContent = "CONTACT"
document.body.append(navHE6)

document.getElementsByTagName("button")[0].innerHTML = siteContent.cta.button;




