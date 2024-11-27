function receivesAFunction(receive) {
    receive();
}
function returnsANamedFunction() {
    function named() {
        console.log("named function");
    }
    return named;
} 

function returnsAnAnonymousFunction() {
    return function() {
        console.log("anonymous");
    };
}