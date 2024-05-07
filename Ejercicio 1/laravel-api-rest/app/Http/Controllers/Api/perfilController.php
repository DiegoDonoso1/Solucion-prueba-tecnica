<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Perfil;
use Illuminate\Http\Request;

class perfilController extends Controller
{
    public function index()
    {
        $perfiles = Perfil::all();

        if($perfiles->isEmpty()){
            $data = [
                'mensaje'=>'No hay perfiles creados'
            ];
            return response() ->json($data,404);
        }

        return response()->json($perfiles, 200);
    }
}
