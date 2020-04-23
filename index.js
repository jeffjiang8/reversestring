function reverse(str) {
    //alt 1:    let reversed = ''
    //          for( let character of str ) {
    //          reversed = character + reversed
    //          }

    //alt 2:    return str.split('').reduce((reversed, character) => character + reversed, ''); 
    //          '' is the starting initial value
    return str.split('').reverse().join('')
}