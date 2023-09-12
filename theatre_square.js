function theatre_square(m, n, a) {
    var length = Math.ceil(m / a);
    var width = Math.ceil(n / a);
    print(length * width);
}

var input = readline().split(" ");
theatre_square(input[0], input[1], input[2]);
