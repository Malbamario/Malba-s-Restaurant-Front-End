import ItemsData from "../items-data.js";
import createToast from "./toast-notif.js";

const getItem  = async itemList => {
    try {
        itemList.items = await ItemsData.getItems();
    } catch (rejectedMess) {
        itemList.renderError(rejectedMess);
    }
}

const main = async () => {
    const appBar = document.createElement("app-bar");
    const searchBar = document.createElement("search-bar");
    const addBtn = document.createElement("add-btn");
    const addModal = document.createElement("custom-modal");
    const itemList = document.createElement("item-list");
    const itemForm = document.createElement("item-form");
    const restockForm = document.createElement("stock-form");
    const takeForm = document.createElement("stock-form");
    const amountModal = document.createElement("custom-modal");

    const loadModal = (modal, element) => {
        modal.content = element;
    };

    addModal.id = "AddItemModal";
    addBtn.modalId = addModal.id;
    loadModal(addModal, itemForm);
    addModal.clickEvent = async () => {
        try {
            await ItemsData.addItem(itemForm.value, createToast);
            itemForm.value = {};
            getItem(itemList);
        } catch (rejectedMess) {
            itemList.renderError(rejectedMess);
        }
    }

    const onButtonSearchClicked = async () => {
        try {
            itemList.items = await ItemsData.searchItems(searchBar.value);
        } catch (rejectedMess) {
            itemList.renderError(rejectedMess);
        }
    };

    getItem(itemList);

    searchBar.clickEvent = onButtonSearchClicked;

    document.querySelector("header").appendChild(appBar);
    const mainEl = document.querySelector("main");
    mainEl.classList.add("container", "mt-5");
    mainEl.appendChild(searchBar);
    mainEl.appendChild(addBtn);
    mainEl.appendChild(itemList);

    document.querySelector("body").appendChild(addModal);
};

export default main;
