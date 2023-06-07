const pool = require('./dbConnection');


// Function to insert a new user into the user_table
async function insertUser(user) {
  const client = await pool.connect();

  try {
    const query = 'INSERT INTO public.user_table (user_id, name, age, phone) VALUES ($1, $2, $3, $4)';
    const values = [user.user_id, user.name, user.age, user.phone];
    await client.query(query, values);
  } catch (error) {
    throw new Error('Error executing query: ' + error.message);
  } finally {
    client.release();
  }
}

async function getUsersAsJSON() {
  const client = await pool.connect();

  try {
    const query = 'SELECT * FROM public.user_table';
    const result = await client.query(query);

    // Transform the result into JSON format
    const users = result.rows.map(row => ({
      user_id: row.user_id,
      name: row.name,
      age: row.age,
      phone: row.phone || null,
    }));

    const jsonResult = {
      status_code: 200,
      data: users,
    };

    return JSON.stringify(jsonResult);
  } catch (error) {
    throw new Error('Error executing query: ' + error.message);
  } finally {
    client.release();
  }
}

module.exports = { getUsersAsJSON, insertUser };
