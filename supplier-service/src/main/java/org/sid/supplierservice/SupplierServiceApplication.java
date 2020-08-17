package org.sid.supplierservice;

import org.sid.supplierservice.dao.SupplierRepository;
import org.sid.supplierservice.entity.Supplier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.stream.Stream;

@SpringBootApplication
public class SupplierServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SupplierServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(
            SupplierRepository supplierRepository,
            RepositoryRestConfiguration restConfiguration
    ) {
        return args -> {
            restConfiguration.exposeIdsFor(Supplier.class);
            Stream.of("IBM", "HP", "Samsung").forEach(name -> {
                supplierRepository.save(new Supplier(null, name, "contact@" + name.toLowerCase() + ".com"));
            });
        };
    }

}
