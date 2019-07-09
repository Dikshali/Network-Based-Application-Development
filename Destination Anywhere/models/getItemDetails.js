var itemModel = require('./itemModel');

var item_list = [];

it1 = itemModel.itemInfo(1001, 'Sachsenhausen Memorial Tour', 'Sachsenhausen Memorial Tour', 'Germany', {
  desc: 'Head out of Berlin to explore the tragic side of the citys history at the Sachsenhausen Memorial, a former Nazi concentration camp.Learn about the lives of prisoners who were abused, see the training grounds of SS guards, and pay tribute to those lost during World War II.Meet your guide at Brandenburg Gate and catch the train to Oranienburg, once home to one of the largest concentration camps in the Third Reich. Follow your knowledgeable guide as you wander through the camps grounds, and learn how around 200,000 people were held captive, abused, and forced into slave labor during Hitlers rise to power. Listen as your guide shares stories about the camps brutality and torture, see sites where gas chambers were built, and learn about the mass executions that took place. Feel free to ask questions along the way, and spend time in the museum to get a deeper look at Sachsenhausens past.',
  duration: 2,
  cost: '$425'
}, 1);
it2 = itemModel.itemInfo(1002, 'Hitler\'s Germany: Berlin during the Third Reich & WWII Walking Tour', 'Hitler\'s Germany', 'Germany', {
  desc: 'In the wake of World War One Germany was on its knees. Economic chaos in the early 1920s and \'30s saw a massive increase in support for extremist parties. By 1933 Adolf Hitler\'s National Socialist party had taken power in Germany. In the following 12 years the Nazis would create a	system of terror, oppression, imprisonment, murder, and war that would bring death to millions of people worldwide in WWII. On this tour you\'ll cover not only the rise and fall of the Nazi party, but also the consequences of their actions. Starting from Hackescher Markt your guide will tell you the fate of Berlin\'s Jewish district, before taking you on a short train journey to what used to be the Nazi government district. There you\'ll explore the remains of Anhalter Bahnhof, once Europe\'s largest train station, used to send thousands of Jews to concentration camps. You\'ll then visit Heinrich Himmler\'s SS & Gestapo Headquarters and Herman Goring\'s Air Force ministry, before covering topics vital to understanding the Third Reich such as Joseph Goebbels\' propaganda and the \'T4\' euthanasia programme. Your tour will end at the Reichstag, where your guide will tell you about the final moments of WWII. From the Soviet assault on the parliament building in the Battle of Berlin, to the Fuhrer\'s suicide not even 1km away.',
  duration: 2,
  cost: '$425'
}, 2);
it3 = itemModel.itemInfo(1003, 'East Berlin: City of Shadow', 'East Berlin', 'Germany', {
  desc: 'Delve deep into the legacy of Communist-era Germany on this fascinating walking tour of East Berlin. Uncover dark and hidden history with an expert historian, who leads you to key sites such as the Brandenburg Gate, the Friedrichstrasse train station, and the Karl Marx Allee housing complex. Head to Pariser Platz to meet up with your guide, an actual historian with expertise in German history. Start your tour at the Brandenburg gate, the neoclassical monument where Ronald Regan famously implored Mikhail Gorbachev to \"tear down this wall!\" in 1987. Your next stop is the Friedrichstrasse railway station, an important border crossing between East and West Berlin. Step inside the office known as the Palace of Tears, in which separated families were forced to say their sad goodbyes. Continue your tour along the Berlin Wall, stopping at the memorial to see the famous Death Strip. Here, listen to your guide\'s stories of the East Berliners who perished in their attempt to escape. Afterward, discover a symbol of the East German government\'s intimidation and paranoia at Karl Marx Allee, a housing complex in which the Stasi secret police encouraged neighbors to spy on one another. Your final stop is Alexanderplatz, East Berlin\'s center of public life that became the setting for massive demonstrations against Communist rule. Learn how the protests contributed to the downfall of the East German regime, a fitting way to wrap up your illuminating tour.',
  duration: 2,
  cost: '$425'
}, 4);

it4 = itemModel.itemInfo(2001, 'Burj Khalifa - At the Top Observation Deck', 'Burj Khalifa', 'Dubai', {
  desc: 'Look out over the sparkling lights and desert landscapes of Dubai from the 124th floor of the tallest skyscraper on earth. Marvel at the engineering and construction of the elegant Burj Khalifa, a pillar of concrete, glass, and steel that rises up from the heart of downtown. Choose between a daytime, evening, or after-dark ticket and make your way to the Burj Khalifa to get a whole new perspective on the desert metropolis of Dubai. Step into a spacious elevator and wait for your ears to pop as you\'re whisked upward at a stomach-dropping speed of 32 feet (10 m) per second. Once you arrive at the 124th floor observation deck, expansive, bird\'s-eye views of the city through floor-to ceiling windows open up before you. Gaze down at the surrounding towers and skyscrapers, admire the luminous fountains and canals around the base of the building, and check out interactive multimedia displays that teach you about the city\'s landmarks and history. Special telescopes help you travel through time as you take in images of Dubai past and present, and from 1,496 feet (456 m) high, you really do feel like you\'re on top of the world. As you leave, be sure to stop to watch the fountain show, which erupts with lights, music, and dancing water features every 30 minutes.',
  duration: 2,
  cost: '$425'
}, 4);

it5 = itemModel.itemInfo(2002, 'Desert Safari at Al Maha Experience with BBQ Dinner', 'Desert Safari', 'Dubai', {
  desc: 'Embark on an exciting 4x4 safari and ride over the dunes at Dubai Desert Conservation Reserve (DDCR) is the UAE\'s first national park. Carefully planned rehabilitation over the years has resulted in a protected environment for the last of the desert wildernesses. With the rapid development of Dubai as a major business Centre in the Gulf, the Dubai Government has long recognized the need to preserve its unique and beautiful desert habitat, and the many threatened flora and fauna species within. This unique reserve was created for the protection of those endangered species and for the conservation of the natural desert habitat and heritage. See spectacular sunset in the desert and savour an Arabian dinner with cultural entertainment. After a welcome drink and dates at the desert camp, try some sand surfing, ride a camel, sit around a shisha water pipe, get a traditional henna tattoo and wear an Arabic outfit for an unforgettable picture. The grand finale comes in the form of a delicious 3-course Arabian feast accompanied by a captivating performance by a belly dancer. Dine on shawarma and falafel sandwiches to start, fill your plate at the barbecue buffet, and sip on soft drinks and tea. Listen to the melodies of local folk music and watch the whirling skirts of tanoura dancers under a moonlit sky as your Arabian night winds to a close.',
  duration: 2,
  cost: '$425'
}, 1);

it6 = itemModel.itemInfo(2003, 'Abu Dhabi Sheikh Zayed Mosque', 'Abu Dhabi', 'Dubai', {
  desc: 'One of the world\'s largest and most celebrated Mosques, the Grand Mosque of Sheikh Zayed is a wonderful Abu Dhabi attraction that lures people near and far. This tour is a great opportunity for those seeking to explore this amazing testimony of Islamic craftsmanship. Depart Dubai and journey to the Sheikh Zayed Grand Mosque in Abu Dhabi by modern air-conditioned vehicle. Relax in comfort on the 90-minute drive with your professional driver/guide (if option booked). On arrival, marvel at the 8th largest mosque in the world. Spread over 30 acres, the magnificent structure took more than a decade to build and now stands as a showcase for the United Arab Emirate\'s Islamic cultural heritage. Roam around the site, where up to 40,000 worshippers can be accommodated at any one time. Marvel at priceless features, such as the huge Swarovski crystal chandeliers, floral mosaics and artifacts of gold, silver and marble. Be amazed by the gigantic carpet in the main prayer hall. Measuring 60,570 square feet and weighing 35 tons, the carpet was made in Iran and is the result of the toil of thousands of carpet weavers over 2 years! Take stunning souvenir photos of the complex and its awe-inspiring architecture, and get a better appreciation of the vision of Sheikh Zayed bin Sultan Al Nahyan, the late president of the UAE and the mastermind behind the mosque. Depart Abu Dhabi and journey back to Dubai for drop off at your hotel or designated location.',
  duration: 2,
  cost: '$425'
}, 2);

it7 = itemModel.itemInfo(3001, 'Eiffel Tower Tour', 'Eiffel Tower Tour', 'France', {
  desc: 'Join your expert guide for a ride up the Eiffel Tower. Along the way you will hear stories, and fun facts about the Tower and surrounding landmarks! The history, the legends, the views!! It\'s all waiting for you at the world\'s most visited landmark, The Eiffel Tower. Arrive to the tower 30 minutes before your tour starts to give yourself enough time to pass through security to meet your guide outside the ground level entrance next to the Jules Verne Restaurant at the South Leg of the Eiffel Tower. There can be a line to ride the elevators however we are among the first to enter the Tower. Your guide will secure tickets for the group and enter the tower for a ride to the 2nd level. From the ground and throughout your visit you will learn about Gustave Eiffel: The Young Engineer, The Entrepreneur, The Great Builder, and Life After The Tower along with the history of Paris during your "Tour From The Sky". Before you know it you have reached the second level where you will take a walk around the tower and hear little-known fun facts about the tower\'s original color, twinkling lights and individuals who made history with their daredevil stunts. Upon arrival at the second level take in the magnificent views of all the sights surrounding you. Get a birds\' eye tour of Paris with your feet far from the ground as your guide tells you about monuments and districts such as Montparnasse, Les Invalides, the Sacre-Coeur, Notre Dame, the Louvre Museum, the Arc de Triomphe and the Champs-Élysées.',
  duration: 2,
  cost: '$425'
}, 2);

it8 = itemModel.itemInfo(3002, 'Louvre Museum', 'Louvre Museum', 'France', {
  desc: 'Uncover Renaissance masterpieces and Egyptian antiquities as you stroll through the Louvre with an experienced local guide. Skip the long lines that snake around Louvre\'s breathtaking entrance and head directly inside to spend more time viewing priceless works of art and less time waiting outside. Meet up with your guide in front of Le Louvre des Antiquaires and meander toward the Louvre\'s entrance. Look for your reflection in the glass and metal pyramid that dominates the exterior grounds and follow your guide past the entrance lines to go directly inside this iconic gallery. Spend a few hours hitting the museum\'s most famous works including the pensive gaze seen in da Vinci\'s Mona Lisa, the delicate lines of Canova\'s Psyche Revived by Cupid\'s Kiss, and the timeless beauty of the Venus de Milo. Listen to stories about the discovery of priceless artifacts from ancient Egypt, and get tips on other sections of the museum you might want to check out before you part ways with your guide.',
  duration: 2,
  cost: '$425'
}, 4);

it9 = itemModel.itemInfo(3003, 'River Seine Sightseeing Cruise', 'River Seine Sightseeing Cruise', 'France', {
  desc: 'River Seine Sightseeing Sail along the banks of the River Seine, passing under magnificent bridges and spotting legendary sights such as Notre-Dame Cathedral, the palatial architecture of the Louvre, and the filigreed ironwork of the Eiffel Tower. As you drift between landmarks, listen to engaging commentary about the City of Light. Hop aboard a spacious river vessel, with large glass windows for unobstructed views and a large open deck that features plenty of seating. Embark from a convenient pier located right alongside the iconic Eiffel Tower. From there, drift down the Seine to see the historic heart of Paris from one of the best vantage points. As you look out at the turrets and towers of the Conciergerie, the great clocks of the Musée d\'Orsay, and the shimmering glass roof of the Palais Royal, informative commentary is broadcast over individual headsets. Learn about the history of some of Paris\' key monuments while you see them, and get introduced to other landmarks you might be less familiar with. Cruise along, passing beneath the centuries-old Pont Neuf and glimpsing the art-filled halls of the Louvre before the boat turns around and makes its way back to the Eiffel Tower to drop you off.',
  duration: 2,
  cost: '$425'
}, 3);

it10 = itemModel.itemInfo(4001, 'Batu Caves', 'Batu Caves', 'Malaysia', {
  desc: 'Take a half-day adventure to the spiritual Batu Caves, just north of Kuala Lumpur, and climb the 272 steps carved into the sides of giant limestone cliffs to reach the Hindu temple at the summit. Visit the Batik Center to experience traditional Malaysian cloth-dying, used as sarongs and fabric. Your first stop is the energetic Little India district, where you discover the delicacies of Indian culture through colorful food stalls and markets selling everything from saris to golden trinkets. From there, leave the hustle and bustle of the city behind as you head to the 400-million-year-old Batu Caves. Follow in the footsteps of pilgrims before you and brave the climb to reach a temple filled with Hindu shrines. On the way back down, snap a few photos of the mischievous monkeys looking to pick up treats from visitors. On your way back to town, swing by the Malaysian Batik Center, where authentic batik fabric is designed and produced into ready-to-wear material, and look for unique pewter itemsat the Royal Selangor Pewter Center, where you see the world\'s largest pewter company at work and can pick up some splendid souvenirs.',
  duration: 2,
  cost: '$425'
}, 2);

it11 = itemModel.itemInfo(4002, 'Aquaria KLCC', 'Aquaria KLCC', 'Malaysia', {
  desc: 'Journey into Aquaria, a watery wonderland right in the middle of Kuala Lumpur. Travel between dramatic and entertaining exhibits, surrounding yourself with tanks brimming with incredible creatures from the ocean deep, freshwater rivers, coastal tidelands, and even dense kelp forests. Enter Aquaria and traverse the aquarium\'s 2 levels, which feature 8 separate ecosystems with both marine life and coastal mammals. Learn the principles of evolution from the piranhas before meeting the small-clawed otters in the riverbank jungle. Journey out to sea to see a wrecked ship, where you marvel at colorful corals before touring an underwater kelp forest, a coastal mangrove forest, and the den of sharks in the living ocean. Your experience concludes in surreal weirdness in the glowing jelly fish tanks. Aquaria KLCC is a massive water world of natural exhibits, incorporating more than 5,000 exhibits over 60,000 square feet (5,500 sq m) in the heart of Kuala Lumpur. Despite its massive size, the oceanarium is easy to navigate thanks to a straightforward layout that builds foundational knowledge rather than overwhelming you with detail. This makes Aquaria perfect for children with an interest in the ocean and the world\'s many non-human inhabitants.',
  duration: 2,
  cost: '$425'
}, 3);

it12 = itemModel.itemInfo(4003, 'Kuala Lampur City Tour', 'Kuala Lampur City Tour', 'Malaysia', {
  desc: 'Zip around Kuala Lumpur\'s most iconic landmarks with an experienced guide on enticing half-day excursion. Gaze up at the Petronas Twin Towers, see the National Mosque, and enjoy ample photo opportunities of sights like Independence Square. Join your guide and start your day at the Petronas Twin Towers, the world\'s tallest, which soar to a height of 1,483 feet (452 m). Stop at the Central Market along the way, where you can browse for souvenirs at the Handicraft Center and indulge in chocolate treats at Cocoa Boutique. Continue to Istana Negara, residence of the King of Malaysia, where you can snap photos of the palace\'s gleaming domes. Cruise past the National Museum, check out the gardens of the National Mosque, and visit the historic railway station before you return to your hotel.',
  duration: 2,
  cost: '$425'
}, 5);

item_list.push(it1);
item_list.push(it2);
item_list.push(it3);

item_list.push(it4);
item_list.push(it5);
item_list.push(it6);

item_list.push(it7);
item_list.push(it8);
item_list.push(it9);

item_list.push(it10);
item_list.push(it11);
item_list.push(it12);

var getItems = function() {
  return item_list;
};

var getItem = function(itemCode) {
  for (var i = 0; i < item_list.length; i++) {
    if (item_list[i].itemCode == itemCode) {
      return item_list[i];
    }
  }
};
module.exports = {
  getItems: getItems,
  getItem: getItem
};