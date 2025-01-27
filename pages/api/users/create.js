import { db } from "../../../drizzle/pool.js";
import { users } from "../../../drizzle/schemas/users";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email } = req.body;

    console.log('info: ', req.body)
    console.log('user:', username)
    if (!username || !email) {
      return res.status(400).json({ error: 'Username is required' });
    }

    try {
      // Insert the new user into the users table
      const result = await db.insert(users).values({ username, email });
      return res.status(201).json(result);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
