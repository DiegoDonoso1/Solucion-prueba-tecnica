<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\usuarioController;
use App\Http\Controllers\Api\perfilController;

Route::get('/usuarios',[usuarioController::class,'index']);

Route::get('/perfiles',[perfilController::class,'index']);

Route::post('/usuarios',[usuarioController::class, 'store']);





