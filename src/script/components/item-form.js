class ItemForm extends HTMLElement {
    connectedCallback() {
        this.render();
        this._itemId = "";
    }

    set value({ id = "", name = "", unit = "", keterangan = "" }) {
        this._itemId = id;
        this.querySelector("#name").value = name;
        this.querySelector("#unit").value = unit;
        this.querySelector("#keterangan").value = keterangan;
    }

    get value() {
        return {
            id: this._itemId,
            name: this.querySelector("#name").value,
            unit: this.querySelector("#unit").value,
            keterangan: this.querySelector("#keterangan").value,
        };
    }

    render() {
        this.innerHTML = `
        <div class="mb-3 row">
            <label class="col-3 col-form-label me-1" for="name">Name</label>
            <div class="col-8">
                <input class="form-control" type="text" name="name" id="name">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-3 col-form-label me-1" for="unit">Unit</label>
            <div class="col-8">
                <input class="form-control" type="text" name="unit" id="unit">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-3 col-form-label me-1" for="keterangan">Keterangan</label>
            <div class="col-8">
                <input class="form-control" type="text" name="keterangan" id="keterangan">
            </div>
        </div>
        `;
        const submitBtn = this.parentElement.parentElement.querySelector("#submitBtn");
        this.querySelector("#keterangan").addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                submitBtn.click();
            }
        });
    }
}

customElements.define("item-form", ItemForm);
