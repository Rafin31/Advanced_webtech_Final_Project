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
Route::post('/addclient', "managerAPI@addClient");
Route::post('/addemployee', "managerAPI@addEmployee");
Route::post('/addbug', "managerAPI@addBug");
Route::post('/addmeeting', "managerAPI@addMeeting");
Route::get('/clientlist', "managerAPI@clientList");
Route::get('/salarylist', "managerAPI@salaryList");
Route::get('/reportingtime', "managerAPI@reportingTimeList");
Route::get('/transactions', "managerAPI@transList");
Route::get('/financials', "managerAPI@financials");
Route::get('/requests', "managerAPI@requests");
Route::get('/acceptreq/{id}', "managerAPI@confirmApplication");
Route::get('/meetings', "managerAPI@meetingList");



Route::post('/addrequest', "meoAPI@insertRequest");
Route::get('/requestlist', "meoAPI@requestList");
Route::get('/editrequest/{id}', "meoAPI@completeEdit");
Route::get('/viewrequest/{id}', "meoAPI@completeView");
Route::get('/currencyConvert/currency', "meoAPI@currency");
Route::post('/editrequestoparation/{id}', "meoAPI@editingOparetion");
Route::post('/destroyrequest/{id}', "meoAPI@destroy");
Route::post('/addreview', "meoAPI@insertReview");
Route::get('/reviewlist', "meoAPI@reviewList");
Route::get('/requestList/export', "meoAPI@export");
Route::get('/editreview/{id}', "meoAPI@completeEditReview");
Route::get('/viewreview/{id}', "meoAPI@completeReview");
Route::post('/editreviewoparation/{id}', "meoAPI@editingOparetionReview");
Route::post('/destroyreview/{id}', "meoAPI@destroyreview");
Route::get('/edituser/{id}', "meoAPI@completeEditMeo");


