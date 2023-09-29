import ItemsData from '../items-data.js';

const main = () =>{
    const appBar = document.createElement('app-bar');
    const searchBar = document.createElement('search-bar');
    const addBtn = document.createElement('custom-btn');
    const itemList = document.createElement('item-list');
    const customModal = document.createElement('custom-modal');
    const itemForm = document.createElement('item-form');
    const restockForm = document.createElement('stock-form');
    const takeForm = document.createElement('stock-form');

    

    document.querySelector('header').appendChild(appBar);
    const mainEl = document.querySelector('main');
    mainEl.appendChild(searchBar);
    mainEl.appendChild(addBtn);
    mainEl.appendChild(itemList);

    document.appendChild()
};

export default main;
