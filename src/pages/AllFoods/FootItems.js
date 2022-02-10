import React from 'react';

const FootItems = (props) => {
    const { name, price,_id,id} = props.data

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td> <i onClick={() => props.handleDelete(_id)} className="far ms-2 deleteBtn fa-trash-alt text-danger"></i></td>
            <td><input style={{ width: "40px", cursor: 'pointer', background: 'skyblue', color: 'black', borderRadius: '5px' }} readOnly onClick={() => props.handleEditShow(_id, props.index)} value='edit' /></td>
        </tr>
    );
};

export default FootItems;