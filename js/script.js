"use strict";

const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const themeColor = document.querySelector('meta[name="theme-color"]');
const themeStorageKey = "ahmed-portfolio-theme";

function setTheme(theme, savePreference = true) {
  const isDark = theme === "dark";
  root.dataset.theme = isDark ? "dark" : "light";
  themeColor?.setAttribute("content", isDark ? "#101a17" : "#f5f7f8");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeLabel.textContent = isDark ? "Use light theme" : "Use dark theme";

  if (!savePreference) return;
  try {
    localStorage.setItem(themeStorageKey, isDark ? "dark" : "light");
  } catch (error) {
    // The visual theme still changes for this page view.
  }
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem(themeStorageKey);
} catch (error) {
  // Storage can be disabled by the browser or its privacy settings.
}

const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
const initialTheme = savedTheme === "dark" || savedTheme === "light"
  ? savedTheme
  : (systemPrefersDark ? "dark" : "light");
setTheme(initialTheme, false);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

const projectCards = [...document.querySelectorAll(".project-card")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const searchInput = document.querySelector("#project-search");
const emptyState = document.querySelector("#empty-state");
const projectCount = document.querySelector("#project-count");
const projectStatus = document.querySelector("#project-status");
let activeCategory = "all";

function updateProjects() {
  const query = normalizeSearchText(searchInput.value).split(" ").filter(Boolean);
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const matchesCategory = activeCategory === "all"
      || card.dataset.category === activeCategory;
    const searchableText = normalizeSearchText(
      `${card.dataset.search || ""} ${card.textContent}`
    );
    const matchesSearch = query.every((term) => searchableText.includes(term));
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
  const noun = visibleCount === 1 ? "project" : "projects";
  projectCount.textContent = `Showing ${visibleCount} ${noun}`;
  projectStatus.textContent = visibleCount === 0
    ? "No projects match your filters."
    : "";
}

function normalizeSearchText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    updateProjects();
  });
});

searchInput.addEventListener("input", updateProjects);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && searchInput.value) {
    searchInput.value = "";
    updateProjects();
  }
});
document.querySelector("#clear-filters").addEventListener("click", () => {
  activeCategory = "all";
  searchInput.value = "";

  filterButtons.forEach((button) => {
    const isSelected = button.dataset.filter === "all";
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  updateProjects();
  searchInput.focus();
});

const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const messageInput = document.querySelector("#message");
const messageCount = document.querySelector("#message-count");
const fields = [
  {
    input: document.querySelector("#name"),
    error: document.querySelector("#name-error"),
    label: "Name"
  },
  {
    input: document.querySelector("#email"),
    error: document.querySelector("#email-error"),
    label: "Email"
  },
  {
    input: messageInput,
    error: document.querySelector("#message-error"),
    label: "Message"
  }
];

function validateField(field) {
  const value = field.input.value.trim();
  let errorMessage = "";

  if (!value) {
    errorMessage = `${field.label} is required.`;
  } else if (field.input === fields[0].input && value.length < 2) {
    errorMessage = "Enter at least 2 characters for your name.";
  } else if (field.input === fields[1].input && !field.input.validity.valid) {
    errorMessage = "Enter a valid email address, such as name@example.com.";
  } else if (field.input === messageInput && value.length < 10) {
    errorMessage = "Write at least 10 characters so your message has some detail.";
  }

  field.error.textContent = errorMessage;
  field.input.setAttribute("aria-invalid", String(Boolean(errorMessage)));
  return errorMessage === "";
}

fields.forEach(({ input }) => {
  input.addEventListener("input", () => {
    if (input.getAttribute("aria-invalid") === "true") {
      const field = fields.find((item) => item.input === input);
      validateField(field);
    }

    formStatus.textContent = "";
    formStatus.classList.remove("is-error");
  });
});

messageInput.addEventListener("input", () => {
  messageCount.textContent = `${messageInput.value.length} / 600`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const allFieldsAreValid = fields.map(validateField).every(Boolean);

  if (!allFieldsAreValid) {
    formStatus.textContent = "Please fix the highlighted fields, then try again.";
    formStatus.classList.add("is-error");
    const firstInvalidField = fields.find(
      (field) => field.input.getAttribute("aria-invalid") === "true"
    );
    firstInvalidField.input.focus();
    return;
  }

  formStatus.textContent = "Thanks! The demo validated your message in this browser. Nothing was sent or stored.";
  formStatus.classList.remove("is-error");
  form.reset();
  messageCount.textContent = "0 / 600";

  fields.forEach(({ input, error }) => {
    input.removeAttribute("aria-invalid");
    error.textContent = "";
  });
});
