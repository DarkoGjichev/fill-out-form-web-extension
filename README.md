## Fill Out Form Web Extension

A Chromium browser extension that fetches user data from a public API.  
Select a user from the side panel to automatically fill out a form on a webpage.

---

### 1. Clone the Repository

```bash
git clone https://github.com/DarkoGjichev/fill-out-form-web-extension.git
```

### 2. Navigate into the project folder

```bash
cd fill-out-form-web-extension
```

### 3. Open the code editor

```bash
code .
```

## Public API used

**API:** [JSONPlaceholder – Users Endpoint](https://jsonplaceholder.typicode.com/users)

**Why this API:**  
Even though it provides dummy data, its structure closely mirrors the kind of real-world user or client information people interact with daily like user's names, emails, phone numbers, addresses, and company details.  
It’s free, reliable, and doesn’t require authentication, making it ideal for quick prototyping and testing autofill functionality.

## Data Transformation

The data returned from JSONPlaceholder is reshaped into a simpler, form-friendly structure before being displayed or injected.  
This transformation ensures that each key in the object directly matches an input field’s `id` in the demo form.

For example, an API response like this:

```json
{
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona"
  }
}
```

is transformed into :

```js
{
  fullName: user.name,
  username: user.username,
  email: user.email,
  phone: user.phone,
  website: user.website,
  company: user.company.name,
  address: user.address.street,
  city: user.address.city,
  postcode: user.address?.zipcode
}

```

## How to Test Autofill (Step-by-Step)

1. Load the extension

   - Follow instructions from readme file inside extension folder

2. Open the demo form

   - Open `demo.html` in a browser tab , you can use Live Server or manually open the file from it's folder

3. Open the side panel

   - Click the extension’s toolbar icon and then click on our extension icon

4. Fetch users

   - In the side panel, click on **Fetch Users**'s button
   - You will see a list of users render

5. Autofill the form
   - Make sure the **demo form tab** is the active tab
   - In the side panel, click **Fill Form** on any user
   - The form fields will populate automatically
