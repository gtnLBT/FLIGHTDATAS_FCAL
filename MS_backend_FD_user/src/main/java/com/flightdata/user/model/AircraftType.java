package com.flightdata.user.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class AircraftType {
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private Long aircraftType_id;
	private String aircrafttypeicao;
	private String aircraftType_commercialName;
	
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	private List<Registration> aircraftRegistration;
	
	
	
	public AircraftType () {
		
	}
	
	public AircraftType(String aircrafttypeicao, String aircraftType_commercialName, List<Registration> aircraftRegistration) {
		super();
		this.aircrafttypeicao = aircrafttypeicao;
		this.aircraftType_commercialName = aircraftType_commercialName;
		this.aircraftRegistration = aircraftRegistration;
	}

	public Long getAircraftType_id() {
		return aircraftType_id;
	}
	public void setAircraftType_id(Long aircraftType_id) {
		this.aircraftType_id = aircraftType_id;
	}
	public String getAircrafttypeicao() {
		return aircrafttypeicao;
	}
	public void setAircrafttypeicao(String aircrafttypeicao) {
		this.aircrafttypeicao = aircrafttypeicao;
	}
	public String getAircraftType_commercialName() {
		return aircraftType_commercialName;
	}
	public void setAircraftType_commercialName(String aircraftType_commercialName) {
		this.aircraftType_commercialName = aircraftType_commercialName;
	}

	public List<Registration> getAircraftRegistration() {
		return aircraftRegistration;
	}

	public void setAircraftRegistration(List<Registration> aircraftRegistration) {
		this.aircraftRegistration = aircraftRegistration;
	}
	
	
	

}
