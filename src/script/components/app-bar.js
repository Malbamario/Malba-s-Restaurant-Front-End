import icon from "./../../img/icon.png";

class AppBar extends HTMLElement {
    connectedCallback() {
        this.title = `Malba's Restaurant Storage System`;
    }

    set title(title) {
        this._title = title;
        this.render();
    }

    render() {
        const navIcon = new Image();
        navIcon.src = icon;
        navIcon.width = 30;
        navIcon.className = "d-inline-block align-text-top me-2";
        this.innerHTML = `
        <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                </a>
            </div>
        </nav>`;

        this.querySelector(".navbar-brand").appendChild(navIcon);
        this.querySelector(".navbar-brand").append(this._title);
    }
}

customElements.define("app-bar", AppBar);
