function validarRut(rutCompleto) {
  // Eliminamos puntos, guión y espacios del RUT y lo pasamos a mayúsculas
  rutCompleto = rutCompleto
    .replace(/\./g, "")
    .replace(/-/g, "")
    .replace(/\s/g, "")
    .toUpperCase();

  // Si el RUT tiene menos de 8 dígitos, no es válido
  if (rutCompleto.length < 8) {
    return false;
  }

  // Separamos el RUT del dígito verificador
  var rut = rutCompleto.slice(0, -1);
  var dv = rutCompleto.slice(-1);

  // Calculamos el dígito verificador esperado
  var suma = 0;
  var multiplo = 2;
  for (var i = rut.length - 1; i >= 0; i--) {
    suma += parseInt(rut.charAt(i)) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }
  var dvEsperado = 11 - (suma % 11);

  // Convertimos el dígito verificador esperado a texto
  var dvTexto =
    dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();

  // Comparamos el dígito verificador esperado con el ingresado
  return dv === dvTexto;
}

function formatearRut(rutCompleto) {
  // Eliminamos puntos, guión y espacios del RUT y lo pasamos a mayúsculas
  rutCompleto = rutCompleto
    .replace(/\./g, "")
    .replace(/-/g, "")
    .replace(/\s/g, "")
    .toUpperCase();

  // Si el RUT tiene menos de 8 dígitos, retornamos el RUT sin formato
  if (rutCompleto.length < 8) {
    return rutCompleto;
  }

  // Separamos el RUT del dígito verificador
  var rut = rutCompleto.slice(0, -1);

  var dv = rutCompleto.slice(-1);

  // Formateamos el RUT con el formato 11.111.111-1 o 1.111.111-1 según corresponda
  if (rut.length === 7) {
    rut = rut.slice(0, 1) + "." + rut.slice(1, 4) + "." + rut.slice(4);
  } else if (rut.length === 8) {
    rut = rut.slice(0, 2) + "." + rut.slice(2, 5) + "." + rut.slice(5);
  }

  return rut + "-" + dv;
}

$(document).ready(function () {
  $("#rutForm").on("input", function () {
    var rutSinFormato = $(this).val().trim();
    var rutFormateado = formatearRut(rutSinFormato);
    $(this).val(rutFormateado);
  });

  $("#btnAceptar").click(function () {
    var nombre = $("#nombreForm").val();
    var rut = $("#rutForm").val();
    var rutFormateado = formatearRut(rut);
    var medicamentosSeleccionados = $("#medicamento option:selected");
    var email = $("#emailForm").val();

    if (!nombre || !rut || medicamentosSeleccionados.length === 0) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    var medicamentos = [];
    // Recorremos las opciones seleccionadas para obtener sus textos
    medicamentosSeleccionados.each(function () {
      medicamentos.push($(this).text());
    });

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (!validarRut(rut)) {
      alert("Por favor, ingrese un RUT chileno válido.");
      return;
    }

    var mensaje =
      "Nombre: " +
      nombre +
      "\n" +
      "RUT: " +
      rutFormateado +
      "\n" +
      "Medicamentos: " +
      medicamentos.join(", ") +
      "\n" +
      "Email: " +
      email;

    alert(mensaje);
  });

  document
    .getElementById("openSecondModal")
    .addEventListener("click", function () {
      $("#primerModal").modal("hide");
      $("#segundoModal").modal("show");
    });
});
