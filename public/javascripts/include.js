function getUsername(){
    var allcookies = document.cookie;
    // console.log("All Cookies : " + allcookies );
    var cookiearray = allcookies.split(';');
    for(var i=0; i<cookiearray.length; i++)
    {
        var name = cookiearray[i].split('=')[0];
        if(name == "username")
            return cookiearray[i].split('=')[1];
    }  
    return "none";
}