import Link from "next/link";
import { REPOSITORY_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import React from "react";

type UrlType = { label: string; href: string };

export const Links = () => {
  const urls: UrlType[] = [
    {
      label: "Disclaimer",
      href: "/disclaimer",
    },
    {
      label: "Github",
      href: REPOSITORY_LINK,
    },
  ];

  return (
    <div>
      {urls.map((url: UrlType, index: number) => (
        <Button key={index} asChild variant="link">
          <Link href={url.href} target="_blank">
            {url.label}
          </Link>
        </Button>
      ))}
    </div>
  );
};
