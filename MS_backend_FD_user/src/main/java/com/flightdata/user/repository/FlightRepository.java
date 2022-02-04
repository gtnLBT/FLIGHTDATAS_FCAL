package com.flightdata.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.flightdata.user.model.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {
	
	Flight findByRegisteredId (String registeredId);
}
