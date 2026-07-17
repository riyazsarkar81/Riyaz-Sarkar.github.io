function button(){
    let website = document.getElementById("oki").value;
    window.location.replace(`https://${website}`)
}

$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});