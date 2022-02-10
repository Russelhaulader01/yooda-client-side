import React, { useEffect, useState } from 'react';
import StudentItem from './StudentItem';
import Table from 'react-bootstrap/Table'
import './student.css'
import axios from 'axios';
import EditStudent from './EditStudent';

const AllStudents = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [students, setStudents] = useState([])
    const [itemsCount, setItemsCount] = useState(1)
    const [editData, setEdit] = useState({})
    const [show, setShow] = useState(false);

    useEffect(() => {
        // call api with search query
        fetch(`http://localhost:5000/allStudents?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setItemsCount(Math.ceil(data.items / size))
                setStudents(data.result);
            });
    }, [page]);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you suer?')
        if (confirm) {
            axios.post('http://localhost:5000/stuDelete', { id })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restStudents = students.filter(student => student._id !== id);
                        setStudents(restStudents);
                    }
                })
        }

    }
    const handleClose = () => setShow(false);

    const handleEditShow = (id, index) => {
        setEdit(id)
        setShow(true);

    }
    const handleUpdate = (data) => {
        console.log(data);
        axios.post('http://localhost:5000/stuUpdate', data)
            .then(res => {
                if (res.data.acknowledged) {
                    const restItems = students.map(item => {
                        if ((item._id === data._id)) {
                            console.log(item);
                            return {
                                Class: data.Class,
                                age: data.age,
                                hall: data.hall,
                                name: data.name,
                                roll: data.roll,
                                status: data.status,
                                id:data.id,
                                _id:data._id
                            }
                        } else {
                            console.log(data);
                            console.log(item);
                            return item
                        }

                    })
                    console.log(restItems);
                    setStudents(restItems)
                    setShow(false);
                   
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // updated type
        const changeTo = e.target[e.target.length - 2].value;
        // copy stu
        const currStuStatus = [...students]
        // store changing id for send db ro update
        const updatedItemsId = []
        // loop all the items for checking
        for (let i = 0; i < e.target.length - 2; i++) {
            // check selected or not
            if (e.target[i].checked) {
                // get item by index no ( index come from name attribute there pass index )
                const item = currStuStatus[parseInt(e.target[i].name)]
                // assign updated status
                item.status = changeTo;
                // stor id for sending to db
                updatedItemsId.push(item._id)
                // replace previous item with updated item
                currStuStatus[parseInt(e.target[i].name)] = item
            }
        }

        setStudents(currStuStatus)
        e.target.reset()
        // sending updated item to server for change status from db
        if (updatedItemsId.length > 0) {
            axios.post('http://localhost:5000/changeStatus', { updatedItemsId, changeTo })
                .then(res => {
                    window.alert('success')
                })
        } else {
            window.alert('Select student  please')
        }

    }
    return (
        <div>
            <h1>All students</h1>
            <form onSubmit={handleSubmit}>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Roll</th>
                            <th>Hall</th>
                            <th>status</th>
                            <th>Edit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => <StudentItem
                                handleEditShow={handleEditShow}
                                handleDelete={handleDelete}
                                index={index}
                                data={student}
                                key={student._id}
                            />)
                        }

                    </tbody>
                </Table>
                <div>
                    <label>Change selected student status to </label>
                    <select name="changeStatus" required>
                        <option value="">Select</option>
                        <option value="Active">Active</option>
                        <option value="InActive">InActive</option>
                    </select>
                    <input type="submit" value="Change" />
                </div>
            </form>
            {
                [...Array(itemsCount).keys()].map(number => <button className={`pagination-btn ${number == page ? 'pagination-selected' : ''}`} onClick={() => setPage(number)}>{number + 1}</button>)
            }
            {show && <EditStudent
                id={editData}
                handleClose={handleClose}
                show={show}
                handleUpdate={handleUpdate}
            />}
        </div>
    );
};

export default AllStudents;