<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Admin
Route::post('/signup', "adminAPI@insertUser");
Route::post('/signin', "adminAPI@loginVarify");
Route::post('/adduser', "adminAPI@insertUser");
Route::get('/userlist', "adminAPI@userList");
Route::get('/edituser/{id}', "adminAPI@completeEdit");
Route::post('/edituseroparation/{id}', "adminAPI@editingOparetion");
Route::post('/blockUserOparetion/{id}', "adminAPI@blockUserOparetion");
Route::post('/unblockOperation/{id}', "adminAPI@unblockOperation");
Route::post('/destroy/{id}', "adminAPI@destroy");
Route::post('/pendingUserOparation/{id}', "adminAPI@pendingUserOparation");
Route::get('/clientReq', "adminAPI@clientReq");
Route::post('/clientReqOperation/{id}', "adminAPI@clientReqOperation");
Route::post('/postNoticesOperation/{id}', "adminAPI@postNoticesOperation");
Route::post('/changePasswordOperation/{id}', "adminAPI@changePasswordOperation");
Route::get('/userList/export', "adminAPI@export");

// Client
Route::post('/Send_MoneyDone/{id}', "client_api@Send_MoneyDone");
Route::post('/WithdrawDone/{id}', "client_api@WithdrawDone");
Route::post('/PayingbillsDone/{id}', "client_api@PayingbillsDone");
Route::post('/Recharge_moneydone/{id}', "client_api@Recharge_moneydone");
Route::post('/Applydone/{id}', "client_api@Applydone");
Route::post('/Exchange_Currencydone/{id}', "client_api@Exchange_Currencydone");
Route::post('/Contactdone/{id}', "client_api@Contactdone");
Route::post('/Client_changepassword/{id}', "client_api@Client_changepassword");
Route::get('/transaction/{id}', "client_api@transaction");
Route::get('/index/{id}', "client_api@index");
