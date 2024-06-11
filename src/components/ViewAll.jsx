import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.messege)
                alert("error")
            }
        ).finally()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                    <tr>
                                            <th scope="col">_id</th>
                                            <th scope="col">firstname</th>
                                            <th scope="col">lastname</th>
                                            <th scope="col">college</th>
                                            <th scope="col">dob</th>
                                            <th scope="col">course</th>
                                            <th scope="col">mobile</th>
                                            <th scope="col">email</th>
                                            <th scope="col">address</th>
                                            <th scope="col">__v</th>
                                        </tr>
                                    </thead>

                                        {data.map(
                                            (value,index)=>{
                                            return <tbody>
                                        <tr>
                                            <th scope="row">{value._id}</th>
                                            <td>{value.fname}</td>
                                            <td>{value.lname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                            <td>{value.__v}</td>
                                        </tr>
                                        
                                        
                                    </tbody>
                                            }
                                        )}
                                        
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll