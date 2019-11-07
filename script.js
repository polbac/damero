
var $cols;
var colScrollPosition = [];
var DELTA_WHEEL = 0;
var INCREMENT = 0.5;

function init() {
    $col = $(".col");

    $col.each(function() {
        colScrollPosition.push(0);
    });

    $('html').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta / 400 > DELTA_WHEEL) {
            scrollUp();
        }

        if(e.originalEvent.wheelDelta / 400 < (-DELTA_WHEEL)) {
            scrollDown();
        }
    });

    renderBlock();
}

function scrollUp() {
    colScrollPosition[0] += INCREMENT;
    colScrollPosition[1] -= INCREMENT; 
    colScrollPosition[2] += INCREMENT; 
}

function scrollDown() {
    colScrollPosition[0] -= INCREMENT;
    colScrollPosition[1] += INCREMENT; 
    colScrollPosition[2] -= INCREMENT; 
}

function renderScroll() {
    $(".col").each(function(index){
        $(this).css({
            top: (colScrollPosition[index] * 50) + "px"
        });
    });
}

setInterval(renderScroll, 500)

function getOffsetRandom() {
    return Math.random() > 0.5 ? '50' : '0';
}

function renderBlock() {
    var CHAR = '0';
    var qEl = 50 + Math.abs(Math.random() * 10);

    var CHARS = ['1', '2', '3', '4', '5']

    for (var a = 0; a < qEl; a++) { 
        var content = ''
        var r = Math.floor(Math.random() * (CHARS.length - 1));
        var char = CHARS[r];
        var Q_LINES = 5;
        var currentQLine = 0;

        while (currentQLine<Q_LINES) {
            var q = 93
            for (var i=0;i<q; i++) {
                content += char;
            }

            $col.eq(currentQLine).append('<div class="el" >' + content + '</div>');
            currentQLine++;
        }
    }
    
    
}






$(document).ready(init)