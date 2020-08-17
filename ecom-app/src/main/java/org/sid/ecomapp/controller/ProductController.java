package org.sid.ecomapp.controller;

import org.sid.ecomapp.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping(path = "/")
    public String index() {
        return "index";
    }

    @GetMapping(path = "/products")
    public String index(Model model) {
        model.addAttribute("produits", productRepository.findAll());
        return "products";
    }

    @ExceptionHandler(Exception.class)
    public String exceptionHandler() {
        return "errors";
    }
}
