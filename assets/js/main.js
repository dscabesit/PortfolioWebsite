const testimonial = [
    {
        id: 1,
        name: "Chinmay Mulay",
        dsg: "Speaker",
        img: "https://avatars.githubusercontent.com/u/38172685?v=4",
        comments: "You guys are amazing!"
    },
    {
        id: 2,
        name: "Adya Pandey",
        dsg: "GDSC Lead",
        img: "https://avatars.githubusercontent.com/u/73730373?v=4",
        comments: "My Core Team is amazing"
    },
    {
        id: 3,
        name: "Ashutosh Pandey",
        dsg: "GDSC Core Team",
        img: "https://avatars.githubusercontent.com/u/57610394?v=4",
        comments: "Lead is doing great job!"
    },
    {
        id: 4,
        name: "Prakhar Sharma",
        dsg: "GDSC Core Team",
        img: "https://avatars.githubusercontent.com/u/68898714?v=4",
        comments: "Lead is doing great job!"
    },
];

// Variable to store the current testimonial
const img = document.getElementById("person-img");
const name = document.getElementById("person");
const dsg = document.getElementById("designation");
const comments = document.getElementById("comment");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentTestimonial = 0;

// Function to load the next testimonial
window.addEventListener("DOMContentLoaded", function () {
    const item = testimonial[currentTestimonial];
    img.src = item.img;
    name.textContent = item.name;
    dsg.textContent = item.dsg;
    comments.textContent = item.comments;
}
);

function showPerson() {
    const item = testimonial[currentTestimonial];
    img.src = item.img;
    name.textContent = item.name;
    dsg.textContent = item.dsg;
    comments.textContent = item.comments;
}

// Show the next testimonial
nextBtn.addEventListener("click", function () {
    currentTestimonial++;
    if (currentTestimonial > testimonial.length - 1) {
        currentTestimonial = 0;
    }
    showPerson(currentTestimonial);
});

// show previous testimonial
prevBtn.addEventListener("click", function () {
    currentTestimonial--;
    if (currentTestimonial < 0) {
        currentTestimonial = testimonial.length - 1;
    }
    showPerson(currentTestimonial);
});

