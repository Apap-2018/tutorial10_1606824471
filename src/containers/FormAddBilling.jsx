import React from 'react';

export const FormAddBilling = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Billing Pasien</h2>
            <input type="hidden" name="id" value={props.pasien.id} />

             <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan" defaultValue={!props.pasien.jumlahTagihan ? "" : props.pasien.jumlahTagihan}/>
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={!props.pasien.tanggalTagihan ? "" : props.pasien.tanggalTagihan}/>
            </div>
            <input type="hidden" name="pasien.id" defaultValue={!props.pasien? "" : props.pasien.id}/>
           
           
            <button className="btn btn-success" value="submit">Submit</button>
        </form>
    )
}