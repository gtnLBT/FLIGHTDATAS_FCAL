package com.flightdata.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flightdata.user.model.User;
import com.flightdata.user.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users_dataflight_api/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	// get all users
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/{username}")
	public User getUserByUsername(@PathVariable("username") String username) {
		return userRepository.findByUsername(username);
	}
}
