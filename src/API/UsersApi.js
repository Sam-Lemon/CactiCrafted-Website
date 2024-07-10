
const API_USERS = 'https://667e89e5f2cb59c38dc617c6.mockapi.io/users';


export const fetchUsers = async () => {
    try {
        const resp = await fetch(API_USERS);
        const users = await resp.json();
        console.log('Users:', users);
        return users;
    } catch (e) {
        console.error('Error fetching users:', e);
        throw e;
    }
}

export const postUser = async (name, email) => {
    try {
        console.log('Sending user data:', { name, email });
        const resp = await fetch(API_USERS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        if (!resp.ok) {
            throw new Error(`Failed to add user: ${resp.status} ${resp.statusText}`);
        }
        const responseData = await resp.json();
        console.log('Received response:', responseData);
        return responseData;
    } catch(e) {
        console.error("Error adding user", e);
        throw e;
    }
}


