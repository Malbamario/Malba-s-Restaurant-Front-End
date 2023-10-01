class AppBar extends HTMLElement {
    connectedCallback() {
        this.title = `Malba's Restaurant Storage System`;
    }

    set title(title){
        this._title = title;
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"
                        class="d-inline-block align-text-top">
                    ${this._title}
                </a>
            </div>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);