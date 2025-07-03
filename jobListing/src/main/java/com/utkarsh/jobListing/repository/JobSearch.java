package com.utkarsh.jobListing.repository;

import com.mongodb.client.MongoClient;
import com.utkarsh.jobListing.model.JobDetails;
import org.bson.Document;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.AggregateIterable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class JobSearch {

    @Autowired
    private MongoClient client;

    @Autowired
    private MongoConverter converter;

    public List<JobDetails> findbyText(String text) {
        List<JobDetails> list = new ArrayList<>();

        MongoDatabase database = client.getDatabase("utkarsh");
        MongoCollection<Document> collection = database.getCollection("jobPosting");

        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(
                new Document("$search", new Document("index", "default")
                        .append("text", new Document("query", text)
                                .append("path", Arrays.asList("profile", "description", "tech")))),
                new Document("$project", new Document("job", "$$ROOT")),  // Wrap the full doc in "job"
                new Document("$replaceRoot", new Document("newRoot", "$job"))  // Unwrap for direct mapping
        ));

        result.forEach(post -> list.add(converter.read(JobDetails.class, post)));

        return list;
    }
}
