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

    
    
    
    public function destroy($id)
    {

        $user = usersModel::destroy($id);
        return response()->json([
            'status' => 200,
        ]);
    }
    public function addClient(Request $rq)
    {
        $validator = Validator::make($rq->all(), [
            'id'    => 'required', 'min:1', 'max:10',
            'ac_balance' => 'required', 'min:3', 'max:50', 'unique:users',
            'ac_type' => 'required',
            'ac_sts' => 'required',
            'nid' => 'required'

            ]
           

        );
        if ($validator->fails()) 
        {
            return response()->json([
                'status' => 201,
               
            ]);
        }
        else
        {
           
            $client = new clientmodel();
            $client->id = $rq->id ;
            $client->account_balance = $rq->ac_balance ;
            $client->account_type = $rq->ac_type ;
            $client->account_status= $rq->ac_sts ;
            $client->nid_varification = $rq->nid ;
            $client -> save();
        }
        
           
    }

    public function clientlist()
    {
        $user = clientmodel::all();
        return (response()->json([
            'status' => 200 ,
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
