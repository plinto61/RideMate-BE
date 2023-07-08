import express from 'express';
import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import getUsers from './dao/users.mjs';
import { initialiseDbClient } from './dao/client.mjs';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabase = createClient(
	process.env.SUPABASE_API_URL,
	process.env.SUPABASE_SERVICE_KEY
);

initialiseDbClient(supabase);

app.get('/users', async (req, res) => {
	console.log(await getUsers())
	let {data, error} = await getUsers(1); 
	console.log(data, error)
	res.send(data);
});

app.listen(3000, () => {
	console.log(`> Ready on http://localhost:3000`);
});
