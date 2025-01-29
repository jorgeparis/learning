document.querySelectorAll("li").forEach((a_element) => {
  a_element.addEventListener("click", (e) => {});
});

document.querySelectorAll("a").forEach((a_element) => {
  a_element.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("OLA");
  });
});

const inputs = document.querySelectorAll('input[type="search"]');
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.setSelectionRange(input.value.length, input.value.length);
    input.focus();
  });
});
