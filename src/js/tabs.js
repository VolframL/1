const tab = document.querySelectorAll('.catalog__tab');
const content = document.querySelectorAll('.catalog__content');

function activeTab()
{
    tab.forEach((item) =>
    item.classList.remove('catalog__tab_active'));
    this.classList.add('catalog__tab_active');
}

tab.forEach((item) =>
item.addEventListener('click', activeTab));