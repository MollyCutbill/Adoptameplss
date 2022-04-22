$(document).ready(function() {
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    $(".boton").click(function() {
        $(".error").remove();
        if ($(".nombre").val() == "") {
            $(".nombre").focus().after("<span class='error'>Ingrese su nombre</span>");
            return false;
        } else if ($(".email").val() == "" || !emailreg.test($(".email").val())) {
            $(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");
            return false;
        } else if ($(".telefono").val() == "") {
            $(".telefono").focus().after("<span class='error'>Ingrese un telefono</span>");
            return false;
        } else if ($(".mensaje").val() == "") {
            $(".mensaje").focus().after("<span class='error'>Ingrese un mensaje</span>");
            return false;
        }
    });
    $(".nombre, .telefono, .mensaje").keyup(function() {
        if ($(this).val() != "") {
            $(".error").fadeOut();
            return false;
        }
    });
    $(".email").keyup(function() {
        if ($(this).val() != "" && emailreg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });
});




//Validaciones JS


//const nombre = document.getElementById("firstname")
//const apellido = document.getElementById("lastname")
//const email = document.getElementById("email")
//const contra = document.getElementById("password")
//const form = document.getElementById("form")
//const warning = document.getElementById("warnings")

//form.addEventListener("submit", e => {
//        e.preventDefault()
//        let warnings = ""
//        let entrar = false
//        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//        if (firsname.value.length < 3) {
//            warnings += 'El nombre no es valido <br>'
//            entrar = true
//        }

//        if (lastname.value.length < 3) {
//            warnings += 'El apellido no es valido <br>'
//            entrar = true
//        }

//        if (!regexEmail.test(email.value)) {
//            warnings += 'El email no es valido <br>'
//            entrar = true

//        }

//        if (contra.value.length < 8) {
//            warnings += 'La contraseña no es valida <br>'
//            entrar = true
//        }

//        if (entrar) {
//            warning.innerHTML = "warnings"
//        }
//    })





//menu

//let menu2 = document.querySelectorAll(".menu2")[0];
//let semaforo = true;

//document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
//    menu2.classList.toggle("menu2")
//})