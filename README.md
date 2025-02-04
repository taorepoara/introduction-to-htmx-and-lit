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


## 🚀 Serving the demos

To **serve the code** for all the demos and handle the **AJAX requests**, this repository includes a simple **ExpressJS server**. The server code is located in the [`/server`](./server) folder.

This server is implemented in the **simplest way possible**, ensuring that the demos work without requiring complex backend logic and all **AJAX requests** from the frontend receive appropriate responses. You can fully understand the demos **without needing to dive into the server-side code**, but it's there to help comprehension.

### 🔧 Running the demo

To start the server and run the demos locally:

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the Express server:
   ```sh
   npm run start
   ```
3. Open your browser and go to:
   ```
   http://localhost:8080
   ```

Now you're ready to explore the **htmx examples** and the **to-do list demo** in action!

---

## 🚀 htmx examples

We will begin with a collection of **htmx examples** demonstrating how to perform AJAX requests, handle dynamic updates, and customize event triggers using only declarative HTML attributes.

You can find the full list of examples in the dedicated section, **[htmx examples](./htmx-examples/README.md)**

---

## ✅ To-do list example

Then we will dive into a **very simple yet functional to-do list application** built using **htmx**. It demonstrates how to handle user interactions, manage dynamic content, and update the UI efficiently without requiring a full JavaScript framework.

You can explore the steps to create this app in the dedicated section, **[To-do list example](./todo-example/README.md)**

---

## 🔥 Lit examples

We will continue with some **simple examples using Lit**, showing how to create **Web Components** with a lightweight and efficient approach.

You can find the full list of examples in the dedicated section, **[Lit examples](./lit-examples/README.md)**


---

## 📜 License

This project is licensed under the MIT License.




