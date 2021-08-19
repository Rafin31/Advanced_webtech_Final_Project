<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\loginModel;
use App\Models\postNotice;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\requestsModel;
use App\Models\usersModel;
use Illuminate\Http\Request;

use App\Models\clientmodel;
use App\Models\hiredemployeemodel;
use App\Models\bugreportmodel;
use App\Models\meetingmodel;






class managerAPI extends Controller
{
    public function userList()
    {
        $user = usersModel::all();
        return (response()->json([
            'status' => 200,
            'users' => $user
        ]));
    }

    public function completeEdit($id)
    {
        $user = usersModel::find($id);
        return (response()->json([
            'status' => 200,
            'users' => $user
        ]));
    }
    public function editingOparetion(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'address'    => ['required', 'min:5', 'max:50'],
            'user_name' => ['required', 'min:3', 'max:50', 'unique:users'],
            'email' => ['required', 'email', 'min:8', 'max:30', 'email:rfc'],
            'phone_number' => ['required', 'min:11', 'max:15',],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            DB::beginTransaction();
            try {

                $user = usersModel::find($id);
                $user->user_name = $req->user_name;
                $user->email = $req->email;
                $user->address = $req->address;
                $user->phone_number = $req->phone_number;
                $user->save();

                $login = loginModel::find($id);
                $login->user_name = $req->user_name;
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



        //return view('user.completeEdit')->with('users', $user);
    }
    public function blockUserOparetion($id)
    {
        DB::beginTransaction();
        try {
            $user = usersModel::find($id);
            $user->account_Status = 'Block';
            $user->save();
            $login = loginModel::find($id);
            $login->account_Status = 'Block';
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
    public function unblockOperation($id)
    {
        //echo "done";
        DB::beginTransaction();
        try {
            $user = usersModel::find($id);
            $user->account_Status = 'active';
            $user->save();
            $login = loginModel::find($id);
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
    public function pendingUserOparation($id)
    {
        DB::beginTransaction();
        try {
            $user = usersModel::find($id);
            $user->account_Status = 'active';
            $user->save();

            $login = loginModel::find($id);
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

        //return view('user.pendingUser')->with('user', $user);
    }
    public function destroy($id)
    {

        $user = usersModel::destroy($id);
        return response()->json([
            'status' => 200,
        ]);
    }
    public function addClient(Request $rq)
    {
        /*$validator = Validator::make($req->all(), [
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
               
            ]);
        }
        else
        {*/
            //$client = clientmodel::create($rq->all());
            $client = new clientmodel();
            $client->id = $rq->id ;
            $client->account_balance = $rq->ac_balance ;
            $client->account_type = $rq->ac_type ;
            $client->account_status= $rq->ac_sts ;
            $client->nid_varification = $rq->nid ;
            $client -> save();
        
           
    }

    public function clientlist()
    {
        $user = clientmodel::all();
        return (response()->json([
            'status' => 200,
            'users' => $user
        ]));
    }

    public function addEmployee(Request $rq)
    {
            
        $user = new hiredemployeemodel;
        $user->id=$rq->id;
        $user->name=$rq->name;
        $user->designation=$rq->desig;
        $user->duration=$rq->duration;  
       
        $user->save();
        
           
    }
    public function addBug(Request $rq)
    {
    $validation=Validator::make($rq->all(),
    [
        
        'id'=> 'required|min:1' ,
        
        'type'=> 'required',
        'description'=> 'required'

    ]
    );
    if($validation->fails())
    {
        return response()->json([
            'status' => 201,
        ]);
    }
    else
    {
        $user = new bugreportmodel;
        $user->id=$rq->id;
        $user->description=$rq->description;
        $user->bug_type=$rq->type;

        $user->save();

    }
}   
public function addMeeting(Request $rq)
{

    
  
    $validation=Validator::make($rq->all(),
    [
        
        'title'=> 'required|min:2' , //must have to be minimum 2 char
        'mt'=> 'required',
        'venue'=> 'required',
        'date'=> 'required|date|after:tomorrow', // The date must be after tommorrow
        
        'time'=> 'required'

    ]
    );
  
    if($validation->fails())
    {
        return response()->json([
            'status' => 201,
        ]);
    }
    else
    {
        $user = new meetingmodel;
        $user->id=$rq->id;
        $user->title=$rq->title;
        $user->meeting_type=$rq->mt;
        $user->venue=$rq->venue;
        $user->date=$rq->date;
        $user->time=$rq->time;
      
       $user->save();

       
       
    }




}

    
}
