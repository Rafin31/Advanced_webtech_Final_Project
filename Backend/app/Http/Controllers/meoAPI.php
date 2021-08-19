<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\loginModel;
use App\Models\postNotice;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\req;
use App\Models\usersModel;
use Illuminate\Http\Request;

class meoAPI extends Controller
{
    public function requestList()
    {
        $req = req::all();
        return (response()->json([
            'status' => 200,
            'requests' => $req
        ]));
    }

    function insertRequest(Request $req)
    {
        
         $validator = Validator::make($req->all(),[

            'id' =>['required'],
            'user_name'=>['required'],
          'description' =>['required'],
           'request_type' =>['required'],
            'status' =>['required']
    ]);

    if($validator ->fails())
    {
        // return back()->with ('errors',$validation->errors());

        return response()->json([
                        'status' => 201,
                        'error' => $validator->errors(),

                        
                    ]);
    }

    else {
      DB::beginTransaction();
         try {
            $user = new req();

            $user->id = $req->id;
            $user->user_name = $req->user_name;
            $user->request_type = $req->request_type;
            $user->description = $req->description;
            $user->status = $req->status;
    
            $user->save();
    

        $list = req::all()->last();
                $id = $list['id'];
       
        DB::commit();
        return response()->json([
            'status' => 200,
        ]);
    } catch (\Throwable $th) {
        DB::rollBack();
        return response()->json([
            'status' => 201,
        ]);
    }
    
}
    }

    public function destroy($id)
    {

        $req = req::destroy($id);
        return response()->json([
            'status' => 200,
        ]);
    }





    public function completeEdit($id)
    {
        $req = req::find($id);
        return (response()->json([
            'status' => 200,
            'requests' => $req
        ]));
    }

    public function editingOparetion(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'id' =>['required'],
            'user_name'=>['required'],
          'description' =>['required'],
           'request_type' =>['required'],
            'status' =>['required']
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors(),
            ]);
        } else {
            DB::beginTransaction();
            try {

                $user = req::find($id);
                $user->id = $req->id;
                $user->user_name = $req->user_name;
                $user->request_type = $req->request_type;
                $user->description = $req->description;
                $user->status = $req->status;
        
                $user->save();

                
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
    
        }
        public function completeView($id)
    {
        $req = req::find($id);
        return (response()->json([
            'status' => 200,
            'requests' => $req
        ]));
    }
    
    
    public function export()

    {
        return response()->json([
            'status' => 200,
            'file' => Excel::download(new RequestsExport, 'allUser.xlsx')
        ]);
    }
}

    