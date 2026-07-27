# Website Specification: Hon. Byron Chan MP
## Governor of New Ireland Province · People's Progress Party

**Version:** 2.0 — restructured from single-page to 7-page multi-page site with BSP-inspired design refinements.

**Purpose:** Complete build specification for a 7-page campaign and incumbency website for Hon. Byron Chan, Governor of New Ireland Province. Every piece of content, every layout instruction, every component definition. Input for Claude Design (visual mockups) and Claude Code (working Astro site on Vercel).

**Target audience:** voters across New Ireland Province (Kavieng and Namatanai districts), journalists, provincial assembly members, national government officials, diaspora, and the Governor's staff.

**Critical constraint — PNG field conditions:** Fast on a cheap Android on Digicel 3G. New Ireland has coastal coverage but outer islands (Lihir, Tabar, Tanga, Feni, New Hanover) are patchy. Target: first contentful paint under 1.5 seconds on Slow 3G. Total first-load payload under 250KB excluding user-initiated media.

**Design reference:** BSP.com.pg — the best-built corporate site in PNG. We borrow specific patterns: the nav dropdown panels, the hero carousel rhythm, the quick-links icon strip, the horizontal content scroll, the feature split (image left / content right), the "We're here to help" footer pre-strip, and the overall sense of polish through spacing and restraint rather than decoration.

---

## DESIGN SYSTEM — BSP-INFORMED INSTITUTIONAL

Same token palette as the Duma site. Same typeface. Same institutional bones. The BSP influence is in the **patterns and spacing**, not in the colours or the typography — both sites must read as the same product family.

### Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--white` | `#FFFFFF` | Page ground |
| `--paper` | `#F2F1EE` | Panel backgrounds, card grounds, alternating sections |
| `--ink` | `#1B1B1B` | Primary text, headings, rules |
| `--muted` | `#5B5751` | Secondary text, captions, metadata |
| `--rule` | `#DAD7D0` | Borders, table rules, dividers |
| `--navy` | `#0A2458` | Utility bar, nav, buttons, footer, links |
| `--red` | `#B3122A` | Single accent — CTA button, eyebrow. PPP red. |
| `--gold` | `#B78A2E` | Status indicator (Delivered), budget highlights |

No gradients. No shadows except the sticky-nav scroll shadow. No dark mode.

### Typography

**Public Sans** only. Same scale as the Duma spec.

**Italic keyword in hero headings (BSP-style):** one italic phrase per hero heading for emphasis. Never in body text.

### Layout

- **Max content width:** 960px, centred
- **Page margin mobile:** 16px
- **Section spacing:** 48px mobile, 64px desktop
- **Card grid:** 1 col mobile, 2 col desktop, 12px gap
- **BSP spacing discipline:** generous padding inside sections (32px mobile, 48px desktop). Let content breathe. White space is the primary visual signal of quality — more effective than any graphic device.

### Components

#### Utility bar
Full-width, `--navy` background, white text. Left: `Office of the Governor — New Ireland Province`. Right: `Kavieng`. Height: ~32px. Scrolls away normally.

#### Navigation (STICKY — BSP-style)
Below utility bar. `position: sticky; top: 0; z-index: 100;` Fixes on scroll. Subtle `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` added via IntersectionObserver when utility bar leaves viewport.

White background, bottom border 1px `--rule`. Left: brand mark (30×30px navy square with inset border) + "Byron Chan MP" (bold) / "Governor, New Ireland" (muted caption). Right: horizontal text links on desktop, hamburger on mobile.

**Desktop nav links:** Home, Record & Budget, About, New Ireland, Campaign, Contact.

**BSP-style dropdown panels:** On desktop, hovering "Record & Budget" reveals a clean dropdown panel (white, 1px `--rule` border, no shadow heavier than 0 2px 8px rgba(0,0,0,0.08)). The panel contains the sub-section links:
- Record & Budget → The mandate, The budget breakdown, Revenue & royalties
- About → Biography, Legacy, People's Progress Party
- Campaign → Support Byron Chan, Endorsements, Get involved, Upcoming events

On mobile, the hamburger opens a full-screen overlay with all links listed vertically, grouped under the same headings. Close button (✕) top right.

Height: ~56px. `scroll-padding-top: 64px` on `<html>`.

#### Hero (homepage only — BSP carousel pattern)
Full-width. Up to 3 slides, CSS scroll-snap (`scroll-snap-type: x mandatory`), dot indicators at bottom. No autoplay. Each slide: full-bleed photo with 40% dark overlay, eyebrow in `--red` uppercase, h1 with one italic keyword (BSP-style), one line of description, one CTA button. Desktop: video poster on first slide (click-to-play). Mobile: static images only, no video loaded.

Aspect ratio: 16:10 mobile, 16:7 desktop.

#### Quick-access strip (below hero — BSP quick-links pattern)
Four tiles in a horizontal row. Each: monoline SVG icon (24×24, `--navy`) above a label (caption style, centred). Full-width, 1px `--rule` top and bottom border, `--white` background. Evenly spaced on desktop, horizontally scrollable on mobile.

#### Feature split (BSP "Banking made easy" pattern)
Two-column layout: large photo (aspect 4:3 or 16:10) on one side, content block on the other. Content block: h2, body paragraph, list of 3–4 text links. On mobile, photo stacks above content. Alternates direction per section (photo-left/content-right, then photo-right/content-left) for rhythm.

#### Horizontal content scroll (BSP "Latest news" pattern)
Section heading with right-aligned "View all →" link. Horizontal strip of 3–5 cards, CSS scroll-snap. Desktop: 3 cards visible. Mobile: 1.2 cards visible (edge of next card signals scrollability). Each card: ~280px wide, photo (16:10), date caption, linked title. No JS carousel library.

#### Icon service cards (BSP "We're here to help" pattern)
Row of 3 cards, each: centred icon (48×48, `--navy`), h3 heading, two-line description, text link. `--paper` background. Used for the "Get involved" section and the footer pre-strip.

#### Section heading
Left-aligned h2 in `--ink`, optional right-aligned metadata span. One-line subtitle in `--muted`. 1.5px `--ink` rule below.

#### Record table row
Same as Duma spec: project name (bold) + metadata (caption), status dot + label (right-aligned). Gold dot = Delivered, navy dot = Underway, outline dot = Not started.

#### Button
Rectangular, no border-radius. Primary: `--navy` bg, white text. Accent: `--red` bg, white text (once per page max). Outline: transparent bg, `--navy` 1.5px border.

#### Quote block
Left border 3px `--red`. Padding-left 14px. Quote text weight 600. Attribution in caption style.

#### Footer pre-strip (BSP "We're here to help" pattern)
`--paper` background, full width. Three icon service cards in a row: "Contact the office" / "See the budget" / "Share this site". Sits directly above the main footer. Provides a consistent helpful close to every page.

#### Footer
Full-width, `--navy` background. Two-column link grid. Address block. Authorisation statement. Social links (Facebook). Country/province note.

---

## PLACEHOLDER MEDIA

| ID | Described content | Used on |
|---|---|---|
| `IMG-NI-01` | Wide aerial/elevated view of Kavieng harbour — turquoise water, reef, town, coconut palms | Homepage hero slide 1, province page |
| `IMG-NI-02` | Coastal village — houses along beach, outrigger canoe, calm water | Homepage hero slide 2, province page |
| `IMG-NI-03` | Portrait-style photo of man in suit — Governor portrait placeholder | About page, nav, campaign page, press usage |
| `IMG-NI-04` | Fish market or wharf — catch being unloaded, people working | Budget page (fisheries), homepage card |
| `IMG-NI-05` | School building or classroom — children, teacher visible | Budget page (education), homepage card |
| `IMG-NI-06` | Road through coastal terrain — Boluminski Highway style, palms, sealed surface | Budget page (infrastructure), homepage card |

### Video

| ID | Described content | Notes |
|---|---|---|
| `VID-NI-01` | 12-second muted loop of Kavieng harbour at dawn — calm water, boats, light | Poster = `IMG-NI-01`. Click-to-play. ≤2.5MB H.264. Mobile: poster only. |

For Claude Design: solid-colour rectangles in `#1A5C6B` with white caption text centred inside.

---

## PAGE SPECIFICATIONS

---

### Page 1: HOME

**Route:** `/`

**Layout, top to bottom:**

1. **Utility bar**
2. **Navigation** (sticky)
3. **Hero carousel — 3 slides** (BSP pattern)

   Slide 1:
   - Background: `IMG-NI-01`, dark overlay. Desktop: `VID-NI-01` with poster.
   - Eyebrow: `GOVERNOR OF NEW IRELAND PROVINCE`
   - h1: `Continuing what was started. *Building* what comes next.`
   - Description: `A K500 million budget. A plan for every district. An account of every kina.`
   - CTA (`--red`): `See the budget breakdown →` (links to /budget/)

   Slide 2:
   - Background: `IMG-NI-02`, dark overlay
   - Eyebrow: `THE RECORD — FIRST FIVE MONTHS`
   - h1: `Ten agreements signed. *Three* already delivering.`
   - Description: `Every commitment documented, including the ones still in progress.`
   - CTA (`--navy`): `View the record →` (links to /record/)

   Slide 3:
   - Background: `IMG-NI-06`, dark overlay
   - Eyebrow: `2027 NATIONAL GENERAL ELECTION`
   - h1: `New Ireland deserves a Governor who *finishes* what he starts.`
   - Description: `Support Byron Chan for a full term.`
   - CTA (`--red`): `Learn more →` (links to /campaign/)

   Dot indicators below carousel. No autoplay.

4. **Quick-access strip** — four tiles:
   - The Record → `/record/`
   - The Budget → `/budget/`
   - Campaign → `/campaign/`
   - Contact → `/contact/`

5. **Summary statistics strip** (`--paper` background)
   - Three columns:
   - `K500m` / `2026 revised budget`
   - `21,481` / `Votes received`
   - `9` / `LLGs served`

6. **Feature split — "New Ireland Destiny"** (BSP "Banking made easy" pattern)
   - Photo (left on desktop): `IMG-NI-04`
   - Content (right):
     - h2: `A record budget for a province ready to grow`
     - Body: `Governor Chan's revised 2026 budget — themed "New Ireland Destiny" — is the largest in the province's history. K499.6 million allocated across infrastructure, health, education, agriculture and economic development. Funded by rising gold revenues and a hard-won royalty increase from 2 to 3 percent on the Lihir and Simberi mines.`
     - Links:
       - Full budget breakdown →
       - Infrastructure priorities →
       - Revenue and royalties →
     - All link to `/budget/`

7. **Record preview — horizontal content scroll** (BSP "Latest news" pattern)
   - Section heading: `The record so far` / right: `View all →` (links to /record/)
   - 5 cards in horizontal scroll, each showing one record entry:
     1. `IMG-NI-04` / `Revised 2026 budget — K499.6 million` / Jun 2026 / Delivered
     2. `IMG-NI-04` / `Fish cannery MOA — Kavieng` / May 2026 / Delivered
     3. `IMG-NI-06` / `Lihir & Simberi royalty increase` / Apr 2026 / Delivered
     4. `IMG-NI-05` / `K10m Kavieng Hospital upgrade` / Jun 2026 / Underway
     5. `IMG-NI-05` / `K10m teacher & nursing colleges` / Jun 2026 / Underway

8. **Quote block**
   - Quote: `"The Ombudsman and the Minister have given clear clarification — there is no more vacancy in the Office of the Governor. I have been duly elected and have fulfilled that vacancy."`
   - Attribution: `Byron Chan, press conference, 25 February 2026`

9. **Footer pre-strip** (BSP "We're here to help" pattern)
   - Three icon cards:
     - Icon: phone → `Contact the office` → link to /contact/
     - Icon: document → `See the full budget` → link to /budget/
     - Icon: share → `Share this site` → link to /campaign/#involved

10. **Footer**

---

### Page 2: THE RECORD & BUDGET

**Route:** `/budget/`
**Purpose:** The core page. Combines the mandate, the record table, and the full budget breakdown. They're too interconnected to separate at this stage — the budget funds the record entries.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / The Record & Budget`
4. Page heading:
   - h1: `The Record and the Budget`
   - Subtitle: `Everything funded, signed and delivered since taking office on 23 February 2026, alongside the K500 million budget that funds what comes next.`

5. **The mandate — context block**
   `Byron Chan won the New Ireland provincial seat on 10 February 2026 with 21,481 votes, surpassing the absolute majority requirement of 18,601. The by-election was called after the passing of Grand Chief Sir Julius Chan on 30 January 2025. Governor Chan was formally recognised by the Minister for Provincial and Local Level Government Affairs on 23 February 2026 and sworn into the Provincial Assembly on 26 February 2026.`

6. **Record table**
   - Section heading: `The record` / right: `10 entries`
   - Subtitle: `Every commitment since taking office. Including the ones not yet started.`

   | Project | Status |
   |---|---|
   | **Revised 2026 provincial budget — K499.6 million** · Passed in NI Assembly, Jun 2026 | ● Delivered |
   | **New Ireland Development Corporation board appointed** · Sworn in Kavieng, May 2026 | ● Delivered |
   | **Lihir & Simberi royalty increase — 2% to 3%** · Negotiated with mining companies | ● Delivered |
   | **MOA signed — fish cannery, Kavieng** · Private investor partnership | ● Delivered |
   | **MOA signed — balsa processing factory, Namatanai** · Private investor partnership | ● Delivered |
   | **K10 million — Kavieng Hospital facilities upgrade** · Allocated in revised budget | ● Underway |
   | **K10 million — teacher and nursing college funding** · Allocated in revised budget | ● Underway |
   | **K10 million — climate-resilient farming initiative** · MOA with Dept of Agriculture | ○ Not started |
   | **Technical committee — agriculture & fisheries** · Across all 10 LLGs | ● Underway |
   | **Development Academy of the Philippines — staff training** · Delegation visit Jun 2026 | ● Underway |

   Below table: `This record will grow. Every future entry will carry documentation. When there are enough projects, a filterable ward-by-ward ledger will replace this table.`

7. **Budget breakdown — "New Ireland Destiny"**
   - Section heading: `The budget — New Ireland Destiny`
   - Subtitle: `A record K499.6 million revised provincial budget for 2026.`

   **Context paragraph:**
   `The revised 2026 budget represents a K113.5 million increase from the initial K386 million budget. The increase is driven by a K105 million surge in National Government development grants and rising internal revenue from gold mining royalties following the successful negotiation to increase the provincial royalty rate from 2 to 3 percent on the Lihir and Simberi mines.`

   **Sector cards** — 2×2 grid on desktop, stacked on mobile. Each card: `--paper` bg, h3, allocation note, description paragraph.

   **Infrastructure**
   `The largest share of the budget. Priority projects: sealing and upgrading the West Coast Road (198km), upgrading Kavieng town roads (10km), Lihir ring road (27km), opening four economic corridor roads to Class 3 standard, and the New Hanover (Lavongai) Island ring road. Long-term planning for an upgraded international seaport and airport at Kavieng.`

   **Health & Social Services**
   `K10 million for Kavieng Hospital facilities. Free primary healthcare reinforced at aid posts across both districts. Subsidised education maintained. Increased funding for rural health worker housing and medical supply chains to the outer islands.`

   **Education**
   `K10 million for teacher and nursing college development. New Ireland has 366 elementary schools and 156 primary schools. Budget maintains subsidised education and increases school infrastructure funding for outer-island LLGs.`

   **Agriculture, Fisheries & Economic Development**
   - Photo: `IMG-NI-04`. Caption: `Fish market scene — placeholder image`
   - `Agriculture and fisheries remain the backbone of the rural economy. MOAs signed for a fish cannery in Kavieng and a balsa processing factory in Namatanai. K10 million climate-resilient farming initiative agreed with the Department of Agriculture and Livestock. The New Ireland Development Corporation board has been appointed to drive investment, with active projects including the proposed Malagan International Hotel, the Arrow Trading retail complex, and a joint-venture fishing project.`

8. **Revenue panel** (`--paper` background)
   - h3: `Where the money comes from`
   - `A significant share of New Ireland's internal revenue comes from gold mining royalties. The provincial government successfully negotiated an increase from 2 to 3 percent on the Lihir and Simberi mines. Combined with rising global gold prices, this has substantially strengthened the province's fiscal position and reduced dependence on national government transfers.`

9. Footer pre-strip + Footer

---

### Page 3: ABOUT THE GOVERNOR

**Route:** `/about/`

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / About`
4. **Portrait and intro — feature split** (BSP pattern: photo left, content right)
   - Photo: `IMG-NI-03` portrait
   - h1: `Hon. James Byron Chan, MP`
   - Subtitle: `Governor of New Ireland Province · People's Progress Party`
   - Born: 13 June 1969 (age 57)

   **Intro:**
   `Byron Chan is the Governor of New Ireland Province, elected in a by-election on 10 February 2026. He is the son of the late Grand Chief Sir Julius Chan, a two-time Prime Minister of Papua New Guinea, one of the nation's founding fathers, and Governor of New Ireland from 2007 until his passing in January 2025. Byron carries chiefly status from his mother's clan, connecting him to New Ireland's traditional leadership alongside his political role.`

5. **Parliamentary career**
   - h2: `Parliamentary career`
   - `He served as Member for Namatanai Open from 2002 to 2017 — three consecutive terms, representing the same seat his father held from 1968 to 1997. During that time he served as Minister for Mining in the government of Prime Minister Peter O'Neill, where he oversaw the regulatory framework for Papua New Guinea's mining sector and proposed reforms to the Mining Act to strengthen national control over resource extraction.`

   `He was defeated at the 2017 election by Walter Schnaubelt. In the intervening years he served as a director of Ok Tedi Mining Limited before resigning in January 2022 to contest the general election. He did not win a seat in 2022 but remained active in People's Progress Party affairs.`

   `His 2026 campaign for the provincial seat was endorsed by both PPP and Pangu Pati. It resonated with the issues Sir Julius championed — provincial autonomy, education and economic self-sufficiency.`

6. **The legacy** — feature split (photo right, content left)
   - Photo: `IMG-NI-01` (Kavieng harbour — represents the province)
   - h2: `The legacy`
   - `Sir Julius Chan's face now appears on Papua New Guinea's K100 banknote — a recognition that Governor Chan acknowledged in his maiden parliamentary speech as an honour to the founding generation. The "New Ireland Destiny" theme of the 2026 budget directly extends the development vision Sir Julius pursued across nearly two decades as Governor.`

   `The continuity is deliberate. This website exists to show what that continuity produces — in specific projects, accountable figures, and a public budget — as the term progresses.`

7. **Quote block**
   - Quote: `"I officially thank Prime Minister James Marape for the foresight and vision by putting politics aside and putting the face of Grand Chief Sir Julius Chan on the K100 note."`
   - Attribution: `Byron Chan, maiden speech in Parliament, 14 March 2026`

8. **People's Progress Party**
   - h2: `People's Progress Party`
   - `Byron Chan is a member of the People's Progress Party (PPP), one of Papua New Guinea's oldest political parties. PPP was founded by Sir Julius Chan and has been a significant force in New Ireland politics since the pre-independence era. The party's platform centres on provincial autonomy, economic development, infrastructure investment and equitable resource-revenue distribution.`

9. Footer pre-strip + Footer

---

### Page 4: NEW IRELAND PROVINCE

**Route:** `/province/`

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / New Ireland Province`
4. h1: `New Ireland Province`
   - Subtitle: `Two districts, nine local-level governments, approximately 194,000 people.`

5. **Hero photo:** `IMG-NI-02` full width. Caption: `Coastal village, New Ireland Province — placeholder image`

6. **Overview**
   `New Ireland Province stretches approximately 350 kilometres from Kavieng in the north to beyond Namatanai in the south. The provincial capital is Kavieng. The province includes the main island and several outer island groups: the Tabar Group, the Lihir Group (home to one of the world's largest gold mines), the Tanga Islands, the Feni Islands, New Hanover (Lavongai), the Murat (St Matthias) Group, and Musau. Over 20 languages are spoken, with Tigak, Nalik and Patpatar among the most common. The Boluminski Highway runs 264 kilometres along the east coast from Kavieng to Namatanai.`

7. **District and LLG table**

   | District | LLG | Headquarters | Population (2011) |
   |---|---|---|---|
   | **Kavieng** | Kavieng Urban | Kavieng | 16,725 |
   | | Tikana Rural | Kono | ~18,000 |
   | | Lavongai Rural | Lavongai | ~22,000 |
   | | Murat Rural | Mussau | ~8,000 |
   | **Namatanai** | Sentral Niu Ailan Rural | Konos | 29,932 |
   | | Namatanai Rural | Namatanai | 20,003 |
   | | Matalai Rural | Matalai | 12,393 |
   | | Konoagil Rural | Konoagil | ~12,000 |
   | | Nimamar Rural (Lihir) | Lihir | ~18,000 |

   Note: `Population figures from the 2011 National Census. Approximate figures marked ~.`

8. **Key facts panel** (`--paper`)
   - Provincial capital: Kavieng
   - Districts: 2 (Kavieng, Namatanai)
   - LLGs: 9
   - Population: ~194,000
   - Area: ~9,557 km²
   - Industries: Gold mining (Lihir, Simberi), fisheries, copra, cocoa, balsa, tourism
   - Access: Kavieng Airport, Kavieng harbour, Boluminski Highway
   - Member for Kavieng Open: Hon. Ian Ling-Stuckey MP (Treasurer of PNG)
   - Member for Namatanai Open: Hon. Walter Schnaubelt MP

9. **Malagan culture note**
   - h2: `Malagan`
   - `New Ireland is the birthplace of Malagan culture, one of Papua New Guinea's most distinctive artistic and spiritual traditions. Malagan refers to an intricate system of carvings, masks and ceremonial rites used to honour the dead and preserve ancestral identity. These elaborate wooden carvings are created by skilled local artisans and displayed during funerary ceremonies that can take months or years to prepare.`

10. Footer pre-strip + Footer

---

### Page 5: CAMPAIGN

**Route:** `/campaign/`

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Campaign`
4. h1: `Support Byron Chan for New Ireland`
   - Subtitle: `2027 National General Election · People's Progress Party`

5. **The ask — personal statement** (`--paper` bg, red left border)
   - `IMG-NI-03` portrait left (desktop), above on mobile
   - Body:
     `My father served this province for 18 years as Governor, and before that as its representative for nearly three decades. When he passed, the people of New Ireland elected me to continue that work. I did not take that trust lightly. In five months, we have delivered a record K500 million budget, secured a royalty increase from the Lihir and Simberi gold mines, signed agreements for a fish cannery and a balsa factory, and appointed a new Development Corporation board.`

     `I am asking for your vote in 2027 to continue this work for a full term. The budget is passed. The agreements are signed. The projects are funded. What they need now is time, oversight and a Governor who will see them through. Every kina of the budget is on this website. Every project will be added as it progresses. I will be judged on what gets built, not on what gets promised.`

     `If you believe that New Ireland's future should be built on what Sir Julius started — autonomy, education, economic self-sufficiency — I ask for your support.`

   - Signature: `Hon. Byron Chan MP, Governor of New Ireland Province`
   - CTA (`--red`): `See the full record →` (links to /budget/)

6. **Endorsements**
   - Section heading: `Endorsements`
   - Four endorsement cards:
     - **[Name placeholder]**, LLG President, Kavieng — *"The Governor delivered the biggest budget in this province's history in his first five months."*
     - **[Name placeholder]**, Ward Councillor, Sentral Niu Ailan Rural LLG — *"The fish cannery agreement means jobs for our young people."*
     - **[Name placeholder]**, Community leader, Lihir — *"The royalty increase from 2 to 3 percent was something we had been asking for."*
     - **[Name placeholder]**, Women's representative, Namatanai — *"Free primary healthcare and subsidised education — these matter to families."*
   - Note: `[PLACEHOLDER: Replace with real names and statements. Do not publish fabricated endorsements.]`

7. **Upcoming events**
   - Section heading: `Campaign events` / right: `2026–2027`

   | Date | Location | Event |
   |---|---|---|
   | 9 Aug 2026 | Kavieng Town | Governor's community address |
   | 23 Aug 2026 | Namatanai | District rally and budget briefing |
   | 7 Sep 2026 | Lihir | Community consultation — mining royalties |
   | 20 Sep 2026 | Lavongai (New Hanover) | Island development forum |
   | TBC Oct 2026 | Kavieng | PPP New Ireland campaign launch |

   Note: `Dates subject to change. Check this page or Facebook for updates.`

8. **Get involved — three icon service cards** (BSP "We're here to help" pattern)

   Card 1: icon attend → **Attend an event**
   `Come to a rally or community meeting. All events are open to the public.`
   Link: `See upcoming events ↑`

   Card 2: icon volunteer → **Volunteer**
   `Ward-level campaign teams need help with coordination, transport and outreach.`
   Link: `Contact the office →`

   Card 3: icon share → **Share this site**
   `The budget and the record are all here. Share the link with your community.`
   Share URL: `byronchan.com.pg`
   Buttons: `Share on Facebook` / `Share on WhatsApp` (standard share-intent URLs, no third-party scripts)

9. **QR code poster download**
   - `--paper` panel
   - `Download a printable QR code poster for display at ward offices, schools and community buildings. The QR code links to this website.`
   - Download button: `Download poster (A3 PDF)`
   - Note: `[PLACEHOLDER: Generate QR code pointing to byronchan.com.pg]`

10. Footer pre-strip + Footer

---

### Page 6: CONTACT

**Route:** `/contact/`

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Contact`
4. h1: `Contact the Governor's office`
   - Subtitle: `The provincial office in Kavieng is open weekdays. The parliamentary office operates during sitting weeks.`

5. **Two-column layout:**

   **Provincial office**
   - h2: `Governor's Office — Kavieng`
   - Address: `New Ireland Provincial Government Headquarters, Kavieng, New Ireland Province`
   - Phone: `+675 984 XXXX` (placeholder)
   - Hours: `Monday to Friday, 8:00am – 4:00pm`
   - Note: `Walk-in enquiries welcome. For budget or project enquiries, contact the Provincial Administrator's office.`

   **Parliamentary office**
   - h2: `Parliament Office — Waigani`
   - Address: `National Parliament, Parliament House, Waigani, NCD`
   - Hours: `During sitting weeks only`

6. **Other channels**
   - Facebook: `facebook.com/byronchangovernor` (placeholder)
   - Email: `governor@newireland.gov.pg` (placeholder)

7. **Media enquiries**
   - `For interview requests, approved photographs or press enquiries, email the Governor's office. Response time: within 48 hours.`

8. Footer pre-strip + Footer

---

### Page 7: AUTHORISATION & PRIVACY

**Route:** `/authorisation/`

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Authorisation & Privacy`
4. h1: `Authorisation and privacy`

5. **Authorisation**
   `This website is authorised by [AGENT NAME], [AGENT ADDRESS], for and on behalf of Hon. Byron Chan MP, Governor of New Ireland Province.`
   `[PLACEHOLDER: Review and update to comply with current PNG Electoral Commission requirements before publishing.]`

6. **Privacy**
   `This website does not use cookies, does not serve advertisements, and does not track visitors using third-party analytics. Basic anonymised traffic statistics are collected via Vercel Analytics, which does not use cookies or collect personally identifiable information.`
   `For questions about how your information is handled, contact the Governor's office at governor@newireland.gov.pg.`

7. Footer

---

## BUILD NOTES FOR CLAUDE CODE

### Framework & deployment
- **Astro** with static output (`output: 'static'`)
- Deploy to **Vercel** via GitHub integration
- No API routes in MVP

### Performance constraints
- Total first-load payload: ≤ 250KB
- JS: IntersectionObserver for sticky-nav shadow (~20 lines), CSS scroll-snap for carousels (no JS). That's it.
- Images: AVIF + WebP + JPEG fallback, build-time processing, 100KB cap per image
- Fonts: Public Sans self-hosted WOFF2 subset, ≤ 25KB
- No third-party requests on first paint

### Content structure
```
src/
  pages/
    index.astro              → Home
    budget.astro             → Record & Budget
    about.astro              → About the Governor
    province.astro           → New Ireland Province
    campaign.astro           → Campaign
    contact.astro            → Contact
    authorisation.astro      → Authorisation & Privacy
  components/
    UtilityBar.astro
    Nav.astro                → Sticky, with BSP-style dropdown panels
    NavDropdown.astro        → Dropdown panel component
    MobileMenu.astro         → Full-screen mobile overlay
    Footer.astro
    FooterPreStrip.astro     → "We're here to help" pattern
    Hero.astro               → Single hero slide
    HeroCarousel.astro       → Multi-slide CSS scroll-snap carousel
    QuickAccess.astro        → Icon strip below hero
    SectionHead.astro
    FeatureSplit.astro       → Photo + content two-column
    HorizontalScroll.astro   → Card scroll strip
    RecordTable.astro
    StatusDot.astro
    BudgetCard.astro
    EndorsementCard.astro
    EventsTable.astro
    IconServiceCard.astro    → "We're here to help" card
    QuoteBlock.astro
    Button.astro
    Breadcrumb.astro
    ProvinceFacts.astro
    ContactBlock.astro
  layouts/
    BaseLayout.astro
    PageLayout.astro
  styles/
    global.css
  assets/
    images/                  → 6 placeholder SVGs
    video/                   → 1 poster frame
```

### Meta tags (per page)
- `<title>` — "[Page] — Hon. Byron Chan MP, Governor of New Ireland"
- `<meta name="description">` — unique per page, under 155 chars
- OG tags: title, description, image (`IMG-NI-01` default), url
- `<link rel="canonical" href="https://byronchan.com.pg/[path]/">`
- `<html lang="en">`

### Accessibility
- All images: descriptive alt text
- Keyboard focus: 2px `--navy` outline
- `prefers-reduced-motion`: disable smooth scroll, transitions
- Contrast ≥ 4.5:1
- Skip-to-content link
- Carousel: keyboard-navigable, aria-labels on dots

---

*End of specification. Content drawn from publicly reported sources (NBC PNG, EMTV, The National, Devpolicy, Wikipedia) supplemented with fabricated details where public information is unavailable. Verify all content with the Governor's office before publishing.*
