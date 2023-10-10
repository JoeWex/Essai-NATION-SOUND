// Fonction pour ouvrir le menu
function opennav() {
  document.getElementById("mySidenav").style.right = "0";
}
// Fonction pour fermer le menu
function closenav() {
  document.getElementById("mySidenav").style.right = "-250px";
}
// Ajoutez des gestionnaires d'événements aux boutons d'ouverture et de fermeture
document.getElementById("openBtn").addEventListener("click", opennav);
document.getElementById("closeBtn").addEventListener("click", closenav);