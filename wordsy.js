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
    turn++;
    document.getElementById('turn').innerHTML = turn;
    
    if (turn == 7) {
        // End of game, remove deal button
        let button = document.getElementById('deal');
        button.parentNode.removeChild(button);
    }

    let table = document.getElementById(('table'));
    if ( turn == 1) {
		for (let i = 1; i <= 8; i++) {
            placeCard(i);
         }
    } else {
        // Move cards along
		for (let i = 1; i <= 4; i++) {
            document.getElementById(i + 4).innerHTML = document.getElementById(i).innerHTML;
        }
        // Deal four more
        for (let i = 1; i <= 4; i++) {
            placeCard(i);
        }
    }
}

// Returns the character in a given box
function getChar(i) {
    return document.getElementById(i).innerHTML.charAt(0);
}

// Checks if a card can be legally placed
function canPlace(c) {
    let charCount = 0;
    let bonusCount = 0;
    let bonus = false;

    // Can't be more than two cards with bonus points
    if (c in bonusPoints) {
        for (let i = 1; i <= 8; i++) {
            if (getChar(i) in bonusPoints) {
                bonusCount++;
            }
        }
        if (bonusCount >= 2) {
            return false;
        }
    }

    // Can't be more than two of any one letter
	for (let i = 1; i <= 8; i++) {
        let char = getChar(i);
		if (char == c) {
            charCount++;
        }
    }
    return charCount >= 2 ? false : true;
}

function placeCard(i) {
    let c;
    do
    	c = deck.pop()
    while (!canPlace(c));
	document.getElementById(i).innerHTML = c;
    addPoints(i);
}

function addPoints(i) {
    if (getChar(i) in bonusPoints) {
        document.getElementById(i).innerHTML
            += "<span class=\"bonusPoints\">+"
            + bonusPoints[getChar(i)]            
            +"</span>";
    }
}

let turn = 0;

let deck = ['b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd', 'd', 'd',
			'g', 'g', 'g', 'g', 'l', 'l', 'l', 'l', 'm', 'm', 'm', 'm',
        	'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'r', 'r', 'r', 'r',
        	's', 's', 's', 's', 't', 't', 't', 't', 'f', 'f', 'h', 'h',
        	'v', 'v', 'w', 'w', 'y', 'y', 'j', 'q', 'x', 'z'];

let bonusPoints = {
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