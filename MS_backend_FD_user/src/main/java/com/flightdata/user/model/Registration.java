package com.flightdata.user.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="aircraft_registration")
public class Registration {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long registration_id;
	private String registration;
	
	
	public Registration() {
		
	}

	public Registration(String registration) {
		super();
		this.registration = registration;
	}

	public Long getRegistration_id() {
		return registration_id;
	}

	public void setRegistration_id(Long registration_id) {
		this.registration_id = registration_id;
	}

	public String getRegistration() {
		return registration;
	}

	public void setRegistration(String registration) {
		this.registration = registration;
	}

}
