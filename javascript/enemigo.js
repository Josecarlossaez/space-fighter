class Enemy{
 constructor(randomXint,speed){
    this.img = new Image()
    this.img.src = "./images/enemy.png"

    this.x = randomXint
    this.y = -70
    this.w = 70
    this.h = 70
    this.speed = speed
  

}



    // METODOS PARA ENEMIGO

    // DIBUJADO
    drawEnemy =() => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

  // MOVIMIENTOS
  moveEnemy = () => {
    this.y = this.y + this.speed
  }
}