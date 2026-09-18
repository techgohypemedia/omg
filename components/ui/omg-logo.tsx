import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OMGLogoProps {
  variant?: "dark" | "light"; // "dark" = for dark background, "light" = for light background
  className?: string;
  width?: number;
  height?: number;
  href?: string;
}

export function OMGLogo({
  variant = "light",
  className = "",
  width = 150,
  height = 48,
  href = "/",
}: OMGLogoProps) {
  const src =
    variant === "dark"
      ? "/images/omg-logo-dark.png"
      : "/images/omg-logo-light.png";

  const content = (
    <div
      className={`relative inline-flex items-center justify-center transition-all duration-300 ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt="OMG — Om · Mārga · Gyān"
        width={width * 2}
        height={height * 2}
        className="object-contain w-auto h-full select-none"
        priority
        unoptimized
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="OMG Tribe Home" className="inline-flex items-center justify-center">
        {content}
      </Link>
    );
  }

  return content;
}
