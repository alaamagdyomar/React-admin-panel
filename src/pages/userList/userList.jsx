import "./userList.css"
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import { userRow } from "../../dummyData";
import { Link } from "react-router-dom";
import {useState} from "react";

 export default function UserList(){
     const [data, setData] = useState(userRow);

     const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id !== id));
     };

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'userName', headerName: 'userName', width: 160 },
        {field: 'user', headerName: 'user', width: 200 ,renderCell:(params)=>{
           return (
               <div className="userListUser">
                   <img src={params.row.avatar} alt="" className="userListImg" />
                   {params.row.userName}
               </div>
           )
        }},
        {field: 'email', headerName: 'Email', width: 160},
        {field: 'status',headerName: 'status',type: 'number', width: 120},
        {field: 'transaction',headerName:'Transaction',type:'number', width: 160,},
        {field:'action', headerName:'Actions',width:150, renderCell:(params)=>{
            return (
                <>
                <Link to={`/users/${params.row.id}`}>
                <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline 
                onClick={()=>handleDelete(params.row.id)}
                className="userListDelete"/>
                </>
            )
        }}
      ];
         return (
         <div className="userList">
                  <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
     )
 }
