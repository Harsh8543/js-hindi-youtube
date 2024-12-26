function one(){
    console.log("one")
    Two()
}

    function Two(){
    console.log("Two")
        Three()
}
function Three(){
    console.log("Three")
}
one()
Two()
Three()
