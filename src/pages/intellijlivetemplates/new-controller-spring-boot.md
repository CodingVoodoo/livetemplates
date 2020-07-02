---
path: "/intellijlivetemplates/new-controller-spring-boot"
title: "New Controller Spring Boot"
languages:
  - java
  - spring
image: "spring.png"
---

```java
@org.springframework.web.bind.annotation.RestController
class $entity$Controller {

    private $entity$Repository repository;

    public $entity$Controller($entity$Repository repository) {
        this.repository = repository;
    }

    @org.springframework.web.bind.annotation.GetMapping("/$uriMapping$")
    java.util.Collection<$entity$> findAll() {
        return repository.findAll();
    }
}
```