const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav

let nav = document.getElementsByTagName("nav")[0].children;
for (i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  nav[i].style.color = "green";
}

let navContainer = document.querySelector("nav");
const child1 = document.createElement("a");
const child1_text = document.createTextNode("Pricing");
child1.appendChild(child1_text);
child1.style.color = "green";
navContainer.appendChild(child1);

const child2 = document.createElement("a");
const child2_text = document.createTextNode("Lambda School");
child2.appendChild(child2_text);
child2.style.color = "green";
navContainer.prepend(child2);

// CTA

let codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaText = document.querySelector(".cta-text").children;
ctaText[0].textContent = siteContent["cta"]["h1"];
ctaText[1].textContent = siteContent["cta"]["button"];

// Top Content
let topContent = document.querySelector(".top-content").children;

topContent[0].childNodes[1].textContent =
  siteContent["main-content"]["features-h4"];

topContent[0].childNodes[3].textContent =
  siteContent["main-content"]["features-content"];

topContent[1].childNodes[1].textContent =
  siteContent["main-content"]["about-h4"];

topContent[1].childNodes[3].textContent =
  siteContent["main-content"]["about-content"];

// Middle Img
let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Content
let bottomContent = document.querySelector(".bottom-content").children;
bottomContent[0].childNodes[1].textContent =
  siteContent["main-content"]["services-h4"];

bottomContent[0].childNodes[3].textContent =
  siteContent["main-content"]["services-content"];

bottomContent[1].childNodes[1].textContent =
  siteContent["main-content"]["product-h4"];

bottomContent[1].childNodes[3].textContent =
  siteContent["main-content"]["product-content"];

bottomContent[2].childNodes[1].textContent =
  siteContent["main-content"]["vision-h4"];

bottomContent[2].childNodes[3].textContent =
  siteContent["main-content"]["vision-content"];

// Contact
let contact = document.querySelector(".contact").children;

contact[0].textContent = siteContent["contact"]["contact-h4"];
contact[1].textContent = siteContent["contact"]["address"];
contact[2].textContent = siteContent["contact"]["phone"];
contact[3].textContent = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector("footer").children;
footer[0].textContent = siteContent["footer"]["copyright"];
