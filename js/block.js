
class Block {

    CHARS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    preventChar = null;
    y = 0;
    id = this.uuidv4();


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

        return `
            <div id='el-${this.id}' style='position: absolute;left:0;top:0'>
                ${char.repeat(this.getQ())}
            </div>
        `;
    }
}