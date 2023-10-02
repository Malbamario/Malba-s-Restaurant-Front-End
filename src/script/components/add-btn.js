class AddBtn extends HTMLElement {
    
    set modalId(modalId) {
        this._modalId = modalId;
        this.render();
    }

    render() {
        this.className = "";
        this.classList.add("row", "my-3");
        this.innerHTML = `
        <button type="button" class="btn add-btn col-auto" data-bs-toggle="modal"
            data-bs-target="#${this._modalId}" id="addBtn">
            Add Item
        </button>
        `;
    }
}

customElements.define("add-btn", AddBtn);
