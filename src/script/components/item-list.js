class ItemList extends HTMLElement {
    set items(items){
        this._items = items;
        console.log(this._items);
        this.render();
    }

    render(){
        this.innerHTML=``;
        this.classList.add("row", "mt-4", "px-2", "pb-4", "bg-dark", "rounded-4");
        if(this._items.length===0){
            this.innerHTML=`
                <h2 class="col text-light text-center mt-4">Empty</h2>
            `;
        }else{
            this._items.forEach(item => {
                const itemEl = document.createElement('item-element');
                itemEl.data = item;
                this.appendChild(itemEl);
            });
        }
    }

    renderError = (message) => {
        this.innerHTML = ``;
        this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
    };
}

customElements.define('item-list', ItemList);