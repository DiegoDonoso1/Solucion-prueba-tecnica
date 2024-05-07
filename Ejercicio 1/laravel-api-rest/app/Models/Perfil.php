<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    protected $table = 'PERFIL';

    //Un perfil puede tener muchos usuarios
    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'id_perfil');
    }
}
