class CustomModal extends HTMLElement {

    set content(content){
        this._content = content;
        this.render();
    }

    set contentId(contentId){
        this._contentId = contentId;
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    render(){
        this.className = "";
        this.classList.add("modal", "fade");
        this.tabIndex = -1;
        this.ariaHidden = 'true';
        this.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="submitBtn" data-bs-dismiss="modal">Confirm</button>
                </div>
            </div>
        </div>
        `;
        this.querySelector(".modal-body").appendChild(this._content);
        this.querySelector("#submitBtn").addEventListener("click", this._clickEvent);
    }
}

customElements.define('custom-modal', CustomModal);