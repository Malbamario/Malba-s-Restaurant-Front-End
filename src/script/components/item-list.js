class ItemList extends HTMLElement {
    set items(items){
        this._items = items;
    }

    set editForm(editForm){
        this._editForm = editForm;
    }

    set deleteConfirm(deleteConfirm){
        this._deleteConfirm = deleteConfirm;
    }

    set stockForm(stockForm){
        this._stockForm = stockForm;
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
                itemEl.editForm = () => this._editForm.value = item;
                itemEl.deleteConfirm = () => this._deleteConfirm.dataset.id = item.id;
                itemEl.stockForm = type => this._stockForm.value = {id: item.id, amount: item.amount, type};
                this.appendChild(itemEl);
            });
        }
    }
}

customElements.define('item-list', ItemList);
