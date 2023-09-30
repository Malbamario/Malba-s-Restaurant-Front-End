const BASEURL = "http://13.212.53.51:5000";

class ItemsData {
    static async getItems() {
        return fetch(`${BASEURL}/items`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.data) {
                    return Promise.resolve(responseJson.data);
                } else {
                    return Promise.reject(responseJson.message);
                }
            });
    }

    static async addItem(item) {
        return fetch(`${BASEURL}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",                
            },
            body: JSON.stringify(item),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status==="success") {
                    return Promise.resolve(responseJson.status);
                } else {
                    return Promise.reject(responseJson.message);
                }
            })
            .catch(err =>{
                console.log(err);
            });
    }
}

export default ItemsData;
