class ItemElement extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set data(data){
        this._data = data;
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
                            <li><a class="dropdown-item" href="#editModal" data-bs-toggle="modal"
                                data-bs-target="#editModal">Edit</a></li>
                        </ul>
                    </div>
                </div>
                <h5><b>${this._data.amount}</b> ${this._data.unit}</h5>
                <p class="card-text">${this._data.keterangan}</p>
                <div class="d-flex">
                    <button type="button" class="btn btn-success col-5 flex-fill me-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Restock
                    </button>
                    <button type="button" class="btn btn-danger col-5 flex-fill ms-1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Take
                    </button>
                </div>
            </div>
        </div>`;
    }
}

customElements.define('item-element', ItemElement);