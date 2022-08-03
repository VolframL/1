const overlay = document.querySelector('.overlay').classList,
      consultBtn = document.querySelectorAll('[data-modal=consultation]'),
      consult = document.getElementById('consultation').classList,
      closeBtn = document.querySelectorAll('.modal__close'),
      order = document.getElementById('order').classList,
      descr = document.getElementById('modal-descr'),
      orderBtn = document.querySelectorAll('[data-modal=order]'),
      thanks = document.getElementById('thanks').classList,
      article = document.getElementById('article'),
      thanksBtn = document.querySelectorAll('[data-modal=thanks]'),
      subtitle = document.querySelectorAll('.catalog-item__subtitle');

consultBtn.forEach(item => {
  item.addEventListener('click', function() {
    overlay.toggle('show');
    consult.toggle('fade');
  });
});

orderBtn.forEach(function(item, index) {
  item.addEventListener('click', function() {
    overlay.toggle('show');
    order.toggle('fade');
    descr.innerHTML = subtitle[index].innerHTML;
    article.value = descr.textContent;
  });
});



thanksBtn.forEach(item => {
  item.addEventListener('click', function() {
    order.add('fade');
    consult.add('fade');
    thanks.toggle('fade');
  });
});



closeBtn.forEach(item => {
  item.addEventListener('click', function() {
    if (overlay.contains('show')) {
      overlay.remove('show');
    };
    if (!consult.contains('fade')) {
      consult.add('fade');
    };
    if (!order.contains('fade')) {
      order.add('fade');
    };
    if (!thanks.contains('fade')) {
      thanks.add('fade');
    };
  });
});