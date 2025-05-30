export interface Event {
  id: number;
  category: string;
  title: string;
  date: string;
  location: string;
  image: string;
  path: string;
  text: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    category: "Arts",
    title: "Lom Plai Traditional and Cultural Festival",
    date: "Apr 01 - May 31, 2025",
    location: "Kutai Kartanegara, East Kalimantan",
    image: "/images/events/lompai.png",
    path: "/events/lom-plai-festival-2025",
    text: "Experience the rich cultural heritage of East Kalimantan at the Lom Plai Traditional and Cultural Festival. This two-month celebration showcases the unique traditions of the Kutai people and other indigenous groups from the region. Visitors can witness captivating dance performances, traditional music concerts, and ancient ceremonies that have been preserved for generations.\n\nThe festival features the Erau ritual, a sacred ceremony that historically marked the coronation of Kutai sultans and now serves as a thanksgiving celebration. During this time, the spirits of ancestors are honored through complex rituals performed by cultural practitioners.\n\nArtisans from across Kalimantan display traditional crafts including intricate beadwork, wood carving, and textile weaving. Workshops offer hands-on experiences in these traditional art forms, allowing visitors to learn directly from master craftspeople.\n\nCulinary demonstrations highlight the unique flavors of East Kalimantan cuisine, with opportunities to taste local specialties like Kepiting Soka (soft-shell crab), Ayam Kampung Bakar (grilled free-range chicken), and various river fish preparations.\n\nThe Lom Plai Festival represents a meaningful cultural exchange that helps preserve the heritage of East Kalimantan while introducing these traditions to a broader audience.",
  },
  {
    id: 2,
    category: "Sports",
    title: "Mandalika Racing Series (1st Round)",
    date: "Apr 11 - 13, 2025",
    location: "Mandalika Circuit, Lombok, West Nusa Tenggara",
    image: "/images/events/mandalika.png",
    path: "/events/mandalika-racing-series-2025",
    text: "The adrenaline-pumping Mandalika Racing Series returns for its 2025 season, kicking off with an exciting first round at the world-class Mandalika International Street Circuit in Lombok. This premier motorsport event attracts top racers and enthusiasts from around the globe to Indonesia's premier racing venue.\n\nFeaturing multiple racing categories including superbikes, Asia Talent Cup, and national championships, the three-day event showcases the best of motorcycle racing against the stunning backdrop of Lombok's coastline. Spectators can enjoy high-speed action on the challenging 4.3km circuit that has been designed to test riders' skills and provide thrilling entertainment.\n\nBeyond the racetrack, visitors can explore the paddock area, participate in meet-and-greet sessions with racers, and enjoy exhibitions of the latest motorcycle technology and accessories. Entertainment zones offer activities for all ages, making this a family-friendly sporting weekend.\n\nThe Mandalika Racing Series promotes Indonesia's growing presence in international motorsports while boosting tourism in West Nusa Tenggara. Local food vendors and cultural performances add a distinctive Indonesian flavor to this world-class sporting event, creating a perfect blend of adrenaline and cultural experience for all attendees.",
  },
  {
    id: 3,
    category: "Music",
    title: "Dendang Piwang Music Festival",
    date: "Apr 13 - Oct 13, 2025",
    location: "Natuna Regency, Riau Islands",
    image: "/images/events/dendangpiwang.png",
    path: "/events/dendang-piwang-2025",
    text: "Discover the enchanting sounds of the Malay archipelago at the Dendang Piwang Music Festival, a six-month celebration of traditional and contemporary music held across the beautiful islands of Natuna. This unique long-format festival showcases performances every weekend, highlighting the rich musical heritage of Indonesia's northernmost region.\n\nDendang Piwang features traditional Malay orchestras, contemporary fusion bands, and solo performers who interpret ancient melodies for modern audiences. The event puts special emphasis on preserving the gambus (traditional lute) playing tradition and the distinctive vocal styles of the region.\n\nThroughout the festival period, various islands in the Natuna archipelago take turns hosting performances, allowing visitors to explore this remote and beautiful part of Indonesia while experiencing its unique cultural expressions. Each island adds its local musical traditions to the festival program, creating a diverse and comprehensive showcase of regional sounds.\n\nWorkshops on traditional instrument making, vocal techniques, and composition are offered to festival attendees, fostering cultural preservation through active participation. The festival also features cultural exchanges with musicians from neighboring Malaysia, Singapore, and Brunei, highlighting the shared cultural heritage of the Malay world.\n\nDendang Piwang represents a significant effort to document and celebrate the musical traditions of this strategically important but often overlooked part of Indonesia's cultural landscape.",
  },
  {
    id: 4,
    category: "Culinary",
    title: "Pasar Terapung Culinary Festival",
    date: "May 15 - 18, 2025",
    location: "Banjarmasin, South Kalimantan",
    image: "/images/events/pasarterapung.png",
    path: "/events/pasar-terapung-culinary-festival-2025",
    text: "The Pasar Terapung Culinary Festival transforms Banjarmasin's famous floating markets into a gastronomic paradise celebrating South Kalimantan's diverse food traditions. For four days, traditional wooden boats laden with local delicacies create a unique floating food fair on the Martapura River.\n\nVisitors can sample authentic Banjarese specialties prepared by local cooks, including Soto Banjar (aromatic chicken soup), Ketupat Kandangan (rice cakes with coconut sauce), various river fish preparations, and sweet treats like Bingka Barandam (steamed cassava cake). Each dish reflects the rich culinary heritage shaped by the region's rivers and wetlands.\n\nCulinary demonstrations by master cooks reveal the secrets behind traditional Banjarese cooking techniques and spice blends. The festival also includes cooking competitions where local talents compete to create innovative dishes using traditional ingredients.\n\nBeyond eating, visitors can join guided tours of the traditional floating markets, learn about sustainable fishing practices in the region, and participate in traditional food preservation workshops. Evening events feature cultural performances that highlight the connection between Banjarese food traditions and the broader cultural context.\n\nThe Pasar Terapung Culinary Festival celebrates South Kalimantan's unique food culture while supporting local food producers and preserving culinary traditions that are intrinsically connected to the region's river-based way of life.",
  },
  {
    id: 5,
    category: "Creative",
    title: "Makassar International Writers Festival",
    date: "Jun 10 - 15, 2025",
    location: "Fort Rotterdam, Makassar, South Sulawesi",
    image: "/images/events/MIWF.png",
    path: "/events/makassar-writers-festival-2025",
    text: "The Makassar International Writers Festival brings together authors, poets, screenwriters, and literary enthusiasts from across Indonesia and around the world. Set in the historic Fort Rotterdam, this six-day festival celebrates the written word through a diverse program of readings, discussions, workshops, and performances.\n\nThe 2025 edition focuses on the theme 'Maritime Narratives: Stories from Archipelagic Perspectives,' exploring how Indonesia's identity as a nation of islands shapes its literary traditions and contemporary writing. Special attention is given to the literature of eastern Indonesia and the revival of regional languages in modern creative expression.\n\nAttendees can participate in masterclasses on various writing forms, including fiction, poetry, screenwriting, and digital storytelling. Translation workshops bridge language divides, while special sessions focus on children's literature and young adult fiction, nurturing the next generation of readers and writers.\n\nThe festival's marketplace showcases independent publishers, bookstores, and literary magazines from across Indonesia, providing a platform for discovering diverse voices. Evening events feature poetry slams, musical performances, and dramatic readings that bring literary works to life.\n\nBy positioning Makassar as a center for literary arts, the festival honors the city's historical role as a crossroads of cultures while contributing to contemporary creative economies in eastern Indonesia.",
  },
  {
    id: 6,
    category: "Carnaval",
    title: "Solo Batik Carnival",
    date: "Jul 12 - 13, 2025",
    location: "Surakarta (Solo), Central Java",
    image: "/images/events/solobatik.png",
    path: "/events/solo-batik-carnival-2025",
    text: "The magnificent Solo Batik Carnival returns for its 2025 edition, transforming the streets of Surakarta into a spectacular runway celebrating Indonesia's batik heritage. This vibrant parade showcases elaborate costumes and theatrical performances that reimagine traditional batik patterns through contemporary design and creative expression.\n\nThe carnival features hundreds of participants wearing dramatic costumes created entirely from batik fabrics, with designs inspired by this year's theme: 'Legends of the Archipelago.' Each creation tells a story drawn from Indonesian mythology and folklore, bringing ancient narratives to life through wearable art.\n\nBeyond the main parade, the event includes exhibitions on batik-making processes, from traditional hand-drawn techniques to innovative modern applications. Workshops allow visitors to learn batik-making directly from master artisans from Solo, a city renowned as one of Indonesia's major batik production centers.\n\nFashion shows feature contemporary designers who incorporate batik into ready-to-wear collections, demonstrating how this traditional art form continues to evolve. The batik marketplace offers visitors the opportunity to purchase authentic batik products directly from producers, supporting the local creative economy.\n\nThe Solo Batik Carnival exemplifies how traditional cultural heritage can be preserved and celebrated through contemporary creative expression, ensuring that Indonesia's UNESCO-recognized batik traditions remain vibrant and relevant for new generations.",
  },
  {
    id: 7,
    category: "Mice",
    title: "Indonesia Maritime Expo & Conference",
    date: "Aug 20 - 23, 2025",
    location: "Jakarta Convention Center",
    image: "/images/events/maritim-expo.png",
    path: "/events/maritime-expo-2025",
    text: "The Indonesia Maritime Expo & Conference 2025 brings together government officials, industry leaders, and maritime experts to address the future of Indonesia as a global maritime axis. This premier MICE event showcases innovations in port infrastructure, shipping technology, marine conservation, and blue economy initiatives across the archipelago.\n\nThe four-day conference features keynote presentations from maritime ministers, naval authorities, and industry pioneers discussing strategies for sustainable maritime development. Panel discussions address critical topics including port digitalization, green shipping practices, coastal community development, and maritime security in the Indo-Pacific region.\n\nThe exhibition hall hosts over 300 exhibitors displaying the latest maritime technologies, from advanced vessel design to port management systems. Special pavilions highlight Indonesia's shipbuilding capabilities, marine tourism potential, and fisheries management practices, providing comprehensive insight into all aspects of the maritime sector.\n\nBusiness matchmaking sessions facilitate connections between international investors and local maritime enterprises, while technical workshops offer specialized knowledge on regulatory compliance, maritime finance, and environmental management in marine operations.\n\nAs the world's largest archipelagic nation, Indonesia's Maritime Expo positions the country as a key player in global maritime affairs while addressing the unique challenges and opportunities presented by its 17,000 islands and vast territorial waters.",
  },
  {
    id: 8,
    category: "Arts",
    title: "Bali Arts Festival",
    date: "Jun 14 - Jul 12, 2025",
    location: "Denpasar Art Centre, Bali",
    image: "/images/events/bali-arts.png",
    path: "/events/bali-arts-festival-2025",
    text: "The 47th Bali Arts Festival (Pesta Kesenian Bali) returns in 2025 for a month-long celebration of Balinese arts and culture. This prestigious event opens with a grand parade through Denpasar before settling into the Taman Budaya (Art Centre) for daily performances, exhibitions, and cultural activities.\n\nThe festival showcases traditional Balinese performing arts including legong, barong, kecak, and wayang performances by the island's best dance troupes and gamelan orchestras. Modern interpretations of classic forms demonstrate how Balinese arts continue to evolve while maintaining their spiritual and cultural essence.\n\nVisual arts exhibitions display traditional paintings from the Kamasan, Ubud, Batuan, and contemporary schools, alongside sculpture, photography, and installation art. Craftspeople demonstrate ancient techniques in woodcarving, silver work, textiles, and offerings creation, preserving skills passed down through generations.\n\nLiterary events feature readings of ancient lontar manuscripts, contemporary poetry in Balinese and Indonesian languages, and discussions on the role of literature in preserving cultural narratives. Food pavilions offer traditional Balinese culinary specialties, with demonstrations of ceremonial food preparation.\n\nAs Bali's largest cultural event, the festival serves as both a tourist attraction and a vital platform for cultural preservation, providing Balinese artists with opportunities to showcase their work while ensuring ancient traditions remain vibrant and meaningful in contemporary society.",
  },
  {
    id: 9,
    category: "Music",
    title: "Prambanan Jazz Festival",
    date: "Jul 18 - 20, 2025",
    location: "Prambanan Temple, Yogyakarta",
    image: "/images/events/prambanan-jazz.png",
    path: "/events/prambanan-jazz-2025",
    text: "The Prambanan Jazz Festival returns in 2025, offering a unique musical experience against the breathtaking backdrop of the 9th-century UNESCO World Heritage Prambanan Temple. This three-day event combines world-class jazz performances with the magical atmosphere of Java's most iconic Hindu temple complex.\n\nThe festival features three distinct stages: the main Prambanan Stage hosting international headliners, the Javanese Stage showcasing fusion performances that blend jazz with traditional gamelan music, and the Special Stage for emerging Indonesian jazz talents. This year's lineup includes acclaimed jazz artists from America, Europe, and Asia alongside Indonesia's finest musicians.\n\nBeyond concerts, the festival includes jazz workshops led by renowned performers, allowing music students and enthusiasts to learn from masters of the genre. Discussion panels explore the cross-cultural influences in contemporary Indonesian jazz and the role of historical settings in creating meaningful musical experiences.\n\nCulinary areas offer a selection of Yogyakarta's famous dishes alongside international cuisine, while the marketplace showcases local handicrafts and musical instruments. Evening performances are particularly magical as the illuminated temple spires create a stunning backdrop for the music.\n\nThe Prambanan Jazz Festival exemplifies how Indonesia's historical monuments can be activated as living cultural spaces, creating connections between heritage conservation and contemporary artistic expression in ways that enhance both traditions.",
  },
  {
    id: 10,
    category: "Sports",
    title: "Tour de Flores",
    date: "Sep 05 - 10, 2025",
    location: "Flores Island, East Nusa Tenggara",
    image: "/images/events/tour-de-flores.png",
    path: "/events/tour-de-flores-2025",
    text: "The Tour de Flores 2025 challenges professional cyclists from around the world to conquer one of Indonesia's most scenic and demanding cycling routes. This six-day stage race traverses the spectacular island of Flores, testing athletes with mountainous terrain while showcasing the region's breathtaking landscapes and cultural diversity.\n\nCovering approximately 700 kilometers, the race route passes through multiple regencies of Flores, from the western port of Labuan Bajo near Komodo National Park to the eastern town of Maumere. Each stage presents unique challenges including steep volcanic climbs, coastal roads with stunning ocean views, and routes through traditional villages where local communities cheer on the riders.\n\nBeyond the racing action, the event promotes sustainable tourism in Eastern Indonesia, highlighting Flores as an adventure destination. Community engagement programs involve local schools and cycling clubs, building interest in the sport while educating about health benefits and environmental consciousness.\n\nThe tour creates a festival atmosphere in each host town, with cultural performances, local food markets, and cycling exhibitions for spectators. International media coverage brings global attention to this relatively unexplored region of Indonesia.\n\nAs one of Southeast Asia's premier cycling events, the Tour de Flores exemplifies how sports tourism can provide economic benefits to remote regions while promoting cultural exchange and healthy lifestyles.",
  },
  {
    id: 11,
    category: "Culinary",
    title: "Jakarta Culinary Feastival",
    date: "Oct 24 - 27, 2025",
    location: "Senayan City, Jakarta",
    image: "/images/events/jcf.png",
    path: "/events/jakarta-culinary-feastival-2025",
    text: "The Jakarta Culinary Feastival returns for its 2025 edition, transforming Senayan City into a gastronomic wonderland celebrating Indonesia's diverse food scene. This four-day event brings together top chefs, food producers, beverage specialists, and culinary enthusiasts for a comprehensive exploration of Indonesian and international cuisines.\n\nCulinary demonstrations by celebrity chefs showcase both traditional Indonesian cooking techniques and innovative fusion approaches that reflect Jakarta's cosmopolitan character. Special themed areas highlight regional cuisines from across the archipelago, from Aceh's aromatic curries to Papua's unique sago preparations.\n\nWorkshops offer hands-on experiences in various culinary arts, including traditional fermentation techniques, modern plating methods, coffee cupping, and artisanal chocolate making. The Producers Market connects visitors directly with small-batch food artisans, spice growers, and sustainable food producers from across Indonesia.\n\nEvening events include themed dinner experiences, cocktail competitions featuring local ingredients, and food film screenings. Discussion panels address important topics in Indonesia's food scene, including culinary heritage preservation, food sustainability, and the growing global influence of Indonesian cuisine.\n\nThe Jakarta Culinary Feastival celebrates food as both cultural heritage and creative expression, highlighting Indonesia's position as one of the world's most exciting culinary destinations while supporting the growth of its diverse food industry.",
  },
  {
    id: 12,
    category: "Creative",
    title: "Jogja International Heritage Walk",
    date: "Oct 31 - Nov 02, 2025",
    location: "Various Heritage Sites, Yogyakarta",
    image: "/images/events/JIHW.png",
    path: "/events/jogja-heritage-walk-2025",
    text: "The Jogja International Heritage Walk combines physical activity, cultural exploration, and creative documentation in a unique three-day event across Yogyakarta's historic landscapes. This walking festival attracts photography enthusiasts, urban sketchers, writers, and heritage advocates from Indonesia and abroad.\n\nParticipants follow curated routes connecting Yogyakarta's cultural landmarks, from the Kraton (Sultan's Palace) and Water Castle (Taman Sari) to historic neighborhoods, traditional markets, and sacred sites. Along these routes, creative workshops encourage participants to document their experiences through photography, sketching, creative writing, and digital storytelling.\n\nExpert guides provide historical context and cultural insights at each location, while local community members share personal stories that bring heritage sites to life. Special access is arranged to normally restricted areas, offering rare opportunities to document hidden aspects of Yogyakarta's cultural landscape.\n\nEvening exhibitions display works created during the day's walks, creating an evolving gallery of fresh perspectives on familiar landmarks. Discussion forums address the relationship between creative documentation and heritage preservation, examining how artistic practices can support conservation efforts.\n\nThe Jogja International Heritage Walk promotes slow tourism that deeply engages with local culture while fostering creative responses to heritage environments. By emphasizing thoughtful interaction with historic sites, the event encourages sustainable tourism practices that benefit both visitors and local communities.",
  },
  {
    id: 13,
    category: "Carnaval",
    title: "Tomohon International Flower Festival",
    date: "Aug 08 - 12, 2025",
    location: "Tomohon, North Sulawesi",
    image: "/images/events/TIFF.png",
    path: "/events/tomohon-flower-festival-2025",
    text: "The Tomohon International Flower Festival transforms the cool highland city of Tomohon into a spectacular display of floral artistry and cultural expression. This five-day festival showcases North Sulawesi's flower-growing industry through elaborate parades, exhibitions, and competitions that attract participants and visitors from across Indonesia and neighboring countries.\n\nThe highlight of the festival is the Grand Flower Parade, featuring dozens of massive floats adorned with hundreds of thousands of fresh blooms grown in the fertile volcanic soil surrounding Tomohon. Each float represents themes from Minahasan culture, Indonesian national identity, or environmental conservation, creating a moving gallery of floral art that winds through the city streets.\n\nBeyond the parade, the festival includes floral arrangement competitions judged by international experts, exhibitions of rare orchid species indigenous to Sulawesi, and flower planting ceremonies that contribute to urban beautification. Workshops teach traditional and contemporary flower arrangement techniques, while tours to local flower farms showcase sustainable cultivation practices.\n\nCultural performances highlight the rich traditions of the Minahasan people, known for their distinctive music, dance, and cuisine. The flower market offers visitors opportunities to purchase local blooms, seeds, and gardening accessories directly from producers.\n\nThe Tomohon International Flower Festival celebrates the natural beauty of North Sulawesi while providing economic opportunities for local flower growers and reinforcing the region's identity as Indonesia's 'City of Flowers.'",
  },
  
];
