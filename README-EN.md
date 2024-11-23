# Video Download Project
[//]: # ([![]&#40;https://img.shields.io/github/license/mynxg/video2s?color=4D7A97&logo=apache&#41;]&#40;https://github.com/me-shaon/GLWTPL/blob/master/LICENSE&#41;  )
[![](https://img.shields.io/github/stars/mynxg/video2s)](https://github.com/mynxg/video2s/stargazers)
[![](https://img.shields.io/github/issues/mynxg/video2s)](https://github.com/mynxg/video2s/issues)
[![](https://img.shields.io/github/issues-closed/mynxg/video2s)](https://github.com/mynxg/video2s/issues?q=is%3Aissue+is%3Aclosed)
[![](https://img.shields.io/github/issues-pr/mynxg/video2s)](https://github.com/mynxg/video2s/pulls)
[![](https://img.shields.io/github/issues-pr-closed/mynxg/video2s)](https://github.com/mynxg/video2s/pulls?q=is%3Apr+is%3Aclosed)

[简体中文](README.md) | [English](README-EN.md)

## Project Overview

This is a video download project that supports downloading videos from multiple platforms. Currently, it supports:

- Bilibili
- YouTube

## Features

- [√] Supports downloading videos from Bilibili
- [√] Supports downloading videos from YouTube

## Installation Steps

1. Clone the repository:
    ```bash
    git clone git@github.com:mynxg/video2s.git
    cd video2s
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create and configure the `.env.local` file:
    ```plaintext
    REACT_APP_API_URL=http://localhost:8082
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Paste the video URL into the input field, then click the "Parser" button to start parsing the video.

## Configuration

To change the API endpoint, update the `.env.local` file:
```plaintext
REACT_APP_API_URL=http://localhost:8082
```

## Backend Project:

API Service: [MultiSourceVideoDownload](https://github.com/mynxg/MultiSourceVideoDownload)

## Vercel Deployment Guide

Log in to [Vercel](https://vercel.com/) and create a new project.

Select to import a GitHub repository, then choose your project repository (`video2s`).

In the project settings, add an environment variable:

`VIDEO_APP_API_URL`: Set this to your API endpoint, e.g., `https://your-api-url.com`

Click the "Deploy" button to start deployment.

After deployment, you can access your application via the domain provided by Vercel.

## Contribution

Contributions are welcome! Please submit a Pull Request or report any issues.

## License

This project is licensed under [GLWTPL](https://github.com/me-shaon/GLWTPL/blob/master/LICENSE).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mynxg/video2s&type=Date)](https://star-history.com/#mynxg/video2s&Date)

