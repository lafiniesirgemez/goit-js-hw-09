const storage_key = "feedback-form-state"; //key for localstorage

//selecting the form element
const form = document.querySelector(".feedback-form"); // we were going to listen both input and submit events

const savedData = loadFormData(); //loading saved data from localstorage
if (savedData) {
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

//listening input event with delegation
form.addEventListener("input", (event) => {
  const { name, value } = event.target;

  if (name !== "email" && name !== "message") return;

  const trimmedValue = value.trim();
  const currentData = loadFormData() || {};
  const newData = { ...currentData, [name]: trimmedValue };

  saveFormData(newData);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert("Please fill in all fields before submitting the form.");
    return;
  }

  const dataLog = { email, message };
  console.log(dataLog);

  localStorage.removeItem(storage_key); // Clear saved data from localstorage after submission
  form.reset();
});

function loadFormData() {
  const saved = localStorage.getItem(storage_key);
  if (!saved) return null;

  try {
    return JSON.parse(saved);
  } catch (error) {
    console.error("Error parsing saved form data:", error);
    return null;
  }
}

function saveFormData(data) {
  localStorage.setItem(storage_key, JSON.stringify(data));
}
