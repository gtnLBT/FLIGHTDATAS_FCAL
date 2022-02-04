package com.flightdata.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flightdata.user.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

	Role findByRole (String role);
}
