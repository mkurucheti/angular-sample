app.filter("myfilter", function(){
    return function(input) {
        return input + "s";
    }
});