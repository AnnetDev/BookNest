const myButton = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) { //when you scroll the page more than 350px, the button appears. otherwise it's hidden
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
});

myButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // makes sure it scrolls smoothly to the top, doesn't jump up directly
});