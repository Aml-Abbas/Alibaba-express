$(document).ready(function() {
    //materialize js
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.collapsible').collapsible();
});


$(function() {
    var products = [


        { name: 'Samsung TV', price: 1500, id: 1, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=0', category: 'Elektronik' },
        { name: 'Camera', price: 755, id: 2, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=30', category: 'Elektronik' },
        { name: 'Shampoo', price: 25, id: 3, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=100', category: 'Hemmet' },
        { name: 'Tandborste', price: 20, id: 4, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=20', category: 'Hemmet' },
        { name: 'Kontor Stol', price: 800, id: 5, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=10', category: 'Kontor' },
        { name: 'Skrivbord', price: 2000, id: 6, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=400', category: 'Kontor' }
    ];

    var cart = [];

    var appendList = function(array, location) {
        var template = array.map(function(item, id) {
            return `<li class="product">
            <div class="item z-depth-4">
                <div class="item_top">
                    <img src="${item.picture}" alt="">
                </div>
                <div class="item_mid">
                    <h5>${item.name}</h5>
                    <p>${item.price}kr</p>
                    <p>${item.description}</p>
                </div>
                <div class="item_bot">
                    <button id="${item.id}" class="btn red">köp</button>
                </div>
            </div>
        </li>`;
        });
        $(location).html(template);
    };
    var addToCart = function(array, id, location) {
        var a = array.find(function(i) {
            return i.id === id;

        });
        cart.push(a);
        console.log(cart);
        var item = `
        <li id="${a.id}"><a href="#!">${a.name}  <button type="button"><i class="fas fa-times-circle "></i></button></a> </li>
      `;
        // 





        $('span.amount').text(cart.length);
        $(location).append(item);
    };

    var removeFromCart = function(array, removedItem) {
        array.splice(removedItem, 1);

    };

    var populateCart = function(array, location) {
        var item = `
      <li class="item" id="${array.id}">
          <h4>${array.name}</h4>
          <button type="button">X</button>
      </li>
      `;
        $('span.amount').text(array.length);
    };


    appendList(products, $('.product-list'));

    $('.product').on('click', 'button', function(event) {
        var id = $(this).attr('id');
        addToCart(products, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', function(e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });


});