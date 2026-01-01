const counters = document.querySelectorAll(".metric__number");
let hasAnimated = false;

const countUp = (counter) => {
  const target = +counter.dataset.target;
  let current = 0;
  const increment = Math.ceil(target / 60);

  const updateCounter = () => {
    current += increment;
    if (current >= target) {
      counter.textContent = `${target}%`;
    } else {
      counter.textContent = `${current}%`;
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        counters.forEach((counter) => countUp(counter));
        hasAnimated = true;
      }
    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(document.querySelector("#metrics"));
