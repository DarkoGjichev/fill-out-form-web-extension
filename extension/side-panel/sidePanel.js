import { fetchUsers } from "./api/fetchUsers.js";
import injectData from "./utils/injectData.js";
import renderUserDetails from "./utils/renderUserDetails.js";
import { sendToCRM } from "./api/sendToCRM.js";

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
      listItem.className = "data_list--item";
      listItem.innerHTML = renderUserDetails(user);
      dataList.appendChild(listItem);

      const button = listItem.querySelector(".fillButton");
      const sendToCRMButton = listItem.querySelector(".sendToCRM");
      button.addEventListener("click", () => fillForm(user));
      sendToCRMButton.addEventListener("click", () => sendToCRM(user));
    });
  } catch (error) {
    dataStatus.textContent = `Error: ${error.message}`;
  }
});

async function fillForm(user) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: injectData,
    args: [user],
  });
}
