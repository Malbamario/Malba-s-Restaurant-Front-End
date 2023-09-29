class SearchBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
        <form class="row my-1">
            <input class="form-control me-2 col" type="search" placeholder="Search" aria-label="Search" id="searchElement">
            <button class="btn btn-outline-success col-auto" type="submit" id="searchButtonElement">Search</button>
        </form>
        `;
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);