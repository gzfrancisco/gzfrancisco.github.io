function header_on_touchend (event) {
  event.preventDefault();
  var sidebar = document.getElementsByTagName('aside');
  var display = sidebar[0].style.display;
  sidebar[0].style.display = (display == 'block')?'none':'block';
}
function init (event) {
  var header = document.getElementsByTagName('header');
  header[1].addEventListener('touchend', header_on_touchend);
}
window.onload = init;
