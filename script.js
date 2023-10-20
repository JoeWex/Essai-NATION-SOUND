// Fonction pour ouvrir le menu burger
function opennav() {
  document.getElementById("mySidenav").style.right = "0";
}
// Fonction pour fermer le menu burger
function closenav() {
  document.getElementById("mySidenav").style.right = "-250px";
}
// Ajoutez des gestionnaires d'événements aux boutons d'ouverture et de fermeture du buger
document.getElementById("openBtn").addEventListener("click", opennav);
document.getElementById("closeBtn").addEventListener("click", closenav);


// IMAGE ARTISTES
// IMAGE ARTISTES
const images = document.querySelectorAll('.artiste-image img');
const texts = document.querySelectorAll('.artiste-text');

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    if (window.innerWidth < 801) {
      texts[index].classList.toggle('show');
    }
  });
});
