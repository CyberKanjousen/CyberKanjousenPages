package com.cyberkanjousen.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CyberKanjousenPagesController {

    @GetMapping("/")
    String index(@RequestParam(name = "name", required = false, defaultValue = "<h1>World<h1/>") String name, Model model) {
        model.addAttribute("name", name);
        return "index";
    }
}
