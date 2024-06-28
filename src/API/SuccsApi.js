const API_SUCCULENTS = 'https://664ed178fafad45dfae12bcc.mockapi.io/finalProjectSucculents/';

class SuccsApi {  
    

    get = async() => {
        try{
            const resp = await fetch(API_SUCCULENTS);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Error, fetch didn't fetch", e);
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
        }
    }
}

export const succsApi = new SuccsApi();

