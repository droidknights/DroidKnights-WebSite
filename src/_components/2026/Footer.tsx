import Link from "next/link";

const SOCIALS = [
  { href: "https://www.instagram.com/droid_knights/", src: "/2024/social/instagram.svg", alt: "instagram" },
  { href: "https://www.facebook.com/droidknights", src: "/2024/social/facebook.svg", alt: "facebook" },
  { href: "https://www.youtube.com/@DroidKnights", src: "/2024/social/youtube.svg", alt: "youtube" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-dk-surface">
      <div className="mx-auto flex max-w-[1366px] flex-col items-center justify-between gap-4 px-5 py-10 md:flex-row md:px-10">
        <div className="flex items-center text-dk-muted">
          <p className="text-sm">Copyright DroidKnights 2026</p>
          <span className="mx-3 text-sm opacity-40">|</span>
          <p className="text-sm">All Rights Reserved</p>
        </div>
        <div className="flex items-center gap-x-3">
          {SOCIALS.map((s) => (
            <Link key={s.alt} href={s.href} target="_blank">
              <img src={s.src} alt={s.alt} className="opacity-70 transition-opacity hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
