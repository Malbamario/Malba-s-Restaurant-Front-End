class StockForm extends HTMLElement {
    connectedCallback() {
        this.render();
        this._itemId = "";
        this._type = "";
    }

    set value({id="", amount="", type=""}) {
        this._itemId = id;
        this._type = type;
        this.querySelector("#amount").value = amount;
    }

    get value() {
        let amount = "";
        if(type==="take") amount = "-"+this.querySelector("#amount").value
        return { id: this._itemId, amount };
    }

    render() {
        this.innerHTML = `
        <div class="mb-3 row">
            <label class="col-3 col-form-label me-1" for="amount">Amount</label>
            <div class="col-8">
                <input class="form-control" type="number" amount="amount" id="amount">
            </div>
        </div>
        `;
    }
}

customElements.define('stock-form', StockForm);