


$(function(){

    axios.get("http://localhost:8000/api/categorias"
    ).then(function (res) {
    
    var categorias = res.data;
    $("#lstCategory").empty();
    $("#lstCategory").append('<option value=' + ''  +'>'+'Seleccionar'+'</option>');
    for(var i=0; i <= categorias.length - 1; i++)
    {
        $("#lstCategory").append('<option value='+categorias[i].id+'>'+categorias[i].nombre+'</option>');
    }
    }).catch(function (err) {
    
    });

});