# Prueba Técnica Desarrollador React

Este repositorio contiene mi solución para la prueba técnica de desarrollador React. 

## Ejercicios

### 1. Formulario de Registro de Usuario

- **Tecnologías Utilizadas**: ReactJS para el frontend, Laravel con SQL Server para el backend.
- **Descripción**: Se desarrolló un formulario que registra un usuario con los siguientes datos:
  - Nombre de usuario
  - Password
  - Fecha de nacimiento
  - Fecha de creación
  - Id de perfil
  - Activo
- **Validaciones**:
  - Verificación en el frontend de que todos los datos estén ingresados y que el formato de la fecha sea DD-MM-YYYY.
  - Validaciones en el lado del servidor:
    - La fecha de nacimiento no debe ser mayor a hoy.
    - La contraseña no debe contener el nombre de usuario y debe tener una longitud de al menos 10 caracteres.

### 2. Modal con Bootstrap

- **Tecnologías Utilizadas**: HTML, JavaScript (con uso de jQuery), Bootstrap.
- **Descripción**: Se creó un modal con Bootstrap que contiene los siguientes elementos:
  1. Nombre
  2. Rut con DV
  3. Medicamento (lista desplegable)
  4. Email
  - Al presionar "Aceptar", se muestra un alert con los datos ingresados.
  - Se realizan validaciones para el DV del Rut, existencia de datos ingresados y el formato de email.

## Revisión de Código

### Preguntas Teóricas

1. **Problema en Código**: Se adjunta un archivo "respuestas_teóricas.txt" con la respuesta a la pregunta sobre un problema de código y su solución.
2. **Funcionalidad de Código C#**: Se explica la funcionalidad del código C# dentro de un Webform en el archivo "respuestas_teóricas.txt".

## Instrucciones de Ejecución

1. Clona este repositorio.
2. Instala las dependencias necesarias para el frontend y backend.
3. Ejecuta la aplicación.

## Ejecución Local

### Frontend (React)

bash
cd frontend
npm install
npm start

### Frontend (React)
cd backend
composer install
cp .env.example .env
# Configura tu base de datos en el archivo .env
php artisan migrate
php artisan serve
