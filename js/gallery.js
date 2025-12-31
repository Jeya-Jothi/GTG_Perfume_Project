const mainImage = document.getElementById("mainProductImage");
const thumbs = Array.from(document.querySelectorAll(".thumb"));
const prevBtn = document.querySelector(".nav.prev");
const nextBtn = document.querySelector(".nav.next");
const dotsContainer = document.getElementById("galleryDots");

let currentIndex = -1;

/* CREATE DOTS */
thumbs.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => changeImage(index));
  dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll(".dot"));

function changeImage(index) {
  currentIndex = index;

  mainImage.src = thumbs[index].src;

  thumbs.forEach((t) => t.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  thumbs[index].classList.add("active");
  dots[index].classList.add("active");
}

/* THUMB CLICK */
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => changeImage(index));
});

/* ARROWS */
nextBtn.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % thumbs.length;
  changeImage(nextIndex);
});

prevBtn.addEventListener("click", () => {
  const prevIndex = currentIndex <= 0 ? thumbs.length - 1 : currentIndex - 1;
  changeImage(prevIndex);
});

const IncludeFragrances = document.querySelectorAll(".include-fragrance");

IncludeFragrances.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".fragrance.active")?.classList.remove("active");
    item.classList.add("active");
  });
});

// Plan choice

const options = document.querySelectorAll(".option");

options.forEach((option) => {
  const radio = option.querySelector('input[type="radio"]');

  radio.addEventListener("change", () => {
    options.forEach((o) => o.classList.remove("active"));
    option.classList.add("active");
  });
});
