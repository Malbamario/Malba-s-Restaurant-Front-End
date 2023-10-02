import ItemsData from "../items-data.js";
import createToast from "./toast-notif.js";
import icon from "./../../img/icon.png";

let items = [];

const getItem = async ({ itemList, editForm, deleteConfirm, stockForm }) => {
    try {
        items = await ItemsData.getItems();
        itemList.items = items;
        itemList.editForm = editForm;
        itemList.deleteConfirm = deleteConfirm;
        itemList.stockForm = stockForm;
    } catch (rejectedMess) {
        createToast("error", rejectedMess);
    }
};

const buildModal = (modal, id, content, clickEvent) => {
    modal.id = id;
    modal.content = content;
    modal.clickEvent = clickEvent;
    document.querySelector("body").appendChild(modal);
};

const searchItem = async (value, itemList, itemBuildUp) => {
    if (value === "") items = getItem(itemBuildUp);
    else {
        items = items.filter((e) => e.name.includes(value));
        itemList.items = items;
        itemList.editForm = itemBuildUp.editForm;
        itemList.deleteConfirm = itemBuildUp.deleteConfirm;
        itemList.stockForm = itemBuildUp.stockForm;
    }
};

const main = async () => {
    const head = document.createElement("link");
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

    head.append(`<link rel="icon" type="image/x-icon" href="${icon}">`);
    appBar.icon = icon

    const itemBuildUp = { itemList, editForm, deleteConfirm, stockForm };
    getItem(itemBuildUp);

    searchBar.itemList = itemList;
    searchBar.itemBuildUp = itemBuildUp;
    searchBar.clickEvent = searchItem;

    document.querySelector("header").appendChild(appBar);
    const mainEl = document.querySelector("main");
    mainEl.classList.add("container", "mt-5");
    mainEl.appendChild(searchBar);
    mainEl.appendChild(addBtn);
    mainEl.appendChild(itemList);

    buildModal(addModal, "AddItemModal", { element: addItemForm, title: "Add Item" }, async () => {
        try {
            await ItemsData.addItem(addItemForm.value, createToast);
            addItemForm.value = {};
            getItem(itemBuildUp);
        } catch (rejectedMess) {
            createToast("warning", rejectedMess);
        }
    });
    addBtn.modalId = addModal.id;

    buildModal(editModal, "EditItemModal", { element: editForm, title: "Edit Item" }, async () => {
        try {
            await ItemsData.editItem(editForm.value, createToast);
            editForm.value = {};
            getItem(itemBuildUp);
        } catch (rejectedMess) {
            createToast("warning", rejectedMess);
        }
    });

    deleteConfirm.innerHTML = `Are you sure to delete this item?`;
    buildModal(
        deleteModal,
        "DeleteItemModal",
        { element: deleteConfirm, title: "Delete Item" },
        async () => {
            try {
                await ItemsData.deleteItem(deleteConfirm.dataset.id, createToast);
                deleteConfirm.dataset.id = "";
                getItem(itemBuildUp);
            } catch (rejectedMess) {
                createToast("warning", rejectedMess);
            }
        }
    );

    buildModal(
        amountModal,
        "AmountItemModal",
        { element: stockForm, title: "Amount Item" },
        async () => {
            const input = parseInt(stockForm.value.input);
            const type = stockForm.value.type;
            const takeLogic = type === "take" && input * -1 > parseInt(stockForm.value.amount);
            const invalidInput =
                (type === "take" && input > -1) || (type === "restock" && input < 1);
            if (invalidInput) createToast("warning", "The input is invalid");
            else if (takeLogic)
                createToast("warning", "The quantity given exceeds the existing stock");
            else {
                try {
                    await ItemsData.addItemTrans(
                        {
                            idItem: stockForm.value.idItem,
                            amount: stockForm.value.input,
                            keterangan: stockForm.value.keterangan,
                        },
                        createToast
                    );
                    stockForm.value = {};
                    getItem(itemBuildUp);
                } catch (rejectedMess) {
                    createToast("warning", rejectedMess);
                }
            }
        }
    );
};

export default main;
