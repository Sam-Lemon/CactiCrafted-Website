/** This is the API connection for the data for the succulents. I put it in
 * it's own component so that it can be reused throughout the project, and 
 * maybe in other projects. */


const API_SUCCULENTS = 'https://667e89e5f2cb59c38dc617c6.mockapi.io/succulents';

    
/* The asynchronous getSucculents function uses the 'GET' method to fetch
 * the data from my API variable, then changes it to JSON so that it is useable, 
 * and then returns the JSON version of the data, all wrapped in a try-catch
 * statement. If there's an error, the catch part of the try-catch will throw 
 * an error message to the console. */
    const getSucculents = async() => {
        try{
            const resp = await fetch(API_SUCCULENTS);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error("Error, fetch didn't fetch", e);
            throw e;
        }
    }

    // const putSucculent = async (succulent) => {
    //     try {
    //         const resp = await fetch(`${API_SUCCULENTS}/${succulent._id}`, {
    //             method: 'PUT',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(succulent)
    //         });
    //         return await resp.json();
    //     } catch(e) {
    //         console.error("Put ain't puttin", e);
    //         throw e;
    //     }
    // }

export { getSucculents };
// export { putSucculents };
