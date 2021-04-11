package com.luv2code.ecommerce.controller;

import com.luv2code.ecommerce.dto.ProductoDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = { "/init" })
public class InitController {

    @RequestMapping(value = "/producto", method = RequestMethod.GET)
    @ResponseBody
    public ProductoDTO consultaPropuesta(@RequestParam(value = "codigo", required = false) String codProd){
        ProductoDTO producto=new ProductoDTO();
        producto.setCod(codProd);
        producto.setName("El señor de los anillos");

        return producto;
    }
}
