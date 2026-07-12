function noSpace(x) {

//   (1): Method.
    return x.replaceAll(" ", "");

//    (2) Method.
    return x.split(" ").join("");

}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));