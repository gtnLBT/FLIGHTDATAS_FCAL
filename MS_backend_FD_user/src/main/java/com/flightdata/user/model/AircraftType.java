package com.flightdata.user.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AircraftType {
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private Long aircraftType_id;
	private String aircraftType_designator_ICAO;
	private String aircraftType_commercialName;
	
	public AircraftType () {
		
	}
	
	public AircraftType(String aircraftType_designator_ICAO, String aircraftType_commercialName) {
		super();
		this.aircraftType_designator_ICAO = aircraftType_designator_ICAO;
		this.aircraftType_commercialName = aircraftType_commercialName;
	}

	public Long getAircraftType_id() {
		return aircraftType_id;
	}
	public void setAircraftType_id(Long aircraftType_id) {
		this.aircraftType_id = aircraftType_id;
	}
	public String getAircraftType_designator_ICAO() {
		return aircraftType_designator_ICAO;
	}
	public void setAircraftType_designator_ICAO(String aircraftType_designator_ICAO) {
		this.aircraftType_designator_ICAO = aircraftType_designator_ICAO;
	}
	public String getAircraftType_commercialName() {
		return aircraftType_commercialName;
	}
	public void setAircraftType_commercialName(String aircraftType_commercialName) {
		this.aircraftType_commercialName = aircraftType_commercialName;
	}
	
	

}
