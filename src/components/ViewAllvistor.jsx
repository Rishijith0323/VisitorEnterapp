import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAllvistor = () => {
const [data,changeData] =useState([])  
const FetchDataFromApi=()=>{
    axios.get("http://35.170.103.9:4057/getvistors").then(
        (response)=>{
            changeData(response.data)
        }
    ).catch()
}  
useEffect(()=>{FetchDataFromApi()},{})
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">firstname</th>
                                    <th scope="col">lastname</th>
                                    <th scope="col">purpose</th>
                                    <th scope="col">whomToMeet</th>
                                    <th scope="col">date</th>
                                </tr>
                            </thead>
                            <tbody>
                             {
                                data.map(
                                    (value,index)=>{
                                        return    <tr>
                                        <th scope="row">{value.firstname}</th>
                                        <td>{value.lastname}</td>
                                        <td>{value.purpose}</td>
                                        <td>{value.whomToMeet}</td>
                                        <td>{value.date}</td>
                                    </tr>
                                    }
                                )
                             }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllvistor
