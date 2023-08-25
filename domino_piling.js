
function dominos(m, n) {
    var num_dominos = Math.floor((m * n) / 2);
    print(num_dominos);
}

var input = readline().split(' ');
dominos(input[0], input[1]);