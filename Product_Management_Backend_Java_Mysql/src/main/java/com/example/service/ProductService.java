package com.example.service;

import java.util.List;

import com.example.Model.Product;

public interface ProductService {

	public Product saveProduct(Product obj);
	public List<Product> getAllProduct();
	public Product getProductById(int id);
	public void deleteProduct(int id);
	Product updateProduct(Product p, int id);
}
