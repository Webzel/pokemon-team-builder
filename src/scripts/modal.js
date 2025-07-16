document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-open-modal]");
  const closeButtons = document.querySelectorAll("[data-close-modal]");
  const modals = document.querySelectorAll(".modal");

  openButtons.forEach((button) => {
    const modalId = button.getAttribute("data-open-modal");
    const modal = document.getElementById(modalId);
    button.addEventListener("click", () => {
      if (modal) modal.classList.remove("hidden");
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) modal.classList.add("hidden");
    });
  });

  // Optional: close modal on background click
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });

  // Optional: close modal with Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modals.forEach((modal) => modal.classList.add("hidden"));
    }
  });
});
