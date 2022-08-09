import React from 'react';
import { useForm } from "react-hook-form";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import marker from "../../images/marker.svg";
import L from "leaflet";

import "./contact.scss";

function Contacts() {
	const {
		register,
		formState: {errors, isValid},
		handleSubmit,
		reset,

	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		reset();
	};

	const position = [40.945608, 73.001294];
	const icon = L.icon({
		iconUrl: marker,
		iconAnchor: position,
		iconSize: [50, 50],
	})
	return (
		<section className='contacts'>
			<h1>Our Contacts</h1>
			<div className="container contacts__container">
				<div className="contacts__col">
					<form onSubmit={handleSubmit(onSubmit)}>
						<label>
							Your Name
							<input placeholder='John Doe' 
							{...register("name", {
								required: "Please, enter your name!",
								minLength: {
									value: 3,
									message: "minimum 3 simbol!",
								},
							})

							}	
							/>
						</label>
						<div className="contacts__error">
							{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
						</div>
						<label>
							Your Email
							<input placeholder='John@company.com' 
								{...register("email", {
								required: "Enter your email!",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
									message: "Please, enter the correct email!",
								}	
							})

							}	
							/>
						</label>
						<div className="contacts__error">
							{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
						</div>
						<label>
							Your Message
							<textarea
							{...register("msg", {
								maxLength: {
									value: 10,
									message: "Maximum 10 simbols",
								}
							})

							}
							></textarea>
						</label>
						<div className="contacts__error">
							{errors?.msg && <p>{errors?.msg?.message || "Error!"}</p>}
						</div>
						<input type="submit" disabled={!isValid} />
					</form>
				</div>

				<div className="contacts__col">
					<MapContainer
      				center={position}
      				zoom={30}
      			>
						<TileLayer
        					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      				/>
						<Marker position={position} icon={icon} style={{backgroundColor: "red"}}>
     						<Popup>ул.Матросова д.7</Popup>
    					</Marker>
					</MapContainer>
				</div>
			</div>
		</section>
	)
}

export default Contacts