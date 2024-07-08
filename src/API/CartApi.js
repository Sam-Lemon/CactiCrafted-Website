const API_SUCCULENTS = "https://667e89e5f2cb59c38dc617c6.mockapi.io/succulents";
const API_CART_SUCCULENT =
  "https://667e89e5f2cb59c38dc617c6.mockapi.io/cartSucculent";

const fetchSucculents = async () => {
  try {
    const resp = await fetch(API_SUCCULENTS);

    if (!resp.ok) {
      throw new Error("Failed to fetch succulents");
    }

    const data = await resp.json();
    console.log("Succulents:", data);
    return data;
  } catch (e) {
    console.error("Error fetching succulents:", e);
    throw e;
  }
};

const fetchCartSucculent = async () => {
  try {
    const resp = await fetch(API_CART_SUCCULENT);
    if (!resp.ok) {
      throw new Error("Failed to fetch cart succulents");
    }

    const data = await resp.json();
    console.log("Cart Succulents:", data);
    return data;
  } catch (e) {
    console.error("Error fetching cart succulents:", e);
    throw e;
  }
};

const addToCart = async (succulentData) => {
  try {
    const resp = await fetch(API_CART_SUCCULENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(succulentData),
    });

    if (!resp.ok) {
      throw new Error("Failed to add cart succulent");
    }

    const data = await resp.json();
    console.log("Added cart succulent:", data);
    return data;
  } catch (e) {
    console.error("Error adding cart succulent:", e);
    throw e;
  }
};

const updateCartSucculent = async (id, updatedData) => {
  const url = `${API_CART_SUCCULENT}/${id}`;

  try {
    const resp = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!resp.ok) {
      throw new Error("Failed to update cart succulent");
    }

    const data = await resp.json();
    console.log("Updated cart succulent:", data);
    return data;
  } catch (e) {
    console.error("Error updating cart succulent:", e);
    throw e;
  }
};

const deleteCartSucculent = async (id) => {
  const url = `${API_CART_SUCCULENT}/${id}`;

  try {
    const resp = await fetch(url, {
      method: "DELETE",
    });

    if (!resp.ok) {
      throw new Error("Failed to delete cart succulent");
    }

    console.log(`Deleted cart succulent with ID ${id}`);
  } catch (e) {
    console.error("Error deleting cart succulent", e);
    throw e;
  }
};

export {
  fetchSucculents,
  fetchCartSucculent,
  addToCart,
  deleteCartSucculent,
  updateCartSucculent,
};
