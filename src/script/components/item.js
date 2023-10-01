class ItemElement extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set data(data){
        this._data = data;
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
        this.className = "";
        this.classList.add("col-lg-4", "col-md-6", "col-sm-12");
        this.innerHTML = `
        <div class="card mt-4">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <div class="d-flex align-items-center card-title">
                    <h4 class="flex-fill m-0">${this._data.name}</h4>
                    <div class="dropdown">
                        <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical" style="color:black"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#EditItemModal" data-bs-toggle="modal"
                                data-bs-target="#EditItemModal" id="edit">Edit</a></li>
                            <li><a class="dropdown-item" href="#DeleteItemModal" data-bs-toggle="modal"
                                data-bs-target="#DeleteItemModal" id="delete">Delete</a></li>
                        </ul>
                    </div>
                </div>
                <h5><b>${this._data.amount}</b> ${this._data.unit}</h5>
                <p class="card-text">${this._data.keterangan}</p>
                <div class="d-flex">
                    <button type="button" class="btn btn-success col-5 flex-fill me-1" data-bs-toggle="modal"
                        data-bs-target="#AmountItemModal" id="restock">
                        Restock
                    </button>
                    <button type="button" class="btn btn-danger col-5 flex-fill ms-1" data-bs-toggle="modal"
                        data-bs-target="#AmountItemModal" id="take">
                        Take
                    </button>
                </div>
            </div>
        </div>`;
        this.querySelector(`#edit`).addEventListener("click", this._editForm);
        this.querySelector(`#delete`).addEventListener("click", this._deleteConfirm);
        this.querySelector(`#restock`).addEventListener("click", () => this._stockForm("restock"));
        this.querySelector(`#take`).addEventListener("click", () => this._stockForm("take"));
    }
}

customElements.define('item-element', ItemElement);