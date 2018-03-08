(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function formHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  formHandler.prototype.addSubmitHandler = function(PAYMENT_POPUP) {
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      this.$element = $(PAYMENT_POPUP);
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      var $div_msg = $("<div></div>", {
        "id": "div1",
        "class": "modal",
        "modal": "open"
      });

      $div_msg.append("<p>Thank you for your payment, " + data["title"] + " " + data["username"] + "</p>")
        .append("<a href=\"payment.html\" rel=\"modal:close\" class=\"close-modal\">Close</a>");
      this.$element.append($div_msg);
    });
  };

  App.PaymentHandler = formHandler;
  window.App = App;

})(window);
