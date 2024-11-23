# 视频下载项目

[//]: # ([![]&#40;https://img.shields.io/github/license/mynxg/video2s?color=4D7A97&logo=apache&#41;]&#40;https://github.com/me-shaon/GLWTPL/blob/master/LICENSE&#41;  )
[![](https://img.shields.io/github/stars/mynxg/video2s)](https://github.com/mynxg/video2s/stargazers)
[![](https://img.shields.io/github/issues/mynxg/video2s)](https://github.com/mynxg/video2s/issues)
[![](https://img.shields.io/github/issues-closed/mynxg/video2s)](https://github.com/mynxg/video2s/issues?q=is%3Aissue+is%3Aclosed)
[![](https://img.shields.io/github/issues-pr/mynxg/video2s)](https://github.com/mynxg/video2s/pulls)
[![](https://img.shields.io/github/issues-pr-closed/mynxg/video2s)](https://github.com/mynxg/video2s/pulls?q=is%3Apr+is%3Aclosed)


[简体中文](README.md) | [English](README-EN.md)

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

API 接口服务：[MultiSourceVideoDownload](https://github.com/mynxg/MultiSourceVideoDownload)


## Vercel 部署教程
登录 [Vercel](https://vercel.com/) 并创建一个新项目。

选择导入 GitHub 仓库，并选择你的项目仓库（video2s）。

在项目设置中，添加环境变量：

VIDEO_APP_API_URL：设置为你的 API 地址，例如 https://your-api-url.com
点击“Deploy”按钮开始部署。

部署完成后，你可以在 Vercel 提供的域名上访问你的应用。


## 贡献
欢迎贡献代码！请提交 Pull Request 或报告问题。

## 许可证
此项目使用 [GLWTPL](https://github.com/me-shaon/GLWTPL/blob/master/LICENSE) 许可证。


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mynxg/video2s&type=Date)](https://star-history.com/#mynxg/video2s&Date)


