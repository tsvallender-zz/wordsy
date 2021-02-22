function setup() {
    console.log('Shuffling the cards');
    
    let j, x, i;
    for (i = deck.length - 1; i> 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
}

function deal() {
    console.log('Dealing');

    
}

let deck = ['b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd', 'd', 'd',
			'g', 'g', 'g', 'g', 'l', 'l', 'l', 'l', 'm', 'm', 'm', 'm',
        	'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'r', 'r', 'r', 'r',
        	's', 's', 's', 's', 't', 't', 't', 't', 'f', 'f', 'h', 'h',
        	'v', 'v', 'w', 'w', 'y', 'y', 'j', 'q', 'x', 'z'];

var bonusPoints = {
    f: 1,
    h: 1,
    v: 1,
    w: 1,
    y: 1,
    j: 2,
    q: 2,
    x: 2,
    z: 2,
}

setup();