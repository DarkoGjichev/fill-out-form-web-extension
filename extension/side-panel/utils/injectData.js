export default function injectData(user) {
  for (let key in user) {
    const input = document.getElementById(key);
    if (input) input.value = user[key] || "";
  }
}
