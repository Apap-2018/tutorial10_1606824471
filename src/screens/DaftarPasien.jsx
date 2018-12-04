import React from 'react';
import { DaftarPasienRow } from '../components/DaftarPasienRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarPasien extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */
	

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listPasien: []
		}
		Appointment.getAllPasien().then(response => {
			this.setState({
				loading: false,
				listPasien: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Pasien" header={['Nama Pasien', 'Status Pasien', 'Aksi']}>
                    <DaftarPasienRow listPasien={this.state.listPasien}/>
                </TableContainer>
            )
        }
	}
}