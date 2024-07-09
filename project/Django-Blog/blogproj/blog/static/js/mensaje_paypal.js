document.addEventListener('DOMContentLoaded', function () {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '99.99' // precio del producto
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // Aquí se puede manejar el éxito de la transacción
                alert('Transaction completed by ' + details.payer.name.given_name);
            });
        },
        onError: function(err) {
            // Muestra el modal de error cuando hay un problema con PayPal
            $('#errorModal').modal('show');
        }
    }).render('#paypal-button-container'); // Renderiza el botón de PayPal
});