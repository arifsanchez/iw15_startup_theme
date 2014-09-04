function getip(json){
    var info, container = document.getElementById('ipinfo');
 
    try {
        info = jQuery.parseJSON(json);
        container.innerHTML = info.ip;
    } catch(e) {
        container.innerHTML = "error " + e;
    }
}