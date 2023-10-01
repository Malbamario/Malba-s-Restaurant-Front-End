import ItemsData from "../items-data.js";
import createToast from "./toast-notif.js";

const getItem  = async ({itemList, editForm, deleteConfirm, stockForm}) => {
    try {
        itemList.items = await ItemsData.getItems();
        itemList.editForm = editForm;
        itemList.deleteConfirm = deleteConfirm;
        itemList.stockForm = stockForm;
    } catch (rejectedMess) {
        createToast("error", rejectedMess);
    }
}

const buildModal = (modal, id, content, clickEvent) => {
    modal.id = id;
    modal.content = content;
    modal.clickEvent = clickEvent;
    document.querySelector("body").appendChild(modal);
}

const main = async () => {
    const appBar = document.createElement("app-bar");
    const searchBar = document.createElement("search-bar");
    const addBtn = document.createElement("add-btn");
    const itemList = document.createElement("item-list");
    const addModal = document.createElement("custom-modal");
    const editModal = document.createElement("custom-modal");
    const deleteModal = document.createElement("custom-modal");
    const amountModal = document.createElement("custom-modal");
    const addItemForm = document.createElement("item-form");
    const editForm = document.createElement("item-form");
    const deleteConfirm = document.createElement("p");
    const stockForm = document.createElement("stock-form");

    const itemBuildUp = {itemList, editForm, deleteConfirm, stockForm};
    getItem(itemBuildUp);

    searchBar.clickEvent = async () => {
        try {
            itemList.items = await ItemsData.searchItems(searchBar.value);
            itemList.itemForm = addItemForm;
        } catch (rejectedMess) {
            createToast("warning", rejectedMess);
        }
    };
    
    document.querySelector("header").appendChild(appBar);
    const mainEl = document.querySelector("main");
    mainEl.classList.add("container", "mt-5");
    mainEl.appendChild(searchBar);
    mainEl.appendChild(addBtn);
    mainEl.appendChild(itemList);

    buildModal(addModal, "AddItemModal", {element:addItemForm, title:"Add Item"}, async () => {
        try {
            await ItemsData.addItem(addItemForm.value, createToast);
            addItemForm.value = {};
            getItem(itemBuildUp);
        } catch (rejectedMess) {
            createToast("warning", rejectedMess);
        }
    });
    addBtn.modalId = addModal.id;

    buildModal(editModal, "EditItemModal", {element:editForm, title:"Edit Item"}, async () => {
        try {
            await ItemsData.editItem(editForm.value, createToast);
            editForm.value = {};
            getItem(itemBuildUp);
        } catch (rejectedMess) {
            createToast("warning", rejectedMess);
        }
    });

    deleteConfirm.innerHTML=`Are you sure to delete this item?`;
    buildModal(deleteModal, "DeleteItemModal", {element:deleteConfirm, title:"Delete Item"}, async () => {
        try {
            await ItemsData.deleteItem(deleteConfirm.dataset.id, createToast);
            deleteConfirm.dataset.id = "";
            getItem(itemBuildUp);
        } catch (rejectedMess) {
            createToast("warning", rejectedMess);
        }
    });

    buildModal(amountModal, "AmountItemModal", {element:stockForm, title:"Amount Item"}, async () => {
        if(stockForm.value.type==="take"&&parseInt(stockForm.value.input)*-1>parseInt(stockForm.value.amount)){
            createToast("warning", "The quantity given exceeds the existing stock!");
        }else{
            try {
                await ItemsData.addItemTrans({
                    idItem: stockForm.value.idItem,
                    amount: stockForm.value.input,
                    keterangan: stockForm.value.keterangan,
                }, createToast);
                stockForm.value = {};
                getItem(itemBuildUp);
            } catch (rejectedMess) {
                createToast("warning", rejectedMess);
            }
        }
    });
};

export default main;
