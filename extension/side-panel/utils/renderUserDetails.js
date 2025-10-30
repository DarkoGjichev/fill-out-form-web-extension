export default function renderUserDetails(user) {
  return `
        <h3>${user.fullName}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        <p><strong>Company:</strong> ${user.company}</p>
        <p><strong>Address:</strong> ${user.address}, ${user.city}, ${user.postcode}</p>
        <button type="button" class="fillButton">Fill form</button>
      `;
}
