# </> htmx & Web Components: A Perfect Match for Frontend Development

This repository contains all the code and examples from my talk:  
**_htmx 2.0 & Web Components: A Perfect Match for Frontend Development_**, presented at:

- **2024-09-24** - [FinistDevs](https://noti.st/lostinbrittany/YtYnR4/htmx-2-0-web-components-a-perfect-match-for-frontend-development) (Brest, France)
- **2025-02-04** - [Jfokus](https://www.jfokus.se/talks/2244) (Stockholm, Sweden)

This talk explores how **htmx 2.0** enhances HTML with seamless interactivity while **Web Components** (Lit) encapsulate logic and styling, providing a powerful yet lightweight alternative to heavy frontend frameworks.

![Introduction to </> htmx](./img/screenshot-1024px.jpg)  
_Above: Screenshot from the presentation._

---

## 📌 What you’ll find in this repository
- 🔹 **htmx** examples: AJAX requests, dynamic updates, event handling  
- 🔹 **Web Components** using **Lit**: encapsulated UI components  
- 🔹 **htmx + Web Components**: combining both for a structured yet flexible UI  
- 🔹 **Live Demos** and hands-on examples to experiment with  

---

## 🚀 </> htmx Examples

### 📌 Sending requests other than `GET`

Below is an example of a button that sends a `POST` request when clicked and replaces the content of the `#status` `div` with the response.

File `frontend/example-htmx-01.html`:
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<button hx-post="/clicked" hx-target="#status">
   Click Me
</button>

<div id="status">Not yet clicked</div>
```

#### 🔹 How it works

When the button is clicked, an AJAX POST request is sent to /clicked.
The response replaces the content of the #status div.

### 📌 Sending RESTful requests: `GET`, `POST`, `PUT` and `DELETE`

This example demonstrates how to use htmx to send various HTTP methods (GET, POST, PUT, DELETE) dynamically with buttons.

File `frontend/example-htmx-02.html`:
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

#### 🔹 How it works

Clicking a button triggers an HTTP request of the corresponding method (GET, POST, PUT, or DELETE) to /clicked.
The server processes the request and returns a response.
The response updates the content of #status, displaying the result.


