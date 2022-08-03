const content = document.querySelectorAll('.catalog-item__content'),
      list = document.querySelectorAll('.catalog-item__list');

function toggleSlide(item) {
        document.querySelectorAll(item).forEach(function(element, index)  {
            element.addEventListener('click', e => {
                        e.preventDefault();
                        content[index].classList.toggle('catalog-item__content_active');
                        list[index].classList.toggle('catalog-item__list_active');
        });
        });
    };

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');