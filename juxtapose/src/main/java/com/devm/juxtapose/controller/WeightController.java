package com.devm.juxtapose.controller;


import com.devm.juxtapose.model.Weight;
import com.devm.juxtapose.model.juxtUser;
import com.devm.juxtapose.repository.WeightRepository;
import com.devm.juxtapose.repository.juxtUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class WeightController {

    @Autowired
    private WeightRepository weightRepo;

    public WeightController(WeightRepository weightRepo) {
        super();
        this.weightRepo = weightRepo;
    }

    @GetMapping("/weights")
    public Collection<Weight> weights() {
        System.out.println(weightRepo.findAll());
        return weightRepo.findAll();
    }

    @PostMapping("/weights")
    public String createWeight(@RequestBody Weight weight) {
        weightRepo.save(weight);
        return "Weight Entry Saved";
    }
}
