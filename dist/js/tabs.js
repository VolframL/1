let tab = function () {
  let tabNav = document.querySelectorAll('.catalog__tab'),
      tabContent = document.querySelectorAll('.catalog__content'),
      tabName;

  tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('catalog__tab_active');
      });
      this.classList.add('catalog__tab_active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
      tabContent.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('catalog__content_active') : item.classList.remove('catalog__content_active');
      })
  }

};


tab();