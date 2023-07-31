---
sidebar_position: 4
---

# 数采程序安装

## Linux

### 联网安装注册

进入组织管理页面的「设备」分页

![org-device](../img/org-device.png)

复制安装命令

![org-device-copy-command](../img/org-device-copy-command.png)

打开终端窗口，进入设备端，粘贴安装命令

![org-device-paste-command](../img/org-device-paste-command.png)

安装完成，注册成功

![org-device-install](../img/org-device-install.png)

<br />

### 离线安装注册

1. 下载安装脚本 [install.sh](https://download.coscene.cn/coscout/install.sh)、离线二进制文件压缩包 [cos_binaries.tar.gz](https://download.coscene.cn/coscout/tar/latest/cos_binaries.tar.gz) 到设备端

2. 给安装脚本赋权，在命令行执行

   ```
   chmod +x install.sh
   ```
  
4. 在设备端执行本地安装命令（以离线二进制文件压缩包 `cos_binaries.tar.gz` 放置在设备的`/root/cos_binaries.tar.gz` 位置为例）

    ```
    $ ./install.sh --server_url=https://api.coscene.cn --project_slug=coscene/auto-upload --use_local=/root/cos_binaries.tar.gz
    ```

    其中，参数 `--server_url` 与 `--project_slug` 可参考上文「联网安装注册」获取，参数 `--use_local` 为离线二进制文件压缩包的路径。

<br />

### 查看日志

在设备端执行以下命令，查看数据采集程序的日志信息

```
journalctl -fu cos
```

<br />

## Windows
> 高速开发中，敬请期待
