'use strict';

let bubble_index = document.querySelector('.bubble_index');

let height = bubble_index.getBoundingClientRect().width;

bubble_index.style['height'] = height  + 'px';