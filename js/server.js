$(document).ready(function(){

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }    


$("#send").on("click", function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var info = $("#info").val();

    if($.trim(name).length> 0 && $.trim(email).length > 0)
    {
        if(validateEmail(email))
        {
            $.ajax({
                url: "includes/send.php",
                type: "POST",
                data: { name: name, email: email, info: info},
                success: function(resp){
        
                        if(resp){
                            limpiarInputs();
                            $("#snackbar").text("¡Muchas gracias por tu interés!");
                            var x = document.getElementById("snackbar");
                            x.className = "show";
        
                            setTimeout(function(){
                                 x.className = x.className.replace("show", ""); 
                                }, 3000);
                        }else{
                            alert("Error en el servidor");
                        }
                },
                error: function(error){
                    alert("Error en el servicio :(");
                }
                
                });
        }
        
    }else{
        $("#snackbar-error").text("¡Completar los campos vacios, por favor!");
        var x = document.getElementById("snackbar-error");
        x.className = "show";

        setTimeout(function(){
             x.className = x.className.replace("show", ""); 
            }, 3000);
    }

});



$("#send2").on("click",function(event){
    var name = $("#name").val();
    var email = $("#email").val();
    var info = $("#info").val();

    if($.trim(name).length> 0 && $.trim(email).length > 0)
    {
        if(validateEmail(email))
        {
            $.ajax({
                url: "includes/send.php",
                type: "POST",
                data: { name: name, email: email, info: info},
                success: function(resp){
        
                        if(resp){
                            //alert("Su reserva fue realizada correctamente");
                            $("#snackbar").text("¡Muchas gracias por tu interés!");
                            limpiarInputs();
                            var x = document.getElementById("snackbar");
                            x.className = "show";
        
                            setTimeout(function(){
                                 x.className = x.className.replace("show", ""); 
                                 window.location.href = "../";                          
                                }, 3000);
                                
                            event.preventDefault();
                        }else{
                            alert("Error en el servidor");
                        }
                },
                error: function(error){
                    alert("Error en el servicio :(");
                }
                
                });

        }

    }else{
        $("#snackbar-error").text("¡Completar los campos vacios, por favor!");
        var x = document.getElementById("snackbar-error");
        x.className = "show";

        setTimeout(function(){
             x.className = x.className.replace("show", ""); 
            }, 3000);
    }
});


function limpiarInputs(){
    $("#name").val('');
    $("#email").val('');
    $("#info").val('');
}

});