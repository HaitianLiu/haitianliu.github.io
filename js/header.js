class enochHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header id="header" class="header d-flex flex-column justify-content-center">
        <i class="header-toggle d-xl-none bi bi-list"></i>
        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="../../index.html/#hero" class="active"><i class="bi bi-house navicon"></i><span>Home</span></a></li>
            <li><a href="../../index.html/#about"><i class="bi bi-person navicon"></i><span>About</span></a></li>
            <li><a href="../../index.html/#resume"><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
            <li><a href="../../index.html/#portfolio"><i class="bi bi-code navicon"></i><span>Portfolio</span></a></li>
            <li><a href="../../index.html/#contact"><i class="bi bi-envelope navicon"></i><span>Contact</span></a></li>
          </ul>
        </nav>
      </header>   
    `;
    }
}

customElements.define('enoch-header', enochHeader);

// Immediately insert the custom header into the DOM
document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('enoch-header');
    if (!headerElement) {
        console.error('enoch-header element not found in the DOM!');
        return;
    }
    // Force rendering of the header component before main.js interacts with it
    headerElement.connectedCallback();
});
