<?php

namespace App\Http\Controllers;

use App\Http\Requests\contact;
use App\Models\loginModel;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\withdrw;
use App\Models\usersModel;
use App\Models\requestsModel;
use App\Models\applymodel;
use App\Models\exchangecurrencymodel;
use Illuminate\Support\Facades\DB;
use App\Models\clientModel;
use App\Models\transactionModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\postNotice;

class client_api extends Controller
{
    public function index($id)
    {
        $users = usersModel::find($id)->client;
        $transaction = usersModel::find($id)->transaction->last();

        $notice = postNotice::all()->last();

        return response()->json([
            'status' => 200,
            'users' => $users,
            'transaction' => $transaction,
            'notice' => $notice,
        ]);
    }

    public function Send_MoneyDone(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'acc_number' => ['required', 'regex:/[0-9]/'],
            'amount' => ['required', 'regex:/[0-9]/'],
            'refernce' => ['required'],
            'pin' => ['required'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            $user = usersModel::find($id)->login;

            $currentval = usersModel::find($id)->client;


            if (Hash::check($req->pin,  $user['password'])) {


                DB::beginTransaction();

                if ($req->amount > $currentval['account_balance']) {
                    return response()->json([
                        'status' => 202,
                        'insufficient' => "Insufficient balance"
                    ]);
                } else {
                    try {
                        $currentval = $currentval['account_balance'] - $req->amount;


                        $sendmoney = new transactionModel;
                        $sendmoney->id = $id;
                        $sendmoney->current_balance = $currentval;
                        $sendmoney->credit = 0.0;
                        $sendmoney->credit_type = 'Null';
                        $sendmoney->debit =  $req->amount;
                        $sendmoney->debit_type =  'send money' . $req->acc_number;
                        $sendmoney->transactions_date = now()->day . '-' . now()->month . '-' . now()->year;


                        $sendmoney->save();

                        $client_table = clientModel::find($id);

                        $client_table->account_balance = $currentval;
                        $client_table->save();
                        DB::commit();
                        return response()->json([
                            'status' => 200,
                        ]);
                    } catch (\Throwable $th) {
                        DB::roleback();
                        return response()->json([
                            'status' => 201,
                            'error' => "something went wrong"
                        ]);
                    }
                }
            } else {
                return response()->json([
                    'status' => 201,
                    'error' => "something went wrong"
                ]);
            }
        }
    }
    public function WithdrawDone(Request $req, $id)
    {

        $validator = Validator::make($req->all(), [
            'p_number' => ['required', 'regex:/[0-9]/'],
            'amount' => ['required', 'regex:/[0-9]/'],
            'type' => ['required'],
            'pin' => ['required'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            $user = usersModel::find($id)->login;

            $currentval = usersModel::find($id)->client;


            if (Hash::check($req->pin,  $user['password'])) {


                DB::beginTransaction();
                if ($req->amount > $currentval['account_balance']) {
                    return response()->json([
                        'status' => 202,
                        'insufficient' => "Insufficient balance"
                    ]);
                } else {
                    try {

                        $currentval = $currentval['account_balance'] - $req->amount;

                        $Withdraw = new transactionModel;
                        $Withdraw->id = $id;
                        $Withdraw->current_balance = $currentval;
                        $Withdraw->credit = 0.0;
                        $Withdraw->credit_type = 'Null';
                        $Withdraw->debit =  $req->amount;
                        $Withdraw->debit_type =  $req->type;
                        $Withdraw->transactions_date = now()->day . '-' . now()->month . '-' . now()->year;
                        $Withdraw->save();

                        $client_table = clientModel::find($id);
                        $client_table->account_balance = $currentval;
                        $client_table->save();
                        DB::commit();
                        return response()->json([
                            'status' => 200,
                        ]);
                    } catch (\Throwable $th) {
                        DB::roleback();
                        return response()->json([
                            'status' => 201,
                            'error' => "something went wrong"
                        ]);
                    }
                }
            } else {
                return response()->json([
                    'status' => 201,
                    'error' => "something went wrong"
                ]);
            }
        }
    }
    public function PayingbillsDone(Request $req, $id)
    {

        $validator = Validator::make($req->all(), [
            'acc_number' => ['required', 'regex:/[0-9]/'],
            'amount' => ['required', 'regex:/[0-9]/'],
            'meter_no' => ['required', 'regex:/[0-9]/'],
            'type' => ['required'],
            'pin' => ['required'],
            'b_month' => ['required']
        ]);



        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            $user = usersModel::find($id)->login;

            $currentval = usersModel::find($id)->client;


            if (Hash::check($req->pin,  $user['password'])) {


                DB::beginTransaction();
                if ($req->amount > $currentval['account_balance']) {
                    return response()->json([
                        'status' => 202,
                        'insufficient' => "Insufficient balance"

                    ]);
                } else {
                    try {

                        $currentval = $currentval['account_balance'] - $req->amount;

                        $payingbills = new transactionModel;
                        $payingbills->id = $id;
                        $payingbills->current_balance = $currentval;
                        $payingbills->credit = 0.0;
                        $payingbills->credit_type = 'Null';
                        $payingbills->debit =  $req->amount;
                        $payingbills->debit_type =  $req->type;
                        $payingbills->transactions_date = now()->day . '-' . now()->month . '-' . now()->year;
                        $payingbills->save();

                        $client_table = clientModel::find($id);
                        $client_table->account_balance = $currentval;
                        $client_table->save();
                        DB::commit();
                        return response()->json([
                            'status' => 200,
                        ]);
                    } catch (\Throwable $th) {
                        DB::roleback();
                        return response()->json([
                            'status' => 201,
                            'error' => "something went wrong"
                        ]);
                    }
                }
            } else {
                return response()->json([
                    'status' => 201,
                    'error' => "something went wrong"
                ]);
            }
        }
    }
    public function Recharge_moneydone(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [

            'acc_number' => ['required', 'regex:/[0-9]/'],
            'amount' => ['required', 'regex:/[0-9]/'],
            'p_num' => ['required', 'regex:/[0-9]/'],
            'type' => ['required'],
            'pin' => ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {

            $user = usersModel::find($id)->login;
            $currentval = usersModel::find($id)->client;



            if (Hash::check($req->pin,  $user['password'])) {


                DB::beginTransaction();

                if ($req->amount > $currentval['account_balance']) {
                    return response()->json([
                        'status' => 202,
                        'insufficient' => "Insufficient balance"
                    ]);
                } else {
                    try {
                        $currentval = $currentval['account_balance'] - $req->amount;

                        $recharge = new transactionModel;
                        $recharge->id = $id;
                        $recharge->current_balance = $currentval;
                        $recharge->credit = 0.0;
                        $recharge->credit_type = 'Null';
                        $recharge->debit =  $req->amount;
                        $recharge->debit_type =  $req->type;
                        $recharge->transactions_date = now()->day . '-' . now()->month . '-' . now()->year;


                        $recharge->save();

                        $client_table = clientModel::find($id);
                        $client_table->account_balance = $currentval;
                        $client_table->save();
                        DB::commit();
                        return response()->json([
                            'status' => 200,
                        ]);
                    } catch (\Throwable $th) {
                        DB::roleback();
                        return response()->json([
                            'status' => 201,
                            'error' => "something went wrong"
                        ]);
                    }
                }
            } else {
                return response()->json([
                    'status' => 201,
                    'error' => "something  wrong happened"
                ]);
            }
        }
    }
    public function Applydone(Request $req, $id)
    {

        $validator = Validator::make($req->all(), [

            'apply_type' => ['required'],
            'description' => ['required'],

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {

            $apply = new applymodel;
            $apply->id = $id;
            $apply->request_type =  $req->apply_type;
            $apply->description = $req->description;


            $apply->save();
            return response()->json([
                'status' => 200,
            ]);
        }
    }
    public function Exchange_Currencydone(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'ex_from' => ['required'],
            'ex_amount' => ['required', 'regex:/[0-9]/'],
            'ex_to' => ['required'],
            'date' => ['required'],
            'pin' => ['required'],

        ]);


        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {

            $ex_money = new exchangecurrencymodel();
            $ex_money->id = $id;
            $ex_money->exchange_from = $req->ex_from;
            $ex_money->exchange_amount = $req->ex_amount;
            $ex_money->exchange_to = $req->ex_to;
            $ex_money->Date = $req->date;


            $ex_money->save();
            return response()->json([
                'status' => 200,
            ]);
        }
    }
    public function Contactdone(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'user_name' => ['required'],
            'r_type' => ['required'],
            'description' => ['required'],

        ]);


        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            $contact = new requestsModel;
            $contact->id = $id;
            $contact->user_name =  $req->user_name;
            $contact->request_type =  $req->r_type;
            $contact->description = $req->description;
            $contact->status = 'pending';

            $contact->save();
            return response()->json([
                'status' => 200,
            ]);
        }
    }
    public function Client_changepassword(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'c_password' => [
                'required'
            ],
            'n_password' => [
                'required',
                'min:8',
                'regex:/[a-z]/',
                'regex:/[A-Z]/',
                'regex:/[0-9]/',
                'regex:/[@$!%*#?&]/',
            ],
            'con_password' => ['required', 'same:n_password']


        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            $password = usersModel::find($id)->login;

            if (Hash::check($req->c_password, $password['password'])) {
                $user = loginModel::find($id);
                $user->password = bcrypt($req->con_password);
                $user->save();

                return response()->json([
                    'status' => 200,
                ]);
            } else {

                return response()->json([
                    'status' => 202,
                    'incorrect' => "Current Password Incorrect"
                ]);
            }
        }
    }
    public function transaction($id)
    {
        $transaction = transactionModel::where("id", $id)->get();
        return response()->json([
            'status' => 200,
            'transaction' =>  $transaction
        ]);
    }
}
