import React from 'react';
import { Loading } from '../components/Loading';
import { FormAddBilling } from '../containers/FormAddBilling';
import { Appointment } from '../utils/Appointment';

export class AddBilling extends React.Component {
	/** 
	 * TODO: Akses method getDetailPasien(idPasien) pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pasien: {},
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		Appointment.getDetailPasien(this.props.match.params.id).then(response =>{
			if(response.status === 200){
				this.setState({
					loading: false,
					pasien: response.result
                })
                console.log()
            }
            
			else{
				alert('Data tidak ditemukan')
				this.props.history.push('/all-pasien')
			}
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		/** 
		 * TODO: Akses method updateStatusPasien(requestBody) pada Appointment dan lakukan update state. 
		 */
		this.setState({
			loading: true
		})
		const data= new FormData(e.target)
		const dataJson = {}

		data.forEach((val, key)=>{
			if(val !== ""){
				let name = key.split('.');
				if(name.length >1){
					let last = name.pop()
					name.reduce((prev,next)=> {
						return prev[next] = prev[next] || {};
					}, dataJson)[last] = val
				} else{
                    dataJson[key] = val
                    console.log(val)
				}
			}
		})
		Appointment.addBillingPasien(dataJson).then(response =>{
			if(response.status === 200){
				this.setState({
					loading: false,
					pasien: response.result
                })
				alert (`Sukses add billing pasien id: ${this.state.pasien.id}`)
			} else{
				this.setState({
					loading: false
                })
				alert(`Gagal add billing pasien id: ${this.state.pasien.id}`)
			}
		})
    }
    

	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<div>
				<FormAddBilling pasien ={this.state.pasien} onSubmit={this.handleFormSubmit}/>
					</div>
			)
		}
	}
}