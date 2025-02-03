# ✅ To-do list example

This folder contains a **very simple yet functional to-do list application** built using **htmx**. It demonstrates how to dynamically add and remove tasks without reloading the page, and how to use **htmx** to send requests and update the DOM declaratively.

This example accompanies the talk: **_htmx 2.0 & Web Components: A Perfect Match for Frontend Development_**. For more details, visit the [main README](../README.md).

Here is the section for **Step 1: A static view of the to-do list**, following the same style as the previous examples:

---

## 📌 Step 1: A static view of the to-do list

We start with a **basic static structure** for the to-do list. This step sets up the **HTML layout** without any interactivity yet.

📁 **File:** `./todo-step-01.html`
```html
<div id="app" class="container">
  <div id="todo-list"></div>
  <form id="addTask">
    <input type="text" name="task" required />
    <input type="submit" value="addTask" />
  </form>
</div>
```

### 🔹 How it works

- The `#todo-list` `div` is an **empty placeholder** where tasks will be displayed.
- The form allows users to **input a task** and submit it.
- **At this stage, the form does nothing yet**, submitting the form will trigger a default page reload.

This is just a **static HTML structure**. In the next steps, we will enhance it with interactivity using **htmx**.

---

## 📌 Step 2: Adding the htmx library

Now that we have a **static structure**, we integrate **htmx** to make the form submit dynamically without reloading the page.

📁 **File:** `./todo-step-02.html`
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<div id="app" class="container">
  <div id="todo-list"></div>
  <form
    id="addTask"
    hx-post="/add-task"
    hx-trigger="submit"
    hx-target="#todo-list"
  >
    <input type="text" name="task" required />
    <input type="submit" value="addTask" />
  </form>
</div>
```

### 🔹 How it works

- We **include htmx** by adding the `<script>` tag:
  ```html
  <script src="https://unpkg.com/htmx.org@2.0.2"></script>
  ```
- The form is now **enhanced with htmx attributes**:
  - `hx-post="/add-task"`: **Sends a `POST` request** to `/add-task` when submitted.
  - `hx-trigger="submit"`: **Triggers the request when the form is submitted**.
  - `hx-target="#todo-list"`: **Replaces the content of `#todo-list`** with the server response.

With this setup, when a **user submits a new task**, the request will be sent via AJAX, and the to-do list will **update without a full page reload**.

Next, we will **handle the response and update the task list dynamically**.

---

