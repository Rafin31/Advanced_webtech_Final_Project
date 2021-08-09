<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\loginModel;
use App\Models\usersModel;
use Illuminate\Http\Request;

class adminAPI extends Controller
{

    public function insertUser(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'address'    => ['required', 'min:5', 'max:50'],
            'user_name' => ['required', 'min:3', 'max:50', 'unique:users'],
            'email' => ['required', 'email', 'unique:users', 'min:8', 'max:30', 'email:rfc'],
            'phone_number' => ['required', 'min:11', 'max:15',],
            'user_type' => ['required'],
            'password' => [
                'required',
                'min:8',
                'regex:/[a-z]/',
                'regex:/[A-Z]/',
                'regex:/[0-9]/',
                'regex:/[@$!%*#?&]/',
            ],
            'confirm_password' => ['required', 'same:password'],

        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            DB::beginTransaction();
            try {
                // inserting into users table
                $user = new usersModel;
                $user->user_name = $req->user_name;
                $user->email = $req->email;
                $user->address = $req->address;
                $user->phone_number =  $req->phone_number;
                $user->profile_picture =  'null';
                $user->user_type =  $req->user_type;
                $user->account_Status =  'active';
                $user->save();

                $list = usersModel::all()->last();
                $id = $list['id'];

                // inserting into login table
                $login = new loginModel;
                $login->id =  $id;
                $login->user_name = $req->user_name;
                $login->password =  bcrypt($req->password);
                $login->user_type = $req->user_type;
                $login->account_Status = 'active';
                $login->save();
                DB::commit();
                return response()->json([
                    'status' => 200,
                ]);
            } catch (\Throwable $th) {
                DB::rollBack();
                return response()->json([
                    'status' => 201,
                ]);
                //throw $th;
            }
        }


        //return usersModel::find(1014)->login;
    }
}
