import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#program", label: "Program" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];


export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold">
            雪
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            YUKI <span className="text-primary">Future</span> Japan
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#daftar"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-elegant lg:inline-flex"
        >
          Daftar Sekarang
        </a>

        <button
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#daftar"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
