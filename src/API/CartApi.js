
const API_CART_SUCCULENT = 'https://667e89e5f2cb59c38dc617c6.mockapi.io/cartSucculent';

const fetchCartSucculent = async () => {
    try {
        const resp = await fetch(API_CART_SUCCULENT);
        if (!resp.ok) {
            throw new Error ('Failed to fetch cart succulents');
        }

        const data = await resp.json();
        console.log('Cart Succulents:', data);
        return data;
    } catch (e) {
        console.error('Error fetching cart succulents:', e);
        throw e;
    }
}

const deleteCartSucculent = async (id) => {
    const url = `${API_CART_SUCCULENT}/${id}`;

    try {
        const resp = await fetch(url, {
            method: 'DELETE',
        });

        if (!resp.ok) {
            throw new Error ('Failed to delete cart succulent');
        }

        console.log(`Deleted cart succulent with ID ${id}`);
    } catch (e) {
        console.error('Error deleting cart succulent', e);
        throw e;
    }
}