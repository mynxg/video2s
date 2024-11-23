"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import SparklesText from "@/components/ui/sparkles-text";
import TypingAnimation from "@/components/ui/typing-animation";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Safari from "@/components/ui/safari";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import YutubeIcon from '@/components/icon/YutubeIcon';
import BilibiliIcon from '@/components/icon/BilibiliIcon';

function HomeContent() {
  const [inputUrl, setInputUrl] = useState("");
  const [safariSrc, setSafariSrc] = useState("");
  const [safariUrl, setSafariUrl] = useState("bilibili.com");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlParam = searchParams.get("url");
    if (urlParam) {
      setInputUrl(urlParam);
      handleDownload(urlParam);
    }
  }, [searchParams]);

  // 获取主域名
  const getMainDomain = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      const parts = hostname.split('.');
      return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
    } catch {
      return "bilibili.com";
    }
  };

  //解析视频
  const handleDownload = async (url: string = inputUrl) => {
    try {
      setIsLoading(true);
      setSafariUrl(getMainDomain(url));
      const response = await fetch("/api/parser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      //setSafariSrc(data.videoUrl);
      if (data.dataResponse.code === 0) {
        setSafariUrl(getMainDomain(data.dataResponse.data.url));
        setSafariSrc(data.dataResponse.data.url);
      } else {
        console.error("下载失败:", data.dataResponse.message);
        toast.error(`下载失败: ${data.dataResponse.message}`);
      }
      setSafariSrc(data.videoUrl);
    } catch (error) {
      console.error("下载失败:", error);
      //toast.error(`下载失败: ${error}`);
      try {
        setIsLoading(true);
        setSafariUrl(getMainDomain(url));
        const response = await fetch("/api/down", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });
        const data = await response.json();
        setSafariSrc(data.videoUrl);
      } catch (error) {
        console.error("下载失败:", error);
        toast.error(`备用接口下载失败: ${error}`);
      } 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-background">
      <header className="z-10 mt-10 text-center">
        <h1 className="text-5xl font-medium tracking-tighter text-black dark:text-white font-mono">
          <SparklesText text="2S VIDEO" />
        </h1>
        <TypingAnimation
          className="mt-4 text-4xl font-500 text-black dark:text-white font-serif"
          text="Download video with one click!"
        />
      </header>

      <ToastContainer />

      <div className="z-10 mt-8 flex items-center space-x-4">
        <Input
          className="w-full sm:w-80 h-10"
          placeholder="Paste your video URL here"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          disabled={isLoading}
        />
        <RainbowButton onClick={() => handleDownload(inputUrl)} disabled={isLoading}>
          {isLoading ? "Parsering..." : "Parser"}
        </RainbowButton>
      </div>

      <div className="z-10 mt-8 sm:w-full max-w-3xl px-4 sm:px-0">
        <Safari
          url={safariUrl}
          className="size-full"
          src={safariSrc}
        ></Safari>
        <div className="flex flex-col items-center mt-4 space-y-2">
          <span className="text-base font-thin">Supported platforms</span>
          <div className="flex space-x-4">
            <BilibiliIcon width={40} height={40} />
            <YutubeIcon width={40} height={40} />
          </div>
        </div>
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "absolute inset-0"
        )}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <HomeContent />
    </Suspense>
  );
}
