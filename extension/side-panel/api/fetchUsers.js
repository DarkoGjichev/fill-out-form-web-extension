export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    throw error;
  }
}
