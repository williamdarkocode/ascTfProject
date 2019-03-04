
let nodes = ['#topHeader', '#topSubHeader', '#fixtures' , '#results' , '#table' , '#social', '#broadcast', '#tickets'];

$('.card').click((e)=> {
    let id = e.target.id;
    anime({
        targets: nodes,
        scale: [
            {value: .5, easing: 'easeOutSine', duration: 500},
            {value: 1.2, easing: 'easeInOutQuad', duration: 500},
            {value: 1, easing: 'easeInOutQuad', durartion: 250}
        ],
        delay: anime.stagger(100, {from: id})
    });
})

