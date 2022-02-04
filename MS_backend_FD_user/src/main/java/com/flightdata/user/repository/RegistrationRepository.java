package com.flightdata.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flightdata.user.model.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {

	Registration findByRegistration (String registration);
}


