package com.dataflight.usersms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dataflight.usersms.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);
}
