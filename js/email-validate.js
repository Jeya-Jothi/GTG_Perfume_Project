const form = document.getElementById("newsletterForm");
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModal");
const okBtn = document.getElementById("modalOk");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.querySelector("input").value;

  if (!email.includes("@")) {
    return;
  }

  openModal();
  form.reset();
});

function openModal() {
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

/* Close events */
closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
