

const monsters = {
    FireSprite: {
        position: {
            x: 500,
            y: 550
        },
        image: {
            src: './images/embySprite.png'
        }, 
        frames: {
            max: 4, 
            hold: 20
        }, 
        animate: true,
        name: 'Fire Sprite',
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    Dragon: {
        position: {
            x: 1500,
            y: 200
        },
        image: {
            src: './images/draggleSprite.png'
        }, 
        frames: {
            max: 4, 
            hold: 20
        }, 
        animate: true, 
        isEnemy: true,
        name: 'Dragon',
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}