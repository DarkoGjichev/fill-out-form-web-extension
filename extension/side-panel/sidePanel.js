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
  } catch (error) {
    dataStatus.textContent = `Error: ${error.message}`;
  }
});
