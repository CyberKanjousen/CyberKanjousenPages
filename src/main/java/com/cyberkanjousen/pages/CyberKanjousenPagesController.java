package com.cyberkanjousen.pages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CyberKanjousenPagesController {

    @GetMapping("/")
    String index(Model model) {
        model.addAttribute("title", "サイバー環状線的房间");
        return "index";
    }

    @GetMapping("/me")
    String me(Model model) {
        model.addAttribute("title", "关于サイバー環状線");
        return "me";
    }
}
