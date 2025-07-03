package com.utkarsh.jobListing.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jobPosting")
public class JobDetails {
    private String profile;
    private String description;
    private int experience;
    private String tech[];

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String[] getTech() {
        return tech;
    }

    public void setTech(String[] tech) {
        this.tech = tech;
    }
}
