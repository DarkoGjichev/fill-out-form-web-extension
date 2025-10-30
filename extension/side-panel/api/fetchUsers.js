export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    return users.map((user) => ({
      fullName: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      company: user.company?.name,
      address: user.address?.street,
      city: user.address?.city,
      postcode: user.address?.zipcode,
    }));
  } catch (error) {
    throw error;
  }
}
