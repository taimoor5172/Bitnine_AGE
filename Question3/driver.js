require('dotenv').config();
const { insertUser, getUsersAsJSON } = require('./userTable');

async function main() {
  try {
    // Insert a new user
    const user = {
      user_id: 1,
      name: 'Taimoor',
      age: 22,
      phone: '123-456-1927'
    };
    await insertUser(user);
    console.log('User inserted successfully!');

    // Retrieve users as JSON
    const jsonResult = await getUsersAsJSON();
    console.log(jsonResult);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
