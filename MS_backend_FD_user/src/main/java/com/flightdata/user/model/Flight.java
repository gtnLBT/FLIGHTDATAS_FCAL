package com.flightdata.user.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flight {
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private Long flight_id;
	
	@Column(name = "registered_Id_flight")
	private String registeredId_FlightInMongoDB_flightStore;
	
	@Column(name = "number_of_crew")
	private int numberOfCrew;
	
	@Column(name = "flight_available")
	private Boolean flightAvailable;
	
	@Column(name = "fuel_burn")
	private int fuelBurn;
	
	public Flight() {
		
	}

	public Flight(String registeredId_FlightInMongoDB_flightStore, int numberOfCrew, Boolean flightAvailable,
			int fuelBurn) {
		super();
		this.registeredId_FlightInMongoDB_flightStore = registeredId_FlightInMongoDB_flightStore;
		this.numberOfCrew = numberOfCrew;
		this.flightAvailable = flightAvailable;
		this.fuelBurn = fuelBurn;
	}

	public Long getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(Long flight_id) {
		this.flight_id = flight_id;
	}

	public String getRegisteredId_FlightInMongoDB_flightStore() {
		return registeredId_FlightInMongoDB_flightStore;
	}

	public void setRegisteredId_FlightInMongoDB_flightStore(String registeredId_FlightInMongoDB_flightStore) {
		this.registeredId_FlightInMongoDB_flightStore = registeredId_FlightInMongoDB_flightStore;
	}

	public int getNumberOfCrew() {
		return numberOfCrew;
	}

	public void setNumberOfCrew(int numberOfCrew) {
		this.numberOfCrew = numberOfCrew;
	}

	public Boolean getFlightAvailable() {
		return flightAvailable;
	}

	public void setFlightAvailable(Boolean flightAvailable) {
		this.flightAvailable = flightAvailable;
	}

	public int getFuelBurn() {
		return fuelBurn;
	}

	public void setFuelBurn(int fuelBurn) {
		this.fuelBurn = fuelBurn;
	}
	
}
