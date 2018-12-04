const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {
	getAllPasien() {
		/** 
		 * TODO: Fetch data all pasien
		 * @return listAllPasien
		 */
		return fetch(`${cors}${baseUrl}/1/getAllPasien`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	getDetailPasien(idPasien) {
		/** 
		 * TODO: Fetch detail data pasien
		 * @param idPasien
		 * @return detailPasien
		 */
		return fetch(`${cors}${baseUrl}/getPasien/${idPasien}`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	updateStatusPasien(requestBody) {
		/** 
		 * TODO: POST data baru pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
		return fetch(`${cors}${baseUrl}/1/updatePasien`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	getAllDokter() {
		/** 
		 * TODO: Fetch data all dokter
		 * @return listAllDokter
		 */
		return fetch(`${cors}${baseUrl}/1/getAllDokter`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	addBillingPasien(requestBody) {
		/** 
		 * TODO: POST data baru pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
		return fetch(`${cors}${baseUrl}/1/addBilling`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
}