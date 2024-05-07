<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'USUARIO';
    protected $primaryKey = 'id_usuario'; 
    public $timestamps = false;
    protected $fillable = [
        'nombre_usuario', 
        'password',
        'fecha_nacimiento',
        'fecha_creacion',
        'id_perfil',
        'activo',
    ];

    //Un usuario pertenece a un perfil
    public function perfil()
    {
        return $this->belongsTo(Perfil::class, 'id_perfil');
    }
}
