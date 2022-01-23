package com.flightdata.user.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flightdata.user.exception.ResourceNotFoundException;
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
	
	// get user by his username
	@GetMapping("/{username}")
	public User getUserByUsername(@PathVariable("username") String username) {
		return userRepository.findByUsername(username);
	}
	
	// create user rest api
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	// get user by id rest api
	@GetMapping("/users/{user_id}")
	public ResponseEntity<User> getUserById(@PathVariable Long user_id) {
		User user = userRepository.findById(user_id)
				.orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + user_id));
		return ResponseEntity.ok(user);
	}
	
	// update user rest api
	@PutMapping("/users/{user_id}")
	public ResponseEntity<User> updateUser(@PathVariable Long user_id, @RequestBody User userDetails){
		User user = userRepository.findById(user_id)
				.orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + user_id));
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setUsername(userDetails.getUsername());
		user.setPilotLicenceNumber(userDetails.getPilotLicenceNumber());
		user.setCompanyName(userDetails.getCompanyName());
		user.setHomeBase(userDetails.getHomeBase());
		user.setEmail(userDetails.getEmail());
		user.setPassword(userDetails.getPassword());
		user.setAddress(userDetails.getAddress());
		user.setZip(userDetails.getZip());
		user.setCity(userDetails.getCity());
		user.setCountry(userDetails.getCountry());
		user.setEnabled(userDetails.getEnabled());
		user.setRoles(userDetails.getRoles());
		user.setAircraftTypes(userDetails.getAircraftTypes());
		user.setFlightRecords(userDetails.getFlightRecords());
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	// delete user rest api
	@DeleteMapping("/users/{user_id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long user_id){
		User user = userRepository.findById(user_id)
				.orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + user_id));
		
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
