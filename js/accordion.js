const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    accordionItems.forEach((el) => {
      if (el !== item) {
        el.classList.remove("active");
        el.querySelector(".icon").textContent = "+";
      }
    });

    item.classList.toggle("active");
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
