package com.utkarsh.jobListing.repository;

import com.utkarsh.jobListing.model.JobDetails;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface JobRepository extends MongoRepository<JobDetails, String> {

}
