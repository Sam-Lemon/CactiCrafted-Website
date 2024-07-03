

const API_CART_SUCCULENTS = 'https://667e89e5f2cb59c38dc617c6.mockapi.io/cart';

const getCartSucculent = async() => {
    try{
        const resp = await fetch(API_CART_SUCCULENTS);
        const data = await resp.json();
        return data;
    } catch(e) {
        console.error("Error, fetch didn't fetch", e);
        throw e;
    }
}

const putCartSucculent = async (cartSucculents) => {
    try {
        const resp = await fetch(`${API_CART_SUCCULENTS}/${cartSucculents._id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartSucculents)
        });
        return await resp.json();
    } catch(e) {
        console.error("Put ain't puttin", e);
        throw e;
    }
}

export { getCartSucculent, putCartSucculent };
