$(document).ready(function() {
    //materialize js
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    autoplay()

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
});

$(function() {
    $.getJSON("../js/app.json", function(result) {
        var electronic = result.electronic;
        var klader = result.klader;
        var leksaker = result.leksaker;
        var sport = result.sport;
        var telefon = result.telefon;

        var cart = [];

        var appendList = function(array, location) {
            var template = array.map(function(item, id) {
                return `<li class="product">
            <div class="item z-depth-1">
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
            var item = `
        <li id="${a.id}"><a href="#!">${a.name}  <i class="material-icons">clear</i></a> </li>
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


        appendList(electronic, $('.electronic-list'));
        appendList(klader, $('.klader-list'));
        appendList(leksaker, $('.leksaker-list'));
        appendList(sport, $('.sport-list'));
        appendList(telefon, $('.telefon-list'));

        $('.product').on('click', 'button', function(event) {
            var id = $(this).attr('id');
            addToCart(electronic, +id, $('.cart-list'));

        });

        $('.cart-list').on('click', 'i', function(e) {
            var item = $(e.currentTarget).closest('li').remove();
            removeFromCart(cart, item);
            populateCart(cart, $('.cart-list'));
        });

    });
});