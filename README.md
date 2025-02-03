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

File: `frontend/example-htmx-01.html`:
```html
<script src="https://unpkg.com/htmx.org@2.0.2"></script>

<button hx-post="/clicked" hx-target="#status">
   Click Me
</button>

<div id="status">Not yet clicked</div>
```

#### 🔹 How it works

When the **button is clicked**, an AJAX **`POST` request is sent** to `/clicked`. The server **processes the request** and returns a response. The **response updates the content** inside `#status`, replacing `"Not yet clicked"` with the server's response.

### 📌 Sending RESTful requests: `GET`, `POST`, `PUT` and `DELETE`

This example demonstrates how to use htmx to send various HTTP methods (GET, POST, PUT, DELETE) dynamically with buttons.

File: `frontend/example-htmx-02.html`
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

Clicking a button **triggers an HTTP request** of the corresponding method (`GET`, `POST`, `PUT`, or `DELETE`) to `/clicked`. The **server processes the request** and returns a response. The **response updates the content** of `#status`, displaying the result.

### 📌 Using the Response to Replace Elements

This example demonstrates how **htmx can modify the DOM dynamically** based on the server's response. Different buttons trigger different types of element replacements or removals.

📁 **File:** `frontend/example-htmx-03.html`
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

#### 🔹 How it works

Each button **sends a `GET` request** to `/test-replace/{type}` when clicked. The server's **response determines how the element is modified**:

- `hx-swap="innerHTML"`: The button’s content is replaced with the response.
- `hx-swap="outerHTML"`: The entire button is replaced by a new element.
- `hx-swap="delete"`: The button disappears upon receiving the response.
- `hx-swap="none"`: The response is ignored, and nothing changes.


### 📌 Choosing when to send requests

This example demonstrates how **htmx can trigger AJAX requests based on different events**, not just clicks. Each button sends a request when a specific event occurs.

📁 **File:** `frontend/example-htmx-04.html`
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

#### 🔹 How it works

Each button **sends a `GET` request** to `/trigger/{event}` when the associated event occurs:

- No explicit trigger (`hx-get`): the default event (`click`) is used.
- `hx-trigger="mouseover"`: request is sent when hovering over the button.
- `hx-trigger="mouseenter"`: request is sent when the mouse enters the button.
- `hx-trigger="mouseleave"`: request is sent when the mouse leaves the button.

This allows **greater flexibility** in defining when a request should be sent, making **UI interactions more dynamic**.


## 📜 License

This project is licensed under the MIT License.