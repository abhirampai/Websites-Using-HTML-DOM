let main = document.querySelector("div");

console.log(main);

let navbar = document.createElement("div");
navbar.style.cssText += `
position: relative;
left: 0;
top: 0;
display: flex;
width: 100%;
align-items:basline;
`;

const CreateElementAndAppend = (
  value,
  style = null,
  onClick = null,
  tag,
  parent
) => {
  let tagName = document.createElement(tag);
  tagName.innerHTML = value;
  style !== null && (tagName.style.cssText += style);
  onClick !== null && tagName.addEventListner("click", onClick);
  parent.appendChild(tagName);
};

const links = `
display: flex;
column-gap: 20px;
font-size: 1rem;
`;

let leftLinks = document.createElement("div");
leftLinks.style.cssText += links + `align-self:end; padding-left: 2rem;`;

let rightLinks = document.createElement("div");
rightLinks.style.cssText +=
  links + `margin-left: auto;margin-top:1.5rem; padding-right:2rem;`;

CreateElementAndAppend("Sorty", null, null, "h1", leftLinks);
CreateElementAndAppend(
  "Features",
  `font-size:1.5rem;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  leftLinks
);
CreateElementAndAppend(
  "Pricing",
  `font-size:1.5rem;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  leftLinks
);
CreateElementAndAppend(
  "Resources",
  `font-size:1.5rem;padding-top:0.5rem;opacity:0.5;`,
  null,
  "p",
  leftLinks
);

CreateElementAndAppend(
  "Login",
  `font-size:1.5rem;margin-top:0.2rem;`,
  null,
  "a",
  rightLinks
);
CreateElementAndAppend(
  "SignUp",
  `border-radius:2.5rem;padding:1.2rem;margin-top: -1.2rem;border-color:transparent;background-color:#8EE5D1;font-size:1.5rem`,
  null,
  "button",
  rightLinks
);

navbar.appendChild(leftLinks);
navbar.appendChild(rightLinks);

let section = document.createElement("div");
section.style.cssText += `
display: flex;
width: 100%;
margin-top:2rem;
align-items:center;
`;

let leftSide = document.createElement("div");

leftSide.style.cssText += `
width: 50%;
padding-left:2rem;
`;

let rightSide = document.createElement("div");

CreateElementAndAppend(
  "The best way to manage projects and tasks",
  `font-size: 2.7rem;`,
  null,
  "h1",
  leftSide
);
CreateElementAndAppend(
  "Focus on what is important to you and rely on us <br> for organizing your tasks",
  `font-size: 1.3rem;opacity:0.5;`,
  null,
  "p",
  leftSide
);
CreateElementAndAppend(
  "Get Started",
  `border-radius:4.5rem;padding:1.2rem;margin-bottom: 1.2rem;border-color:transparent;background-color:#8EE5D1;font-size:1.5rem`,
  null,
  `button`,
  leftSide
);

let image = document.createElement("img");
image.src = "../TB3-assessments/css-assessment/illustration.png";

image.style.cssText += `
width:50vw;
height: 100%;
padding-right: 2rem;
flex-shrink:1;
`;

rightSide.appendChild(image);

section.appendChild(leftSide);
section.appendChild(rightSide);
main.appendChild(navbar);
main.appendChild(section);
