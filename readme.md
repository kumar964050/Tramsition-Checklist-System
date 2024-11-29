# **Checklist-System Documentation**

<!-- This documentation provides a detailed overview of setting up the system, understanding its logic, and instructions for adding or modifying checklist rules. It is designed to ensure clarity for developers or users who work with this system in the future. -->

# **Folder Structure**

```
├── controllers/
├── public/
│ ├── css/
│ ├── images/
│ ├── js/
├── routes/
├── rules/
├── services/
├── views/
├── .env
├── app.js
├── index.js
├── package-lock.json
├── package.json
```

---

<!-- ## **Setup Instructions**

### **1. Prerequisites**

- Node.js (v14+ recommended)
- npm (Node Package Manager)
- Basic understanding of JavaScript, Express, and EJS -->

### **1. Installation**

<!-- 1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd Checklist-System
   ```

2. Install dependencies:

   ```bash
   npm install
   ``` -->

1. Create a `.env` file in the root directory and configure it:

   ```env
   PORT=3000
   API_URL=url
   ```

2. Start the server in development mode:

   ```bash
   npm run dev
   ```

3. Start the server in production:

   ```bash
   npm start
   ```

4. Access the application in a browser at [http://localhost:3000](http://localhost:3000).

---

<!-- ## **Logic Overview**

### **Core Components**

1. **Rules Definition (`rules/checklist.rules.js`)**
   Contains rules for evaluating the checklist data. Each rule has:

   - `id`: A unique identifier for the rule.
   - `description`: A short explanation of what the rule checks.
   - `check`: A function that takes data as input and returns `true` (if passed) or `false` (if failed).

2. **API Service (`services/api.service.js`)**
   Fetches data from an external API configured via the `.env` file. The data is evaluated against the rules.

3. **Controller (`controllers/checklist.controller.js`)**

   - Fetches data using the API service.
   - Evaluates the fetched data against defined rules.
   - Prepares results and renders them on the `dashboard.ejs` view.

4. **View (`views/dashboard.ejs`)**
   Displays the checklist evaluation results in a tabular format.

--- -->

## **2. How Checklist Rules Work**

### **1. Rule Structure**

Each rule in the `checklist.rules.js` file is defined as an object:

- **Example:**

  ```javascript
  {
    id: 1,
    description: "Valuation Fee Paid",
    check: (data) => data.isValuationFeePaid === true
  }
  ```

- **Explanation:**
  - `id`: Unique ID of the rule (integer).
  - `description`: Short explanation of the rule.
  - `check`: A function that evaluates a condition based on the API response data. Returns `true` if the condition passes, otherwise `false`.

---

### **2. Adding a New Rule**

To add a new rule:

1. Open the `rules/checklist.rules.js` file.
2. Add a new rule object to the `checklistRules` array.

   - **Example:**
     ```javascript
     {
       id: 5,
       description: "Applicant Age Over 21",
       check: (data) => data.applicantAge > 21
     }
     ```

3. Save the file. The new rule will automatically be applied when the system evaluates the checklist.

---

### **3. Modifying an Existing Rule**

1. Locate the rule in the `checklistRules` array by its `id`.
2. Update the `description` or modify the `check` function logic.

   - **Example:**
     ```javascript
     {
       id: 3,
       description: "Risk Rating Low or Medium",
       check: (data) => ["Low", "Medium"].includes(data.riskRating)
     }
     ```

3. Save the file. The modified rule will be applied during the next evaluation.

---

<!-- ### **4. Rule Evaluation Process**

1. **Fetch Data:**
   Data is fetched from the external API using `api.service.js`.

2. **Apply Rules:**
   Each rule’s `check` function is called with the fetched data. If the condition is met, the rule’s status is marked as `"Passed"`; otherwise, it is marked as `"Failed"`.

3. **Render Results:**
   The results are displayed in the `dashboard.ejs` view.

- **Example Result Object:**
  ```javascript
  {
    id: 1,
    description: "Valuation Fee Paid",
    status: "Passed"
  }
  ```

--- -->

<!-- ## **Extending the System**

### **1. Adding Custom Data Sources**

If you want to fetch data from a different API:

1. Update the `API_URL` in the `.env` file with the new API endpoint.
2. Adjust the `api.service.js` logic to parse the data structure of the new API.

### **2. Enhancing the Dashboard**

The `dashboard.ejs` file can be customized to include:

- Additional columns (e.g., timestamps or rule categories).
- Visual indicators (e.g., icons for Passed/Failed).

### **3. Implementing Additional Features**

You can expand the system with features like:

- **User Authentication:** Secure the checklist with login functionality.
- **Rule Categories:** Group rules into categories for better organization.
- **Real-Time Updates:** Fetch and re-evaluate data periodically.

---

## **Error Handling**

### **1. Data Fetching Errors**

Errors in fetching data from the API are logged, and the user is notified via a 500 status error.

- **Code in `api.service.js`:**
  ```javascript
  console.error("Error fetching data: ", error.message);
  throw new Error("Failed to fetch data");
  ```

### **2. Checklist Evaluation Errors**

Any errors in processing rules are logged, and the user sees a generic error message:

- **Code in `checklist.controller.js`:**
  ```javascript
  catch (error) {
    res.status(500).send("Error processing checklist");
  }
  ```

---

## **Best Practices**

1. **Keep Rules Modular:**
   Each rule should have a single, specific responsibility. This ensures maintainability.

2. **Document New Rules:**
   Add comments explaining the purpose of each rule, especially complex ones.

3. **Test New Rules:**
   Ensure that all new rules are validated against edge cases. -->
