window.addEventListener("load", function() {
    document.getElementById("cambiar_color").addEventListener("click", function() {
        var colorfondo = document.getElementById("colorfondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", colorfondo);
    });
});