import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [Data,changeData]=useState(
        [
            {"name":"Aju","rollno":1,"Admno":101},
            {"name":"Alen","rollno":2,"Admno":102},
            {"name":"joe","rollno":5,"Admno":105},
            {"name":"varun","rollno":7,"Admno":107},
            {"name":"Aarun","rollno":4,"Admno":104},
            {"name":"Abi","rollno":3,"Admno":103},
            {"name":"Amrutha","rollno":8,"Admno":108},
            {"name":"Eva","rollno":6,"Admno":106},
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row.g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {Data.map(
                                (value,index)=>{
                                    return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">



                                    <div class="card">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLv9ag4S0tjqq7dflHFUtEqskKt_81b2xlyQ&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.name}</h5>
                                            <p class="card-text">Rollno:{value.rollno}</p>
                                            <p class="card-text">AdmissionNo:{value.Admno}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                }
                            )
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll