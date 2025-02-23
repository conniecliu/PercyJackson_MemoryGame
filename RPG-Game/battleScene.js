
const battleBackgroundImage = new Image()
battleBackgroundImage.src = './images/battleBackground.png'

const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})



let dragon 
let fireSprite 
let renderedSprites 
let battleAnimationId 
let queue


function initBattle() {
    document.querySelector('#userInterface').style.display = 'block'
    document.querySelector('#dialogueBox').style.display = 'none'
    document.querySelector('#enemyHealthBar').style.width = '100%'
    document.querySelector('#playerHealthBar').style.width = '100%'
    document.querySelector('#attacksBox').replaceChildren()


    dragon = new Monster(monsters.Dragon)
    fireSprite = new Monster(monsters.FireSprite)
    renderedSprites = [dragon, fireSprite]
    queue = []

    fireSprite.attacks.forEach((attack) =>{
        const button = document.createElement('button')
        button.innerHTML = attack.name
        document.querySelector('#attacksBox').append(button)
    })

    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', (e) => {
            const selectedAttack = attacks[e.currentTarget.innerHTML]
            fireSprite.attack({
                attack: selectedAttack, 
                recipient: dragon,
                renderedSprites
        
            })
    
            if (dragon.health <= 0){
                queue.push(() => {
                    dragon.faint()
                })
    
                //fades to black 
                queue.push(() => {
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        onComplete:() => {
                            cancelAnimationFrame(battleAnimationId)
                            animate()
                            document.querySelector('#userInterface').style.display = 'none'
                            gsap.to('#overlappingDiv', {
                                opacity: 0
                            })
                            battle.initiated = false
    
                        }
                    })
                })
            }
    
            //dragon or fire sprite attacks here 
            const randomAttack = dragon.attacks[Math.floor(Math.random() * dragon.attacks.length)]
            queue.push(() => {
                dragon.attack({
                    attack: randomAttack,
                    recipient: fireSprite,
                    renderedSprites
                })
    
                if (fireSprite.health <= 0){
                    queue.push(() => {
                        fireSprite.faint()
                    })

                    queue.push(() => {
                        gsap.to('#overlappingDiv', {
                            opacity: 1,
                            onComplete:() => {
                                cancelAnimationFrame(battleAnimationId)
                                
                                document.querySelector('#userInterface').style.display = 'none'
                                gsap.to('#continuePage', {
                                    opacity: 1
                                })
                                battle.initiated = false
                                playAgain()
        
                            }
                        })
                    })
                }
            })
    
            
        })
        button.addEventListener('mouseenter', (e) => {
            const selectedAttack = attacks[e.currentTarget.innerHTML]
            document.querySelector('#attackType').innerHTML = selectedAttack.type
    
        })
    })
}

function animateBattle(){
    battleAnimationId = window.requestAnimationFrame(animateBattle)
    battleBackground.draw()

    renderedSprites.forEach((sprite) => {
        sprite.draw()
    })
}

animate()


document.querySelector('#dialogueBox').addEventListener('click', (e) => {
    if (queue.length > 0){
        queue[0]()
        queue.shift()
    } else 
    e.currentTarget.style.display = 'none'


})