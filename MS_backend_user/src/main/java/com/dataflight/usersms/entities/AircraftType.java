package com.dataflight.usersms.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class AircraftType {
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private Long aircraftType_id;
	private String aircraftType_designator_ICAO;
	private String aircraftType_commercialName;

}
