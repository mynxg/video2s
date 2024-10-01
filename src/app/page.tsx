"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import SparklesText from "@/components/ui/sparkles-text";
import TypingAnimation from "@/components/ui/typing-animation";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Safari from "@/components/ui/safari";

export default function Home() {
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

  const getMainDomain = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      const parts = hostname.split('.');
      return parts.length > 2 ? parts.slice(-2).join('.') : hostname;
    } catch {
      return "bilibili.com";
    }
  };

  const handleDownload = async (url: string = inputUrl) => {
    try {
      setIsLoading(true);
      setSafariUrl(getMainDomain(url));
      const response = await fetch("/api/download", {
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
          text="Download bilibili video with one click!"
        />
      </header>

      <div className="z-10 mt-8 flex items-center space-x-4">
        <Input
          className="w-full sm:w-80 h-10"
          placeholder="Paste your Bilibili video URL here"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          disabled={isLoading}
        />
        <RainbowButton onClick={() => handleDownload(inputUrl)} disabled={isLoading}>
          {isLoading ? "Downloading..." : "Download"}
        </RainbowButton>
      </div>

      <div className="z-10 mt-8 sm:w-full max-w-3xl px-4 sm:px-0">
        <Safari
          url={safariUrl}
          className="size-full"
          src={safariSrc}
        ></Safari>
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
