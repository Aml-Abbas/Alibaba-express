$(function() {
    var leksaker = [


        { name: 'KidKraft Lekstuga Trä', price: 1500, id: 10, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=0', category: 'Elektronik' },
        { name: 'Pinepeak Barncykel ', price: 755, id: 12, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=30', category: 'Elektronik' },
        { name: 'Mercedes Gåbil SLS', price: 25, id: 13, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=100', category: 'Hemmet' },
        { name: 'Alexs Garage Bilbana ', price: 20, id: 14, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=20', category: 'Hemmet' },
        { name: 'Alexs Garage Lastbil', price: 800, id: 15, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=10', category: 'Kontor' },
        { name: 'LEGO Förvaring 8', price: 2000, id: 16, description: ' aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/220/120/?image=400', category: 'Kontor' }
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


    appendList(leksaker, $('.leksaker-list'));

    $('.product').on('click', 'button', function(event) {
        var id = $(this).attr('id');
        addToCart(leksaker, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', function(e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });


});