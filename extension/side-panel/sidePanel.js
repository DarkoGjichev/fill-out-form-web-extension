import { fetchUsers } from "./api/fetchUsers.js";

const fetchButton = document.getElementById("fetchUsersButton");
const dataStatus = document.getElementById("dataStatus");
const dataList = document.getElementById("dataList");

fetchButton.addEventListener("click", async () => {
  dataStatus.textContent = "Loading...";
  dataList.innerHTML = "";

  try {
    const users = await fetchUsers();
    dataStatus.textContent = `Loaded ${users.length} users`;

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<h3>${user.name}</h3><p>Email: ${user.email}</p>`;
      dataList.appendChild(listItem);
    });
  } catch (error) {
    dataStatus.textContent = `Error: ${error.message}`;
  }
});
