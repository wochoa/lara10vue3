<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Rolesypermisos;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('app');
// });

// ROLES Y PERMISOS
Route::get('rolesypermisos', [Rolesypermisos::class,'index'])->name('Rolesypermisos');
Route::post('addpermisos', [Rolesypermisos::class,'addpermisos'])->name('addpermisos');
Route::post('updatepermisos', [Rolesypermisos::class,'updatepermisos'])->name('updatepermisos');
Route::get('verpermisos/{idrol}', [Rolesypermisos::class,'verpermisos'])->name('verpermisos');
Route::post('quitarperdelrol', [Rolesypermisos::class,'quitarperdelrol'])->name('quitarperdelrol');
Route::post('agregarperdelrol', [Rolesypermisos::class,'agregarperdelrol'])->name('agregarperdelrol');


Route::get('/{pathMatch}', function () {
    return view('app');
})->where('pathMatch', '.*');