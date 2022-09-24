// Function Initialization
const scrollToTop = () => {
    $('html').animate({
        scrollTop: 0
    }, 'slow')
}
const collapseScrollBtn = () => {
    const isDown = $(window).scrollTop() > 250
    if (isDown) {
        $('.scroll-top').removeClass('collapse')
        return
    }
    $('.scroll-top').addClass('collapse')
}
const sendToSheets = Event => {
    Event.preventDefault()
    fetch('https://script.google.com/macros/s/AKfycby4stEtjf-BNNJXr0lPJvX5wiTc-_D44xSEOfuzzrpVG3Vf-Y8_tIaNXi6amehUjesNZA/exec', {
        method: 'POST',
        body: myContainer,
        mode: 'no-cors'
    })
        .then(
            () => {
                $('#formKontak').modal('hide')
                $('#infoSukses').modal('show')
            }
        )
}

// Event Initialization ft. JQuery
$(window).scroll(collapseScrollBtn)
$('.scroll-top').click(scrollToTop)
$('#myForm').submit(sendToSheets)