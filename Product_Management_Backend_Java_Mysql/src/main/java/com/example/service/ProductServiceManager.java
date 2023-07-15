package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Model.Product;
import com.example.Repository.ProductRepo;

@Service
public class ProductServiceManager implements ProductService{

	@Autowired
	private ProductRepo proRepo;
	
	@Override
	public Product saveProduct(Product obj) {
		return proRepo.save(obj);
	}

	@Override
	public List<Product> getAllProduct() {
	
		return proRepo.findAll();
				}

	@Override
	public Product getProductById(int id) {
		
		return proRepo.findById(id).get();
	}

	@Override
	public void deleteProduct(int id) {
		
		Product p = proRepo.findById(id).get();
		
		if(p!=null) {
			proRepo.delete(p);
		}
		
	}
	
	public Product updateProduct(Product p, int id) {
		Product oldp =  proRepo.findById(id).get();
		oldp.setProductName(p.getProductName());
		oldp.setProductDesc(p.getProductDesc());
		oldp.setPrice(p.getPrice());
		oldp.setStatus(p.getStatus());
		return proRepo.save(oldp);
		
		
	}

	
	
}
