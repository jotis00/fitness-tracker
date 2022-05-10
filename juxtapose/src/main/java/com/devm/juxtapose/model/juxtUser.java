package com.devm.juxtapose.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class juxtUser {

    @Id
    private long id;

    private String name;

    private String password;
}
