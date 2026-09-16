const images = [
  "images/iphone.png",
  "images/laptop.png",
  "images/airpod.png",
  "images/headphone.png",
  "images/ipad.png",
];

let currentIndex = 0;

const sliderImage = document.querySelector("#sliderImage");

const prevBtn = document.querySelector("#prevBtn");

const nextBtn = document.querySelector("#nextBtn");

const sliderDots = document.querySelector("#sliderDots");

function showImage() {
  sliderImage.src = images[currentIndex];

  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function createDots() {
  images.forEach((image, index) => {
    const dot = document.createElement("button");

    dot.classList.add("dot");

    if (index === currentIndex) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentIndex = index;

      showImage();
    });

    sliderDots.appendChild(dot);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage();
});

createDots();

showImage();

setInterval(() => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();
}, 3000);
