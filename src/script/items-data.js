const BASEURL = "http://13.212.53.51:5000";

class ItemsData {
    static async getItems() {
        return fetch(`${BASEURL}/items`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.data) {
                    return Promise.resolve(responseJson.data);
                } else {
                    return Promise.reject(responseJson.message);
                }
            });
    }

    static async addItem(item, notifCallback) {
        return fetch(`${BASEURL}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",                
            },
            body: JSON.stringify(item),
        })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status==="success") {
                    notifCallback("success", responseJson.message);
                    return Promise.resolve(responseJson.status);
                } else {
                    return Promise.reject(responseJson.message);
                }
            })
            .catch(err =>{
                notifCallback("error", err.message);
            });
    }

    static async editItem(item, notifCallback) {
        return fetch(`${BASEURL}/items`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",                
            },
            body: JSON.stringify(item),
        })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status==="success") {
                    notifCallback("success", responseJson.message);
                    return Promise.resolve(responseJson.status);
                } else {
                    return Promise.reject(responseJson.message);
                }
            })
            .catch(err =>{
                notifCallback("error", err.message);
            });
    }

    static async deleteItem(id, notifCallback) {
        return fetch(`${BASEURL}/items/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status==="success") {
                    notifCallback("success", responseJson.message);
                    return Promise.resolve(responseJson.status);
                } else {
                    return Promise.reject(responseJson.message);
                }
            })
            .catch(err =>{
                notifCallback("error", err.message);
            });
    }
}

export default ItemsData;
