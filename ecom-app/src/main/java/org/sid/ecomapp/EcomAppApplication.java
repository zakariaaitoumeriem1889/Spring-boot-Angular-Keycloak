package org.sid.ecomapp;

import org.sid.ecomapp.dao.ProductRepository;
import org.sid.ecomapp.entity.Product;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcomAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcomAppApplication.class, args);
    }

    @Bean
    CommandLineRunner start(ProductRepository productRepository) {
        return args -> {
            productRepository.save(new Product(null, "Ord HP 564", 8000));
            productRepository.save(new Product(null, "Imprimante LX 11", 100));
            productRepository.save(new Product(null, "Smart Phone Samsung S10", 9900));
            productRepository.findAll().forEach(product -> {
                System.out.println(product.getName());
            });
        };
    }

}
