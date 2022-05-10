package com.devm.juxtapose.controller;


import com.devm.juxtapose.model.juxtUser;
import com.devm.juxtapose.repository.juxtUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;


@RestController
@RequestMapping("/api")
public class juxtUserController {

    @Autowired
    private juxtUserRepository userRepo;

    public juxtUserController(juxtUserRepository userRepo) {
        super();
        this.userRepo = userRepo;
    }

    @GetMapping("/users")
    public Collection<juxtUser> juxtUsers() {
        System.out.println("users endpoint hit");
        return userRepo.findAll();
    }
}
