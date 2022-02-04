package com.flightdata.user.controller;

import java.util.ArrayList;
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
import com.flightdata.user.model.AircraftType;
import com.flightdata.user.model.Flight;
import com.flightdata.user.model.Registration;
import com.flightdata.user.model.Role;
import com.flightdata.user.model.User;
import com.flightdata.user.repository.AircraftTypeRepository;
import com.flightdata.user.repository.FlightRepository;
import com.flightdata.user.repository.RegistrationRepository;
import com.flightdata.user.repository.RoleRepository;
import com.flightdata.user.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users_dataflight_api/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private FlightRepository flightRepository;
	
	@Autowired
	private RegistrationRepository registrationRepository;
	
	@Autowired
	private AircraftTypeRepository aircraftTypeRepository;
	
	// get all users
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	// get all registration
	@GetMapping("/registrations")
	public List<Registration> getAllRegistrations(){
		return registrationRepository.findAll();
	}
	
	// get a registration by its registration name
	@GetMapping("/registration/{registration}")
	public Registration getRegistrationByRegistration(@PathVariable("registration") String registration) {
		return registrationRepository.findByRegistration(registration);
	}
	
	// get all registration
	@GetMapping("/aircraftTypes")
	public List<AircraftType> getAllAircraftTypes(){
		return aircraftTypeRepository.findAll();
	}
	
	// get a ACTypeICAO by its ACTypeICAO
	@GetMapping("/aircraftType/{aircrafttypeicao}")
	public AircraftType getAircraftTypeByAircraftTypeicao(@PathVariable("aircrafttypeicao") String aircrafttypeicao) {
		return aircraftTypeRepository.findByAircrafttypeicao(aircrafttypeicao);
	}
	
	// get user by his username
	@GetMapping("/{username}")
	public User getUserByUsername(@PathVariable("username") String username) {
		return userRepository.findByUsername(username);
	}
	
	// create user rest api
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		Role roleUser = new Role();
		roleUser.setRole("USER");
		List<Role> roleUserList = new ArrayList<Role>();
		roleUserList.add(roleUser);
		List<Role> roleList = roleUserList;
		user.setRoles(roleList);
		return userRepository.save(user);
	}
	
	// get user by id rest api
	@GetMapping("/users/{user_id}")
	public ResponseEntity<User> getUserById(@PathVariable Long user_id) {
		User user = userRepository.findById(user_id)
				.orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + user_id));
		return ResponseEntity.ok(user);
	}
	
	// get flight by its regist_Id_In_MongoDB_FS
	@GetMapping("/users/flight/{registeredId}")
	public ResponseEntity<Flight>getFlightById(@PathVariable String registeredId){
		Flight flight = flightRepository.findByRegisteredId(registeredId);
				//.orElseThrow(() -> new ResourceNotFoundException("Flight does not exist with id :" + registeredId_FlightInMongoDB_flightStore));
		return ResponseEntity.ok(flight);
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
