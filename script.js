function verificarPalindromo(string){
    if(!string) return;

    return string.split("").reverse("").join("") === string;

}
console.log(verificarPalindromo("gato"));
