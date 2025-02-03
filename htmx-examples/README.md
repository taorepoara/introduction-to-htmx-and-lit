# 🚀 </> htmx examples

This folder contains various **htmx** examples demonstrating different techniques for **making AJAX requests**, **handling events**, and **dynamically updating the DOM**.

These examples accompany the talk: **_htmx 2.0 & Web Components: A Perfect Match for Frontend Development_**. For more details, visit the [main README](../README.md).

---

## 📌 Sending requests other than `GET`

Below is an example of a button that sends a `POST` request when clicked and replaces the content of the `#status` `div` with the response.

📁 **File:** `./htmx-example-01.html`
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<button hx-post="/clicked" hx-target="#status">
   Click Me
</button>

<div id="status">Not yet clicked</div>
```

### 🔹 How it works

- When the **button is clicked**, an AJAX **`POST` request is sent** to `/clicked`.
- The server **processes the request** and returns a response.
- The **response updates the content** inside `#status`, replacing `"Not yet clicked"` with the server's response.

---

## 📌 Sending RESTful requests: `GET`, `POST`, `PUT` and `DELETE`

This example demonstrates how to use htmx to send various HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) dynamically with buttons.

📁 **File:** `./htmx-example-02.html`
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<div id="buttons">
  <button hx-get="/clicked" hx-target="#status">Send GET</button>
  <button hx-post="/clicked" hx-target="#status">Send POST</button>
  <button hx-put="/clicked" hx-target="#status">Send PUT</button>
  <button hx-delete="/clicked" hx-target="#status">Send DELETE</button>
</div>

<div id="status">No request sent</div>

<style>
  #buttons {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem; 
  }
  #buttons button {
    width: 7rem;
  }
</style>
```

### 🔹 How it works

- Clicking a button **triggers an HTTP request** of the corresponding method (`GET`, `POST`, `PUT`, or `DELETE`) to `/clicked`.
- The **server processes the request** and returns a response.
- The **response updates the content** of `#status`, displaying the result.

---

## 📌 Using the response to replace elements

This example demonstrates how **htmx can modify the DOM dynamically** based on the server's response. Different buttons trigger different types of element replacements or removals.

📁 **File:** `./htmx-example-03.html`
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<div id="test-replace">
  <button hx-get="/test-replace/innerHTML">
    If you click, this message will be replaced
  </button>

  <button hx-get="/test-replace/outerHTML" hx-swap="outerHTML">
    If you click, this button will become a div
  </button>

  <button hx-get="/test-replace/none" hx-swap="none">
    If you click, nothing changes, the response is ignored
  </button>
  
  <button hx-get="/test-replace/delete" hx-swap="delete">
    If you click, this button will disappear when the response is received
  </button>  
</div>

<style>
  #test-replace {
    display: flex;
    flex-flow: column;
    gap: 1rem;
  }
</style>
```

### 🔹 How it works

- Each button **sends a `GET` request** to `/test-replace/{type}` when clicked.
- The **server's response determines how the element is modified**:
  - `hx-swap="innerHTML"`: The button’s content is replaced with the response.
  - `hx-swap="outerHTML"`: The entire button is replaced by a new element.
  - `hx-swap="delete"`: The button disappears upon receiving the response.
  - `hx-swap="none"`: The response is ignored, and nothing changes.

---

## 📌 Choosing when to send requests

This example demonstrates how **htmx can trigger AJAX requests based on different events**, not just clicks. Each button sends a request when a specific event occurs.

📁 **File:** `./htmx-example-04.html`
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<div id="test-triggers">
  <button hx-get="/trigger/natural" hx-target="#status">
    In a button the natural event is a click
  </button>
  <button hx-trigger="mouseover" hx-get="/trigger/mouseover" hx-target="#status">
    This button triggers on mouseover
  </button>
  <button hx-trigger="mouseenter" hx-get="/trigger/mouseenter" hx-target="#status">
    This button triggers on mouseenter
  </button>
  <button hx-trigger="mouseleave" hx-get="/trigger/mouseleave" hx-target="#status">
    This button triggers on mouseleave
  </button>
</div>

<div id="status">No AJAX request sent yet</div>

<style>
  #test-triggers {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
</style>
```

### 🔹 How it works

- Each button **sends a `GET` request** to `/trigger/{event}` when the associated event occurs:
  - No explicit trigger (`hx-get`): the default event (`click`) is used.
  - `hx-trigger="mouseover"`: request is sent when hovering over the button.
  - `hx-trigger="mouseenter"`: request is sent when the mouse enters the button.
  - `hx-trigger="mouseleave"`: request is sent when the mouse leaves the button.

This allows **greater flexibility** in defining when a request should be sent, making **UI interactions more dynamic**.

---

## 📌 More triggering options

This example demonstrates how **htmx can trigger AJAX requests based on advanced conditions**, such as **time intervals**, **keyboard modifiers**, and **one-time interactions**.

📁 **File:** `./htmx-example-05.html`
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<div id="test-triggers">
  <button hx-trigger="every 5s" hx-get="/trigger/5seconds" hx-target="#status">
    Sends request every 5 seconds, no event needed
  </button>
  <button hx-trigger="click[ctrlKey]" hx-get="/trigger/ctrlclick" hx-target="#status">
    Sends request on click while pressing Ctrl
  </button>
  <button hx-trigger="click[ctrlKey] once" hx-get="/trigger/ctrlclickonce" hx-target="#status">
    Sends request on the first click while pressing Ctrl
  </button>
</div>

<div id="status">No AJAX request sent yet</div>

<style>
  #test-triggers {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
</style>
```

### 🔹 How it works

- Each button **sends a `GET` request** to `/trigger/{event}` when the specified trigger condition is met:
  - `hx-trigger="every 5s"`: **Automatically sends a request every 5 seconds**, no user interaction needed.
  - `hx-trigger="click[ctrlKey]"`: **Sends a request only when clicking while pressing Ctrl**.
  - `hx-trigger="click[ctrlKey] once"`: **Sends a request only the first time the user clicks while pressing Ctrl**.

This allows for **time-based**, **keyboard-modified**, and **one-time interactions**, making UI behaviors **more flexible and customizable**.

---


## 📌 A spinner to ease your wait

This example demonstrates how **htmx can show a loading indicator** while waiting for a slow server response. The spinner is displayed automatically when the request is in progress and disappears once the response is received.

📁 **File:** `./htmx-example-06.html`
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<div id="test-spinner">
  <button hx-get="/slow-request" hx-indicator="#panel" hx-target="#status">
    Send a slow request
  </button>
  <div id="panel">
    <div id="status">No response received yet</div>
    <img id="indicator" src="./img/spinner.gif">
  </div>
</div>

<style>
  #indicator {
    display: none;
  }
  .htmx-request #indicator {
    display: block;
  }
  #status {
    display: block;
  }
  .htmx-request #status {
    display: none;
  }
  #test-spinner {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  #indicator {
    width: 10vw;
  }
</style>
```

### 🔹 How it works

- Clicking the button **sends a `GET` request** to `/slow-request`.
- The `hx-indicator="#panel"` attribute **displays a loading indicator** while waiting for the response.
- The **CSS rules**:
  - **Hide the spinner** (`#indicator`) by default.
  - **Display the spinner and hide the status text** while the request is active (`.htmx-request` class).
  - Once the response is received, **the spinner disappears**, and the **new status is displayed**.

This provides **better user feedback** when handling slow requests, improving UX.

---


[⬅ Back to main README](../README.md)