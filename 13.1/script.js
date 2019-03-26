(function () {
    'use strict'
    var data = [{
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        },
    ];

    function createDivs(arr) {
        var fragment = document.createDocumentFragment();
        arr.forEach(function (obj) {
            var div = document.createElement('div');
            div.setAttribute('id', obj.id);
            div.innerHTML = `<header><h1>${obj.title}</h1></header>${obj.content}`;
            if (obj.categories.length) obj.categories.forEach(e => div.classList.add(e));
            fragment.appendChild(div);
        })
        document.body.appendChild(fragment)
    }
    // events
    document.querySelector('.start').addEventListener('click', createDivs.bind(null, data));

})()