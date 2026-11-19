// MeridianCaseStudy.jsx — Meridian: redesigning the first website I built (2023 → 2026)
// Same template, tokens and components as the other case studies (FourthProject.jsx):
// sticky top bar with TOC + progress, sticky section heading (4 cols) | content (8 cols).
// Shared classes use the "cs-" prefix; Meridian-only pieces use "mcs-" so nothing clashes
// with Tailwind/daisyUI or the other pages. Accent = Meridian's bronze.

import { pfFonts, pfCaseStudy } from "../theme/playful";
import { useEffect, useState } from "react";

import BEFORE_FULL from "../assets/image/UX5TH/before-full.jpg";
import AFTER_FULL from "../assets/image/UX5TH/after-full.jpg";
import CARD_BEFORE from "../assets/image/UX5TH/card-before.jpg";
import CARD_AFTER from "../assets/image/UX5TH/card-after.jpg";
import FAQ_BEFORE from "../assets/image/UX5TH/faq-before.jpg";
import FAQ_AFTER from "../assets/image/UX5TH/faq-after.jpg";
import SOCIAL_BEFORE from "../assets/image/UX5TH/social-before.jpg";
import HERO from "../assets/image/UX5TH/hero.jpg";
import KITCHENS from "../assets/image/UX5TH/kitchens.jpg";
import ROTW from "../assets/image/UX5TH/rotw.jpg";
import CHEFS from "../assets/image/UX5TH/chefs.jpg";
import DISHES from "../assets/image/UX5TH/dishes.jpg";
import FOOTER from "../assets/image/UX5TH/footer.jpg";
import DESK_BEFORE from "../assets/image/UX5TH/desk-before.jpg";
import DESK_AFTER from "../assets/image/UX5TH/desk-after.jpg";
import FULL_BEFORE from "../assets/image/UX5TH/full-before.jpg";
import FULL_AFTER from "../assets/image/UX5TH/full-after.jpg";

import CHEF_MATTEO from "../assets/image/UX5TH/chef-matteo.jpg";
import CHEF_KENJI from "../assets/image/UX5TH/chef-kenji.jpg";
import CHEF_ELODIE from "../assets/image/UX5TH/chef-elodie.jpg";
import CHEF_LUCIA from "../assets/image/UX5TH/chef-lucia.jpg";
import CHEF_ARJUN from "../assets/image/UX5TH/chef-arjun.jpg";
import CHEF_KARIM from "../assets/image/UX5TH/chef-karim.jpg";
import DISH_RAGU from "../assets/image/UX5TH/dish-ragu.jpg";
import DISH_RAMEN from "../assets/image/UX5TH/dish-ramen.jpg";
import DISH_FRITES from "../assets/image/UX5TH/dish-frites.jpg";
import DISH_BIRRIA from "../assets/image/UX5TH/dish-birria.jpg";
import DISH_BUTTER from "../assets/image/UX5TH/dish-butter.jpg";
import DISH_GRILL from "../assets/image/UX5TH/dish-grill.jpg";

/* ─── Content ─── */
// Paste the address of the live 2023 site here (e.g. "https://the-chefs-table.netlify.app").
// While it's empty, the "Visit the live site" button is hidden.
const LIVE_URL = "https://the-chefs-table.web.app";

const TOC = [
  { id: "prologue", label: "Prologue" },
  { id: "problem", label: "1 · Audit" },
  { id: "competitive", label: "2 · Research" },
  { id: "people", label: "Personas" },
  { id: "define", label: "3 · Goals" },
  { id: "structure", label: "Structure" },
  { id: "ideation", label: "4 · Ideation" },
  { id: "lofi", label: "Lo-fi" },
  { id: "laws", label: "5 · UX laws" },
  { id: "hifi", label: "Hi-fi" },
  { id: "typography", label: "6 · Type" },
  { id: "colour", label: "Colour" },
  { id: "design-system", label: "System" },
  { id: "prototype", label: "7 · Prototype" },
  { id: "result", label: "8 · Result" },
  { id: "learnings", label: "Epilogue" },
];

const META = [
  { label: "My role", value: "Built it in 2023 as a developer; redesigned it in 2026 as a UX/UI designer" },
  { label: "Timeline", value: "Original site 2023 · Redesign 2026" },
  { label: "Scope", value: "Audit, personas, IA, wireframes, hi-fi, prototype, design system" },
  { label: "Tools", value: "Figma (variables, components), React" },
];

const AUDIT = [
  {
    title: "The story contradicted itself",
    text: "The hero promised “the Flavors of India” and the section said “Chefs of India”, but the chefs were from Japan, Mexico and Lebanon too. There was no answer to the most basic question: what is this site?",
    law: "Jakob's law (people expect a site to say what it is up front)",
  },
  {
    title: "Chef cards showed the wrong data",
    text: "“Experience:12” (twelve what?), like counts and recipe counts don't help anyone choose what to cook. Text was pushed far right, four cards had four heights (251–320px), and “View Recipe” on a chef card didn't say which recipe.",
    law: "Hick's law and the law of similarity",
    img: CARD_BEFORE,
  },
  {
    title: "An FAQ with no answers",
    text: "Six numbered, centred questions with nothing to expand — the last one wasn't even a question.",
    law: "Progressive disclosure",
    img: FAQ_BEFORE,
  },
  {
    title: "Secondary content took prime space",
    text: "A full section of 135px social icons, including an empty Twitter placeholder, was the heaviest block on the page and the least important.",
    law: "Von Restorff effect (the wrong thing stood out)",
    img: SOCIAL_BEFORE,
  },
  {
    title: "No visual system",
    text: "One font at a few sizes, everything centred, the only colour a default blue login button, and a typo (“reknowned”) in a section title.",
    law: "Aesthetic-usability effect",
  },
];

const COMPETITORS = [
  {
    name: "Great British Chefs", kind: "Chef-led recipe archive",
    good: "Thousands of recipes from named chefs; browse by chef; consistent photography.",
    gap: "Mostly UK chefs; a huge archive makes the homepage feel like a directory.",
    take: "Browse-by-chef as a main path; one consistent photo crop.",
  },
  {
    name: "NYT Cooking", kind: "Subscription recipes",
    good: "Editor-curated collections, a Recipe Box to save recipes, search by diet, cuisine and meal type.",
    gap: "The cooks are secondary to the archive; most value is behind a subscription.",
    take: "Curation (“Recipe of the week”) as a reason to return.",
  },
  {
    name: "MasterClass", kind: "Chef-led video classes",
    good: "Leads with the chef as a person: story, philosophy and personality.",
    gap: "Long-form video; not built for “what's for dinner tonight?”.",
    take: "Story over stats: a short bio on every chef card.",
  },
  {
    name: "Serious Eats", kind: "Ad-supported recipes",
    good: "Tested recipes, technique guides, and filters by ingredient, cuisine, diet or method.",
    gap: "Long technique articles can stand between you and the recipe.",
    take: "Answer technique questions in a short, dedicated FAQ.",
  },
];

const PERSONAS = [
  {
    name: "Sara, 28",
    role: "The weeknight cook",
    avatar: "sara",
    profile: [["Cooks", "Most weeknights after work"], ["Cooks for", "Herself and a partner"], ["Finds recipes", "Instagram, saved TikToks, Google"]],
    quote: "I follow chefs, not websites. If I like the person, I'll try their food.",
    needs: [
      "A quick way to choose from a few good options, not hundreds",
      "Total time up front; anything over an hour is for the weekend",
      "Where a dish comes from, in two lines, not an essay",
    ],
    pain: "Big recipe sites give too many choices, so she ends up making pasta again. Likes and ratings feel meaningless.",
  },
  {
    name: "Daniel, 41",
    role: "The weekend explorer",
    avatar: "daniel",
    profile: [["Cooks", "Bigger meals at weekends"], ["Cooks for", "Family of four"], ["Finds recipes", "Cookbooks, food blogs, travel memories"]],
    quote: "I want the real version, the way it's made in Oaxaca, not a shortcut.",
    needs: [
      "To choose a cuisine first, then a dish",
      "Servings up front, to know if it feeds the family",
      "One great idea each week to come back for",
    ],
    pain: "Unfamiliar ingredients and techniques send him searching mid-recipe.",
  },
];

const GUIDE = [
  "Tell me about the last time you cooked something new. How did you choose it?",
  "Where do you usually find recipes? What makes you trust one?",
  "How do you decide between two recipes for the same dish?",
  "What do you look at first when you open a recipe?",
  "Do you follow any chefs or cooks? Why them?",
  "Tell me about a time a recipe went wrong. What happened?",
  "How do you deal with an ingredient or technique you don't know?",
  "What would make you come back to a recipe site every week?",
];

const INSIGHTS = [
  { title: "People follow people", text: "Trust comes from the cook, not the platform.", to: "Chef cards lead with story and origin" },
  { title: "Cuisine first, then dish", text: "Both personas narrow by cuisine before picking a recipe.", to: "Kitchen index under the hero" },
  { title: "Time and servings decide", text: "Practical details matter more than likes or ratings.", to: "Time · serves · chef on recipe cards" },
];

const GOALS = [
  { title: "Say what it is in five seconds", desc: "From the hero alone: recipes from six chefs in six cities, written for home cooks.", color: "#1c1b19" },
  { title: "Give three ways in", desc: "Choose by cuisine, by the person behind it, or by the dish itself.", color: "#8a6a3e" },
  { title: "Consistent by default", desc: "Variables and components, so a new chef slots in without redesign.", color: "#cdb48c" },
];

const MOSCOW = [
  { key: "Must", sub: "Release 1", cls: "m", items: ["Hero that says what Meridian is", "One consistent chef card: cuisine, city, story", "Browse by cuisine (kitchen index)", "FAQ with real answers (accordion)", "Colour + type variables and core components", "WCAG AA text contrast"] },
  { key: "Should", sub: "If time allows", cls: "s", items: ["Recipe of the week", "Signature dish per chef with time and servings", "Footer navigation by kitchen", "Socials moved to the footer"] },
  { key: "Could", sub: "Nice to have", cls: "c", items: ["Save recipes to a collection", "Search and filters (time, diet)", "Short chef video intros", "Ingredient glossary"] },
  { key: "Won't", sub: "Not this time", cls: "w", items: ["Likes, follower and recipe counts", "User comments and ratings", "Accounts beyond log in", "Mobile layouts (next phase)"] },
];

const IA_BEFORE = [["Hero card", "“Flavors of India”"], ["Chefs of India", "4 chef cards"], ["Find us on", "social icons"], ["FAQ", "no answers"], ["Footer", "copyright"]];
const IA_AFTER = [["Hero", "promise + Meet the chefs"], ["Kitchen index", "browse by cuisine", true], ["Recipe of the week", "a reason to return", true], ["The chefs", "browse by person"], ["Signature dishes", "browse by dish", true], ["Questions from the kitchen", "real accordion"], ["Footer", "navigation + socials"]];

const HMW = [
  "…tell a first-time visitor what Meridian is before they scroll?",
  "…make a chef feel like someone worth cooking with, not a statistic?",
  "…let people choose by cuisine, chef or dish without building a directory?",
];

const DECISIONS = [
  { kicker: "Hero", title: "A promise, not a paragraph", img: HERO, laws: ["Serial position effect", "Hick's law", "Von Restorff effect"], text: "The old hero was a 70-word paragraph in a dark box. One line now names the whole idea, with the accent on “at home” to land the benefit. One primary action: Meet the chefs. The photo runs full-bleed beneath." },
  { kicker: "Kitchen index", title: "Browse by cuisine", img: KITCHENS, laws: ["Miller's law (chunking)", "Jakob's law"], text: "Six cuisines, each with its city, directly under the photo. It answers “what's here?” and doubles as navigation." },
  { kicker: "Recipe of the week", title: "A reason to come back", img: ROTW, laws: ["Von Restorff effect", "Law of proximity"], text: "A rotating feature gives the homepage something that changes. The byline links the dish to a chef and a time." },
  { kicker: "Chefs", title: "Two grids, one rhythm", img: CHEFS, laws: ["Law of similarity", "Law of Prägnanz"], text: "Chefs and dishes share the same 3-column grid and section header, so the page feels deliberate." },
  { kicker: "Signature dishes", title: "Time, servings, chef", img: DISHES, laws: ["Law of common region", "Law of similarity"], text: "A tint background separates the dishes. Each card shows the three things you check before cooking." },
  { kicker: "FAQ", title: "Questions that earn their place", img: FAQ_AFTER, laws: ["Progressive disclosure", "Jakob's law"], text: "A left-aligned accordion with questions covering all six kitchens: al dente, kombu, resting meat, dried chillies, garam masala, baharat." },
  { kicker: "Footer", title: "Socials, demoted", img: FOOTER, laws: ["Jakob's law", "Serial position effect"], text: "Social icons became one line of text links next to navigation by kitchen, plus an honest note: chefs are fictional, photos from Unsplash." },
];

const LAWS = [
  { name: "Hick's law", what: "The more choices people see, the longer it takes to decide.", how: "One primary action per section, and chef cards cut from five data points to three." },
  { name: "Jakob's law", what: "People expect a site to work like the other sites they already use.", how: "Familiar patterns: top navigation, an FAQ accordion, socials and links in the footer." },
  { name: "Miller's law (chunking)", what: "People hold only a few items in working memory, so group information into chunks.", how: "Six kitchens shown as cuisine + city pairs; recipe metadata as time · serves · chef." },
  { name: "Serial position effect", what: "People remember the first and last items best.", how: "The promise comes first on the page; navigation and contact come last, in the footer." },
  { name: "Von Restorff effect", what: "The item that differs from the rest is the one people notice.", how: "A single bronze accent and one dark primary button, so the important thing stands out." },
  { name: "Law of similarity", what: "Elements that look alike are seen as related.", how: "Every chef card and recipe card uses one component; one typeface per role." },
  { name: "Law of proximity", what: "Elements close together are seen as a group.", how: "Origin, name, bio and link sit tightly under each photo; generous space between cards." },
  { name: "Law of common region", what: "Elements inside a shared boundary are seen as a group.", how: "A tint background wraps Signature dishes, separating it without borders or boxes." },
  { name: "Progressive disclosure", what: "Show only what's needed now; reveal detail on request.", how: "FAQ answers stay closed until asked, keeping the section short and scannable." },
  { name: "Aesthetic-usability effect", what: "People perceive attractive designs as easier to use and trust them more.", how: "An editorial, cookbook-like look builds trust in fictional chefs and their recipes." },
];

const COLOURS = [
  { name: "color/ink", hex: "#1C1B19", use: "Headings, body, primary button, footer", contrast: "16.5 : 1 on bg", ok: true },
  { name: "color/ink-soft", hex: "#3B3935", use: "Lede and secondary text", contrast: "AAA on bg", ok: true },
  { name: "color/muted", hex: "#6D6A64", use: "Captions, metadata, intros", contrast: "5.16 : 1 on bg", ok: true },
  { name: "color/accent", hex: "#8A6A3E", use: "Labels, italic emphasis", contrast: "4.78 on bg · 4.38 on tint", ok: false },
  { name: "color/bg", hex: "#FBFAF7", use: "Page canvas", contrast: "—", ok: true },
  { name: "color/tint", hex: "#F3F0EA", use: "Alternate sections", contrast: "—", ok: true },
  { name: "color/line", hex: "#E4E0D8", use: "Dividers, card borders", contrast: "Decorative", ok: true },
  { name: "color/on-ink", hex: "#FBFAF7", use: "Text on dark footer and buttons", contrast: "16.5 : 1 on ink", ok: true },
  { name: "color/footer-label", hex: "#CDB48C", use: "Labels in the footer", contrast: "8.61 : 1 on ink", ok: true },
];

const COLOUR_WHY = [
  { hex: "#FBFAF7", title: "Warm off-white, not pure white", text: "Feels like paper or a linen tablecloth, is softer on the eyes than #FFF, and keeps warm food photos natural." },
  { hex: "#1C1B19", title: "Warm near-black, not #000", text: "A very dark brown-black: 16.5:1 contrast for text, but less harsh. Matches the footer and primary buttons." },
  { hex: "#8A6A3E", title: "One bronze accent", text: "From tones every cuisine shares: wood boards, toasted spices, roasted crusts. Used only for labels and emphasis." },
  { hex: "#F3F0EA", title: "Tint for rhythm", text: "A slightly darker cream marks alternate sections, so the page has rhythm without boxes." },
  { hex: "#6D6A64", title: "Muted grey for metadata", text: "Time, servings and intros sit one step back from body text, still passing AA at 5.16:1." },
  { hex: "#2F6FE4", title: "Removed: Bootstrap blue", text: "The old page's only colour was a default blue login button: cold next to warm food, and it highlighted the least important action." },
];

const TYPE_SCALE = [
  ["Display/Hero", "Cormorant 104 · Medium", "Great kitchens", { fontSize: "clamp(40px,5.5vw,72px)", lineHeight: 0.98 }],
  ["Display/H2 Section", "Cormorant 56 · Medium", "Six points of view", { fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.05 }],
  ["Display/H3 Chef", "Cormorant 34 · Medium", "Élodie Marchand", { fontSize: 32, lineHeight: 1.05 }],
  ["Display/FAQ · Lede", "Cormorant 24", "What is seven-spice (baharat)?", { fontSize: 24, lineHeight: 1.3 }],
];

const KITCHENS_DATA = [
  { c: "Italian", city: "Florence", n: "01", chef: "Matteo Bellandi", ci: CHEF_MATTEO, bio: "Grew up rolling pasta in his grandmother's trattoria in the Oltrarno.", dish: "Tagliatelle al ragù", di: DISH_RAGU, meta: "3 hr 30 min · Serves 4" },
  { c: "Japanese", city: "Kyoto", n: "02", chef: "Kenji Morikawa", ci: CHEF_KENJI, bio: "Trained for a decade under a kaiseki master before opening his own counter in Gion.", dish: "Shoyu ramen", di: DISH_RAMEN, meta: "4 hr · Serves 4" },
  { c: "French", city: "Lyon", n: "03", chef: "Élodie Marchand", ci: CHEF_ELODIE, bio: "Paris pastry kitchens first, now a busy bouchon near Place Bellecour.", dish: "Steak frites", di: DISH_FRITES, meta: "1 hr · Serves 2" },
  { c: "Mexican", city: "Oaxaca", n: "04", chef: "Lucía Arriaga", ci: CHEF_LUCIA, bio: "Cooks with the heirloom corn and dried chillies of the Oaxacan valleys.", dish: "Beef birria tacos", di: DISH_BIRRIA, meta: "4 hr · Serves 6" },
  { c: "Indian", city: "Jaipur", n: "05", chef: "Arjun Mehra", ci: CHEF_ARJUN, bio: "Learned in his family's Rajasthani restaurant, then cooked in Delhi and Hyderabad.", dish: "Butter chicken", di: DISH_BUTTER, meta: "1 hr + marinating · Serves 4" },
  { c: "Middle Eastern", city: "Beirut", n: "06", chef: "Karim Haddad", ci: CHEF_KARIM, bio: "Runs a charcoal grill house in Mar Mikhael, where meze tables seat strangers side by side.", dish: "Charcoal mixed grill", di: DISH_GRILL, meta: "1 hr + marinating · Serves 6" },
];

const FAQ_DATA = [
  ["What does “al dente” mean?", "Italian for “to the tooth”: pasta cooked until tender but still slightly firm in the centre. Taste a piece a minute before the packet time."],
  ["What is kombu, and can I replace it?", "Dried kelp used to make dashi, the base of many Japanese broths. It adds deep savoury flavour; a little dried shiitake is the closest swap."],
  ["Why rest meat after cooking?", "Resting lets the juices settle back into the meat, so they stay on the plate instead of the board. Five to ten minutes is enough for a steak."],
  ["What is garam masala?", "A warming North Indian spice blend, often with cumin, coriander, cardamom, cinnamon and clove. It's usually added near the end of cooking."],
];

/* ─── Small building blocks (same as the other case studies) ─── */
const Figure = ({ src, alt, caption, size = "md" }) => {
  const img = <img src={src} alt={alt} loading="lazy" decoding="async" />;
  return (
    <figure className={`cs-fig cs-fig--${size}`}>
      {size === "lg" ? (
        <a className="cs-fig__frame cs-fig__zoom" href={src} target="_blank" rel="noreferrer" aria-label={`${alt} (open full size)`}>
          {img}
          <span className="cs-zoom-hint" aria-hidden="true">Open full size ↗</span>
        </a>
      ) : (
        <div className="cs-fig__frame">{img}</div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

const List = ({ items }) => (
  <ul className="cs-list">
    {items.map((t) => <li key={t}>{t}</li>)}
  </ul>
);

const Numbered = ({ items }) => (
  <ol className="cs-numbered">
    {items.map((t) => <li key={t}>{t}</li>)}
  </ol>
);

const Card = ({ title, children }) => (
  <div className="cs-card">
    {title && <h3 className="cs-card__title">{title}</h3>}
    {children}
  </div>
);

const Section = ({ id, kicker, title, children }) => (
  <section id={id} className="cs-sec">
    <div className="cs-sec__head">
      <p className="cs-eyebrow">{kicker}</p>
      <h2 className="cs-sec__title">{title}</h2>
    </div>
    <div className="cs-sec__body">{children}</div>
  </section>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Wireframe pieces (greyscale lo-fi) ─── */
const Ln = ({ w = "100%", h, tone }) => <div className={`mcs-ln${tone ? ` mcs-ln--${tone}` : ""}`} style={{ width: w, height: h }} />;
const Box = ({ h, style }) => <div className="mcs-img" style={{ height: h, ...style }} />;
const Pin = ({ n }) => <span className="mcs-pin">{n}</span>;

const Concept = ({ label, title, text, picked, children }) => (
  <div className={`mcs-concept${picked ? " is-picked" : ""}`}>
    <div className="mcs-wf mcs-concept__wf">
      <span className="mcs-verdict">{picked ? "Chosen" : "Rejected"}</span>
      <span className="mcs-wf__note">{label}</span>
      {children}
    </div>
    <h3 className="cs-card__title" style={{ margin: "12px 0 4px" }}>{title}</h3>
    <p className="cs-small">{text}</p>
  </div>
);

/* ─── Desktop mockups ─── */
const DesktopPair = ({ large = false }) => (
  <div className={`mcs-desks${large ? " mcs-desks--lg" : ""}`}>
    <figure>
      <span className="mcs-tag">2023 · Before</span>
      <img src={DESK_BEFORE} alt="The 2023 homepage on a desktop screen" />
    </figure>
    <span className="mcs-desks__arrow" aria-hidden="true">→</span>
    <figure>
      <span className="mcs-tag mcs-tag--dark">2026 · After</span>
      <img src={DESK_AFTER} alt="The 2026 Meridian homepage on a desktop screen" />
    </figure>
  </div>
);

/* ─── Small chips naming the UX laws behind a decision ─── */
const LawChips = ({ laws = [] }) => (
  <ul className="mcs-chips" aria-label="UX laws applied">
    {laws.map((l) => <li key={l}>{l}</li>)}
  </ul>
);

/* ─── Illustrated persona portraits ─── */
const Avatar = ({ variant }) => {
  const sara = variant === "sara";
  return (
    <svg className="mcs-avatar" viewBox="0 0 80 80" role="img" aria-label={sara ? "Illustration of Sara" : "Illustration of Daniel"}>
      <circle cx="40" cy="40" r="40" fill={sara ? "#e8d9c2" : "#d5dccd"} />
      <clipPath id={`clip-${variant}`}><circle cx="40" cy="40" r="40" /></clipPath>
      <g clipPath={`url(#clip-${variant})`}>
        {sara ? (
          <>
            <circle cx="40" cy="20" r="9" fill="#2b211c" />
            <path d="M12 82c2-16 13-24 28-24s26 8 28 24z" fill="#8a6a3e" />
            <path d="M33 52h14v8c0 4-14 4-14 0z" fill="#c68c64" />
            <ellipse cx="40" cy="38" rx="14" ry="16" fill="#d49b72" />
            <path d="M25 38c0-12 6-19 15-19s15 7 15 19c-3-6-8-10-15-10s-12 4-15 10z" fill="#2b211c" />
            <circle cx="35" cy="40" r="1.4" fill="#2b211c" /><circle cx="45" cy="40" r="1.4" fill="#2b211c" />
            <path d="M36 46c2 2 6 2 8 0" stroke="#7a4632" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <circle cx="26" cy="42" r="1.6" fill="#cdb48c" /><circle cx="54" cy="42" r="1.6" fill="#cdb48c" />
          </>
        ) : (
          <>
            <path d="M10 82c2-17 14-25 30-25s28 8 30 25z" fill="#3b3935" />
            <path d="M32 52h16v8c0 5-16 5-16 0z" fill="#b98060" />
            <ellipse cx="40" cy="38" rx="14" ry="16" fill="#c98f6c" />
            <path d="M26 34c0-10 6-15 14-15s14 5 14 15c-2-4-6-7-14-7s-12 3-14 7z" fill="#4a3528" />
            <path d="M27 42c1 10 6 15 13 15s12-5 13-15c-3 4-7 5-13 5s-10-1-13-5z" fill="#4a3528" />
            <circle cx="35" cy="39" r="1.4" fill="#1c1b19" /><circle cx="45" cy="39" r="1.4" fill="#1c1b19" />
            <path d="M36 47c2 1.5 6 1.5 8 0" stroke="#e9d3c3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M24 63l9 6 7-6 7 6 9-6" stroke="#fbfaf7" strokeWidth="2" fill="none" />
          </>
        )}
      </g>
    </svg>
  );
};

/* ─── Interactive prototype ─── */
const Prototype = () => {
  const [sel, setSel] = useState(0);
  const [open, setOpen] = useState(null);
  const [note, setNote] = useState("");
  const k = KITCHENS_DATA[sel];

  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : KITCHENS_DATA.length - 1)) % KITCHENS_DATA.length;
    setSel(next);
    setNote("");
    document.getElementById(`mcs-tab-${next}`)?.focus();
  };

  return (
    <div className="mcs-proto">
      <div className="mcs-proto__bar" aria-hidden="true"><i /><i /><i /><span>meridian.kitchen</span></div>
      <div className="mcs-proto__in">
        <p className="mcs-label">Browse by kitchen</p>
        <div className="mcs-tabs" role="tablist" aria-label="Kitchens">
          {KITCHENS_DATA.map((d, i) => (
            <button
              key={d.c}
              id={`mcs-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={sel === i}
              tabIndex={sel === i ? 0 : -1}
              onClick={() => { setSel(i); setNote(""); }}
              onKeyDown={(e) => onKey(e, i)}
            >
              <small>{d.n}</small><b>{d.c}</b>{d.city}
            </button>
          ))}
        </div>

        <div className="mcs-view" role="tabpanel" aria-live="polite" key={sel}>
          <div className="mcs-view__chef">
            <img src={k.ci} alt={k.chef} />
            <p className="mcs-label" style={{ margin: "14px 0 4px" }}>{k.c} · {k.city}</p>
            <h4 className="mcs-serif" style={{ fontSize: 28 }}>{k.chef}</h4>
            <p>{k.bio}</p>
          </div>
          <div className="mcs-view__dish">
            <img src={k.di} alt={k.dish} />
            <p className="mcs-label" style={{ margin: "16px 0 0" }}>Signature dish</p>
            <h4 className="mcs-serif" style={{ fontSize: 32, margin: "4px 0" }}>{k.dish}</h4>
            <p className="mcs-view__meta">{k.meta} · {k.chef}</p>
            <button type="button" className="mcs-btn" onClick={() => setNote("→ In the full product this opens the recipe page (log in to read the method).")}>
              Read the recipe
            </button>
            <p className="mcs-toast" aria-live="polite">{note}</p>
          </div>
        </div>

        <div className="mcs-faq">
          {FAQ_DATA.map(([q, a], i) => (
            <div key={q}>
              <button type="button" aria-expanded={open === i} aria-controls={`mcs-ans-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                {q}<span aria-hidden="true">+</span>
              </button>
              <div id={`mcs-ans-${i}`} role="region" className={`mcs-faq__ans${open === i ? " is-open" : ""}`}>
                <div>{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Before / after with synced scrolling ─── */
const Compare = () => {
  const [sync, setSync] = useState(true);
  useEffect(() => {
    const a = document.getElementById("mcs-pane-a");
    const b = document.getElementById("mcs-pane-b");
    if (!a || !b) return;
    let lock = false;
    const link = (src, dst) => () => {
      if (!sync || lock) return;
      lock = true;
      const p = src.scrollTop / ((src.scrollHeight - src.clientHeight) || 1);
      dst.scrollTop = p * (dst.scrollHeight - dst.clientHeight);
      requestAnimationFrame(() => { lock = false; });
    };
    const fa = link(a, b), fb = link(b, a);
    a.addEventListener("scroll", fa, { passive: true });
    b.addEventListener("scroll", fb, { passive: true });
    return () => { a.removeEventListener("scroll", fa); b.removeEventListener("scroll", fb); };
  }, [sync]);

  return (
    <>
      <label className="mcs-sync">
        <input type="checkbox" checked={sync} onChange={(e) => setSync(e.target.checked)} /> Sync scrolling
      </label>
      <div className="cs-grid cs-grid--2">
        <div><span className="mcs-tag">Before</span><div className="mcs-pane" id="mcs-pane-a" tabIndex={0}><img src={BEFORE_FULL} alt="Full original homepage" /></div></div>
        <div><span className="mcs-tag mcs-tag--dark">After</span><div className="mcs-pane" id="mcs-pane-b" tabIndex={0}><img src={AFTER_FULL} alt="Full redesigned Meridian homepage" /></div></div>
      </div>
    </>
  );
};

/* ─── Page ─── */
const MeridianCaseStudy = () => {
  const [active, setActive] = useState("overview");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "Meridian — Case study · Farjana Jahan Sathi";
    window.scrollTo(0, 0);

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll(".cs-sec[id]").forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.querySelector(`.cs-toc a[href="#${active}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="cs">
      <style>{pfFonts + css + pfCaseStudy}</style>

      {/* ── Top bar ── */}
      <header className="cs-bar">
        <div className="cs-bar__inner">
          <a href="/" className="cs-back"><ArrowLeft /> Portfolio</a>
          <nav className="cs-toc" aria-label="Case study sections">
            {TOC.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "is-active" : undefined}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="cs-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </header>

      <main className="cs-main">
        {/* ── Hero ── */}
        <div className="cs-hero">
          <div className="cs-hero__tags">
            <span className="cs-badge">Case study</span>
            <span className="cs-pill">Website redesign</span>
            <span className="cs-pill">Design system</span>
            <span className="cs-pill">2023 → 2026</span>
          </div>
          <h1 className="cs-hero__title">
            <span className="cs-mark">Meridian</span>
          </h1>
          <p className="cs-hero__sub">Redesigning the first website I ever built, three years and one UX degree later</p>
          <p className="cs-hero__lead">
            In 2023 I built a recipe website in React with no idea what UX was. In 2026 I came back
            to it as a designer. This is the story of what I found, who I designed for, and how
            <strong> six chefs from six cities</strong> turned a template into an editorial homepage
            with a <strong>design system</strong> behind it.
          </p>
          <div className="mcs-links">
            {LIVE_URL && (
              <a className="mcs-live" href={LIVE_URL} target="_blank" rel="noreferrer">
                <span className="mcs-live__dot" aria-hidden="true" /> Visit the live site <ArrowRight />
              </a>
            )}
            <a className="mcs-live mcs-live--ghost" href="#result">See before &amp; after</a>
          </div>

          <dl className="cs-meta">
            {META.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <DesktopPair />
        </div>

        {/* ═════ Prologue ═════ */}
        <Section id="prologue" kicker="Prologue · 2023" title="The site I built before I knew UX">
          <p className="cs-text">
            I built the first version of this site in 2023 while learning React. I was proud that it
            worked: a navbar, a hero, chef cards, social links, an FAQ. I made design choices the way
            most developers do at the start, by accepting whatever the framework gave me.
          </p>
          <div className="cs-grid cs-grid--2 cs-grid--start">
            <Card title="How I built it then">
              <List items={[
                "Bootstrap defaults for every component and colour",
                "Content first, purpose later: I added sections because other sites had them",
                "Success meant “it runs without errors”",
              ]} />
            </Card>
            <Card title="Why I came back to it">
              <p className="cs-small">
                After my master's in HCI and UX, I wanted to test what I'd learned on something real
                and personal. Redesigning my own early work let me show the full journey: from a
                developer's first attempt to a designer's decisions.
              </p>
            </Card>
          </div>
          <blockquote className="cs-quote">“It looked finished. It just didn't do anything for the person looking at it.”</blockquote>
        </Section>

        {/* ═════ Chapter 1: Looking back ═════ */}
        <Section id="problem" kicker="Chapter 1 · Looking back" title="Auditing my own work">
          <p className="cs-text">
            I went through the 2023 homepage section by section and asked one question of each:
            <strong> what is this here to do?</strong> Most of the answers were “nothing yet”.
          </p>
          <div className="mcs-audit">
            <Figure src={BEFORE_FULL} alt="The original 2023 homepage" caption="The 2023 homepage: Bootstrap defaults, everything centred." size="lg" />
            <ol className="mcs-issues">
              {AUDIT.map(({ title, text, img, law }) => (
                <li key={title}>
                  <h3 className="cs-card__title">{title}</h3>
                  <p className="cs-small">{text}</p>
                  {law && <p className="mcs-broke">Broke: {law}</p>}
                  {img && <img className="mcs-issues__img" src={img} alt={`Before: ${title}`} loading="lazy" />}
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* ═════ Chapter 2: Who it's for ═════ */}
        <Section id="competitive" kicker="Chapter 2 · Understanding the space" title="What others do with chefs and recipes">
          <p className="cs-text">
            Before redesigning, I looked at four well-known products near Meridian's idea, focusing on
            how they introduce people and how you find something to cook.
          </p>
          <div className="mcs-tablewrap">
            <table className="mcs-table">
              <thead><tr><th>Product</th><th>Does well</th><th>Falls short here</th><th>What I took</th></tr></thead>
              <tbody>
                {COMPETITORS.map((c) => (
                  <tr key={c.name}>
                    <th scope="row">{c.name}<small>{c.kind}</small></th>
                    <td>{c.good}</td><td>{c.gap}</td><td>{c.take}</td>
                  </tr>
                ))}
                <tr className="is-us">
                  <th scope="row">Meridian<small>Six chefs, six cities</small></th>
                  <td colSpan={3}>A small, curated set of chefs, presented as people first, with fast paths in by cuisine, chef or dish.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cs-grid cs-grid--3">
            <Card title="Small is a feature"><p className="cs-small">Competitors compete on volume. Six chefs can't, so Meridian should feel curated and personal.</p></Card>
            <Card title="People sell recipes"><p className="cs-small">Products that lead with the cook build more attachment than archives that lead with the dish.</p></Card>
            <Card title="Answer fast"><p className="cs-small">Every product offers more than one way in. Meridian needed three: cuisine, chef and dish.</p></Card>
          </div>
        </Section>

        <Section id="people" kicker="Chapter 2 · Understanding people" title="Who I'm designing for">
          <p className="cs-text">
            From the audit and competitor research I wrote two proto-personas: the home cooks I expect
            Meridian to serve. They kept every later decision tied to a person instead of my taste.
          </p>
          <div className="cs-grid cs-grid--2 cs-grid--start">
            {PERSONAS.map((p) => (
              <article key={p.name} className="cs-card mcs-iv">
                <div className="mcs-iv__who">
                  <Avatar variant={p.avatar} />
                  <div>
                    <h3 className="cs-card__title" style={{ margin: 0, fontSize: 20 }}>{p.name}</h3>
                    <p className="cs-small">{p.role}</p>
                  </div>
                </div>
                <dl className="cs-findings">
                  {p.profile.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                </dl>
                <blockquote className="cs-quote" style={{ fontSize: 18, margin: "16px 0" }}>“{p.quote}”</blockquote>
                <p className="cs-eyebrow">Needs</p>
                <List items={p.needs} />
                <p className="cs-eyebrow" style={{ marginTop: 14 }}>Frustration</p>
                <p className="cs-small">{p.pain}</p>
              </article>
            ))}
          </div>
          <div className="cs-grid cs-grid--3">
            {INSIGHTS.map((s) => (
              <div key={s.title} className="cs-card cs-card--compact">
                <h3 className="cs-card__title">{s.title}</h3>
                <p className="cs-small">{s.text}</p>
                <p className="mcs-arrow">→ {s.to}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═════ Chapter 3: Deciding ═════ */}
        <Section id="define" kicker="Chapter 3 · Deciding what matters" title="Three goals for the new homepage">
          <div className="cs-grid cs-grid--3">
            {GOALS.map(({ title, desc, color }) => (
              <div key={title} className="cs-card cs-card--compact">
                <span className="cs-chip" style={{ background: color }} aria-hidden="true" />
                <h3 className="cs-card__title">{title}</h3>
                <p className="cs-small">{desc}</p>
              </div>
            ))}
          </div>
          <p className="cs-eyebrow" style={{ marginTop: 16 }}>Prioritising with MoSCoW</p>
          <p className="cs-text">
            I sorted every idea from the audit and research. “Must” items fix the audit's problems;
            “Won't” items were left for later so the homepage could ship focused.
          </p>
          <div className="mcs-moscow">
            {MOSCOW.map((m) => (
              <div key={m.key} className={`mcs-moscow__col mcs-moscow__col--${m.cls}`}>
                <h3>{m.key}</h3>
                <p className="cs-eyebrow">{m.sub}</p>
                <ul>{m.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="structure" kicker="Chapter 3 · Structure" title="Reordering the page around decisions">
          <div className="mcs-ia">
            <div>
              <p className="cs-eyebrow">2023</p>
              <ol>{IA_BEFORE.map(([a, b]) => <li key={a}>{a}<span>{b}</span></li>)}</ol>
            </div>
            <div className="mcs-ia__arrow" aria-hidden="true">→</div>
            <div className="mcs-ia__after">
              <p className="cs-eyebrow">2026</p>
              <ol>{IA_AFTER.map(([a, b, n]) => <li key={a} className={n ? "is-new" : undefined}>{a}<span>{b}</span></li>)}</ol>
            </div>
          </div>
          <p className="cs-small">
            Highlighted sections are new. Following the <strong>serial position effect</strong>, the
            promise sits first and navigation sits last, where people remember and expect them.
          </p>
        </Section>

        {/* ═════ Chapter 4: Exploring ═════ */}
        <Section id="ideation" kicker="Chapter 4 · Exploring" title="Many options before one answer">
          <div className="cs-grid cs-grid--3">
            {HMW.map((q, i) => (
              <div key={q} className="cs-card cs-card--compact">
                <p className="cs-eyebrow">How might we · 0{i + 1}</p>
                <p className="mcs-serif" style={{ fontSize: 21, lineHeight: 1.3, margin: 0 }}>{q}</p>
              </div>
            ))}
          </div>

          <h3 className="cs-card__title" style={{ marginTop: 24 }}>Hero directions</h3>
          <div className="cs-grid cs-grid--3">
            <Concept label="A · Search first" title="Search bar hero" text="Fast for people who know what they want, but with six chefs there's little to search, and it says nothing about who Meridian is.">
              <Ln w="60%" h={9} tone="dark" /><Box h={20} /><div className="mcs-row"><Ln w={40} h={10} /><Ln w={40} h={10} /><Ln w={40} h={10} /></div><Box style={{ flex: 1 }} />
            </Concept>
            <Concept label="B · Chef carousel" title="Rotating chef spotlight" text="Personal, but a carousel hides five of six chefs and the message changes every few seconds.">
              <div className="mcs-row" style={{ flex: 1 }}><Box style={{ flex: 1 }} /><div style={{ flex: 1 }}><Ln h={9} tone="dark" /><Ln /><Ln w="70%" /><Ln w={44} h={11} tone="btn" /></div></div>
              <div className="mcs-row" style={{ justifyContent: "center" }}><Ln w={5} h={5} /><Ln w={5} h={5} /><Ln w={5} h={5} /></div>
            </Concept>
            <Concept picked label="C · Editorial promise" title="One-line promise + kitchen index" text="States the idea in one line, one action, and all six kitchens in view at once. Answers HMW 01 and 03.">
              <div className="mcs-row" style={{ alignItems: "flex-end" }}><div style={{ flex: 1.4 }}><Ln h={14} tone="dark" /><Ln w="80%" h={14} tone="dark" /></div><div style={{ flex: 1 }}><Ln /><Ln /><Ln w={44} h={11} tone="btn" /></div></div>
              <Box style={{ flex: 1 }} />
              <div className="mcs-row">{[1, 2, 3, 4, 5, 6].map((i) => <Ln key={i} h={9} />)}</div>
            </Concept>
          </div>

          <h3 className="cs-card__title" style={{ marginTop: 24 }}>Chef card directions</h3>
          <div className="cs-grid cs-grid--3">
            <Concept label="A · Stats card (2023)" title="Keep the stats, fix the layout" text="Cheapest change, but likes and counts still don't help anyone choose what to cook.">
              <div className="mcs-row" style={{ flex: 1 }}><Box style={{ flex: 1 }} /><div style={{ flex: 1, paddingLeft: 16 }}><Ln h={9} tone="dark" /><Ln w="50%" /><Ln w="30%" /><Ln w="60%" /></div></div>
              <Ln h={13} tone="btn" />
            </Concept>
            <Concept label="B · Horizontal story" title="List with long bios" text="Rich story, but six rows make a long scroll and the photos get too small to carry the food.">
              {[0, 1].map((i) => <div key={i} className="mcs-row" style={{ flex: 1 }}><Box style={{ width: 60 }} /><div style={{ flex: 1 }}><Ln w="40%" /><Ln h={9} tone="dark" /><Ln /><Ln w="60%" /></div></div>)}
            </Concept>
            <Concept picked label="C · Portrait story card" title="Portrait + origin + two-line story" text="Big photo, cuisine · city label, a short bio and a specific link. Works in a 3-column grid. Answers HMW 02.">
              <div className="mcs-row" style={{ flex: 1 }}>
                {[0, 1, 2].map((i) => <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column" }}><Box style={{ flex: 1 }} /><Ln w="50%" tone="acc" /><Ln h={8} tone="dark" /><Ln /><Ln w="30%" tone="btn" /></div>)}
              </div>
            </Concept>
          </div>
        </Section>

        <Section id="lofi" kicker="Chapter 4 · Low fidelity" title="Structure before style">
          <p className="cs-text">
            A greyscale wireframe let me test order, hierarchy and spacing on the 3-column grid
            without colour or photography getting in the way.
          </p>
          <div className="mcs-lofi">
            <div className="mcs-wf mcs-lofi__page" aria-label="Greyscale wireframe of the homepage">
              <div className="mcs-row" style={{ justifyContent: "space-between", paddingBottom: 6, borderBottom: "1px solid #e6e6e6" }}><Ln w={60} h={9} tone="dark" /><div className="mcs-row"><Ln w={22} /><Ln w={26} /><Ln w={26} /></div><Ln w={20} /></div>
              <Pin n={1} />
              <div className="mcs-row" style={{ alignItems: "flex-end" }}><div style={{ flex: 1.5 }}><Ln w="30%" tone="acc" /><Ln h={18} tone="dark" /><Ln w="85%" h={18} tone="dark" /><Ln w="40%" h={18} tone="dark" /></div><div style={{ flex: 1 }}><Ln /><Ln /><Ln w="70%" /><Ln w={60} h={11} tone="btn" /></div></div>
              <Box h={100} />
              <Pin n={2} />
              <div className="mcs-row">{[1, 2, 3, 4, 5, 6].map((i) => <Box key={i} h={22} style={{ flex: 1, background: "#e6e6e6" }} />)}</div>
              <Pin n={3} />
              <div className="mcs-row" style={{ alignItems: "center" }}><Box h={80} style={{ flex: 1.4 }} /><div style={{ flex: 1 }}><Ln w="40%" tone="acc" /><Ln h={12} tone="dark" /><Ln /><Ln w="70%" /><Ln w={44} h={11} tone="out" /></div></div>
              <Pin n={4} />
              <div className="mcs-row" style={{ justifyContent: "space-between", borderBottom: "1px solid #9a9a9a", paddingBottom: 4 }}><Ln w="45%" h={12} tone="dark" /><Ln w="30%" /></div>
              <div className="mcs-row">{[0, 1, 2].map((i) => <div key={i} style={{ flex: 1 }}><Box h={70} /><Ln w="50%" tone="acc" /><Ln h={8} tone="dark" /><Ln /></div>)}</div>
              <p className="mcs-wf__note" style={{ textAlign: "center", margin: 0 }}>× 2 rows</p>
              <Pin n={5} />
              <div style={{ background: "#f3f3f3", padding: 8 }}>
                <div className="mcs-row" style={{ justifyContent: "space-between", borderBottom: "1px solid #9a9a9a", paddingBottom: 4, marginBottom: 6 }}><Ln w="45%" h={12} tone="dark" /><Ln w="30%" /></div>
                <div className="mcs-row">{[0, 1, 2].map((i) => <div key={i} style={{ flex: 1 }}><Box h={40} /><Ln h={8} tone="dark" /><Ln w="70%" /></div>)}</div>
              </div>
              <Pin n={6} />
              <div className="mcs-row"><div style={{ flex: 1 }}><Ln h={12} tone="dark" /><Ln /></div><div style={{ flex: 1.7 }}><Ln h={10} /><Ln h={10} /><Ln h={10} /><Ln h={10} /></div></div>
              <Pin n={7} />
              <Box h={50} style={{ background: "#5a5a5a" }} />
            </div>
            <Numbered items={[
              "Hero: headline left, intro and one button right. One line plus an italic accent keeps the promise short.",
              "Kitchen index: six equal cells with cuisine + city instead of icons.",
              "Recipe of the week: 649 / 463 split; outline button so it doesn't compete with the hero.",
              "Chefs: section head with a rule, then 3 × 2 portrait cards. Card height set by the photo ratio.",
              "Signature dishes: same grid on a tint background, landscape photos to tell dishes from people.",
              "FAQ: title left, accordion right; answers stay hidden until needed.",
              "Footer: dark band with kitchen links, explore links and socials.",
            ]} />
          </div>
        </Section>

        {/* ═════ Chapter 5: Designing ═════ */}
        <Section id="laws" kicker="Chapter 5 · Designing with principles" title="The UX laws behind each decision">
          <p className="cs-text">
            In 2023 I chose layouts because they looked fine. This time every decision had to answer
            to a known principle of how people perceive and choose. These are the laws I leaned on most.
          </p>
          <div className="mcs-laws">
            {LAWS.map((l) => (
              <div key={l.name} className="mcs-law">
                <p className="mcs-law__name">{l.name}</p>
                <p className="cs-small">{l.what}</p>
                <p className="mcs-law__how"><strong>In Meridian:</strong> {l.how}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="hifi" kicker="Chapter 5 · High fidelity" title="Quiet interface, loud food">
          <p className="cs-text">
            The photography was already the best thing on the old page, so the direction became
            editorial: a warm off-white canvas, a classical serif for voice, and a restrained UI.
          </p>
          <div className="cs-card">
            <p className="cs-eyebrow">Chef cards</p>
            <h3 className="cs-card__title">Story over stats</h3>
            <p className="cs-small" style={{ marginBottom: 12 }}>
              The biggest change. Likes, experience and counts are gone; each chef gets where they cook and a two-line story.
            </p>
            <LawChips laws={["Hick's law", "Law of similarity", "Law of proximity"]} />
            <div className="mcs-cards" style={{ marginTop: 16 }}>
              <div><span className="mcs-tag">2023</span><img src={CARD_BEFORE} alt="Original chef card for Arjun Mehra" /></div>
              <div><span className="mcs-tag mcs-tag--dark">2026</span><img src={CARD_AFTER} alt="Redesigned chef card for Arjun Mehra" /></div>
            </div>
            <dl className="cs-findings" style={{ marginTop: 16 }}>
              <div><dt>Hick's law</dt><dd>Fewer data points per card, so choosing a chef is faster. “Indian · Jaipur” tells you more than “42k likes”.</dd></div>
              <div><dt>Law of similarity</dt><dd>One component with a fixed 3:4 photo, so all six cards read as one set instead of four heights.</dd></div>
              <div><dt>Law of proximity</dt><dd>Origin, name, bio and link sit tightly under the photo, so they read as one chef.</dd></div>
            </dl>
          </div>
          {DECISIONS.map(({ kicker, title, img, text, laws }) => (
            <div key={title} className="cs-card">
              <p className="cs-eyebrow">{kicker}</p>
              <h3 className="cs-card__title">{title}</h3>
              <p className="cs-small" style={{ marginBottom: 12 }}>{text}</p>
              <LawChips laws={laws} />
              <div style={{ marginTop: 16 }}><Figure src={img} alt={`Hi-fi: ${title}`} size="lg" /></div>
            </div>
          ))}
        </Section>

        {/* ═════ Chapter 6: Look & feel ═════ */}
        <Section id="typography" kicker="Chapter 6 · Look and feel" title="Why these two typefaces">
          <p className="cs-text">
            In 2023 one default sans-serif did everything, so nothing felt more important than
            anything else. Now two typefaces have separate jobs: one for voice, one for information.
          </p>
          <div className="cs-grid cs-grid--2 cs-grid--start">
            <div className="cs-card">
              <p className="cs-eyebrow">Display · names, dishes, questions</p>
              <p className="mcs-serif mcs-specimen">Aa <i style={{ color: "var(--cs-accent)" }}>Aa</i></p>
              <h3 className="cs-card__title">Cormorant Garamond</h3>
              <List items={[
                "Sounds like food writing: Garamond-style serifs come from book printing, the world of cookbooks and menus.",
                "Has a real italic, so emphasis like “at home” needs no bold or colour blocks.",
                "Handles accented names cleanly: Élodie, Lucía, ragù.",
                "Used only at 24px and up; its fine hairlines get weak at small sizes.",
                "Free on Google Fonts, so the live site can use it at no cost.",
              ]} />
            </div>
            <div className="cs-card">
              <p className="cs-eyebrow">Text · body, labels, metadata, buttons</p>
              <p className="mcs-specimen" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>Aa Aa</p>
              <h3 className="cs-card__title">Inter</h3>
              <List items={[
                "Made for screens, with a tall x-height that stays readable at 12–15px.",
                "Clear numbers for cooking time, servings and the 01–06 numbering.",
                "Neutral on purpose: it doesn't compete with Cormorant.",
                "Tracked caps for small labels create a clear layer between headings and body.",
              ]} />
            </div>
          </div>
          <blockquote className="cs-quote">If it's a name, a dish or a question, it's Cormorant. If it's a fact, a label or an action, it's Inter.</blockquote>
          <LawChips laws={["Law of similarity", "Aesthetic-usability effect"]} />
          <div className="cs-card mcs-scale">
            {TYPE_SCALE.map(([name, spec, sample, st]) => (
              <div key={name}>
                <p className="cs-small"><strong>{name}</strong><br />{spec}</p>
                <p className="mcs-serif" style={{ margin: 0, ...st }}>{sample}</p>
              </div>
            ))}
            <div>
              <p className="cs-small"><strong>Body · Label</strong><br />Inter 16 · 12 semibold</p>
              <p style={{ margin: 0, fontSize: 16, color: "var(--cs-ink-2)" }}>Each chef has spent a career mastering one cuisine. <span className="mcs-label">Japanese · Kyoto</span></p>
            </div>
          </div>
        </Section>

        <Section id="colour" kicker="Chapter 6 · Look and feel" title="A palette that lets the food lead">
          <p className="cs-text">
            Food photos are already full of colour: saffron, chilli, herbs, charred meat. So the
            interface is deliberately quiet and warm, with only one accent.
          </p>
          <div className="mcs-palette" aria-label="Palette in proportion of use">
            <div style={{ background: "#fbfaf7", color: "#6d6a64" }}>bg · 60%</div>
            <div style={{ background: "#f3f0ea", color: "#6d6a64" }}>tint</div>
            <div style={{ background: "#1c1b19", color: "#fbfaf7" }}>ink</div>
            <div style={{ background: "#6d6a64", color: "#fbfaf7" }}>muted</div>
            <div style={{ background: "#8a6a3e", color: "#fbfaf7" }}>accent</div>
          </div>
          <LawChips laws={["Von Restorff effect", "Aesthetic-usability effect"]} />
          <div className="cs-grid cs-grid--2">
            {COLOUR_WHY.map(({ hex, title, text }) => (
              <div key={title} className="cs-card cs-card--compact">
                <span className="cs-chip" style={{ background: hex, border: "1px solid var(--cs-line)" }} aria-hidden="true" />
                <h3 className="cs-card__title">{title}</h3>
                <p className="cs-small">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="design-system" kicker="Chapter 6 · Design system" title="Variables, tokens and components">
          <div className="mcs-layers">
            <div><strong>Figma variables</strong><span>9 colours + 21 text styles</span></div>
            <em aria-hidden="true">→</em>
            <div><strong>Design tokens</strong><span>Same names in code</span></div>
            <em aria-hidden="true">→</em>
            <div><strong>Components</strong><span>10, every fill and text style bound</span></div>
          </div>

          <h3 className="cs-card__title">Colour variables</h3>
          <div className="mcs-tablewrap">
            <table className="mcs-table mcs-table--tokens">
              <thead><tr><th>Variable</th><th>Value</th><th>Used for</th><th>Contrast</th></tr></thead>
              <tbody>
                {COLOURS.map((c) => (
                  <tr key={c.name}>
                    <td><i className="mcs-dot" style={{ background: c.hex }} /><code>{c.name}</code></td>
                    <td>{c.hex}</td><td>{c.use}</td>
                    <td className={c.ok ? "is-ok" : "is-warn"}>{c.contrast}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <h3 className="cs-card__title" style={{ marginTop: 16 }}>Components</h3>
          <div className="cs-grid cs-grid--2">
            <div className="mcs-comp">
              <div className="mcs-comp__stage"><span className="mcs-btn">Meet the chefs</span><span className="mcs-btn mcs-btn--out">Read the recipe</span></div>
              <div className="mcs-comp__spec"><strong>Button</strong><span>Primary · Outline. Inter 13 semibold, tracked caps, 48px tall. One primary per section (Hick's law).</span></div>
            </div>
            <div className="mcs-comp">
              <div className="mcs-comp__stage"><span className="mcs-tlink">3 recipes</span><span className="mcs-tlink">Log in</span></div>
              <div className="mcs-comp__spec"><strong>Text Link</strong><span>Underlined caps link for low-emphasis actions.</span></div>
            </div>
            <div className="mcs-comp">
              <div className="mcs-comp__stage"><img src={CARD_AFTER} alt="Chef Card component" style={{ width: 130 }} /></div>
              <div className="mcs-comp__spec"><strong>Chef Card</strong><span>Photo, number, cuisine · city, name, bio, link. Photo fixed at 373 × 466.</span></div>
            </div>
            <div className="mcs-comp">
              <div className="mcs-comp__stage" style={{ flexDirection: "column", alignItems: "flex-start" }}>
                <img src={DISH_RAMEN} alt="" style={{ width: 200 }} />
                <span className="mcs-label" style={{ marginTop: 8 }}>Japanese</span>
                <span className="mcs-serif" style={{ fontSize: 22 }}>Shoyu ramen</span>
                <span style={{ fontSize: 12, color: "var(--cs-muted)" }}>4 hr · Serves 4 · Kenji Morikawa</span>
              </div>
              <div className="mcs-comp__spec"><strong>Recipe Card</strong><span>Photo, cuisine, dish, time, servings, chef. Landscape 3:2 photo.</span></div>
            </div>
            <div className="mcs-comp">
              <div className="mcs-comp__stage" style={{ display: "block" }}>
                <div className="mcs-faqrow">What does “al dente” mean? <span>+</span></div>
                <div className="mcs-faqrow">What is garam masala? <span>×</span></div>
                <p className="cs-small" style={{ padding: "6px 0" }}>A warming North Indian spice blend…</p>
              </div>
              <div className="mcs-comp__spec"><strong>FAQ Item</strong><span>Closed · Open. Question Cormorant 24, answer Inter 15.</span></div>
            </div>
            <div className="mcs-comp">
              <div className="mcs-comp__stage">
                <div className="mcs-kitem"><small>01</small><b className="mcs-serif">Italian</b><span>Florence</span></div>
                <div className="mcs-kitem"><small>02</small><b className="mcs-serif">Japanese</b><span>Kyoto</span></div>
              </div>
              <div className="mcs-comp__spec"><strong>Kitchen Item</strong><span>Number, cuisine, city. Used × 6 in the index and footer.</span></div>
            </div>
          </div>
          <Figure src={FOOTER} alt="Site Footer component" caption="Site Header · Section Head · Brand · Site Footer frame every section. Brand has Default and On ink variants." size="md" />
        </Section>

        {/* ═════ Chapter 7: Try it ═════ */}
        <Section id="prototype" kicker="Chapter 7 · Bringing it to life" title="Try the key interactions">
          <p className="cs-text">
            A working slice of the hi-fi design. Pick a kitchen to see its chef and signature dish,
            then open a question. Arrow keys switch kitchens.
          </p>
          <Prototype />
          <p className="cs-small">Recreated in code from the Figma components and tokens. Chefs are fictional; photography from Unsplash.</p>
        </Section>

        {/* ═════ Chapter 8: The result ═════ */}
        <Section id="result" kicker="Chapter 8 · The result" title="2023 vs 2026">
          <p className="cs-text">Same content, same photos, the same six chefs. A different page.</p>
          <DesktopPair large />
          <h3 className="cs-card__title" style={{ marginTop: 16 }}>The full pages</h3>
          <p className="cs-small">Click either page to open it full size.</p>
          <div className="mcs-full">
            <a href={FULL_BEFORE} target="_blank" rel="noreferrer" className="mcs-full__item">
              <span className="mcs-tag">2023 · Before</span>
              <img src={FULL_BEFORE} alt="Full 2023 homepage in a browser window" loading="lazy" />
            </a>
            <a href={FULL_AFTER} target="_blank" rel="noreferrer" className="mcs-full__item">
              <span className="mcs-tag mcs-tag--dark">2026 · After</span>
              <img src={FULL_AFTER} alt="Full 2026 Meridian homepage in a browser window" loading="lazy" />
            </a>
          </div>
          <h3 className="cs-card__title" style={{ marginTop: 16 }}>Compare section by section</h3>
          <p className="cs-small">Scroll either page. With sync on, both move together.</p>
          <Compare />
        </Section>

        {/* ═════ Epilogue ═════ */}
        <Section id="learnings" kicker="Epilogue · What changed in me" title="From “it works” to “it helps”">
          <div className="mcs-then">
            <div><p className="cs-eyebrow">2023 me asked</p><p className="mcs-serif" style={{ fontSize: 22 }}>Does it run?<br />Does it look like a website?</p></div>
            <div><p className="cs-eyebrow">2026 me asks</p><p className="mcs-serif" style={{ fontSize: 22 }}>Who is it for?<br />What does each section help them do?</p></div>
          </div>
          <div className="cs-grid cs-grid--2">
            <Card title="Key learnings">
              <Numbered items={[
                "Audit before you decorate: most problems were about purpose, not looks.",
                "Data isn't automatically useful. Context (cuisine, city, time, servings) helped more than likes.",
                "UX laws turn taste into reasons I can explain to a team.",
                "Setting up variables first made every later section faster and more consistent.",
              ]} />
            </Card>
            <Card title="Next steps">
              <Numbered items={[
                "Interview 5 home cooks to validate the two proto-personas.",
                "Five-second test on the hero and a task test: “find a vegetarian dinner under an hour”.",
                "Darken the accent slightly on tint sections (4.38:1 → 4.5:1+).",
                "Design mobile layouts and the recipe detail page, then rebuild the live site.",
              ]} />
            </Card>
          </div>
          <details className="mcs-details">
            <summary>Interview guide I'll use to validate the personas (8 questions)</summary>
            <Numbered items={GUIDE} />
          </details>
        </Section>

        {/* ── End of page ── */}
        <nav className="cs-end" aria-label="More case studies">
          <a href="/" className="cs-btn-secondary"><ArrowLeft /> Back to portfolio</a>
          <a href="/projects/four" className="cs-next">
            <span className="cs-eyebrow">Next case study</span>
            <span className="cs-next__title">Ultra <ArrowRight /></span>
          </a>
        </nav>
      </main>
    </div>
  );
};

export default MeridianCaseStudy;

/* ───────────────────────────────────────────── */
/* Shared case-study styles (copied from FourthProject.jsx) with Meridian's bronze accent,
   followed by Meridian-only "mcs-" styles. */
const css = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600;700&display=swap');

.cs {
  --cs-primary: #0075de;
  --cs-primary-active: #005bab;
  --cs-accent: #8a6a3e;
  --cs-ink: #000000;
  --cs-ink-2: #31302e;
  --cs-muted: #615d59;
  --cs-faint: #a39e98;
  --cs-canvas: #ffffff;
  --cs-paper: #f6f5f4;
  --cs-line: #e6e6e6;
  --cs-sky: #62aef0;
  --cs-green: #1aae39;
  --cs-shadow:
    0 1px 1px rgba(0,0,0,0.03),
    0 2px 4px rgba(0,0,0,0.03),
    0 6px 12px rgba(0,0,0,0.035),
    0 16px 32px rgba(0,0,0,0.04);

  min-height: 100vh;
  background: var(--cs-paper);
  color: var(--cs-ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.cs *, .cs *::before, .cs *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
.cs-sec { scroll-margin-top: 80px; }
.cs strong { font-weight: 600; color: var(--cs-ink); }

/* ── Top bar ── */
.cs-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(246,245,244,0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--cs-line);
}
.cs-bar__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 24px;
}
.cs-back {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 9999px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  color: var(--cs-ink-2);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}
.cs-back:hover { border-color: var(--cs-faint); color: var(--cs-ink); }
.cs-toc {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;
  margin-left: auto;
}
.cs-toc::-webkit-scrollbar { display: none; }
.cs-toc a {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--cs-muted);
  text-decoration: none;
  white-space: nowrap;
}
.cs-toc a:hover { color: var(--cs-ink); background: var(--cs-canvas); }
.cs-toc a.is-active { color: var(--cs-primary); background: rgba(0,117,222,0.08); }
.cs-progress {
  height: 2px;
  background: var(--cs-accent);
  transform-origin: 0 50%;
}

/* ── Layout ── */
.cs-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 96px;
}

/* ── Hero ── */
.cs-hero { padding: 56px 0 24px; }
.cs-hero__tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.cs-badge {
  display: inline-flex;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  color: var(--cs-primary);
  font-size: 14px;
  font-weight: 500;
}
.cs-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 9999px;
  background: rgba(138,106,62,0.12);
  color: #6e5430;
  font-size: 14px;
  font-weight: 500;
}
.cs-hero__title {
  margin: 0;
  font-size: clamp(44px, 7vw, 80px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.035em;
}
.cs-mark {
  background-image: linear-gradient(transparent 62%, rgba(205,180,140,0.45) 62%);
  padding: 0 2px;
}
.cs-hero__sub {
  margin: 12px 0 0;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 500;
  color: var(--cs-muted);
}
.cs-hero__lead {
  margin: 20px 0 0;
  max-width: 40rem;
  font-size: 18px;
  line-height: 1.6;
  color: var(--cs-ink-2);
}

.cs-meta {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 40px 0 32px;
  padding: 20px 0;
  border-top: 1px solid var(--cs-line);
  border-bottom: 1px solid var(--cs-line);
}
.cs-meta dt, .cs-eyebrow {
  margin: 0 0 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--cs-muted);
}
.cs-meta dd { margin: 0; font-size: 15px; line-height: 1.45; color: var(--cs-ink); }

/* ── Sections: sticky heading | content ── */
.cs-sec {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
  padding: 64px 0;
  border-top: 1px solid var(--cs-line);
}
.cs-sec__head {
  grid-column: span 4;
  align-self: start;
  position: sticky;
  top: 88px;
}
.cs-sec__title {
  margin: 0;
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
}
.cs-sec__body {
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}
.cs-eyebrow { display: block; }

/* Text */
.cs-text { margin: 0; font-size: 17px; line-height: 1.7; color: var(--cs-ink-2); max-width: 44rem; }
.cs-small { margin: 0; font-size: 15px; line-height: 1.6; color: var(--cs-muted); }

.cs-quote {
  margin: 0;
  padding: 4px 0 4px 20px;
  border-left: 3px solid var(--cs-accent);
  font-size: clamp(19px, 2vw, 23px);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--cs-ink);
}

/* Grids */
.cs-grid { display: grid; gap: 16px; margin: 0; }
.cs-grid--2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.cs-grid--3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.cs-grid--start { align-items: start; }

/* Cards */
.cs-card {
  padding: 24px;
  border-radius: 12px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
}
.cs-card--compact { padding: 20px; }
.cs-card__title { margin: 0 0 10px; font-size: 17px; font-weight: 600; line-height: 1.4; letter-spacing: -0.01em; }
.cs-chip { display: block; width: 24px; height: 24px; border-radius: 7px; margin-bottom: 14px; }

.cs-list { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; list-style: none; }
.cs-list li {
  position: relative;
  padding-left: 16px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--cs-ink-2);
}
.cs-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background: var(--cs-accent);
}

.cs-numbered { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; list-style: none; counter-reset: cs-n; }
.cs-numbered li { position: relative; padding-left: 28px; font-size: 15px; line-height: 1.6; color: var(--cs-ink-2); counter-increment: cs-n; }
.cs-numbered li::before { content: counter(cs-n, decimal-leading-zero); position: absolute; left: 0; top: 1px; font-size: 13px; font-weight: 600; color: var(--cs-accent); }

/* Findings */
.cs-findings { margin: 0; }
.cs-findings > div { padding: 12px 0; border-top: 1px solid var(--cs-line); }
.cs-findings > div:first-child { border-top: 0; padding-top: 0; }
.cs-findings dt { font-size: 15px; font-weight: 600; color: var(--cs-ink); margin-bottom: 2px; }
.cs-findings dd { margin: 0; font-size: 15px; line-height: 1.55; color: var(--cs-muted); }

/* Figures */
.cs-fig { margin: 0; }
.cs-fig__frame {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 12px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  overflow: hidden;
}
.cs-fig img { display: block; max-width: 100%; height: auto; object-fit: contain; border-radius: 6px; }
.cs-fig--md img { max-height: 320px; }
.cs-fig--lg img { max-height: 520px; }
.cs-fig figcaption { margin-top: 8px; font-size: 13px; color: var(--cs-muted); }

/* Images inside grids get the same 4:3 frame so rows line up */
.cs-grid .cs-fig__frame { aspect-ratio: 4 / 3; }
.cs-grid .cs-fig img { width: auto; height: auto; max-width: 100%; max-height: 100%; }

/* Zoomable figures */
.cs-fig__zoom { position: relative; cursor: zoom-in; text-decoration: none; }
.cs-zoom-hint {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.92);
  border: 1px solid var(--cs-line);
  font-size: 12px;
  font-weight: 500;
  color: var(--cs-ink-2);
  opacity: 0;
  transition: opacity .15s ease;
}
.cs-fig__zoom:hover .cs-zoom-hint, .cs-fig__zoom:focus-visible .cs-zoom-hint { opacity: 1; }
@media (hover: none) { .cs-zoom-hint { opacity: 1; } }

/* Persona */
.cs-persona {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 24px;
  align-items: center;
}
.cs-persona__name { margin: 4px 0 2px; font-size: 28px; font-weight: 700; letter-spacing: -0.02em; }
.cs-persona__meta { margin: 0 0 14px; font-size: 14px; color: var(--cs-muted); }

/* Style guide swatches */
.cs-swatches { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin: 0; padding: 0; list-style: none; }
.cs-swatch { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 10px; background: var(--cs-canvas); border: 1px solid var(--cs-line); }
.cs-swatch__color { width: 36px; height: 36px; flex-shrink: 0; border-radius: 8px; border: 1px solid rgba(0,0,0,0.08); }
.cs-swatch__name { margin: 0; font-size: 14px; font-weight: 600; }
.cs-swatch__hex { margin: 0; font-size: 13px; color: var(--cs-muted); font-variant-numeric: tabular-nums; }

/* End of page */
.cs-end {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 16px;
  padding-top: 48px;
  border-top: 1px solid var(--cs-line);
}
.cs-btn-secondary {
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  color: var(--cs-ink);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: var(--cs-shadow);
}
.cs-next {
  display: flex;
  flex-direction: column;
  min-width: 280px;
  padding: 20px 24px;
  border-radius: 12px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  text-decoration: none;
  color: inherit;
  transition: box-shadow .2s ease, transform .2s ease;
}
.cs-next:hover { box-shadow: var(--cs-shadow); transform: translateY(-2px); }
.cs-next__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--cs-primary);
}

/* Focus */
.cs a:focus-visible { outline: 2px solid var(--cs-primary); outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .cs-next { transition: none; }
  .cs-next:hover { transform: none; }
}

/* ── Tablet ── */
@media (max-width: 1023px) {
  .cs-sec { padding: 48px 0; }
  .cs-sec__head { grid-column: 1 / -1; position: static; }
  .cs-sec__body { grid-column: 1 / -1; }
  .cs-meta { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .cs-swatches { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .cs-bar__inner { padding: 8px 16px; gap: 8px; }
  .cs-back { padding: 0 12px; }
  .cs-main { padding: 0 16px 64px; }
  .cs-hero { padding-top: 32px; }
  .cs-hero__lead { font-size: 16px; }
  .cs-meta { margin-top: 28px; }
  .cs-sec { padding: 40px 0; }
  .cs-text { font-size: 16px; }
  .cs-grid--2, .cs-grid--3, .cs-persona { grid-template-columns: 1fr; }
  .cs-end { flex-direction: column-reverse; }
  .cs-next { min-width: 0; }
  .cs-btn-secondary { align-self: stretch; justify-content: center; }
}

/* Images inside a card: soft paper background instead of a second border */
.cs-card .cs-fig__frame { background: var(--cs-paper); border-color: transparent; }
/* ── Meridian-only ── */
.mcs-serif { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; letter-spacing: -0.01em; color: var(--cs-ink); margin: 0; }
.mcs-label { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--cs-accent); margin: 0; }
.mcs-num { margin: 0 0 8px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 48px; font-weight: 500; line-height: 1; color: var(--cs-accent); }
.mcs-arrow { margin: 10px 0 0; font-size: 13px; font-weight: 500; color: var(--cs-accent); }
.mcs-row { display: flex; gap: 6px; }

/* Audit */
.mcs-audit { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 24px; align-items: start; }
.mcs-audit > .cs-fig { position: sticky; top: 88px; }
.mcs-issues { list-style: none; margin: 0; padding: 0; counter-reset: mcs-i; display: flex; flex-direction: column; }
.mcs-issues li { counter-increment: mcs-i; position: relative; padding: 18px 0 18px 44px; border-top: 1px solid var(--cs-line); }
.mcs-issues li:last-child { border-bottom: 1px solid var(--cs-line); }
.mcs-issues li::before { content: counter(mcs-i, decimal-leading-zero); position: absolute; left: 0; top: 18px; font-size: 13px; font-weight: 600; color: var(--cs-accent); }
.mcs-issues .cs-card__title { margin-bottom: 4px; }
.mcs-issues__img { display: block; width: 100%; max-width: 420px; margin-top: 12px; border-radius: 8px; border: 1px solid var(--cs-line); }

/* Tables */
.mcs-tablewrap { overflow-x: auto; border-radius: 12px; border: 1px solid var(--cs-line); background: var(--cs-canvas); }
.mcs-table { width: 100%; min-width: 620px; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
.mcs-table th, .mcs-table td { padding: 12px 14px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--cs-line); color: var(--cs-ink-2); }
.mcs-table thead th { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--cs-muted); background: var(--cs-paper); }
.mcs-table tbody th { font-weight: 600; color: var(--cs-ink); width: 150px; }
.mcs-table tbody th small { display: block; font-weight: 400; font-size: 12px; color: var(--cs-muted); }
.mcs-table tr:last-child th, .mcs-table tr:last-child td { border-bottom: 0; }
.mcs-table tr.is-us { background: rgba(138,106,62,0.07); }
.mcs-table tr.is-us th { color: var(--cs-accent); }
.mcs-table code { font: 500 13px ui-monospace, Menlo, monospace; color: var(--cs-ink); }
.mcs-table .is-ok { color: #2f6b3a; font-weight: 600; }
.mcs-table .is-warn { color: #9a5a12; font-weight: 600; }
.mcs-dot { display: inline-block; width: 14px; height: 14px; border-radius: 4px; border: 1px solid var(--cs-line); vertical-align: -2px; margin-right: 8px; }

/* Interviews */
.mcs-disclaimer { display: flex; gap: 14px; align-items: flex-start; padding: 14px 18px; border-radius: 12px; border: 1px dashed var(--cs-accent); background: rgba(138,106,62,0.06); font-size: 14px; line-height: 1.6; color: var(--cs-ink-2); }
.mcs-disclaimer b { flex-shrink: 0; padding-top: 2px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cs-accent); }
.mcs-iv__who { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px solid var(--cs-line); }
.mcs-iv__who span { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cs-muted); }
.mcs-details { padding: 14px 18px; border-radius: 12px; background: var(--cs-canvas); border: 1px solid var(--cs-line); }
.mcs-details summary { cursor: pointer; font-size: 14px; font-weight: 600; color: var(--cs-accent); }
.mcs-details[open] summary { margin-bottom: 14px; }

/* MoSCoW */
.mcs-moscow { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.mcs-moscow__col { padding: 18px; border-radius: 12px; background: var(--cs-canvas); border: 1px solid var(--cs-line); border-top-width: 4px; }
.mcs-moscow__col h3 { margin: 0 0 2px; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
.mcs-moscow__col ul { margin: 10px 0 0; padding: 0; list-style: none; }
.mcs-moscow__col li { padding: 8px 0; border-top: 1px solid var(--cs-line); font-size: 14px; line-height: 1.45; color: var(--cs-ink-2); }
.mcs-moscow__col--m { border-top-color: #1c1b19; }
.mcs-moscow__col--s { border-top-color: #8a6a3e; }
.mcs-moscow__col--c { border-top-color: #cdb48c; }
.mcs-moscow__col--w { border-top-color: var(--cs-line); }

/* IA */
.mcs-ia { display: grid; grid-template-columns: minmax(0, 1fr) 40px minmax(0, 1fr); align-items: start; }
.mcs-ia ol { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
.mcs-ia li { display: flex; justify-content: space-between; gap: 10px; padding: 11px 14px; border-radius: 8px; background: var(--cs-canvas); border: 1px solid var(--cs-line); font-size: 14px; font-weight: 500; color: var(--cs-muted); }
.mcs-ia li span { font-weight: 400; font-size: 12px; color: var(--cs-faint); text-align: right; }
.mcs-ia__after li { color: var(--cs-ink); border-color: #cfc9bf; }
.mcs-ia__after li.is-new { border-left: 3px solid var(--cs-accent); }
.mcs-ia__arrow { align-self: center; text-align: center; font-size: 22px; color: var(--cs-accent); }

/* Wireframes */
.mcs-wf { position: relative; padding: 10px; border-radius: 8px; background: #fff; border: 1px solid #d4d4d4; }
.mcs-wf__note { display: block; margin-bottom: 4px; font-size: 9px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #a6a6a6; }
.mcs-ln { height: 5px; margin: 4px 0; border-radius: 3px; background: #dcdcdc; min-width: 0; }
.mcs-ln--dark { background: #bdbdbd; }
.mcs-ln--btn { background: #9a9a9a; border-radius: 2px; }
.mcs-ln--out { background: #fff; border: 1px solid #9a9a9a; border-radius: 2px; }
.mcs-ln--acc { background: #cdb48c; }
.mcs-img {
  min-height: 16px; border-radius: 3px;
  background:
    linear-gradient(to top right, transparent calc(50% - .6px), #c9c9c9 50%, transparent calc(50% + .6px)),
    linear-gradient(to bottom right, transparent calc(50% - .6px), #c9c9c9 50%, transparent calc(50% + .6px)),
    #e9e9e9;
}
.mcs-pin { display: inline-block; width: 18px; height: 18px; border-radius: 50%; background: var(--cs-ink); color: #fff; font-size: 10px; font-weight: 600; line-height: 18px; text-align: center; }
.mcs-concept__wf { height: 180px; display: flex; flex-direction: column; gap: 6px; }
.mcs-concept.is-picked .mcs-concept__wf { border: 2px solid var(--cs-accent); }
.mcs-verdict { position: absolute; top: 8px; right: 8px; padding: 2px 7px; border-radius: 9999px; font-size: 10px; font-weight: 600; background: var(--cs-paper); color: var(--cs-muted); }
.mcs-concept.is-picked .mcs-verdict { background: var(--cs-accent); color: #fff; }
.mcs-lofi { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 24px; align-items: start; }
.mcs-lofi__page { display: flex; flex-direction: column; gap: 8px; padding: 14px; }

/* Hi-fi chef card compare */
.mcs-cards { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: 20px; align-items: center; }
.mcs-cards img { display: block; width: 100%; border-radius: 8px; border: 1px solid var(--cs-line); }
.mcs-cards > div:last-child img { max-width: 220px; }
.mcs-tag { display: inline-block; margin-bottom: 8px; padding: 3px 9px; border-radius: 9999px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; background: var(--cs-line); color: var(--cs-ink-2); }
.mcs-tag--dark { background: var(--cs-ink); color: #fff; }

/* Typography */
.mcs-specimen { margin: 6px 0 8px; font-size: 64px; line-height: 1; }
.mcs-scale { display: flex; flex-direction: column; padding: 8px 24px; }
.mcs-scale > div { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 16px; align-items: baseline; padding: 14px 0; border-bottom: 1px solid var(--cs-line); }
.mcs-scale > div:last-child { border-bottom: 0; }
.mcs-scale .mcs-label { display: inline-block; margin-left: 8px; }

/* Colour */
.mcs-palette { display: grid; grid-template-columns: 3fr 2fr 1.4fr 1fr .7fr; height: 140px; border-radius: 12px; overflow: hidden; border: 1px solid var(--cs-line); }
.mcs-palette div { display: flex; align-items: flex-end; padding: 12px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }

/* Prototype */
.mcs-proto { border-radius: 12px; overflow: hidden; background: #fbfaf7; border: 1px solid #cfc9bf; box-shadow: var(--cs-shadow); }
.mcs-proto__bar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: #fff; border-bottom: 1px solid var(--cs-line); font-size: 12px; color: var(--cs-muted); }
.mcs-proto__bar i { width: 9px; height: 9px; border-radius: 50%; background: var(--cs-line); }
.mcs-proto__bar span { margin-left: 10px; padding: 2px 12px; border-radius: 12px; background: var(--cs-paper); }
.mcs-proto__in { padding: 28px; }
.mcs-tabs { display: flex; flex-wrap: wrap; margin: 12px 0 24px; border-top: 1px solid #e4e0d8; border-bottom: 1px solid #e4e0d8; }
.mcs-tabs button { all: unset; cursor: pointer; padding: 10px 14px 12px; border-right: 1px solid #e4e0d8; font-size: 12px; color: var(--cs-muted); }
.mcs-tabs button small { display: block; font-size: 10px; color: var(--cs-faint); }
.mcs-tabs button b { display: block; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 19px; font-weight: 500; line-height: 1.15; color: var(--cs-ink-2); }
.mcs-tabs button[aria-selected="true"] { background: #fff; box-shadow: inset 0 -2px 0 var(--cs-accent); }
.mcs-tabs button[aria-selected="true"] b { color: var(--cs-ink); }
.mcs-tabs button:focus-visible { outline: 2px solid var(--cs-accent); outline-offset: -2px; }
.mcs-view { display: grid; grid-template-columns: minmax(0, 200px) minmax(0, 1fr); gap: 28px; align-items: start; animation: mcs-fade .35s ease; }
.mcs-view img { display: block; width: 100%; object-fit: cover; }
.mcs-view__chef img { aspect-ratio: 351 / 438; }
.mcs-view__dish img { aspect-ratio: 373 / 249; }
.mcs-view p { margin: 0; font-size: 14px; line-height: 1.55; color: var(--cs-muted); }
.mcs-view__meta { margin-bottom: 14px !important; font-size: 13px !important; }
@keyframes mcs-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.mcs-btn { all: unset; cursor: pointer; display: inline-block; padding: 12px 20px; background: #1c1b19; color: #fbfaf7; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.mcs-btn:hover { background: var(--cs-accent); }
.mcs-btn:focus-visible { outline: 2px solid var(--cs-accent); outline-offset: 3px; }
.mcs-btn--out { background: transparent; color: #1c1b19; border: 1px solid #1c1b19; padding: 11px 19px; }
.mcs-btn--out:hover { background: transparent; }
.mcs-toast { min-height: 20px; margin-top: 10px !important; font-size: 13px !important; color: var(--cs-accent) !important; }
.mcs-faq { margin-top: 32px; border-top: 1px solid #1c1b19; }
.mcs-faq button { all: unset; cursor: pointer; box-sizing: border-box; display: flex; justify-content: space-between; gap: 12px; width: 100%; padding: 14px 0; border-bottom: 1px solid #e4e0d8; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 20px; font-weight: 500; color: var(--cs-ink); }
.mcs-faq button span { font-family: 'Inter', sans-serif; font-size: 18px; transition: transform .25s ease; }
.mcs-faq button[aria-expanded="true"] span { transform: rotate(45deg); }
.mcs-faq button:focus-visible { outline: 2px solid var(--cs-accent); }
.mcs-faq__ans { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .3s ease; }
.mcs-faq__ans > div { overflow: hidden; font-size: 15px; line-height: 1.6; color: var(--cs-ink-2); }
.mcs-faq__ans.is-open { grid-template-rows: 1fr; }
.mcs-faq__ans.is-open > div { padding: 10px 0 16px; }

/* Design system */
.mcs-layers { display: grid; grid-template-columns: minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr); gap: 10px; align-items: center; }
.mcs-layers div { padding: 14px 16px; border-radius: 12px; background: var(--cs-canvas); border: 1px solid var(--cs-line); }
.mcs-layers strong { display: block; font-size: 15px; }
.mcs-layers span { font-size: 13px; color: var(--cs-muted); }
.mcs-layers em { font-style: normal; color: var(--cs-accent); font-size: 18px; }
.mcs-comp { border-radius: 12px; overflow: hidden; background: var(--cs-canvas); border: 1px solid var(--cs-line); display: flex; flex-direction: column; }
.mcs-comp__stage { flex: 1; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; min-height: 140px; padding: 24px; background: #fbfaf7; }
.mcs-comp__spec { padding: 14px 18px; border-top: 1px solid var(--cs-line); font-size: 13.5px; line-height: 1.5; color: var(--cs-muted); }
.mcs-comp__spec strong { display: block; margin-bottom: 2px; font-size: 15px; }
.mcs-comp__stage img { display: block; }
.mcs-tlink { padding-bottom: 3px; border-bottom: 1.5px solid #1c1b19; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #1c1b19; }
.mcs-faqrow { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e4e0d8; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 19px; font-weight: 500; }
.mcs-faqrow:first-child { border-top: 1px solid #1c1b19; }
.mcs-faqrow span { font-family: 'Inter', sans-serif; }
.mcs-kitem { padding: 8px 14px; border-left: 1px solid #e4e0d8; }
.mcs-kitem small { display: block; font-size: 10px; color: var(--cs-faint); }
.mcs-kitem b { display: block; font-size: 21px; }
.mcs-kitem span { font-size: 12px; color: var(--cs-muted); }

/* Before / after */
.mcs-sync { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; color: var(--cs-muted); cursor: pointer; }
.mcs-sync input { accent-color: var(--cs-accent); }
.mcs-pane { height: 640px; overflow: auto; border-radius: 12px; border: 1px solid var(--cs-line); background: #fff; scrollbar-width: thin; }
.mcs-pane img { display: block; width: 100%; }
.mcs-pane:focus-visible { outline: 2px solid var(--cs-accent); outline-offset: 2px; }

/* Responsive */
@media (max-width: 1023px) {
  .mcs-audit, .mcs-lofi { grid-template-columns: 1fr; }
  .mcs-audit > .cs-fig { position: static; max-width: 420px; }
  .mcs-moscow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 767px) {
  .mcs-moscow, .mcs-cards { grid-template-columns: 1fr; }
  .mcs-ia { grid-template-columns: 1fr; }
  .mcs-ia__arrow { transform: rotate(90deg); margin: 6px 0; }
  .mcs-layers { grid-template-columns: 1fr; }
  .mcs-layers em { transform: rotate(90deg); text-align: center; }
  .mcs-view { grid-template-columns: 1fr; }
  .mcs-proto__in { padding: 18px; }
  .mcs-scale > div { grid-template-columns: 1fr; gap: 4px; }
  .mcs-specimen { font-size: 48px; }
  .mcs-pane { height: 440px; }
  .mcs-palette { height: 100px; }
  .mcs-palette div { font-size: 9px; padding: 6px; }
}
@media (prefers-reduced-motion: reduce) {
  .mcs-view { animation: none; }
  .mcs-faq__ans, .mcs-faq button span { transition: none; }
}


/* Story additions */
.mcs-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.mcs-live { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 9999px; background: var(--cs-ink); color: #fff; font-size: 15px; font-weight: 500; text-decoration: none; }
.mcs-live:hover { background: var(--cs-accent); }
.mcs-live--ghost { background: var(--cs-canvas); color: var(--cs-ink-2); border: 1px solid var(--cs-line); }
.mcs-live--ghost:hover { background: var(--cs-canvas); border-color: var(--cs-faint); color: var(--cs-ink); }
.mcs-live__dot { width: 8px; height: 8px; border-radius: 50%; background: #1aae39; box-shadow: 0 0 0 3px rgba(26,174,57,0.25); }
.mcs-live:focus-visible { outline: 2px solid var(--cs-accent); outline-offset: 3px; }
.mcs-desks { display: grid; grid-template-columns: minmax(0,1fr) auto minmax(0,1fr); align-items: center; gap: 12px; margin-top: 8px; padding: 24px; border-radius: 16px; background: #f3f0ea; border: 1px solid var(--cs-line); }
.mcs-desks figure { margin: 0; }
.mcs-desks img { display: block; width: 100%; height: auto; }
.mcs-desks__arrow { font-size: 26px; color: var(--cs-accent); }
.mcs-desks--lg { padding: 16px; }
.mcs-chips { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
.mcs-chips li { padding: 3px 10px; border-radius: 9999px; background: rgba(138,106,62,0.10); color: #6e5430; font-size: 12.5px; font-weight: 500; }
.mcs-broke { margin: 6px 0 0; font-size: 12.5px; font-weight: 500; color: #9a5a12; }
.mcs-laws { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
.mcs-law { padding: 18px 20px; border-radius: 12px; background: var(--cs-canvas); border: 1px solid var(--cs-line); border-left: 3px solid var(--cs-accent); }
.mcs-law__name { margin: 0 0 4px; font-size: 16px; font-weight: 600; color: var(--cs-ink); }
.mcs-law__how { margin: 8px 0 0; font-size: 14px; line-height: 1.55; color: var(--cs-ink-2); }
.mcs-avatar { width: 64px; height: 64px; flex-shrink: 0; }
.mcs-iv__who { gap: 14px; justify-content: flex-start !important; align-items: center !important; }
.mcs-full { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; align-items: start; }
.mcs-full__item { display: block; padding: 12px; border-radius: 12px; background: #f3f0ea; border: 1px solid var(--cs-line); text-decoration: none; transition: box-shadow .2s ease; }
.mcs-full__item:hover { box-shadow: var(--cs-shadow); }
.mcs-full__item img { display: block; width: 100%; height: auto; border-radius: 6px; box-shadow: 0 6px 20px rgba(28,27,25,0.12); }
.mcs-full__item:focus-visible { outline: 2px solid var(--cs-accent); outline-offset: 3px; }
.mcs-then { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
.mcs-then > div { padding: 20px; border-radius: 12px; background: var(--cs-canvas); border: 1px solid var(--cs-line); }
.mcs-then > div:last-child { border-color: var(--cs-accent); }
@media (max-width: 767px) {
  .mcs-desks { grid-template-columns: 1fr; padding: 14px; }
  .mcs-desks__arrow { transform: rotate(90deg); text-align: center; }
  .mcs-laws, .mcs-then { grid-template-columns: 1fr; }
}
`;
