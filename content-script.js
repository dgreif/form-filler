(function () {
  'use strict';

  var forEach = Array.prototype.forEach,
    comingSoonRegex = /coming soon|sold out/,
    foundAGoodOne;

  function getProductLinkWithText (regexForText) {
    if (foundAGoodOne) return;

    var products = document.querySelectorAll('.products .product');
    console.log('looking for ' + regexForText.toString() + ', looking in ' + products.length + ' products');

    forEach.call(products, function (product) {
      var productInnerText = product.innerText.toLowerCase();
      if (regexForText.test(productInnerText)) {
        if(!comingSoonRegex.test(productInnerText)) {
          foundAGoodOne = true;
          product.querySelector('a').click();
        } else {
          console.log('found ' + regexForText.toString() + ', but it isn\'t ready')
        }
      }
    });
  }

  function searchAndClick () {
    getProductLinkWithText(/bows/);

    if (!foundAGoodOne) {
      console.log('none found.  refreshing');
      location.reload();
    }
  }

  function removeBootstrapLink () {
    var bootstrapLink = document.getElementsByTagName('link')[4];

    bootstrapLink.remove();
  }

  function waitForProducts () {
    document.addEventListener("DOMContentLoaded", function (event) {
      removeBootstrapLink();
      searchAndClick();
    });
  }

  waitForProducts();
})();
