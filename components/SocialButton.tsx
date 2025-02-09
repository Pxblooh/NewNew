"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type React from "react"
import { Instagram, Twitter } from "lucide-react"
import { VscoLogo } from "./VscoLogo"
import { SpotifyLogo } from "./SpotifyLogo"
import { BeRealLogo } from "./BeRealLogo"

interface SocialLink {
  href: string
  webHref: string
  icon: React.ElementType
  label: string
  color: string
}

const socialLinks: SocialLink[] = [
  {
    href: "instagram://user?username=_pablooo.12",
    webHref: "https://www.instagram.com/_pablooo.12",
    icon: Instagram,
    label: "Instagram",
    color:
      "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600",
  },
  {
    href: "twitter://user?screen_name=paablo_estevez",
    webHref: "https://twitter.com/paablo_estevez",
    icon: Twitter,
    label: "Twitter",
    color: "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700",
  },
  {
    href: "vsco://user/pabloo12-",
    webHref: "https://vsco.co/pabloo12-",
    icon: VscoLogo,
    label: "VSCO",
    color: "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black",
  },
  {
    href: "spotify:user:315y3p55xvqj2wabgpc2hase75mu",
    webHref: "https://open.spotify.com/user/315y3p55xvqj2wabgpc2hase75mu?si=5c1fae626b794736",
    icon: SpotifyLogo,
    label: "Spotify",
    color: "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
  },
  {
    href: "bereal://pablooo12",
    webHref: "https://BeRe.al/pablooo12",
    icon: BeRealLogo,
    label: "BeReal",
    color: "bg-gradient-to-r from-[#1a1a1a] to-[#3a3a3a] hover:from-[#2a2a2a] hover:to-[#4a4a4a]",
  },
]

export function SocialButtons() {
  return (
    <>
      {socialLinks.map((link, index) => (
        <SocialButton key={link.label} {...link} style={{ animationDelay: `${index * 100}ms` }} />
      ))}
    </>
  )
}

function SocialButton({
  href,
  webHref,
  icon: Icon,
  label,
  color,
  style,
}: SocialLink & { style?: React.CSSProperties }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = href
    setTimeout(() => {
      window.location.href = webHref
    }, 500)
  }

  return (
    <Button
      asChild
      variant="outline"
      className={`${color} text-white border-none h-12 transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up shadow-lg rounded-lg overflow-hidden`}
      style={style}
    >
      <Link href={href} onClick={handleClick} className="w-full flex items-center justify-center rounded-lg">
        <Icon className="mr-2 h-5 w-5" />
        <span className="font-inter font-semibold">{label}</span>
      </Link>
    </Button>
  )
}

