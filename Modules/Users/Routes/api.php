<?php

use Illuminate\Http\Request;
use Modules\Users\Http\Controllers\PasswordController;
use Modules\Users\Http\Controllers\ProfileController;
use Modules\Users\Http\Controllers\RegisterController;
use Modules\Users\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user', [UserController::class, 'current']);

    Route::patch('settings/profile', [ProfileController::class, 'update']);
    Route::patch('settings/password', [PasswordController::class, 'update']);
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('register', [RegisterController::class, 'register']);
});
