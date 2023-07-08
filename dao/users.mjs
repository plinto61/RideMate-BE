import {db} from "./client.mjs";

async function getUsers() {
    const {data, error} = await db.from('users').select();
    return {data, error}
}

export default getUsers;