import React from 'react';
import { Link } from "react-router-dom";

export const DaftarPasienRow = (props) => {
    return (
        <tbody>
            {props.listPasien.map(pasien => {
                return (
                    <tr key={pasien.id}>
                        <td>{pasien.nama}</td>
                        <td>{pasien.statusPasien.jenis}</td>
                        <td>
                            <Link to={`/update-pasien/${pasien.id}`} className="btn btn-info" style={{marginRight: 25}}>Update</Link>
    
                            <Link to={`/add-billing/${pasien.id}`} className="btn btn-primary">Add Billing</Link>
                        </td>
                        
                    </tr>
                )
            })}
        </tbody>
    )
}