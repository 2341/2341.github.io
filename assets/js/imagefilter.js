window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    img.src = 'https://diedrich.me/assets/img/imagefilter.jpg';

    img.onload = function() {
        document.getElementById("canvas").width = img.width;
        document.getElementById("canvas").height = img.height;
        ctx.drawImage(img, 0, 0);
    }

}


document.getElementById("0").addEventListener("click", function() {
    loadFilter(0);
});
document.getElementById("1").addEventListener("click", function() {
    loadFilter(3);
});
document.getElementById("2").addEventListener("click", function() {
    loadFilter(6);
});
document.getElementById("3").addEventListener("click", function() {
    loadFilter(9);
});
document.getElementById("4").addEventListener("click", function() {
    loadFilter(12);
});
document.getElementById("5").addEventListener("click", function() {
    loadFilter(15);
});
document.getElementById("6").addEventListener("click", function() {
    loadFilter(18);
});
document.getElementById("7").addEventListener("click", function() {
    loadFilter(21);
});

document.getElementById("apply").addEventListener("click", function() {
        handleFiles();
});

var filters = [
    [ //Edge detection
        [-1, -1, -1],
        [-1, 8, -1],
        [-1, -1, -1]
    ],
    [1],
    [0],
    [ //Blur1
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0]
    ],
    [13],
    [0],
    [ //Blur2
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0]
    ],
    [41],
    [0],
    [ //Motion Blur
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1]
    ],
    [9],
    [0],
    [ //Sharpen1
        [-1, -1, -1, -1, -1],
        [-1, 2, 2, 2, -1],
        [-1, 2, 8, 2, -1],
        [-1, 2, 2, 2, -1],
        [-1, -1, -1, -1, -1]
    ],
    [8],
    [0],
    [ //Sharpen2
        [-1, -1, -1],
        [-1, 9, -1],
        [-1, -1, -1]
    ],
    [1],
    [0],
    [ //Emboss
        [-1, -1, 0],
        [-1, 0, 1],
        [0, 1, 1]
    ],
    [1],
    [128],
    [ //Mean
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ],
    [9],
    [0]

]


function loadFilter(i) {
    document.getElementById("bias").value = filters[parseInt(i) + 2];
    document.getElementById("factor").value = filters[parseInt(i) + 1];
    document.getElementById("filter").value = "";
    for (var z = 0; z < filters[i].length; z++) {
        document.getElementById("filter").value += filters[i][z] + "\n";
    }

}


function handleFiles() {

    var l = document.getElementById("filter").value.split("\n")[0].split(",").length;
    var lh = parseInt(l / 2);

    var filter = new Array(l);
    for (i = 0; i < l; i++) {
        filter[i] = new Array(l);
    }
    for (var x = 0; x < l; x++) {
        var temp = "" + document.getElementById("filter").value.split("\n")[x];
        for (var y = 0; y < l; y++) {
            filter[x][y] = temp.split(",")[y];
        }

    }
    var factor = 1.0 / document.getElementById("factor").value;
    var bias = parseInt(document.getElementById("bias").value);

    var ctx = document.getElementById('canvas').getContext('2d');
    var img = new Image();
    img.src = 'https://diedrich.me/assets/img/imagefilter.jpg';
    img.onload = function() {
        document.getElementById("canvas").width = img.width;
        document.getElementById("canvas").height = img.height;
        ctx.drawImage(img, 0, 0);
        imageData = ctx.getImageData(0, 0, img.width, img.height);
        imageDataNew = ctx.getImageData(0, 0, img.width, img.height);
        for (var x = 0; x < img.width; x++) {
            for (var y = 0; y < img.height; y++) {
                var red = 0.0;
                var green = 0.0;
                var blue = 0.0;
                for (var z = 0; z < l; z++) {
                    for (var j = 0; j < l; j++) {
                        var imageX = (x - lh + z + img.width) % img.width;
                        var imageY = (y - lh + j + img.height) % img.height;
                        var index = 4 * (imageX + imageY * img.width);
                        red += imageData.data[index] * (filter[z][j]);
                        green += imageData.data[index + 1] *
                            (filter[z][j]);
                        blue += imageData.data[index + 2] *
                            (filter[z][j]);
                    }
                }
                var indexB = 4 * ((x) + (y) * img.width);
                imageDataNew.data[indexB] = factor * red + bias;
                imageDataNew.data[indexB + 1] = factor * green + bias;
                imageDataNew.data[indexB + 2] = factor * blue + bias;
            }
        }
        ctx.putImageData(imageDataNew, 0, 0);
    };
}