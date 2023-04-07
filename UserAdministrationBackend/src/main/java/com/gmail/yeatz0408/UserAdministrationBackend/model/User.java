package com.gmail.yeatz0408.UserAdministrationBackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "アカウントIDを入力してください")
    @Size(min = 3, max = 12)
    private String username;

    @NotEmpty(message = "名前を入力してください")
    @Size(min = 2)
    private String name;

    @NotEmpty(message = "Eメールを入力してください")
    @Email
    private String email;
    
}
