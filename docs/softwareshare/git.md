---
title: Git 常用命令
category: SoftwareShare
tag:
  - Git
date: 2020-05-26
original: isOriginal
---

# Git 命令



## 1. 设置username和email

在把本项目上传到github之前还需要分别输入设置username和email，因为github每次commit都会记录他们。所以分别输入如下命令：

```shell
// 用户名标识  ---- 实际也可以填写您的github仓库的名称
$ git config --global user.name "your name"
// 邮箱标识   ---- 可以填写github仓库的邮箱
$ git config --global user.email "your_email@youremail.com"		
```

> 注意：`git config --global` “参数”，有了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然你也可以对某个仓库指定的不同的用户名和邮箱。



## 2. 创建ssh key

为了让github能够识别是我们自己上传文件，需要创建ssh key

```shell
$ ssh-keygen -t rsa -C "your_email@youremail.com"
```



## 3. 将ssh可以写入github

创建好本地的ssh key后，我们需要让github知道这个ssh key是我们自己，所以需要将生成的ssh key复制出来，写入github，在mac下在终端输入

```shell
cat ~/.ssh/id_rsa.pub
```

此时在终端会显示出刚刚创建好的 ssh key，复制出来，在github在点击头像，然后点击 setting，在找到 SSH and GPG keys，创建一个 new ssh key，然后将刚刚复制的 ssh key 填入即可。



## 4.验证是否连接成功

在终端输入

```shell
$ ssh -T git@github.com
```

如果回车看到：**Hi WalterXiong! You've successfully authenticated, but GitHub does not provide shell access.** 。表示已成功连上 github。



## 5. 添加远程地址

在与 github 连接成功后，如何才能让相应的项目上传到对应的仓库呢？这里就需要添加远程地址，从而让我们的本地项目顺利到达对应的仓库。

打开终端，输入

```shell
//git查看远程仓库信息
$ git remote      

//后面的 `yourName` 和 `yourRepo` 分别是你的 github 的用户名和刚才新建的仓库名。
$ git remote add origin git@github.com:"yourName"/"yourRepo".git 

$ git remote -v
```



## 6. 上传项目

进入项目，在终端运行

```shell
$ git status
```

查看要上传的文件是否正确，然后将项目下的所有文件添加到git跟踪范围。

```shell
$ git add .
```

记录此次提交并上传

```shell
$ git commit -m 'my project push'
$ git push origin main
```

这里的 **main** 指的是主分支名，如果是其他分支，则填写相应的分支名。

这样我们就将我们的项目上传到 github 仓库。



## 7. 撤回提交( commit )

```shell
git reset --soft HEAD^
```

