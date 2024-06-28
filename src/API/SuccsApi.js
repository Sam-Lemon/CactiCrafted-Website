const API_SUCCULENTS = 'https://667e89e5f2cb59c38dc617c6.mockapi.io/succulents';

class SuccsApi {  
    

    get = async() => {
        try{
            const resp = await fetch(API_SUCCULENTS);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Error, fetch didn't fetch", e);
            throw e;
        }
    }

    put = async (succulent) => {
        try {
            const resp = await fetch(`${API_SUCCULENTS}${succulent._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(succulent)
            });
            return await resp.json();
        } catch(e) {
            console.log("Put ain't puttin", e);
            throw e;
        }
    }
}

export const succsApi = new SuccsApi();

