import Sortable from 'sortablejs';

const $el = document.querySelector('.sortable');
const sortable = new Sortable($el, {
    handle: '.handle',
    animation: 150,
    ghostClass: 'item-selected'
});