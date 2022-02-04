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
	private String registeredId;
	
	@Column(name = "number_of_crew")
	private int numberOfCrew;
	
	@Column(name = "flight_available")
	private Boolean flightAvailable;
	
	@Column(name = "fuel_burn")
	private int fuelBurn;
	
	private int flightTime;
	
	private String icao24;
	
	private Long firstSeen;
	
	private String estDepartureAirport;
	
	private Long lastSeen;
	
	private String estArrivalAirport;
	
	private String callsign;
	
	public Flight() {
		
	}

	public Flight(String registeredId, int numberOfCrew, Boolean flightAvailable, int fuelBurn, int flightTime,
			String icao24, Long firstSeen, String estDepartureAirport, Long lastSeen, String estArrivalAirport,
			String callsign) {
		super();
		this.registeredId = registeredId;
		this.numberOfCrew = numberOfCrew;
		this.flightAvailable = flightAvailable;
		this.fuelBurn = fuelBurn;
		this.flightTime = flightTime;
		this.icao24 = icao24;
		this.firstSeen = firstSeen;
		this.estDepartureAirport = estDepartureAirport;
		this.lastSeen = lastSeen;
		this.estArrivalAirport = estArrivalAirport;
		this.callsign = callsign;
	}



	public Long getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(Long flight_id) {
		this.flight_id = flight_id;
	}

	public String getRegisteredId() {
		return registeredId;
	}

	public void setRegisteredId(String registeredId) {
		this.registeredId = registeredId;
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



	public int getFlightTime() {
		return flightTime;
	}



	public void setFlightTime(int flightTime) {
		this.flightTime = flightTime;
	}



	public String getIcao24() {
		return icao24;
	}



	public void setIcao24(String icao24) {
		this.icao24 = icao24;
	}



	public Long getFirstSeen() {
		return firstSeen;
	}



	public void setFirstSeen(Long firstSeen) {
		this.firstSeen = firstSeen;
	}



	public String getEstDepartureAirport() {
		return estDepartureAirport;
	}



	public void setEstDepartureAirport(String estDepartureAirport) {
		this.estDepartureAirport = estDepartureAirport;
	}



	public Long getLastSeen() {
		return lastSeen;
	}



	public void setLastSeen(Long lastSeen) {
		this.lastSeen = lastSeen;
	}



	public String getEstArrivalAirport() {
		return estArrivalAirport;
	}



	public void setEstArrivalAirport(String estArrivalAirport) {
		this.estArrivalAirport = estArrivalAirport;
	}



	public String getCallsign() {
		return callsign;
	}



	public void setCallsign(String callsign) {
		this.callsign = callsign;
	}
	
	
	
}
