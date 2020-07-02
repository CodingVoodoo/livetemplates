---
path: "/intellijlivetemplates/new-commandlinerunner-spring-boot"
title: "New CommandLineRunner Spring Boot"
languages:
  - java
  - spring
image: "spring.png"
---

```java
@Component
public class $NAME$CommandLineRunner implements CommandLineRunner {

    private $NAME$Repository repository;

    public $NAME$CommandLineRunner($NAME$Repository repository)  {
        this.repository = repository;
    }

    @Override
    public void run(String...args) throws Exception {
    }
}
```