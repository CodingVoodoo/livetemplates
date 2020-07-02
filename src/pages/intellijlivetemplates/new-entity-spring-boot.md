---
path: "/intellijlivetemplates/new-entity-spring-boot"
title: "New Entity Spring Boot"
languages:
  - java
  - spring
image: "spring.png"
---

```java
@Entity
public class $NAME$Entity {

    @Id
    @GeneratedValue
    private Long id;

    public $NAME$() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
```