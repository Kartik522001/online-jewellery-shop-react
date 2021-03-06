import React from 'react'
import { useState } from 'react'
import axios from 'axios'


export const AddUser = () => {
    const [userName, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    // const [mobileNum, setmobailNum] = useState('');
    // const [gender, setgender] = useState('');
    // const [isActive, setisActive] = useState('');



    var Data = {
        userName: userName,
        email: email,
        password: password,
        role: '6220d6c79030e863cdb5ddc2'
        // mobileNum: mobileNum,
        // gender: gender,
        // isActive: isActive,
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4001/users', Data).then(res => {
            console.log(res.status)
            console.log(res.data)
        })
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setusername(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setemail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    {/* <label>Mobail Number</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setmobailNum(e.target.value)}
                    /> */}

                    {/* Gendor */}
                    {/* <label>Gender</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setgender(e.target.value)}
                    />

                    <label>isActive</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setisActive(e.target.value)}
                    /> */}
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
