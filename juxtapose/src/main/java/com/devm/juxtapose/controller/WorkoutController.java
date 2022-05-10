package com.devm.juxtapose.controller;

import com.devm.juxtapose.model.Workout;
import com.devm.juxtapose.repository.WorkoutRepository;
import org.hibernate.jdbc.Work;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class WorkoutController {

    @Autowired
    private WorkoutRepository workoutRepo;

    public WorkoutController(WorkoutRepository workoutRepo) {
        super();
        this.workoutRepo = workoutRepo;
    }
    @GetMapping("/workout")
    public Collection<Workout> workouts() {
        return workoutRepo.findAll();
    }

    @PostMapping("/workout")
    public String createWorkout(@RequestBody Workout workout) {
        workoutRepo.save(workout);
        return "New Workout Entry Added";
    }

}
