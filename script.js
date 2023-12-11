

let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};


let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {  
    darkmode.classList.replace("bx-moon", "bx-sun"); 
    document.body.classList.add("active");
    darkmode.style.transform = "translateX(12px)";
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon"); 
    document.body.classList.remove("active");
    darkmode.style.transform = "translateX(-2px)";
  }
};

function animateElements() {
  const elements = document.querySelectorAll(".slideTobottom");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < windowHeight && elementBottom >= 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
}

// Call the animateElements function when the page loads
animateElements();

// Add a listener to the scroll event
window.addEventListener("scroll", animateElements);
