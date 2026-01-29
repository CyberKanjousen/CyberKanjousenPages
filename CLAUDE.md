# CyberKanjousenPages 技术栈文档

## 代码要求

**所有外部媒体引用一律使用 Thymeleaf 标签，比如`href` -> `th:href`（`<a>`内的除外）**

**引用本地资源的根目录在`src/main/resources/static/stylesheets`**

## 项目概述

基于 **Spring Boot 4.0.0** 的现代化 Java Web 应用项目

## 核心技术栈

### 后端框架
- **Spring Boot 4.0.0** - 主应用框架
- **Spring Web MVC** - 传统 Web MVC 框架
- **Spring WebFlux** - 响应式 Web 框架
- **Java 25** - 最新 Java 版本
- **Gradle** - 项目构建工具

### 模板引擎
- **Thymeleaf** - 主要模板引擎（当前使用）
- **JTE (Java Template Engine)** - 高性能模板引擎（已配置）
- **Freemarker** - 通用模板引擎
- **Groovy Templates** - Groovy 模板支持
- **Mustache** - 逻辑less模板引擎

### 前端技术
- **HTMX 5.0.0** - 现代HTML增强库
  - 与Thymeleaf集成，提供无需JavaScript的交互体验

### API & 数据层
- **Spring GraphQL** - GraphQL 支持
- **Spring Data REST** - RESTful API
- **Spring HATEOAS** - 超媒体驱动API
- **Netflix DGS Codegen** - GraphQL 客户端代码生成

### Web 客户端
- **Spring WebClient** - 响应式 HTTP 客户端
- **Spring Jersey** - JAX-RS 支持
- **Spring WebServices** - Web 服务支持

### 会话管理
- **Spring Session Redis** - Redis 会话存储
- **Spring Session JDBC** - JDBC 会话存储

### 架构支持
- **Spring Modulith 2.0.0** - 模块化架构

### 开发工具
- **Spring Boot DevTools** - 热重载等开发工具
- **Lombok** - 减少样板代码
- **JUnit 5** - 单元测试框架

## 项目结构

```
src/
├── main/
│   ├── java/com/cyberkanjousen/pages/
│   │   ├── CyberKanjousenPagesApplication.java    # 主应用类
│   │   └── CyberKanjousenPagesController.java     # 控制器
│   ├── jte/                                       # JTE模板目录
│   ├── resources/
│   │   ├── graphql-client/                       # GraphQL客户端schema
│   │   ├── static/                               # 静态资源
│   │   │   └── scripts/
│   │   │       └── main.js
│   │   │   └── stylesheets/
│   │   │       └── main.css
│   │   │       └── home.css
│   │   ├── templates/                            # Thymeleaf模板
│   │   │   └── commons/                          # 公共部分
│   │   │   │   └── navbar_and_footer.html
│   │   │   └── index.html                        # 主页
│   │   └── application.properties                # 应用配置
│   └── templates/                                # 主要模板目录
└── test/
    └── java/com/cyberkanjousen/pages/
        └── CyberKanjousenPagesApplicationTests.java
```
