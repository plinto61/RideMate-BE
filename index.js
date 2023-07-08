import express from 'express';
import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabase = createClient(
	process.env.SUPABASE_API_URL,
	process.env.SUPABASE_SERVICE_KEY
);

app.get('/users', async (req, res) => {
	const { data, error } = await supabase.from('users').select();
	console.log(JSON.stringify(data, null, '\t'));
	res.send(data);
});

app.listen(3000, () => {
	console.log(`> Ready on http://localhost:3000`);
});
