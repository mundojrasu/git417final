function showProduct(evt, prodName) {

    var i, prodcontent, prodlinks;
    prodcontent = document.getElementsByClassName("prodcontent");
    
    //hide all product divs
    for (i = 0; i < prodcontent.length; i++) {
      prodcontent[i].style.display = "none";
    }
  
    //reset/clear the product links from active to ""
    prodlinks = document.getElementsByClassName("prodlinks");
    for (i = 0; i < prodlinks.length; i++) {
      prodlinks[i].className = prodlinks[i].className.replace(" active", "");
    }
  
    //show the product the user selected
    document.getElementById(prodName).style.display = "block";
  
    //update the menu to indicate which product is currently in view, active
    evt.currentTarget.className += " active";
  }
  
  //evenListeners for click on buttons, call and pass vars to showProduct()
  let product1 = document.getElementById("prod1link");
  product1.addEventListener("click", function(){
      showProduct(event, 'product1');
  });
  
  let product2 = document.getElementById("prod2link");
  product2.addEventListener("click", function(){
      showProduct(event, 'product2');
  });

  let product3 = document.getElementById("prod3link");
  product2.addEventListener("click", function(){
      showProduct(event, 'product3');
  });