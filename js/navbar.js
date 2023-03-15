let div = document.createElement("div");

div.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
<div class="container-fluid">
  <a class="navbar-brand" href="../html/index.html">James Ressler</a>
  <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="../html/index.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/experience.html">Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/projects.html">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/contact.html">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;

document.querySelector("body").prepend(div);
