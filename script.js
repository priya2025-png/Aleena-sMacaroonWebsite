function placeOrder() {
    let name = document.getElementById("name").value;
    let macaroon = document.getElementById("macaroon").value;
    let quantity = document.getElementById("quantity").value;

    if (name === "" || quantity === "") {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("result").innerHTML =
        "✅ Thank you " + name +
        "<br>Your order for <b>" + quantity +
        "</b> <b>" + macaroon +
        "</b> has been placed!";
}
