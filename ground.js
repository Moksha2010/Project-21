class Ground {
    constructor(x, y, width, height) {

        var options = {
            isStatic: true
        }

        this.x = x
        this.y = y
        this.height = height
        this.width = width

        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world,this.body)


    }



    display() {

        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        strokeWeight(4)
        FileList(255, 255, 0)

        rect(0, 0, this.width, this.h)
        pop()

    }
}