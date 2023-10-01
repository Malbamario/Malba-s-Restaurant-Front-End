class StockForm extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set value({id="", amount="", type=""}) {
        this._itemId = id;
        this._type = type;
        this._amount = amount;
        this.render();
        if(this._type==="take") this.querySelector("#amount").max = this._amount;
    }

    get value() {
        let input = this.querySelector("#amount").value;
        if(this._type==="take") input = "-"+this.querySelector("#amount").value;
        const keterangan = this.querySelector("#keteranganTrans").value;
        return {idItem: this._itemId, amount: this._amount, type:this._type, input, keterangan};
    }

    render() {
        this.innerHTML = `
        <div class="mb-3 row">
            <label class="col-3 col-form-label me-1" for="amount">Amount</label>
            <div class="col-8">
                <input class="form-control" type="number" name="amount" id="amount">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-3 col-form-label me-1" for="keterangan">Keterangan</label>
            <div class="col-8">
                <input class="form-control" type="text" name="keterangan" id="keteranganTrans">
            </div>
        </div>
        `;
        const submitBtn = this.parentElement.parentElement.querySelector("#submitBtn");
        this.querySelector('#keteranganTrans').addEventListener("keypress", e=>{
            if(e.key==="Enter") {
                e.preventDefault();
                submitBtn.click();
            }
        });
    }
}

customElements.define('stock-form', StockForm);