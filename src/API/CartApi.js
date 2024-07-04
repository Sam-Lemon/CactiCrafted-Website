

const API_CART_SUCCULENTS = 'https://667e89e5f2cb59c38dc617c6.mockapi.io/cartSucculent';

const getCart = async() => {
    try{
        console.log('Fetching data from:', API_CART_SUCCULENTS);
        
        const resp = await fetch(API_CART_SUCCULENTS);

        if (!resp.ok) {
            throw new Error('Failed to fetch: ${resp.status} ${resp.statusText}');
        }

        const data = await resp.json();
        console.log('Received data:', data);
        return data;
    } catch(e) {
        console.error("Error fetching cart:", e);
        throw e;
    }

}


const putCart = async (cartSucculent) => {
    try {
        console.log('Updating cart with:', cartSucculent);
        
        const resp = await fetch(`${API_CART_SUCCULENTS}/${cartSucculent._id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartSucculent)
        });

        if (!resp.ok) {
            throw new Error('Failed to update: ${resp.status} ${resp.statusText}');
        }

        const updatedCartSucculent = await resp.json();
        console.log('Cart updated successfully:', updatedCartSucculent)
        return updatedCartSucculent;
    } catch(e) {
        console.error("Error updating cart:", e);
        throw e;
    }
}

export { getCart, putCart };
