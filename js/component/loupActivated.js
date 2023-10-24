let el = document.getElementById("loupeOnClick");
// let valueLoupe = document.getElementById("loupeOnClick").value
console.log(el)
el?.addEventListener(  
      "click",
      function () {
        loupeOnClick(valueLoupe)
      },
      false,
    );