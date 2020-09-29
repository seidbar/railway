  
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './../Styles/ViewMaintenance.css';
import * as APIconfig from "./APIconfig";

const ViewMaintenance = () => {
    const [data, setData] = useState();
 
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
            APIconfig.baseURL+"maintenance/"
        );
   
        setData(result.data);
        //console.log(result.data);
      };
   
      fetchData();
    }, []);
  
    return (
        <div className="railway-maintenance">
            <h1>Railway Maintenance</h1>
            {data ? (
             <table>
                <thead>
                    <tr>
                        <th>Maintenance</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Length</th>
                        <th>Current Station</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                    <tr key={item.id}>
                        <td class="col-maintenance"><input type="checkbox" defaultChecked={item.maintenance}></input></td>
                        <td class="col-id">{item.id}</td>
                        <td class="col-name">{item.name}</td>
                        <td class="col-company">{item.company}</td>
                        <td class="col-length">{item.length}<span className="unit-length">m</span></td>
                        <td class="col-stationname">{item.stationname}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            ):null}



        </div>
    );
  };
  export default ViewMaintenance;