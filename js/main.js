function hideNavbar() {
  document.getElementById("nav-mobile").classList.toggle("show");
}

function showSidebar() {
  document.getElementById("sidebar").classList.toggle("mobile");
}

function showContent() {
  document.getElementById("section-content").style.display = "flex";
  document.getElementById("section-alert").style.display = "none";
  document.getElementById("table-message").style.display = "none";
  document.getElementById("nav-tabs-top").style.display = "flex";
  document.getElementById("modal-show").classList.toggle("show");
  document.querySelector(".section").style.display = "block";
}
function showContentView() {
  document.getElementById("table-message").style.display = "none";
  document.getElementById("nav-tabs-top").style.display = "flex";
  document.getElementById("modal-showView").classList.toggle("show");
  document.getElementById("tap-content").style.display = "block";
}

function showModal() {
  document.getElementById("modal-show").classList.toggle("show");
}
function hideModal() {
  document.getElementById("modal-show").classList.toggle("show");
}

function hideModalView() {
  document.getElementById("modal-showView").classList.toggle("show");
}

function exitModal() {
  document.getElementById("modal-show").classList.toggle("hide");
}

function showView() {
  document.getElementById("modal-showView").classList.toggle("show");
}

$(".li").click(function () {
  $(".li").removeClass("active");
  $(this).addClass("active");
});
