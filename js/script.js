document.addEventListener("DOMContentLoaded", function () {
  // Sélection des éléments DOM
  let navbar = document.querySelector(".navbar");
  let searchForm = document.querySelector(".search-form");
  let cartItem = document.querySelector(".cart-items-container");

  // Gestionnaire d'événements pour le bouton de menu
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };

  // Gestionnaire d'événements pour le bouton de recherche
  document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
  };

  // Gestionnaire d'événements pour le bouton du panier
  document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
  };

  // Gestionnaire d'événements pour le défilement de la fenêtre
  window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };

  // Fonction pour supprimer un élément du panier
  function removeFromCart(itemId) {
    // Remplacez cette ligne par le code réel pour supprimer l'élément du panier
    console.log("Item removed from cart: " + itemId);
  }

  // Gestionnaire d'événements pour le clic sur l'icône de la croix dans le panier
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-times")) {
      // Trouver l'élément du panier parent
      var cartItemElement = event.target.closest(".cart-items");

      // Récupérer l'identifiant unique de l'élément du panier
      var itemId = cartItemElement.dataset.itemId;

      // Appel de la fonction pour supprimer l'élément du panier
      removeFromCart(itemId);

      // Masquer l'élément du panier après la suppression
      cartItemElement.style.display = "none";
    }
  });
});
