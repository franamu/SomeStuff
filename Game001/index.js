window.menu = document.getElementById('menu-box');
window.selector = document.getElementById('select-layer');
window.gameBox = document.getElementById('game-box');

class Player {
    constructor(button) {
        this.player = document.getElementById('player01');
        this.jumpButton = button;
    }

    jump(e) {
        const key = e.keyCode || window.event.keyCode;

        switch (key) {
            case this.jumpButton:
                alert('jump');
                break;
            case 27:
                window.gameBox.style.display = 'none';
                window.menu.style.display = 'block';
                break;

            // default:
            //     alert(key);
        }
    }
}

// document.onkeydown = playerOne.jump.bind(window.playerOne);

// document.getElementById('player01').addEventListener('keydown', e => move(e));

document.getElementById('resume-game').addEventListener('click', e => {
    e.preventDefault();

    window.menu.style.display = 'none';
    window.selector.style.display = 'block';
});

document.onkeydown = manageKeyboard;


function manageKeyboard(e) {
    if (window.selector.style.display === 'block') {
        window.playerOne = new Player(e.keyCode);
        window.selector.style.display = 'none';
        window.gameBox.style.display = 'block';
    } else if (window.gameBox.style.display === 'block') {
        playerOne.jump(e).bind(window.playerOne);
    }
}