import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data, setData] = useState(
        {
            "_id": "",
            "fname": "",
            "lname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": "",
            "__v": ""
        }
    )
    const inputHANDLER=(event)=>{
        setData({...data,[event.target.name]:event.target.value})

    }
    const readVALUE=()=>
        {
            console.log(data)
            axios.post("http://localhost:8080/add",data).then(
                (response)=>{
                    console.log(response.data)
                        if (response.data.status=="success")
                             {
                            alert("success")
                        } 
                        else {
                            alert("error")
                        }
                    
                }
            ).catch().finally()
        }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">id</label>
                                <input type="text" className="form-control" name='_id' value={data._id} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Fname</label>
                                <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Lname</label>
                                <input type="text" className="form-control" name="lname" value={data.lname} onChange={inputHANDLER} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="text" className="form-control" name='dob' value={data.dob} onChange={inputHANDLER} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control"  name='course' value={data.course} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='address' value={data.address} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">__v</label>
                                <input type="text" className="form-control" name='__v' value={data.__v} onChange={inputHANDLER}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readVALUE}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent