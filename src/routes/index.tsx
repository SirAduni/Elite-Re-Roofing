import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Star, Check, ArrowRight, Shield, Hammer, CloudRain, Home as HomeIcon, Wrench, Sparkles, Mail, User, MessageSquare } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import reroofImg from "@/assets/reroof.jpg";
import clearliteImg from "@/assets/clearlite.jpg";
import guttersImg from "@/assets/gutters.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Re Roofing Christchurch | Reroofing, Repairs & Flashings" },
      { name: "description", content: "Trusted Christchurch reroofing specialists. Coloursteel reroofs, repairs, flashings, clearlite & gutters. 5-star rated. Free quotes — call Mike on 022 362 6921." },
    ],
  }),
  component: Index,
});

const PHONE = "022 362 6921";
const PHONE_HREF = "tel:+64223626921";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <Why />
      <Process />
      <Reviews />
      
      <CTA />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-[var(--ink)] text-[var(--bone)] text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> South New Brighton, Christchurch</span>
          <span className="hidden sm:flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Mon–Fri 9am–5pm</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            <span className="ml-1 text-[var(--bone)]">5.0 · 12 Google reviews</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center bg-primary text-primary-foreground font-display font-black rounded-md shadow-[var(--shadow-hard)]">E</div>
          <div className="leading-tight">
            <div className="font-display font-black text-base tracking-tight">ELITE RE ROOFING</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Christchurch</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#why" className="hover:text-primary">Why us</a>
          <a href="#reviews" className="hover:text-primary">Reviews</a>
          
        </nav>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-md font-semibold text-sm hover:brightness-105 transition shadow-[var(--shadow-hard)]">
          <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Roofer installing coloursteel roof in Christchurch" width={1920} height={1280} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/90 via-[var(--ink)]/70 to-[var(--ink)]/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
        <div className="max-w-2xl text-[var(--bone)]">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="h-3.5 w-3.5" /> 5-Star rated Canterbury roofer
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            Christchurch reroofing,<br />
            <span className="text-primary">done right the first time.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--bone)]/85 max-w-xl">
            Coloursteel reroofs, repairs, flashings, clearlite and gutters. Tidy workmanship, honest pricing, and a tradie who actually turns up when he says he will.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-md font-bold hover:brightness-105 transition shadow-[var(--shadow-hard)]">
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
            <a href="#quote" className="inline-flex items-center gap-2 bg-[var(--bone)] text-[var(--ink)] px-6 py-4 rounded-md font-bold hover:bg-white transition">
              Get a free quote <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--bone)]/80">
            {["Free no-obligation quotes", "Fully insured", "Workmanship guarantee", "Local owner-operator"].map((t) => (
              <span key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { k: "5.0★", v: "Google rating" },
    { k: "10+ yrs", v: "On Christchurch roofs" },
    { k: "100%", v: "Tidy site guarantee" },
    { k: "Free", v: "Quotes & call-outs" },
  ];
  return (
    <section className="bg-[var(--ink)] text-[var(--bone)]">
      <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.k} className="text-center md:text-left">
            <div className="font-display font-black text-3xl md:text-4xl text-primary">{i.k}</div>
            <div className="text-sm text-[var(--bone)]/70 mt-1">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: HomeIcon, title: "Full Reroofs", desc: "Long-run coloursteel reroofs that lift kerb appeal and protect your home for decades.", img: reroofImg },
    { icon: Wrench, title: "Roof Repairs", desc: "Leaks, lifted iron, rusted nails — diagnosed and fixed cleanly, no upsell.", img: heroImg },
    { icon: Shield, title: "Flashings & Ridging", desc: "Custom flashings and ridge work that actually keeps the Canterbury rain out.", img: reroofImg },
    { icon: Sparkles, title: "Clearlite & Verandahs", desc: "Replace cracked or yellowed clearlite on verandahs, carports and conservatories.", img: clearliteImg },
    { icon: CloudRain, title: "Spouting & Gutters", desc: "Spouting replacement, downpipes and gutter clean-outs while we're up there.", img: guttersImg },
    { icon: Hammer, title: "Re-nail & Re-screw", desc: "Old nails backing out? We re-fix coloursteel roofs with new screws and seals.", img: reroofImg },
  ];
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">What we do</div>
            <h2 className="text-4xl md:text-5xl max-w-2xl">Roofing services across greater Christchurch.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">From single flashings to full reroofs — we're a small specialist team that takes pride in tidy, lasting work.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition shadow-[var(--shadow-soft)]">
              <div className="aspect-[5/3] overflow-hidden bg-muted">
                <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 grid place-items-center bg-primary/10 text-primary rounded-md">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const points = [
    { t: "Owner-operator on every job", d: "You deal directly with Mike — no call-centre, no sub-contractors guessing at the brief." },
    { t: "Tidy site, every day", d: "Reviews keep mentioning tidiness for a reason. We leave your property cleaner than we found it." },
    { t: "Honest pricing, no surprises", d: "Fixed quotes in writing. If we spot something extra up there, we tell you before we touch it." },
    { t: "Built for Canterbury weather", d: "Nor'westers, southerlies, hail — we spec and fix roofs that hold up to all of it." },
  ];
  return (
    <section id="why" className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why Elite</div>
          <h2 className="text-4xl md:text-5xl mb-6">The difference is on the roof — and in the cleanup.</h2>
          <p className="text-muted-foreground text-lg mb-8">Most of our work comes from neighbours of past customers. That only happens when the job is done properly and the site is left tidy.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p.t} className="bg-background border border-border rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold mb-1">{p.t}</div>
                    <div className="text-sm text-muted-foreground">{p.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={reroofImg} alt="Coloursteel ridge detail" loading="lazy" width={1200} height={900} className="rounded-xl shadow-[var(--shadow-soft)] w-full object-cover aspect-[4/5]" />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-[var(--shadow-hard)] max-w-[260px]">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <div className="font-display font-black text-2xl leading-tight">"Went the extra mile."</div>
            <div className="text-xs mt-2 opacity-90">— Hamdc, Google review</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Call or message", d: "Quick chat about what's going on with your roof. Photos help if you've got them." },
    { n: "02", t: "Free on-site quote", d: "Mike comes out, climbs up, and writes you an honest fixed-price quote." },
    { n: "03", t: "Schedule the work", d: "Materials ordered, dates locked in around the Canterbury weather." },
    { n: "04", t: "Job done, site tidy", d: "Workmanship guarantee, all rubbish removed, gutters cleared while we're there." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">How it works</div>
          <h2 className="text-4xl md:text-5xl">From first call to last nail.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition">
              <div className="font-display font-black text-5xl text-primary/30 mb-4">{s.n}</div>
              <div className="font-bold text-lg mb-2">{s.t}</div>
              <div className="text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Hamdc", time: "2 months ago", text: "Mike did a fantastic job with replacing the old nails on my coloursteel roof. Also replaced some clearlite on my verandah. Mike was a pleasure to work with and went the extra mile to make sure the job was done and tidied up to a very high standard. I can thoroughly recommend Elite Reroofing." },
    { name: "Naomi van den Broek", time: "Local Guide", text: "Great service. Prompt and friendly communication. Found good solutions for small areas of damage on our garage roof at no extra charge. All involved were tidy, respectful and easy to have on our property. Would happily recommend." },
    { name: "Debbie Mein", time: "2 years ago", text: "Thanks Mike for your efficient service in replacing our piece of damaged flashing. Quick efficient service and very professional and pleasant to deal with. Also appreciated you cleaning out some guttering you saw needed doing while you were on the roof — this was an extra you did for free." },
  ];
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[var(--ink)] text-[var(--bone)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Reviews</div>
            <h2 className="text-4xl md:text-5xl text-[var(--bone)] max-w-2xl">A perfect 5.0 on Google — and we plan to keep it that way.</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
            </div>
            <div>
              <div className="font-display font-black text-3xl leading-none">5.0</div>
              <div className="text-xs text-[var(--bone)]/70">12 Google reviews</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-[var(--bone)] text-[var(--ink)] rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-1 text-primary mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="text-sm leading-relaxed flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border">
                <div className="font-bold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.time}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTA() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", suburb: "", service: "Full reroof", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request — ${form.service} (${form.name})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nSuburb: ${form.suburb}\nService: ${form.service}\n\nDetails:\n${form.message}`,
    );
    window.location.href = `mailto:elitereroofingchch@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const input = "w-full bg-[var(--bone)] text-[var(--ink)] border-2 border-transparent focus:border-[var(--ink)] rounded-md px-4 py-3 text-sm outline-none placeholder:text-[var(--ink)]/50";

  return (
    <section id="quote" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-90">Free quote</div>
          <h2 className="text-4xl md:text-6xl mb-6 text-primary-foreground">Got a roof that needs sorting?</h2>
          <p className="text-lg md:text-xl opacity-95 mb-8 max-w-xl">Fill in the form and Mike will get back to you — usually same day. Prefer to talk? Call directly, most quotes booked within 48 hours.</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--bone)] px-6 py-3.5 rounded-md font-bold hover:opacity-90 transition shadow-[var(--shadow-hard)]">
              <Phone className="h-5 w-5" /> {PHONE}
            </a>
          </div>
          <ul className="space-y-2 text-sm">
            {["Free, no-obligation written quotes", "Greater Christchurch & Canterbury", "Most replies within a few hours"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4" /> {t}</li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-[var(--ink)] text-[var(--bone)] rounded-xl p-6 md:p-8 shadow-[var(--shadow-hard)]">
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="h-14 w-14 mx-auto grid place-items-center bg-primary text-primary-foreground rounded-full mb-4"><Check className="h-7 w-7" /></div>
              <div className="font-display font-black text-2xl mb-2">Thanks — your email is ready to send.</div>
              <p className="text-[var(--bone)]/70 text-sm">If your mail app didn't open, call Mike directly on <a href={PHONE_HREF} className="text-primary font-bold">{PHONE}</a>.</p>
            </div>
          ) : (
            <>
              <div className="font-display font-black text-2xl mb-1">Request a free quote</div>
              <div className="text-sm text-[var(--bone)]/70 mb-6">Takes 30 seconds.</div>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs font-semibold flex items-center gap-1.5 mb-1.5"><User className="h-3.5 w-3.5" /> Name</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold flex items-center gap-1.5 mb-1.5"><Phone className="h-3.5 w-3.5" /> Phone</span>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="022 000 0000" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold flex items-center gap-1.5 mb-1.5"><Mail className="h-3.5 w-3.5" /> Email</span>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} placeholder="you@example.com" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold flex items-center gap-1.5 mb-1.5"><MapPin className="h-3.5 w-3.5" /> Suburb</span>
                  <input value={form.suburb} onChange={(e) => setForm({ ...form, suburb: e.target.value })} className={input} placeholder="e.g. New Brighton" />
                </label>
              </div>
              <label className="block mt-3">
                <span className="text-xs font-semibold flex items-center gap-1.5 mb-1.5"><Wrench className="h-3.5 w-3.5" /> Service needed</span>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={input}>
                  <option>Full reroof</option>
                  <option>Roof repair</option>
                  <option>Flashings & ridging</option>
                  <option>Clearlite / verandah</option>
                  <option>Spouting & gutters</option>
                  <option>Re-nail / re-screw</option>
                  <option>Not sure — need advice</option>
                </select>
              </label>
              <label className="block mt-3">
                <span className="text-xs font-semibold flex items-center gap-1.5 mb-1.5"><MessageSquare className="h-3.5 w-3.5" /> Tell Mike about the job</span>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input} placeholder="Roof age, what you've noticed, access, timing…" />
              </label>
              <button type="submit" className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-md font-bold hover:brightness-105 transition shadow-[var(--shadow-hard)]">
                Send quote request <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-[10px] text-[var(--bone)]/60 mt-3 text-center">No spam. Your details only go to Mike at Elite Re Roofing.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--bone)]/80 py-14 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 grid place-items-center bg-primary text-primary-foreground font-display font-black rounded-md">E</div>
            <div className="font-display font-black text-lg text-[var(--bone)]">ELITE RE ROOFING</div>
          </div>
          <p className="text-sm max-w-sm">5-star rated Christchurch roofing contractor specialising in coloursteel reroofs, repairs, flashings, clearlite and gutters.</p>
        </div>
        <div>
          <div className="font-bold text-[var(--bone)] mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href={PHONE_HREF} className="hover:text-primary">{PHONE}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> 16 Sandra Street,<br />South New Brighton,<br />Christchurch 8062</li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-[var(--bone)] mb-3">Hours</div>
          <ul className="space-y-1 text-sm">
            <li>Mon – Fri · 9am – 5pm</li>
            <li>Sat – Sun · By appointment</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10 pt-6 border-t border-white/10 text-xs flex flex-wrap justify-between gap-3">
        <div>© {new Date().getFullYear()} Elite Re Roofing Christchurch. All rights reserved.</div>
        <div>Servicing all of greater Christchurch & Canterbury.</div>
      </div>
    </footer>
  );
}
