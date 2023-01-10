import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';

const ResidentInfo = ({url}) => {
    const[ resident, setResident ] = useState({})

    useEffect( ()=>{
        axios.get(url).then( res => setResident( res.data ))
    },[])

    return (
        <div className='residentCard'>
            <img src={resident.image} alt="" />
            <div className='residentcard_sub'>
                <h3><b>Name: </b> {resident.name}</h3>
                <h4><b>Status:</b> {resident.status}</h4>
                <h4><b>Origen:</b> {resident.origin?.name}</h4>
                <h4><b>Episodes:</b> {resident.episode?.length}</h4>
            </div>  
            
        </div>
    );
};

export default ResidentInfo;