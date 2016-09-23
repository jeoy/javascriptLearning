<?php
    // 实例化mysqli类
    $mysqliConn = new mysqli();
 
    // 连接服务器，并选择一个数据库
    // 错误的密码
    $mysqliConn->connect('127.0.0.1', 'root', 'YES', 'db_test');
    if ($mysqliConn->connect_error)
    {
        printf("Unable to connect to the database:%s", $mysqliConn->connect_error);
        exit();
    }
    
    // 与数据库交互
    $query = 'select firstname, lastname, email from tb_test;';
 
    // 发送查询给MySQL
    $result = $mysqliConn->query($query);
 
    // 迭代处理结果集
    while (list($firstname, $lastname, $email) = $result->fetch_row())
    {
        printf("%s %s's email:%s<br/>", $firstname, $lastname, $email);
    }
    
    // 关闭连接
    $mysqliConn->close();
?>