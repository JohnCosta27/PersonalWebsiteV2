let opened = false;

function openNav() {
  if (opened)  {
    document.getElementById('mobileNavBar').style.width = "0%";
    document.getElementById('body').style.overflowY = "scroll";
  } else {
    document.getElementById('mobileNavBar').style.width = "100%";
    document.getElementById('body').style.overflowY = "hidden";
  }
  opened = !opened;
}
