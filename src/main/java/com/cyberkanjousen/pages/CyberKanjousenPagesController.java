package com.cyberkanjousen.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CyberKanjousenPagesController {

    @GetMapping("/")
    String index(@RequestHeader(value = "HX-Request", required = false) String target, Model model) {
        // model.addAttribute("tittle", "環状線的房间");
        if ("home-container".equals(target)) {
            return "index :: home-container";
        }
        return "index";
    }

    @GetMapping("/me")
    String me(@RequestHeader(value = "HX-Request", required = false) String target, Model model) {
        // model.addAttribute("tittle", "環状線的房间");
        if ("me-container".equals(target)) {
            return "me :: me-container";
        }
        return "me";
    }
}
