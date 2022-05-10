package com.devm.juxtapose.repository;


import com.devm.juxtapose.model.juxtUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface juxtUserRepository extends JpaRepository<juxtUser, Long> {
}
