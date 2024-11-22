# 视频下载项目

## 项目介绍

这是一个视频下载项目，支持从多个平台下载视频。目前支持以下平台：
- Bilibili
- YouTube

## 功能

- [√] 支持 Bilibili 视频下载
- [√] 支持 YouTube 视频下载

## 安装步骤

1. 克隆仓库到本地：
    ```bash
    git clone git@github.com:mynxg/video2s.git
    cd video2s
    ```

2. 安装依赖：
    ```bash
    npm install
    ```

3. 创建并配置 `.env.local` 文件：
    ```plaintext
    REACT_APP_API_URL=http://localhost:8082
    ```

## 使用方法

1. 启动开发服务器：
    ```bash
    npm run dev
    ```

2. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

3. 在输入框中粘贴视频 URL，然后点击“Parser”按钮开始解析视频。

## 配置修改

在 `.env.local` 文件中修改接口地址：
```plaintext
REACT_APP_API_URL=http://localhost:8082
```

## 后端项目：

接口服务：[MultiSourceVideoDownload](https://github.com/mynxg/MultiSourceVideoDownload)


## 贡献
欢迎贡献代码！请提交 Pull Request 或报告问题。

## 许可证
此项目使用 [GLWTPL](https://github.com/me-shaon/GLWTPL/blob/master/LICENSE) 许可证。





