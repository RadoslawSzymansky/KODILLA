(function () {
    var carouselWrapper = document.querySelector('.main-carousel')
    // creating html using Mustache
    var templateSlide = document.getElementById('template-slide').innerHTML;
    Mustache.parse(templateSlide);
    var slidesHTML = ""
    slideData.forEach(e => slidesHTML += Mustache.render(templateSlide, e))
    carouselWrapper.insertAdjacentHTML('afterbegin', slidesHTML);
    // Flickity setting
    var flkty = new Flickity(carouselWrapper, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        hash: true
    });

    document.querySelector('.btnRestart').addEventListener('click', function () {
        flkty.select(0)
    })
    var progressBar = document.querySelector('.progress-bar')

    flkty.on('scroll', function (progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + '%';
    });

    window.initMap = function () {
        var index = slideData.findIndex(e => e.id === window.location.hash.replace("#", ""))
        index = index === -1 ? 0 : index;
        var map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 6,
                center: slideData[index].coords
            });
        slideData.forEach((e, i) => {
            var marker = new google.maps.Marker({
                position: e.coords,
                map: map
            })
            marker.addListener('click', () => flkty.select(i));
            flkty.on('change', function (index) {
                if (event.target.tagName !== "AREA") map.panTo(slideData[index].coords);
            });
        })
    }
})()