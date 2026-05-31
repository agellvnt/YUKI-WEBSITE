import { useState } from "react";
import {
  GraduationCap,
  Compass,
  Target,
  BookOpen,
  Users,
  Award,
  Plane,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Music2,
  Radio,
} from "lucide-react";
import heroFuji from "@/assets/hero-fuji.jpg";


/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-sun opacity-90 blur-2xl md:-right-20" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            LPK Bahasa Jepang Terpercaya
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Belajar Bahasa Jepang,{" "}
            <span className="relative inline-block text-primary">
              Wujudkan
              <svg
                className="absolute -bottom-2 left-0 h-2 w-full text-primary/40"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path d="M0 4 Q 50 0, 100 4 T 200 4" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>{" "}
            Masa Depanmu.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            YUKI Future Japan membantu generasi muda Indonesia mempersiapkan diri untuk peluang
            pendidikan dan karier di Jepang melalui pembelajaran bahasa Jepang yang terarah dan
            profesional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#daftar"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-elegant"
            >
              Mulai Pendaftaran
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Lihat Program
            </a>
          </div>



        </div>

        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-elegant">
            <img
              src={heroFuji}
              alt="Mount Fuji dengan matahari terbit khas Jepang"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-5 shadow-soft sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-sm font-bold">日本語学校</div>
                <div className="text-xs text-muted-foreground">Nihongo Gakkou</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  return (
    <section id="tentang" className="border-t border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel>01 — Tentang Kami</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Jembatan menuju Jepang, dibangun dengan disiplin.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7 lg:pt-2 lg:text-lg">
          <p>
            <strong className="text-foreground">YUKI Future Japan</strong> adalah Lembaga Pelatihan
            Kerja (LPK) Bahasa Jepang yang fokus mempersiapkan generasi muda Indonesia untuk
            menempuh pendidikan, pelatihan, dan karier di Jepang.
          </p>
          <p>
            Dengan kurikulum terstruktur, pengajar berpengalaman, dan pendekatan disiplin khas
            Jepang, kami membentuk lulusan yang tidak hanya fasih berbahasa, tetapi juga siap
            beradaptasi dengan budaya kerja Jepang.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { t: "Kurikulum Resmi", d: "Mengacu standar JLPT" },
              { t: "Pengajar Bersertifikat", d: "Native & profesional" },
            ].map((i) => (
              <div key={i.t} className="rounded-xl border border-border bg-background p-5">
                <div className="font-display font-bold text-foreground">{i.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- VISION MISSION ---------- */
export function VisionMission() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionLabel>02 — Visi & Misi</SectionLabel>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl bg-red-gradient p-8 text-primary-foreground sm:p-10">
            <Compass className="h-10 w-10 opacity-80" />
            <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">Visi</h3>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
              Menjadi lembaga pelatihan bahasa Jepang terdepan yang melahirkan generasi Indonesia
              berdaya saing global di Jepang.
            </p>
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full border-2 border-white/15" />
          </article>
          <article className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <Target className="h-10 w-10 text-primary" />
            <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">Misi</h3>
            <ul className="mt-4 space-y-3 text-base text-muted-foreground sm:text-lg">
              {[
                "Memberikan pembelajaran bahasa Jepang yang terarah dan profesional.",
                "Membangun karakter disiplin dan etos kerja ala Jepang.",
                "Memfasilitasi peluang pendidikan dan karier ke Jepang.",
              ].map((m) => (
                <li key={m} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROGRAMS ---------- */
const programs = [
  {
    level: "N5",
    title: "Kelas Dasar",
    desc: "Pengenalan hiragana, katakana, dan percakapan dasar sehari-hari.",
    duration: "3 Bulan",
  },
  {
    level: "N4",
    title: "Kelas Menengah",
    desc: "Penguasaan kanji dasar, tata bahasa, dan kemampuan membaca teks pendek.",
    duration: "4 Bulan",
  },
];


export function Programs() {
  return (
    <section id="program" className="border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>03 — Program Pelatihan</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
              Program yang dirancang untuk setiap tahap perjalananmu.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Dua jalur pembelajaran fondasi bahasa Jepang dari pemula hingga menengah.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">

          {programs.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-elegant"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl font-bold text-primary">{p.level}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs font-semibold text-foreground">{p.duration}</span>
                <span className="text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ROADMAP ---------- */
const roadmap = [
  { icon: BookOpen, t: "Pendaftaran & Asesmen", d: "Tes penempatan untuk menentukan level awal." },
  { icon: Users, t: "Kelas Intensif", d: "Pembelajaran bahasa, budaya, dan etika kerja Jepang." },
  { icon: Award, t: "Sertifikasi JLPT", d: "Persiapan dan pelaksanaan ujian sertifikasi resmi." },
  { icon: Plane, t: "Penempatan ke Jepang", d: "Pendampingan keberangkatan studi atau kerja." },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionLabel>04 — Learning Roadmap</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
          Empat langkah dari nol hingga berkarier di Jepang.
        </h2>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
          <div className="space-y-10 md:space-y-16">
            {roadmap.map((r, i) => (
              <div
                key={r.t}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`md:${i % 2 ? "pl-12 text-left" : "pr-12 text-right"}`}>
                  <div className="font-display text-6xl font-bold text-primary/15">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold">{r.t}</h3>
                  <p className="mt-2 text-muted-foreground">{r.d}</p>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-elegant">
                    <r.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
const reasons = [
  { t: "Kurikulum Terstruktur", d: "Mengikuti standar JLPT dan kebutuhan industri Jepang." },
  { t: "Pengajar Berpengalaman", d: "Native speaker dan alumni Jepang yang bersertifikat." },
  { t: "Pendekatan Disiplin", d: "Mengadopsi budaya disiplin dan ketekunan ala Jepang." },
  { t: "Jaringan Mitra Jepang", d: "Kerja sama dengan sekolah bahasa & perusahaan di Jepang." },
  { t: "Pembinaan Karakter", d: "Etika kerja, budaya, dan adaptasi sosial yang menyeluruh." },
  { t: "Pendampingan Penuh", d: "Mulai dari kelas hingga keberangkatan ke Jepang." },
];

export function WhyUs() {
  return (
    <section className="border-t border-border bg-foreground py-20 text-background lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-background/70">
            05 — Mengapa YUKI
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Lebih dari sekadar kursus bahasa.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.t} className="group bg-foreground p-7 transition-colors hover:bg-primary">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold text-primary group-hover:text-primary-foreground">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-background/15 group-hover:bg-primary-foreground/30" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70 group-hover:text-primary-foreground/90">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY removed ---------- */


/* ---------- FAQ ---------- */
const faqs = [
  {
    q: "Apakah pemula tanpa dasar Bahasa Jepang bisa mengikuti program?",
    a: "Tentu. Program kami dimulai dari level N5 untuk pemula total, dengan pengenalan hiragana, katakana, dan percakapan dasar.",
  },
  {
    q: "Berapa lama durasi program hingga siap berangkat ke Jepang?",
    a: "Rata-rata 8–12 bulan, tergantung level target dan jalur penempatan (studi atau kerja).",
  },
  {
    q: "Apakah YUKI memfasilitasi keberangkatan ke Jepang?",
    a: "Ya, kami bekerja sama dengan mitra sekolah bahasa dan perusahaan di Jepang untuk pendampingan penempatan.",
  },
  {
    q: "Apakah kelas diadakan secara online atau offline?",
    a: "Kami menyediakan kelas offline intensif. Kelas online tersedia untuk peserta di luar kota.",
  },
  {
    q: "Bagaimana sistem pembayaran biaya program?",
    a: "Pembayaran dapat dilakukan secara cicilan bulanan atau lunas dengan diskon khusus.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <SectionLabel>07 — FAQ</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Pertanyaan yang sering ditanyakan.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tidak menemukan jawabanmu? Hubungi kami langsung via WhatsApp.
          </p>
        </div>
        <div className="space-y-3 lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- REGISTRATION / CONTACT CTA ---------- */
const contactLinks = [
  {
    label: "WhatsApp",
    handle: "Chat langsung",
    desc: "Respon cepat untuk konsultasi & pendaftaran.",
    href: "https://wa.me/message/3WFZTS32WKGLK1",
    Icon: MessageCircle,
    accent: true,
  },
  {
    label: "Saluran WhatsApp",
    handle: "Info & Update",
    desc: "Ikuti saluran resmi kami untuk info terbaru.",
    href: "https://whatsapp.com/channel/0029VbClER04CrfnLPKR8r0p",
    Icon: Radio,
  },
  {
    label: "Instagram",
    handle: "@lpk.yukifuturejapan",
    desc: "Lihat aktivitas & momen belajar kami.",
    href: "https://www.instagram.com/lpk.yukifuturejapan?igsh=YmN4b3BnbG40YjZj&utm_source=ig_contact_invite",
    Icon: Instagram,
  },
  {
    label: "TikTok",
    handle: "@lpk.yuki.future.japan",
    desc: "Konten ringan seputar bahasa & budaya Jepang.",
    href: "https://www.tiktok.com/@lpk.yuki.future.japan?_r=1&_t=ZS-96kuncG1W8i",
    Icon: Music2,
  },
];

export function Registration() {
  return (
    <section id="daftar" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-sun opacity-60 blur-2xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel>08 — Hubungi Kami</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Mulai perjalananmu ke Jepang hari ini.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hubungi kami langsung melalui kanal favoritmu. Tim YUKI siap menjawab pertanyaan dan
            membantu proses pendaftaran.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Konsultasi & tes penempatan gratis",
              "Konsultasi pemilihan jalur belajar",
              "Informasi biaya & jadwal kelas",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {contactLinks.map(({ label, handle, desc, href, Icon, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-elegant ${
                accent
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary"
              }`}
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-full ${
                  accent
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "bg-accent text-primary"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{label}</h3>
              <p
                className={`mt-1 text-sm font-semibold ${
                  accent ? "text-primary-foreground/90" : "text-primary"
                }`}
              >
                {handle}
              </p>
              <p
                className={`mt-2 flex-1 text-sm leading-relaxed ${
                  accent ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {desc}
              </p>
              <span
                className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${
                  accent ? "text-primary-foreground" : "text-primary"
                }`}
              >
                Hubungi sekarang →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- CONTACT / FOOTER ---------- */
export function Contact() {
  return (
    <section id="kontak" className="border-t border-border bg-foreground py-20 text-background lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold">
              雪
            </span>
            <span className="font-display text-xl font-bold">
              YUKI <span className="text-primary">Future</span> Japan
            </span>
          </div>
          <p className="mt-4 max-w-sm text-background/70">
            LPK Bahasa Jepang yang membentuk generasi Indonesia siap berkarier di Jepang.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Hubungi Kami
            </h4>
            <ul className="mt-5 space-y-4 text-background/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Jl.Gentengan RT.2 RW.3 Kec.Ngunut Kab. Tulungagung <p>Utaranya SMPN 1 Ngunut, Barat Jalan</p> </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>+62 85784734989</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
              Ikuti Kami
            </h4>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: MessageCircle, label: "WhatsApp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-background/20 text-background transition-colors hover:border-primary hover:bg-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-background/60">
              Senin – Jumat, 08.00 – 17.00 WIB
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-background/10 px-5 pt-6 text-xs text-background/55 sm:flex-row lg:px-10">
        <span>© {new Date().getFullYear()} YUKI Future Japan. Semua hak dilindungi.</span>
        <span className="font-display tracking-widest">未来は今日から始まる</span>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </div>
  );
}
