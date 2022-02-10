import React, { useEffect, useState } from 'react';

const StudentItem = (props) => {
    const { name, hall, roll, status,Class, _id, id } = props.data
   
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{Class}</td>
            <td>{roll}</td>
            <td>{hall}</td>
            <td>{status}</td>
            <td><input name={props.index} type="checkbox" /> </td>
            <td> <i onClick={() => props.handleDelete(_id)} className="far ms-2 deleteBtn fa-trash-alt text-danger"></i></td>
            <td><input style={{width:"40px", cursor:'pointer', background:'skyblue',color:'black', borderRadius:'5px'}}readOnly onClick={()=>props.handleEditShow(_id,props.index)} value='edit'/></td>
           
        </tr>
    );
};

export default StudentItem;