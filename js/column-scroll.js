
class ColumnScroll {
    BLOCKS_IN_MEMORY = 4;
    VERTICAL_DIRECTION = 1;
    SCROLL_SPEED = 1;
    TICK = 250;

    direction = 0;

    $wrapper;

    interval;

    blocks = [];

    constructor(direction, $wrapper) {
        this.VERTICAL_DIRECTION = direction || this.VERTICAL_DIRECTION;
        this.$wrapper = $wrapper;
        this.update();
        //this.interval = setInterval(this.update.bind(this), this.TICK);
    }

    shouldPush(){
        return true;
    }

    assertExitBlock() {
        
    }

    move() {
        /* this.blocks.forEach(b => {
            b.setY(this.SCROLL_SPEED * this.VERTICAL_DIRECTION);
        }); */
    }

    assertEnterBlock(){
        while (this.blocks.length < this.BLOCKS_IN_MEMORY) {
            const block = new Block();
            if (this.shouldPush()) {
                this.blocks.push(block);
                this.$wrapper.append(block.html())
                if (this.blocks.length > 1) {
                    const prevBlock = this.blocks[this.blocks.length - 1];
                    block.setY(
                        prevBlock.getY() + prevBlock.height()
                    );
                }

            } else {
                this.blocks.preppend(block.html());
                this.blocks.splice(1, 0, block);
                if (this.blocks.length > 1) {
                    const nextBlock = this.blocks[1];
                    block.setY(
                        nextBlock.getY() - nextBlock.height()
                    );
                }
            }
        }
        
    }

    update() {
        this.move();
        this.assertEnterBlock();
    }
    
}