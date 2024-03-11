//JS SCRIPTS
let cartCount = 0;

function addToCart(price) {
    cartCount += price;
    updateCartCount(cartCount);
    showNotification("ADDED TO CART!");
}

function updateCartCount(count) {//use to update the cart count or value of the cart
    document.getElementById("cartCount").innerText = count;
}

function showNotification(message) {//function for notifying the user 
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);// to set the notif to a timer
}
