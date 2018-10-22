<script>
  (function(){
  	// To keep the 'Buy Now' button working, we're adding it as a product section
    // and then removing all the other stuff


    // Remove all of the other content
    var productPhoto = document.querySelector('.product-single__photos');
    productPhoto.parentNode.removeChild(productPhoto);

    var title = document.querySelector('.product-single__title');
    title.parentNode.removeChild(title);

    var price = document.querySelector('.price');
    price.parentNode.removeChild(price);

    var description = document.querySelector('.product-single__description');
    description.parentNode.removeChild(description);


    // When the fake buttons gets clicked, trigger a click on Shopify's button
	document.querySelector('#product-button').onclick = function(){
		Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Buy it now').click();
    };

    document.querySelector('#hero-button').onclick = function(){
		Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Buy it now').click();
    };

  })();
</script>
