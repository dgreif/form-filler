(function () {
    'use strict';

    function waitForSubmitButton() {
        setTimeout(function () {
            var submitButton = document.getElementById('add-to-cart');

            if(submitButton) {
                submitButton.click();
            } else {
                console.log('waiting for submit button');
                waitForSubmitButton();
            }
        });
    }

    waitForSubmitButton();
})();
