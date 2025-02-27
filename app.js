const reviews = [
    {
        avatar: "./assets/zara.jpg",
        star: "⭐️⭐️⭐️⭐️⭐️",
        author: "Zara",
        text: "Good value for money, must visit"
    },
    {
        avatar: "./assets/aviva.jpg",
        star: "⭐️⭐️⭐️⭐️",
        author: "Aviva",
        text: "Amazing service, highly recommend"
    },
    {
        avatar: "./assets/calista.jpg",
        star: "⭐️⭐️",
        author: "Calista",
        text: "Good service, but could be better"
    },
    {
        avatar: "./assets/harlyn.jpg",
        star: "⭐️⭐️⭐️⭐️⭐️",
        author: "Harlyn",
        text: "Excellent service, highly recommend"
    },
    {
        avatar: "./assets/kaira.jpg",
        star: "⭐️⭐️⭐️",
        author: "Kaira",
        text: "Good service, but could be better"
    }
];

const avatar = document.querySelector("#img");
const star = document.querySelector(".rating");
const authorName = document.querySelector("#name");
const review = document.querySelector("#review");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let currentReview = 0;

updateReview = () => {
    avatar.src = reviews[currentReview].avatar;
    authorName.textContent = reviews[currentReview].author;
    star.textContent = reviews[currentReview].star;
    review.textContent = reviews[currentReview].text;
};

next.addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview();
});

prev.addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReview();
});

updateReview();
