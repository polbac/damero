
class ColumnScroll {
    BLOCKS_IN_MEMORY = 10;
    VERTICAL_DIRECTION = 1;
    SCROLL_SPEED = 1;
    TICK = 20;
    speed = 0;
    direction = 0;

    $wrapper;

    interval;

    blocks = [];

    constructor(direction, $wrapper) {
        this.VERTICAL_DIRECTION = direction || this.VERTICAL_DIRECTION;
        this.$wrapper = $wrapper;
        this.update();
        this.interval = setInterval(this.update.bind(this), this.TICK);
    }

    setWheel(delta) {
        this.speed += delta;
    }

    shouldPush(){
        var speed = this.speed * this.VERTICAL_DIRECTION;
        return speed <= 0;
    }

    assertExitBlock() {
        var speed = this.speed * this.VERTICAL_DIRECTION;

        if (speed < 0) {
            const index = 0;
            const block = this.blocks[index];

            if (block.getY() + block.height() < 0) {
                this.blocks.splice(index, 1);
                block.remove();
            }
        }

        if (speed > 0) {
            const index = this.blocks.length - 1;
            const block = this.blocks[index];

            if (block.getY() > $(window).height()) {
                block.remove();
                this.blocks.splice(index, 1);
            }
        }
        
    }

    move() {
        this.blocks.forEach(b => {
            b.setY(b.getY() + ((this.SCROLL_SPEED * this.VERTICAL_DIRECTION) * this.speed));
        });
    }

    assertEnterBlock() {
        while (this.blocks.length < this.BLOCKS_IN_MEMORY) {
            const block = new Block();
            if (this.shouldPush()) {
                this.blocks.push(block);
                this.$wrapper.append(block.html())
                if (this.blocks.length > 1) {
                    const prevBlock = this.blocks[this.blocks.length-2];
                    block.setY(
                        prevBlock.getY() + prevBlock.height()
                    );
                    
                }

            } else {
                this.$wrapper.prepend(block.html());
                this.blocks.unshift(block);
                if (this.blocks.length > 1) {
                    const nextBlock = this.blocks[1];
                    block.setY(
                        nextBlock.getY() - nextBlock.height()
                    );
                }
            }
        }
        
    }

    assertRemoveBlock() {

    }

    disaccelerate() {

        if (this.speed > -0.5 || this.speed < 0.5) {
            this.speed = 0;
            return;
        }

        if (this.speed < 0) {
            this.speed += 0.1;
        }

        if (this.speed > 0) {
            this.speed -= 0.1;
        }
    }

    update() {
        this.move();
        this.assertExitBlock();
        this.assertEnterBlock();
        this.disaccelerate();
    }
    
}