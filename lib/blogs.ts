export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export interface Blog {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
  content: BlogBlock[];
}

export const blogs: Blog[] = [
  {
    id: 'art-1',
    slug: 'circle-rates-110024-defence-colony-lajpat-nagar',
    title: 'Circle Rates in 110024: What Defence Colony and Lajpat Nagar Buyers Actually Pay',
    category: 'Market Trends',
    date: 'August 12, 2026',
    image: '/110024-images/Defence%20Colony/001.jpeg',
    excerpt:
      'Defence Colony sits in Category B at Rs 2.46 lakh per sq m while Lajpat Nagar sits in Category C at Rs 1.60 lakh. Here is how Delhi\u2019s circle-rate system really works — and what it adds to your stamp-duty bill.',
    readTime: '9 min read',
    content: [
      {
        type: 'p',
        text: 'Every property deal in Delhi has two prices: the price you negotiate with the seller, and the price the government recognises. The second one is the circle rate — the minimum per-square-metre value the Delhi government notifies for each locality. Stamp duty and registration charges are calculated on the actual sale price or the circle-rate value, whichever is higher. In a pincode like 110024, where a single street can separate two different rate categories, understanding this system can change your transaction math by lakhs of rupees.',
      },
      { type: 'h2', text: 'How Delhi\u2019s A-to-H system works' },
      {
        type: 'p',
        text: 'Delhi divides its localities into eight categories, A through H, for circle-rate purposes. Category A covers the most premium addresses with land valued at Rs 7.74 lakh per sq m, while Category H covers outer areas at Rs 23,280 per sq m. For each category the government notifies two numbers: the minimum land rate and the construction cost per sq m for residential (and commercial) structures. Your stamp duty is computed on the combined value — land plus construction — or your deal price, whichever is higher.',
      },
      { type: 'h2', text: 'Where 110024 sits in the table' },
      {
        type: 'p',
        text: 'This is the part most buyers in our pincode get wrong: 110024 is not one circle-rate zone. Defence Colony is classified in Category B, with land at Rs 2,46,000 per sq m and residential construction at Rs 17,400 per sq m. Lajpat Nagar I, II, III and IV — along with neighbours like Amar Colony, Dayanand Colony and Vikram Vihar — fall in Category C, with land at Rs 1,60,000 per sq m and construction at Rs 13,920 per sq m. A 200 sq yd plot in Defence Colony therefore carries a materially higher government valuation than the same-sized plot two kilometres away in Lajpat Nagar, even before a single rupee of negotiation.',
      },
      {
        type: 'list',
        items: [
          'Category B (Defence Colony): land Rs 2,46,000/sq m + construction Rs 17,400/sq m',
          'Category C (Lajpat Nagar, Amar Colony, Dayanand Colony, Vikram Vihar): land Rs 1,60,000/sq m + construction Rs 13,920/sq m',
          'Flats are valued on a separate slab: DDA/society flats and private builder flats have per-sqm rates by size band (up to 30 sq m, 30–50, 50–100, above 100), with multiplying factors of 1.1 to 1.25 for private colonies',
        ],
      },
      { type: 'h2', text: 'What this means for your stamp-duty bill' },
      {
        type: 'p',
        text: 'Delhi\u2019s stamp duty is 6% for male buyers, 4% for female buyers and 5% for joint ownership, plus a flat 1% registration charge for everyone. Because duty applies to the higher of deal price and circle-rate value, buying below circle rate is impossible on paper — you pay duty on the circle value regardless. On a Category B property where the circle value runs into crores, registering in a woman\u2019s name (4% vs 6%) can legitimately save several lakhs. Families in 110024 routinely use this concession, and it is one of the first things we calculate for every buyer who walks in.',
      },
      { type: 'h2', text: 'Rates frozen since 2014 — and a review on the table' },
      {
        type: 'p',
        text: 'Here is a fact that surprises most people: Delhi\u2019s circle rates were last notified on 20 September 2014 and remain in force today. In June 2025 the Delhi government announced a review committee, with reports suggesting a possible new A+ category for ultra-premium Lutyens\u2019 Delhi and hikes of up to 35% in some categories — but no revised notification has been issued yet. Until it is, the 2014 table governs every registration in 110024. If a revision lands, Category B and C valuations — and every stamp-duty calculation attached to them — will move with it.',
      },
      {
        type: 'quote',
        text: 'You cannot negotiate with the circle rate. You can only plan around it — and planning starts with knowing exactly which category your street falls in.',
      },
      { type: 'h2', text: 'How we use this for our clients' },
      {
        type: 'p',
        text: 'Before any deal in 110024, we compute the circle-rate value of the exact property — plot area times the category land rate, plus construction value by age and type — and compare it with the negotiated price. That single sheet tells you your real stamp-duty outflow, whether the deal price leaves headroom, and whose name should go on the sale deed. It takes an hour and saves surprises worth lakhs at the sub-registrar\u2019s office. If you are buying or selling in Lajpat Nagar, Defence Colony or anywhere in 110024, get this calculation done before you tokenise — not after.',
      },
    ],
  },
  {
    id: 'art-2',
    slug: 'lajpat-nagar-history-partition-to-present',
    title: 'Lajpat Nagar at 75: From Partition Refugee Colony to South Delhi\u2019s Commercial Heart',
    category: 'Locality Guide',
    date: 'July 28, 2026',
    image: '/110024-images/Lajpat%20Nagar%203/001.jpeg',
    excerpt:
      'Built in 1951 on Zamrudpur village land for Partition refugees, named after Lala Lajpat Rai — how 100 sq yd barracks became one of South Delhi\u2019s most expensive postcodes.',
    readTime: '10 min read',
    content: [
      {
        type: 'p',
        text: 'Walk through Lajpat Nagar today — past the Central Market crowds, the Defence Colony flyover eateries, the metro interchange — and it is hard to believe this was farmland seventy-five years ago. Established in 1951 as a refugee rehabilitation colony, Lajpat Nagar was built for Hindus and Sikhs who arrived from newly formed Pakistan and had been living in camps at Purana Qila. The government acquired agricultural land, including that of Zamrudpur village, and laid out plots of 100 and 125 sq yards (with bigger plots in Lajpat Nagar III) as single-storey barrack-like houses with asbestos roofs. The colony was named after Lala Lajpat Rai, the freedom fighter — one of several post-Partition settlements, alongside Patel Nagar and Rajinder Nagar, named after heroes of the national movement.',
      },
      { type: 'h2', text: 'The refugee decades' },
      {
        type: 'p',
        text: 'The original allottees were largely Saraiki and Sindhi families, and their descendants still form a large part of the population. One pocket of Lajpat Nagar IV — Dayanand Colony — was named after Maharishi Dayanand Saraswati in 1957. In the early 1960s residents began renovating, and by the mid-1970s owners were adding rooms and floors to let out on rent. Lajpat Nagar kept absorbing new waves of the displaced: Afghan refugees after 1979, Kashmiri families in recent decades, each layer adding to the colony\u2019s famously mixed,商贸 character that estate agents now politely call \u201ccosmopolitan\u201d.',
      },
      { type: 'h2', text: '1974: the year everything changed' },
      {
        type: 'p',
        text: 'Ask any old resident when Lajpat Nagar turned a corner and you will hear one answer: 1974, when Nehru Place came up as a commercial district centre. Thousands of office workers needed homes nearby, rental income transformed residents\u2019 finances, and owners began expanding — first a room, then entire floors. Two to three bedrooms that fetched Rs 1,200–1,500 a month then were serious money. The 1980s brought the builder era: owners handed plots to builders who constructed three floors plus a basement, keeping the ground floor plus Rs 10–12 lakh while the builder sold the rest. That collaboration model is the direct ancestor of today\u2019s builder-floor market.',
      },
      { type: 'h2', text: 'Defence Colony: the planned neighbour' },
      {
        type: 'p',
        text: 'Right next door, Defence Colony tells a different origin story. Appearing on the map by 1956, it was developed for defence and army personnel who had opted for India — wide roads, plotted discipline, and an orderliness that Lajpat Nagar\u2019s organic growth never had. That planned DNA is exactly why it commands Category B circle rates and ultra-premium resale values today, while Lajpat Nagar\u2019s mixed-use energy makes it South Delhi\u2019s great commercial-residential hybrid.',
      },
      { type: 'h2', text: 'Connectivity that compounds value' },
      {
        type: 'list',
        items: [
          'Lajpat Nagar metro station: interchange of the Violet Line (opened 2010) and Pink Line, plus Lajpat Nagar railway station on the suburban line',
          'Ring Road and the Defence Colony–Lajpat Nagar flyover with the 2014 Jangpura underpass link',
          'Central Market — one of South Delhi\u2019s oldest organised retail hubs — plus the 3C\u2019s mall and Amar Colony market belt',
          'Nehru Place, Moolchand and Kailash Colony within minutes, keeping rental demand permanently deep',
        ],
      },
      {
        type: 'quote',
        text: 'Colonies with a story hold value differently. Lajpat Nagar\u2019s story — refuge, enterprise, reinvention — is priced into every square yard.',
      },
      { type: 'h2', text: 'What this history means for buyers today' },
      {
        type: 'p',
        text: 'Three practical takeaways. First, title chains here run 70+ years deep — verify the full chain from the original allotment, including any collaboration agreements from the 1980s builder wave. Second, construction quality varies enormously by era: a 1980s builder floor and a post-2022 stilt-plus-four rebuild are different assets wearing the same address. Third, mixed land use is the norm, not the exception — a \u201cresidential\u201d lane may legitimately host professional offices, which supports both values and rents. We have handled paperwork in these blocks for three generations; if you are buying into this history, bring someone who has read its documents before.',
      },
    ],
  },
  {
    id: 'art-3',
    slug: 'builder-floor-buying-guide-110024',
    title: 'Builder Floors in 110024: Stilt+4, FAR and What to Check Before You Buy',
    category: 'Buying Guide',
    date: 'June 15, 2026',
    image: '/110024-images/Amar%20Colony/001.jpeg',
    excerpt:
      'Delhi allows stilt parking plus four floors up to 17.5 metres. But FAR slabs, dwelling-unit caps and sanctioned plans decide what you can actually own — a practical checklist for 110024 buyers.',
    readTime: '9 min read',
    content: [
      {
        type: 'p',
        text: 'The builder floor is Delhi\u2019s signature housing product, and 110024 is its natural habitat. From Lajpat Nagar\u2019s 1980s collaborations to today\u2019s stilt-plus-four rebuilds in Defence Colony and Amar Colony, most transactions in this pincode are floors, not plots. Yet buyers routinely pay crores without checking the three numbers that define what they are actually buying: height, FAR and dwelling units. This guide explains each in plain language.',
      },
      { type: 'h2', text: 'Stilt plus four: the legal envelope' },
      {
        type: 'p',
        text: 'On a residential plot in South Delhi you can build stilt parking plus four floors, with basement, within a maximum height of 17.5 metres with stilt (15 metres without). This position was settled after the Supreme Court\u2019s August 2022 direction and MCD\u2019s November 2022 circular permitting 17.5-metre residential buildings with stilt. Stilt parking is mandatory for plots between 100 and 1,000 sq m — which covers virtually every serious colony plot in 110024 — and the stilt floor must keep 2.4 to 2.7 metres clear height for parking. When a dealer tells you a building is \u201cS+4 approved,\u201d this envelope is what they mean.',
      },
      { type: 'h2', text: 'FAR: the number that sizes your floor' },
      {
        type: 'p',
        text: 'Floor Area Ratio, set by Master Plan Delhi 2021, decides how much covered area a plot can yield: FAR 350 for plots up to 100 sq m, 300 for 100–250 sq m, 225 for 250–750 sq m, and 200 above that — multiplied by plot area. The classic 110024 plot of 200–250 sq yards falls in the 300-FAR slab. Crucially, balconies, the stilt floor, basement (for permitted uses), lift shafts and the roof mumty sit outside the FAR count — which is why a well-designed floor feels larger than its FAR number, and why two \u201csame size\u201d floors can differ wildly in usable space.',
      },
      {
        type: 'list',
        items: [
          '100–250 sq m plots (most of 110024): FAR 300, ground coverage 75%, up to 4 dwelling units',
          '250–750 sq m plots: FAR 225, ground coverage 75%, up to 6 dwelling units',
          'A 300 sq yd plot builds less per yard than a 250 sq yd plot — always run the FAR before comparing per-yard prices',
          'FAR describes what can be approved; only a sanctioned MCD building plan approves anything',
        ],
      },
      { type: 'h2', text: 'Dwelling units: the hidden cap' },
      {
        type: 'p',
        text: 'Here is the detail that traps buyers: it is the dwelling-unit cap, not FAR, that limits how many separately saleable floors a building can have — four units on the 100–250 sq m slab that covers most of 110024. A building advertising five independent floors on a 200 sq yd plot should trigger immediate verification of the sanctioned plan. Additional units where permitted also attract infrastructure-augmentation levies.',
      },
      { type: 'h2', text: 'Your pre-purchase checklist' },
      {
        type: 'list',
        items: [
          'Sanctioned building plan from MCD — match floors, stilt, basement and mumty against what stands on site',
          'Completion-cum-occupancy certificate for new construction; without it, registration and loan both get harder',
          'Title chain from original allotment, including any 1980s–90s collaboration agreement and its registered deed',
          'Floor-wise ownership clarity: registered sale deed for your specific floor with undivided land share defined',
          'Society/RWA maintenance arrangement and parking allocation in writing — stilt parking disputes are the commonest post-purchase fight in 110024',
          'Circle-rate valuation vs deal price, and stamp duty computed for the actual buyer combination (male 6%, female 4%, joint 5%, plus 1% registration)',
        ],
      },
      {
        type: 'quote',
        text: 'In 110024 you are never just buying a floor. You are buying a share of a plot\u2019s FAR, its sanctioned plan, and its seventy-year paper trail. Verify all three.',
      },
      {
        type: 'p',
        text: 'New construction in Lajpat Nagar, Defence Colony, Amar Colony and Dayanand Colony moves fast, and the best floors rarely reach public listings. If you want us to vet a specific floor — plan, title, valuation — before you tokenise, that is exactly what our buying service exists for.',
      },
    ],
  },
];
