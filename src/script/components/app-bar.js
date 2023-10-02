class AppBar extends HTMLElement {
    set icon(icon){
        this._icon = icon;
        this._title = `Malba's Restaurant Storage System`;
        this.render();
    }

    render() {
        const navIcon = new Image();
        navIcon.src = this._icon;
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
