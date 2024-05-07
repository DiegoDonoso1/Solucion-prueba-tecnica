<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;


class usuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();

        if($usuarios->isEmpty()){
            $data = [
                'mensaje'=>'No hay usuarios registrados'
            ];
            return response() ->json($data,404);
        }

        return response()->json($usuarios, 200);
    }

    public function store(Request $request){

        $validator= Validator::make($request->all(),[
            'nombre_usuario'=> 'required',
            'password'=>'required|min:10|different:nombre',
            'id_perfil' => 'required',
            'fecha_nacimiento'=>'required|date|before_or_equal:today|date_format:Y-m-d'
        ]);

        if($validator->fails()){
            $data = [
                'mensaje'=>'Error en la validacion de datos',
                'error'=> $validator -> errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $fecha_creacion = Carbon::now();

        $usuario = Usuario::create([
            'nombre_usuario' => $request->nombre_usuario,
            'password' => $request->password,
            'fecha_creacion' => $fecha_creacion,
            'id_perfil' => $request->id_perfil,
            'fecha_nacimiento' => $request->fecha_nacimiento,
            'activo'=> 1
        ]);

        if(!$usuario){
            $data = [
                'mensaje' => 'Error al crear el usuario',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'usuario'=> $usuario,
            'status'=> 201
        ];

        return response()->json($data, 201);
    }
}