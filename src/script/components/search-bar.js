class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    set itemBuildUp(itemBuildUp) {
        this._itemBuildUp = itemBuildUp;
    }

    set itemList(itemList) {
        this._itemList = itemList;
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.className = "row my-1";
        this.innerHTML = `<input class="form-control me-2 col" type="search" placeholder="Search" aria-label="Search" id="searchElement">`;
        this.querySelector("#searchElement").addEventListener("keyup", () =>
            this._clickEvent(this.value, this._itemList, this._itemBuildUp)
        );
    }
}

customElements.define("search-bar", SearchBar);
