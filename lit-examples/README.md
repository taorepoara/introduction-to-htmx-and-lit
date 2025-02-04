# 🚀 Lit examples

This folder contains **simple examples using Lit**, showing how to create **Web Components** with a lightweight and efficient approach.

These examples accompany the talk: **_htmx 2.0 & Web Components: A Perfect Match for Frontend Development_**. For more details, visit the [main README](../README.md).

---

## 📌 Example 1: Custom Greeting Element

The **Custom Greeting** element is a simple **Web Component** created with **Lit**.  
It takes a `name` attribute and displays a personalized greeting message.

📁 **File:** `./custom-greeting.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../styles.css">
  <title>Lit examples - Custom greeter</title>
  <script type="module" src="./custom-greeting.js"></script>
</head>

<body>
  <custom-greeting name="Jfokus 2025"></custom-greeting>    
</body>
</html>
```

📁 **File:** `./custom-greeting.js`
```js
import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

// Create your custom component
class CustomGreeting extends LitElement {
  // Declare properties
  static get properties() {
    return {
      name: { type: String }
    };
  }
  
  // Initialize properties
  constructor() {
    super();
    this.name = 'World';
  }
  
  // Define a template
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

// Register the element with the browser
customElements.define('custom-greeting', CustomGreeting);
```

Let's delve deeper into the **`custom-greeting.js`** file to understand how it defines a custom greeting element using **Lit**. We'll break down each part of the code and explain its purpose, referencing the [official Lit documentation](https://lit.dev/docs/) for clarity.

### Importing `LitElement` and `html`

```javascript
import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
```
`LitElement` is a base class provided by the Lit library for creating web components. It extends the standard `HTMLElement` and adds reactive properties and declarative templates. 

`html` is a tagged template literal function used to write HTML templates within JavaScript. It helps in defining the component's structure in a readable manner.


### Defining the Custom Element

```javascript
class CustomGreeting extends LitElement {
  // Class content...
}
```

Here, we define a new class `CustomGreeting` that extends `LitElement`. This class will encapsulate the behavior and presentation of our custom greeting component.


### Declaring Reactive Properties

```javascript
static get properties() {
  return {
    name: { type: String }
  };
}
```

The `properties` getter is a static method where we declare reactive properties for the component. In this case, we declare a property named `name` of type `String`.

Reactive properties are special because when their values change, the component automatically updates its rendering to reflect the new values.

### Initializing Properties

```javascript
constructor() {
  super();
  this.name = 'World';
}
```

The `constructor` method is called when an instance of the component is created. We begin by calling `super()` to ensure the parent class (`LitElement`) is properly initialized. Then we set a default value for the `name` property. In this case, if no `name` is provided, it defaults to `'World'`.


### Defining the `render()` method

```javascript
render() {
  return html`<p>Hello, ${this.name}!</p>`;
}
```

The `render()` method is a lifecycle method provided by `LitElement`. It defines the component's template and determines what gets rendered in the DOM. 

In this method, we use the `html` tagged template literal to define a paragraph (`<p>`) element that displays a greeting message. `${this.name}` is an expression that injects the current value of the `name` property into the template.

Whenever the `name` property changes, Lit automatically re-renders the component to reflect the new value. The [Lit documentation on rendering](https://lit.dev/docs/components/rendering/) provides more insights into how the `render()` method works and how templates are defined.

### Registering the Custom Element

```javascript
customElements.define('custom-greeting', CustomGreeting);
```

Finally, we register our `CustomGreeting` class as a custom element with the browser by calling `customElements.define()`.

The first argument is the name of the custom element (`'custom-greeting'`), which must include a hyphen per the [custom elements specification](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).

The second argument is the class that defines the element's behavior and rendering (`CustomGreeting`).

### Usage

Once defined and registered, the `<custom-greeting>` element can be used in HTML as follows:

```html
<custom-greeting name="Jfokus 2025"></custom-greeting>
```

This will render:

```
Hello, Jfokus 2025!
```

If the `name` attribute is omitted:

```html
<custom-greeting></custom-greeting>
```

It will default to:

```
Hello, World!
```

### Conclusion

This example demonstrates how to create a simple, reusable web component using Lit. By extending `LitElement`, declaring reactive properties, and defining a render method, we can encapsulate functionality and presentation in a custom element that is easy to use and maintain.

For more detailed information, you can refer to the [official Lit documentation](https://lit.dev/docs/). 


---

## 📌 Example 2: My Lit Counter

The **My Lit Counter** component is an interactive **Web Component** created with **Lit**.  
It displays a **counter** that increases when clicked and emits a **custom event**.


📁 **File:** `./my-lit-counter.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../styles.css">
  <title>Lit examples - My Lit Counter</title>
  <script type="module" src="./my-lit-counter.js"></script>
</head>

<body>
  <div class="container small">
    <my-lit-counter></my-lit-counter>  
  </div>
</body>
</html>
```

📁 **File:** `./my-lit-counter.js`
```js
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

let logoUrl = `${import.meta.url}/../assets/logo.png`;

export class MyLitCounter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        display: flex; 
        flex-flow: row wrap; 
        justify-content: space-around; 
        align-items: center; 
        background-color: #c0c0ff; 
        padding: 0.25rem; 
        border-radius: 0.25rem;
      }
      #icon {
        width: 2rem; 
        height: 2rem; 
        border-radius: 0.25rem; 
        margin: 0.25rem; 
        display: flex; 
        flex-flow: row nowrap; 
        justify-content: center; 
        align-items: center; 
        background-color: #a0a0ee; 
        cursor: pointer; 
        border-width: 2px; 
        border-style: outset; 
        border-color: buttonface;
      }
      #icon img {
        width: 1.25rem;
      }
      #value {
        font-size: 1.5rem;
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  __increment() {
    this.counter += 1;
    this.dispatchEvent(new Event('increased', {bubbles: true, composed: true}));
  }

  render() {
    return html`
      <div class="container">
        <div id="icon" @click=${this.__increment}>
          <img src=${logoUrl}>
        </div>
        <div id="value">
            ${this.counter}
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-lit-counter', MyLitCounter);
```


Let's delve deeper into the **`my-lit-counter.js`** file to understand how it defines a **dynamic counter component** using **Lit**.

### Importing the `css` function and defining scoped styles

```javascript
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
```

We define scoped styles in the **static `styles` class field** using the **tagged template literal `css` function**.

```javascript
static get styles() {
  return css`
    :host {
      display: block;
    }
    [...]
    #value {
      font-size: 1.5rem;
    }
  `;
}
```

### Defining the `render()` method

```javascript
render() {
  return html`
    <div class="container">
      <div id="icon" @click=${this.__increment}>
        <img src=${logoUrl}>
      </div>
      <div id="value">
          ${this.counter}
      </div>
    </div>
  `;
}
```

The `render()` method **creates the counter UI**:

- A **clickable image button (`#icon`)** that triggers `__increment()`.
- A **text display (`#value`)** that shows the current counter.


### Handling User Interaction

```javascript
__increment() {
  this.counter += 1;
  this.dispatchEvent(new Event('increased', { bubbles: true, composed: true }));
}
```

When the user **clicks the icon**, the `__increment()` method **increases `counter` by 1** and **dispatches a custom event** named `increased`. The event is **bubbled and composed**, meaning it can be listened for **outside the component**.

### Conclusion

This example shows how to create an **interactive Web Component** with **Lit**.  By combining **reactive properties, event handling, and declarative templates**, we can build reusable UI components efficiently.

---

