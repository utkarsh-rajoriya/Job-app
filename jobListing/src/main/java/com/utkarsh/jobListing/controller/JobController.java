package com.utkarsh.jobListing.controller;

import com.utkarsh.jobListing.model.JobDetails;
import com.utkarsh.jobListing.repository.JobRepository;
import com.utkarsh.jobListing.repository.JobSearch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class JobController {

    @Autowired
    JobRepository repo;

    @Autowired
    JobSearch srepo;

    @GetMapping("/")
    public List<JobDetails> getPosts(){
        return repo.findAll();
    }

    @GetMapping("/{text}")
    public List<JobDetails> searching (@PathVariable String text) {
        return srepo.findbyText(text);
    }

    @PostMapping("/post")
    public JobDetails addPost(@RequestBody JobDetails detail){
        return repo.save(detail);
    }
}
