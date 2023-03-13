let nav = document.createElement("nav");
let ul = document.createElement("ul");
let about = document.createElement("li");
let experience = document.createElement("li");
let projects = document.createElement("li");
let contact = document.createElement("li");
let aboutLink = document.createElement("a");
let experienceLink = document.createElement("a");
let projectsLink = document.createElement("a");
let contactLink = document.createElement("a");

ul.setAttribute("class", "nav-list");

aboutLink.setAttribute("class", "nav-link");
aboutLink.setAttribute("href", "../html/index.html");
aboutLink.textContent = "About";

experienceLink.setAttribute("class", "nav-link");
experienceLink.setAttribute("href", "../html/experience.html");
experienceLink.textContent = "Experience";

projectsLink.setAttribute("class", "nav-link");
projectsLink.setAttribute("href", "../html/projects.html");
projectsLink.textContent = "Projects";

contactLink.setAttribute("class", "nav-link");
contactLink.setAttribute("href", "../html/contact.html");
contactLink.textContent = "Contact";

about.append(aboutLink);
experience.append(experienceLink);
projects.append(projectsLink);
contact.append(contactLink);

ul.append(about);
ul.append(experience);
ul.append(projects);
ul.append(contact);
nav.append(ul);
document.querySelector("body").prepend(nav);
