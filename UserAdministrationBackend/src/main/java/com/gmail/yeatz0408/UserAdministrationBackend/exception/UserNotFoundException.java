package com.gmail.yeatz0408.UserAdministrationBackend.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(Long id) {
        super("そのID(" + id + ")のユーザーは存在しません。");
    }
    
}
