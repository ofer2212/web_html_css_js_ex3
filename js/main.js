(function ($) {

    this.itemsContent = [];

    // initialize gallery view
    $.fn.initGal = function (lastName) {
        $.each(lastName.repeat(2).split(''), (index) => {
            $(this).append(creatItem(index));
        });
        $(this).delegate(".gallery-item", "click", handleClick);
    };

    // create gallery item
    function creatItem(id) {
        var galleryItem = $(`<div id='${id}' class='gallery-item'></div>`);
        if (id === 0) {
            galleryItem.append("<div class='plus-clip'></div>");
        } else if ((id + 1) % 3 === 0) {
            galleryItem.append("<div class='star-clip bg-white'></div>");
        }
        itemsContent.push({
            bgColor: pastelColors(),
            bgImage: `url(images/${Math.floor(Math.random() * 10) + 1}.jpg)`
        });
        galleryItem.css("background-color", itemsContent[id].bgColor);
        return galleryItem;
    }

    // handle gallery item click
    function handleClick() {
        var element = $(this);
        if (this.id === '0') {
            element.parent().append(creatItem(itemsContent.length));
            return;
        }
        if (element.css("background-image") === "none") {
            if ((this.id + 1) % 3 === 0) {
                element.find(".star-clip").removeClass("bg-white");
                element.find(".star-clip").addClass("bg-red");
            }
            element.addClass("bg-white");
            element.css("background-image", itemsContent[this.id].bgImage);
        } else {
            if ((this.id + 1) % 3 === 0) {
                element.find(".star-clip").addClass("bg-white");
                element.find(".star-clip").removeClass("bg-red");
            }
            element.removeClass("bg-white");
            element.css("background-image", 'none');
            element.css("background-color", itemsContent[this.id].bgColor);
        }

    }

    // generate random pastel color
    function pastelColors() {
        var r = (Math.round(Math.random() * 127) + 127).toString(16);
        var g = (Math.round(Math.random() * 127) + 127).toString(16);
        var b = (Math.round(Math.random() * 127) + 127).toString(16);
        return '#' + r + g + b;
    }

})(jQuery);