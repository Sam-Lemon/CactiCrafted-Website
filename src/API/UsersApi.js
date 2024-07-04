const API_USERS = 'https://667e89e5f2cb59c38dc617c6.mockapi.io/users';


export const putUsers = async (id, name, email) => {
    try {
        const resp = await fetch(`${API_USERS}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        if (!resp.ok) {
            throw new Error('Failed to update user: ${resp.status} ${resp.statusText}');
        }
        return await resp.json();
    } catch(e) {
        console.log("Put ain't puttin", e);
        throw e;
    }
}


