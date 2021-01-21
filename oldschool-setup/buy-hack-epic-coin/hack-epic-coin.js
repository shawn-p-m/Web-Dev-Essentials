var items = 0;
function incrementCart() {

    document.getElementById('item-quantity').value = ++items;

}

function decrementCart() {
    if (items > 0)
        document.getElementById('item-quantity').value = --items;

}

function buyNow() {
    if (items > 0) {

        document.getElementById('credit-card').style = "display:flex";
        document.getElementById('words').style = "display:none";
    }

    else {
        alert("Please add some coins to your cart!")
    }
}

function submitCard() {
    if (document.getElementById('card-number').value > 400000000000000) {

        alert("We got your card now sucker! <3")
        alert("It's " + document.getElementById('card-number').value)
        window.location.href = "../";
    } else {
        alert("Enter more digits yo")
    }
}