[".collapsed-menu"].forEach((val) => {
  Array.prototype.forEach.call(document.querySelectorAll(val), (ele) => {
    ele.children[0].onclick = (e) => {
      ele.classList.toggle("toggled");
    };
  });
});
