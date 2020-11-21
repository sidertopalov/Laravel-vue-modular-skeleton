<?php

use Illuminate\Http\Request;
use Modules\Test\Http\Controllers\TestController;

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

// Route::middleware('auth:api')->get('test', function (Request $request) {
//     return $request->user();
// });

// Route::get('testModule', 'TestController@index');

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('module', [TestController::class, 'index']);
});
