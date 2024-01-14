//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)

        //add obj to scene
        scene.add.existing(this)
        this.isFiring = false
        this.moveSpeed = 2
    }


    //update method allows us to sync this object with Phaser core update loop
    update() {
        //L R movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) { 
                this.x -= this.moveSpeed
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed
            }
        }

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyFIRE)){
            this.isFiring = true
        }

        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed
        }

        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false
            this.y = game.config.height - borderUISize - borderPadding
        }
    }
}
