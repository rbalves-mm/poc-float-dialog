var modal = document.getElementById("dialog");
var btnOpenDialog = document.getElementById("btnOpenDialog");
var btnCloseDialog = document.getElementById("closeOpenDialog");

btnOpenDialog.onclick = function () {
  modal.style.display = "block";
};

btnCloseDialog.onclick = function () {
  modal.style.display = "none";
};
