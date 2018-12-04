import React from 'react';
import { Link } from "react-router-dom";

export const DaftarDokterRow = (props) => {
    return (
        <tbody>
            {props.listDokter.map(dokter => {
                return (
                    <tr key={dokter.id}>
                        <td>{dokter.id}</td>
                        <td>{dokter.nama}</td>
                        <td>
                            <Link to={`/update-dokter/${dokter.id}`} className="btn btn-info">Update</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}