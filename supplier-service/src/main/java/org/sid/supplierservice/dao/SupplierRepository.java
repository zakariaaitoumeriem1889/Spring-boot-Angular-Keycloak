package org.sid.supplierservice.dao;

import org.sid.supplierservice.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
