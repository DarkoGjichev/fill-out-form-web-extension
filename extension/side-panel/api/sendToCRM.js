export async function sendToCRM(client) {
  try {
    const res = await fetch("http://localhost:5000/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(client),
    });
    const data = await res.json();
    if (data.status === "success") {
      alert("Successfully sent client data to CRM");
    } else {
      alert("Failed to send data to CRM");
    }
  } catch (error) {
    throw error;
  }
}
