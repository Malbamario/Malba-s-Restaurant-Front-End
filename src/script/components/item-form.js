class ItemForm extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set value({name="", unit="", keterangan=""}) {
        this.querySelector("#name").value = name;
        this.querySelector("#unit").value = unit;
        this.querySelector("#keterangan").value = keterangan;
    }

    get value() {
        return {
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
                <input class="form-control" type="text" unit="unit" id="unit">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-3 col-form-label me-1" for="keterangan">Keterangan</label>
            <div class="col-8">
                <input class="form-control" type="text" keterangan="keterangan" id="keterangan">
            </div>
        </div>
        `;
    }
}

customElements.define("item-form", ItemForm);
