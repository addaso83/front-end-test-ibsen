$(function(){
    loadCategories();
    loadTBL1();

    $("#btnSearch").on("click", function(ev){
        ev.preventDefault();
        loadTBL1();
    });

    $("#btnClean").on("click", function(ev){
        ev.preventDefault();
        loadCategories();
        $("#txtTitle").val('');
        $("#txDescription").val('')
        loadTBL1();
    });
    
});

function loadTBL1(){
    $("#tbl_1").DataTable({
        "responsive": true,
        "autoWidth": false,
        "stateSave": false,
        "processing": true,
        "serverSide": true,
        "destroy": true,
        searching: false,
        paging: true,
        "lengthMenu": [[25, 30,40], [25,30, 40]],
        "ajax": {
            "url": "http://localhost:8000/api/articulospublicados",
            "type": "POST",
            "async": true,
            "data" : {categoria : $("#lstCategory").val(), titulo : $("#txtTitle").val(), descripcion:$("#txDescription").val()}
        },
        "columns": [
            { "data": "titulo" },
            { "data": "descripcion_corta" },
            { "data": "publicador" },
            { "data": "created_at" },
            { "data": "id" }
        ],
        "rowCallback": function (row, data, index) {
            $('td:eq(4)', row).html(
                "<a class='btn btn-info btn-sm'  href='/" + data.id + "'  title='Ver Anuncio'><i class='far fa-eye'></i></a>" 
            );
        }
    });
}

function loadCategories(){
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
}