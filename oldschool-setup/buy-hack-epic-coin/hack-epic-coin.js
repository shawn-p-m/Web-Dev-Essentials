var i = 0;
function incrementCart() {

    document.getElementById('item-quantity').value = ++i;

}

function decrementCart() {
    if (i > 0)
        document.getElementById('item-quantity').value = --i;

}
