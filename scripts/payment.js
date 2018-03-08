(function(window) {
  "use strict";
  var PAYMENT_POPUP = "[data-payment-thank='popup']";
  var FORM_SELECTOR = "[data-payment-info='form']";
  var App = window.App;
  var PaymentHandler = App.PaymentHandler;

  var formHandler = new PaymentHandler(FORM_SELECTOR);
  /*  var paymenthandler = new PaymentHandler(PAYMENT_POPUP);*/
  formHandler.addSubmitHandler(PAYMENT_POPUP);
  //console.log(formHandler);

})(window);
