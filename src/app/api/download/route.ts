import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ error: "Please provide a valid Bilibili video URL." }, { status: 400 });
  }

  try {
    // 从 URL 中提取 BV ID
    const bvid = url.match(/BV\w+/)?.[0];
    if (!bvid) {
      return NextResponse.json(
        { error: "Invalid Bilibili video URL" },
        { status: 400 }
      );
    }

    // 从环境变量中获取 cookie
    const cookie = process.env.BILIBILI_COOKIE;
    if (!cookie) {
      return NextResponse.json(
        { error: "Failed to get cookie" },
        { status: 500 }
      );
    }

    // 设置请求头和 cookie
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Referer: "https://www.bilibili.com",
      Cookie: cookie
    };

    // 请求视频信息
    const videoInfoResponse = await axios.get(
      `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`,
      { headers }
    );
    const videoInfo = videoInfoResponse.data.data;

    // 获取 aid 和 cid
    const { aid, cid } = videoInfo;

    // 请求视频播放 URL
    const playUrlResponse = await axios.get(
      `https://api.bilibili.com/x/player/playurl?avid=${aid}&cid=${cid}&qn=80&type=mp4&platform=html5&high_quality=1`,
      { headers }
    );
    const playUrl = playUrlResponse.data.data.durl[0].url;

    return NextResponse.json({ videoUrl: playUrl });
  } catch (error) {
    console.error("错误:", error);
    return NextResponse.json({ error: "Failed to get video information" }, { status: 500 });
  }
}
