package com.flightdata.user.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	private String username;
	
	@Column(name = "pilot_licence_number")
	private String pilotLicenceNumber;
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "home_base")
	private String homeBase;
	private String email;
	private String password;
	private String address;
	private String city;
	private String country;
	private Boolean enabled;
	
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinTable(name="user_role", joinColumns = @JoinColumn(name="user_id"),
	inverseJoinColumns = @JoinColumn(name="role_id"))
	private List<Role> roles;
	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(name="user_aircraft_type", joinColumns = @JoinColumn(name="user_id"),
	inverseJoinColumns = @JoinColumn(name="aircraft_type_id"))
	private List<AircraftType> aircraftTypes;
	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(name="user_flight_records", joinColumns = @JoinColumn(name="user_id"),
	inverseJoinColumns = @JoinColumn(name="flight_record_id"))
	private List<Flight> flightRecords;
	
	public User() {
		
	}
	
	public User(String firstName, String lastName, String username, String pilotLicenceNumber, String companyName,
			String homeBase, String email, String password, String address, String city, String country,
			Boolean enabled, List<Role> roles, List<AircraftType> aircraftTypes, List<Flight> flightRecords) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.pilotLicenceNumber = pilotLicenceNumber;
		this.companyName = companyName;
		this.homeBase = homeBase;
		this.email = email;
		this.password = password;
		this.address = address;
		this.city = city;
		this.country = country;
		this.enabled = enabled;
		this.roles = roles;
		this.aircraftTypes = aircraftTypes;
		this.flightRecords = flightRecords;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPilotLicenceNumber() {
		return pilotLicenceNumber;
	}

	public void setPilotLicenceNumber(String pilotLicenceNumber) {
		this.pilotLicenceNumber = pilotLicenceNumber;
	}

	public String getCompanyName() {
		return companyName;
	}
	
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getHomeBase() {
		return homeBase;
	}

	public void setHomeBase(String homeBase) {
		this.homeBase = homeBase;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public List<AircraftType> getAircraftTypes() {
		return aircraftTypes;
	}

	public void setAircraftTypes(List<AircraftType> aircraftTypes) {
		this.aircraftTypes = aircraftTypes;
	}

	public List<Flight> getFlightRecords() {
		return flightRecords;
	}

	public void setFlightRecords(List<Flight> flightRecords) {
		this.flightRecords = flightRecords;
	}
	
	
	
}
