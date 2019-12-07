
class Block {

    CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    preventChar = null;
    y = 0;
    id = this.uuidv4();
    

    blocks = {
        0: `<div class="bloque0 block" id="${'el-' + this.id}">
        000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                    </div>
                    `,
        1: `<div class="bloque1 block" id="${'el-' + this.id}">
                        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    </div>
                    `,
        2: `
            <div class="bloque2 block" id="${'el-' + this.id}">
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            </div>
        `,
        3: `
        <div class="bloque3 block" id="${'el-' + this.id}">
            333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        </div>
        `,
        4:  `
        <div class="bloque4 block" id="${'el-' + this.id}">
                        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    </div>
        `,
        5: `
        <div class="bloque5 block" id="${'el-' + this.id}">
            555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        </div>
        `,
        6: `
        <div class="bloque6 block" id="${'el-' + this.id}">
            666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        </div>
        `,
        7: `
        <div class="bloque7 block" id="${'el-' + this.id}">
            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        </div>
        `,
        8: `
        <div class="bloque8 block" id="${'el-' + this.id}">
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        </div>
        `,
        9: `
        <div class="bloque9 block" id="${'el-' + this.id}">
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        </div>    
`
    }

    constructor(preventChar) {
        this.preventChar = preventChar || '';    
    }

    getCharacter() {
        let a = this.preventChar;

        while(a === this.preventChar) {
            const v = Math.floor(Math.random() * (this.CHARS.length - 1));
            a = this.CHARS[v];
        }

        return a;
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    getQ() {
        return 200;
    }

    el() {
        return $('#el-' + this.id) ;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
        this.el().css({
            top: y + 'px'
        })
    }

    height() {
        return this.el().height()
    }

    html() {
        const char = this.getCharacter();
        return this.blocks[char];
    }

    remove() {
        this.el().remove();
    }
}
