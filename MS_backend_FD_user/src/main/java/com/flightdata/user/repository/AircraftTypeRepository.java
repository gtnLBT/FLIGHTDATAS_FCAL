package com.flightdata.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flightdata.user.model.AircraftType;

public interface AircraftTypeRepository extends JpaRepository<AircraftType, Long> {

	AircraftType findByAircrafttypeicao (String aircrafttypeicao);
}
