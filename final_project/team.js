function team() {

    document.getElementById("right").innerHTML = '';
    var iframe=document.createElement('iframe');
    iframe.setAttribute('src','team.html');
    iframe.setAttribute('width','78%');
    iframe.setAttribute('height','680px');
    iframe.setAttribute('float','left');
    document.getElementById("right").appendChild(iframe);
}