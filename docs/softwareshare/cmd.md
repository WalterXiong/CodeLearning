---
title: WIN CMD 常用命令
category: SoftwareShare
tag:
  - Windows
date: 2020-08-26
original: isOriginal
---

# CMD 常用命令



## 进程操作

### 后台启动进程

```
start /b redis-server.exe
```

### 查找所有运行的端口

```
netstat -ano
```

### 查看被占用端口对应的 PID

```bash
# 查看指定端口的占用情况
netstat -aon | findstr "8081"
```

### 查看进程

```bash
# 查看 PID 指定的进程（数字为 PID）
tasklist | findstr "9088"

# 以服务名称 查看该服务的进程
tasklist | findstr "jupyter"
```

### 结束进程

强制（/F参数）杀死 pid 为 9088 的所有进程包括子进程（/T参数）：

```bash
taskkill /f /t /PID 9088 

# 也可以跟进程的名称
taskkill /f /t /im jupyter-notebook.exe 
```