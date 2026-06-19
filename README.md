# JavaScript Homework – Gallery & Feedback Form

This project includes two separate tasks implemented as part of JavaScript homework.  
Both tasks focus on DOM manipulation, event handling, data storage, and integration of external libraries.

---

## 📌 **Task 1 – Image Gallery (SimpleLightbox)**

### **Goal**

Create a dynamic image gallery using JavaScript and enhance it with the SimpleLightbox library.  
The modal behavior (open, close, keyboard navigation) is fully handled by the library.

### **Key Features**

- Images are generated dynamically from a JavaScript data array.
- Each gallery item follows the required markup:
  ```html
  <li class="gallery-item">
    <a class="gallery-link" href="large-image.jpg">
      <img class="gallery-image" src="small-image.jpg" alt="Image description" />
    </a>
  </li>
  ```
- No custom event listeners are needed for opening the modal.

- SimpleLightbox is installed via **npm**:

```js
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
```

- The library is initialized **after** rendering the gallery elements into the DOM.

- Image captions are taken from the `alt` attribute.

- Captions are displayed at the bottom of the modal with a **250ms delay**, using:

```js
captionDelay: 250,
captionPosition: "bottom",
```

- Fully compatible with keyboard navigation.

---

## 📌 Task 2 – Feedback Form with Local Storage

### Goal

Create a feedback form that stores user input in `localStorage` while typing and restores the values on page reload.

### Key Requirements

- The form includes:

  - Email input (`name="email"`)

  - Message textarea (`name="message"`)

  - Submit button

- Uses **event delegation**:
  `form.addEventListener("input", ...)`

- Uses the **storage key**:
  `"feedback-form-state"`

- All saved values are trimmed (no unnecessary spaces).

- Data is stored as an object containing:

```js
{ email: "...", message: "..." }
```

- On page reload:

  - If data exists → inputs are pre-filled.

  - If not → fields remain empty.

- On submit:

  1- Both fields are validated (cannot be empty)

  2- The object is logged to the console

  3- Local storage is cleared

  4- The form is reset

- After submitting, typing again starts a fresh state (no previously saved data should appear).

---

## 🛠 Technologies Used

- HTML5

- CSS3

- Vanilla JavaScript

- SimpleLightbox (npm)

- LocalStorage API

- Event Delegation

---

## 🚀 How to Run the Project

**1- Install dependencies:**

```bash
npm install
```

**2- Start the project (if using Vite):**

```bash
npm run dev
```

**3- Open the appropriate HTML file in the browser to test each task.**

---

## 👩‍💻 Author

**Halenur Gürel**
Homework Project – JavaScript Module
Topics: Events · LocalStorage · DOM Manipulation · Libraries
