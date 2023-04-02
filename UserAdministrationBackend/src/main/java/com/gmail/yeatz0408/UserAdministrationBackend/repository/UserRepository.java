package com.gmail.yeatz0408.UserAdministrationBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gmail.yeatz0408.UserAdministrationBackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
