document.addEventListener("DOMContentLoaded", function () {
  const demoBtn = document.getElementById("demo-btn");

  demoBtn.addEventListener("click", function () {
    alert("Hello! The JavaScript is working correctly.");
    console.log("Button clicked - everything works!");
  });

  console.log("Application JavaScript loaded successfully");
});
