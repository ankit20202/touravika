'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7d102fde06dd5a1f4df1341fd2499ccf",
"version.json": "31fac307d29ff9f6b85cad121b149f22",
"index.html": "bfaaaa1669ec5ac7af3b9e316f011065",
"/": "bfaaaa1669ec5ac7af3b9e316f011065",
"main.dart.js": "06c6f51fd2a855db3fb525178dc38905",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "49e88b8dd9161716998471ab752a7c7f",
"assets/AssetManifest.json": "9b51b145be3c4ce0ed421e65fc6654ea",
"assets/NOTICES": "0e8927f1ec0705a937e190a293671176",
"assets/FontManifest.json": "885729eeca2659bbe80144b2957e28cb",
"assets/AssetManifest.bin.json": "f4139278f1b8de966812ff507646c9fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e0c849965fb092dc3e87623f3fcf75d4",
"assets/fonts/MaterialIcons-Regular.otf": "b86b8f56af9f9df3c30d37a31071cd9c",
"assets/assets/image/backgroundTransparent.png": "6cd12b0f778521c639e75f00c446b507",
"assets/assets/image/loginBackGround.png": "a682f8082422a556f2a3a8ee44f5f90a",
"assets/assets/image/addedSuccessfullyImage.svg": "27b6bed27602cc1c85c6148b7494419c",
"assets/assets/image/listing-contents.png": "177f84845c1b941836be04a99483cd8c",
"assets/assets/icon/specialLicense/noNotRequiredSpecialLicense.svg": "d6e51ddf25bbabff3e14febd7ab07ac9",
"assets/assets/icon/specialLicense/specialLicense.svg": "8abf5afffe9c8b3f1c7ad922a222f4f8",
"assets/assets/icon/specialLicense/yesRequiredSpecialLicense.svg": "245bad33f40e79ac96383ba4c7389373",
"assets/assets/icon/guide/othersIcon.svg": "3d6dd5c07e28973fea03ea288ba0ab4f",
"assets/assets/icon/guide/partiallyGuidedIcon.svg": "1cd974b6d880ced54ac01fc45df49686",
"assets/assets/icon/guide/fullyGuideIcon.svg": "c87949ca50accd51135d2486b68cc848",
"assets/assets/icon/guide/selfGuidedIcon.svg": "b5c96d7922f3a2393210021d48fdf47a",
"assets/assets/icon/addListingIcon.svg": "35ad8e9989f1caf329b61fa292d95817",
"assets/assets/icon/termAndConditionIcon.svg": "52ff901b83dddd570d5c856bf7542f2f",
"assets/assets/icon/doubleArrowIcon.svg": "7546671f8510d5d3e034bb05b6acd990",
"assets/assets/icon/deleteIcon.svg": "ed571d00ceb2cdf4de02565d50952f37",
"assets/assets/icon/economyIcon.png": "1bcfa893c635f11e8f211fa8886f5275",
"assets/assets/icon/childrenIcon.png": "3be1bc910891b4218717407022b8709a",
"assets/assets/icon/transportation/ferryIcon.svg": "3a2cdd78dd6be54fe73ecda9252b532c",
"assets/assets/icon/transportation/monorailIcon.svg": "240c170fd7889789c2b1c3155f240e16",
"assets/assets/icon/transportation/taxiIcon.svg": "b26521f4f8e14b92d3a0dd7b08a7b033",
"assets/assets/icon/transportation/shinKananIcon.svg": "23dea9d44e0397bb295eee0cb80c25ad",
"assets/assets/icon/transportation/subwayIcon.svg": "ce49918db68643f1bb539ffa93561cc3",
"assets/assets/icon/transportation/transitBusIcon.svg": "225e7cc03273de90e11c3b74f0562f7a",
"assets/assets/icon/transportation/publicBusIcon.svg": "52c25b86701a8bff60107a4c1b0af0a7",
"assets/assets/icon/transportation/trainIcon.svg": "632348c6aeeb72ee705265432a1034d5",
"assets/assets/icon/transportation/privateCarIcon.svg": "7b10129201b3682ec3c45cdba0f3818d",
"assets/assets/icon/transportation/privateBusIcon.svg": "90993fbe45b66d3bbdf5e31635853ebb",
"assets/assets/icon/reviewIcon.svg": "431d10fa64b00fd405c01410657a26e8",
"assets/assets/icon/whatWillDo.svg": "733ac618e280bcd3442b4f45ab712e03",
"assets/assets/icon/trackingIcon.svg": "b70d05c7d1703d50b9eb7d1d24a49055",
"assets/assets/icon/selectedRadioIcon1.svg": "3af0436bd6ea7993ad0b8206622b7d2e",
"assets/assets/icon/hintIcon.svg": "c44c812526666df3436e18f0eea8103a",
"assets/assets/icon/students.png": "473138bcd5ccaa99fad6077bcd9f4de4",
"assets/assets/icon/seniors.png": "39e070a2a082d4c3be02c2741b139b6b",
"assets/assets/icon/infantIcon.png": "24a1079d428733fd76ecb2ce1b3df7dc",
"assets/assets/icon/relaxingIcon.png": "28da14bfb447a852c3f621f430536c14",
"assets/assets/icon/entranceFeeIcon.svg": "21cc5cbd42b6449844507dc0536acf00",
"assets/assets/icon/vegetarianFriendly.png": "30fc5f0be74220181bd70870fa2bb0ed",
"assets/assets/icon/alertIcon.svg": "7b70f97f87626661c553a52d455303b3",
"assets/assets/icon/adventureCatIcon.svg": "b7f8006823b3598b6d72220a235248e1",
"assets/assets/icon/categoryIcon.svg": "f333dbeb59b24f8ba5355421bd027fba",
"assets/assets/icon/unCheckIcon.svg": "b09d8520d58af30cc3fdb60f4d45e231",
"assets/assets/icon/photosIcon.svg": "f58d5a1fab7d2abe89c1868e340b6288",
"assets/assets/icon/highlightIcon.svg": "16e7d0d1586c169533113bf4c0d92a6d",
"assets/assets/icon/backpackIcon.png": "8e14cda99d48bad8c7bce5e08f668611",
"assets/assets/icon/discountIcon.svg": "409c00fbc29404dd90544d5fe32e9497",
"assets/assets/icon/hikingTrekking.png": "d749f36eae6ebdf1b97922215ffbaf2d",
"assets/assets/icon/locationIcon2.svg": "fbcf89a3d87ef72ee1a6331e04585b26",
"assets/assets/icon/radioIcon.svg": "dd0717719fc0e70ab90c3e147735d03b",
"assets/assets/icon/muslimFriendly.png": "3852fb976945ff0a6c22dff3af553e5c",
"assets/assets/icon/appLogo.png": "1239cbdf56eaf849492bc9fc5c9324c3",
"assets/assets/icon/listIcon.svg": "113a60a55573fbb35c678e609d9303d9",
"assets/assets/icon/cultureIcon.png": "6b01d9da13b0c207bba886951c277f9a",
"assets/assets/icon/locationIcon3.svg": "39b869d33d8bcb35d8aeb72ebce4f92a",
"assets/assets/icon/trainRail.png": "4b41bae19e47ca1ebd5422291024f704",
"assets/assets/icon/guideCatIcon.svg": "82d5863b6fc15e6f951b527d020dafa1",
"assets/assets/icon/upDownArrowIcon.svg": "8fb588f1c4b92f0e823113a6b346ff37",
"assets/assets/icon/appLogo.svg": "725de20f8711a9ff405d490abf38e2e2",
"assets/assets/icon/passwordVisible.svg": "a1bbae5d6a7fc30106c27cb0ad8c1f8a",
"assets/assets/icon/editIcon.svg": "0ac7897137383b4a47e09e2888fc9298",
"assets/assets/icon/calender.svg": "52844326d500c89e5487b5b039fba5ce",
"assets/assets/icon/couples.png": "a1e569c60e59313967bcf457889812d5",
"assets/assets/icon/listIcon2.svg": "5ee36987189e256aa9334055a1a724d2",
"assets/assets/icon/specialSkills/specialSkill.svg": "27d9896ded115585693fcc592547dadf",
"assets/assets/icon/specialSkills/noNotRequiredSpecialSkills.svg": "07272207902e0229f7528286e1b59fb9",
"assets/assets/icon/specialSkills/yesRequiredSpecialSkills.svg": "cd26032ad68994ce53196a5f00c49713",
"assets/assets/icon/ageIcon.svg": "d09aa8c10441ed5932e601980a56b6e1",
"assets/assets/icon/passwordUnVisible.svg": "5cb966fa39464a2144ad3612becb8119",
"assets/assets/icon/languageIcon.svg": "9813ed77271fc4d02001d39f4af7c910",
"assets/assets/icon/luxuryIcon.png": "cff35176a8f759d1909833863ac72c16",
"assets/assets/icon/family.png": "183f4f9c4910380f144f39116e7ea11d",
"assets/assets/icon/clickToUpload.svg": "f0b0b63497f65b662abc617d4e35e166",
"assets/assets/icon/youngAdults.png": "645119f7bda044e83620d5393c87316a",
"assets/assets/icon/fullGuideIcon.png": "27eca2973082e5ed5176ead177810ffb",
"assets/assets/icon/plusIcon.svg": "71c79a974e8fec1a39d3a6a51e8f8ec2",
"assets/assets/icon/photography.png": "222b7ff0246eb0593671858d2ac450ae",
"assets/assets/icon/premiumIcon.png": "2c761bfc002f158c71dc7dc333b3c534",
"assets/assets/icon/preview.svg": "d50829f85c213937354b999c2975a1a7",
"assets/assets/icon/junlorSuite.svg": "fedfd2cb539ee90ab11d71c79432abdb",
"assets/assets/icon/singleRoom.svg": "65a17cf2e3c435593be6855473bead1c",
"assets/assets/icon/allAgeIcon.png": "b6afcc26ea0ea7d96916e2e7a4cfeebf",
"assets/assets/icon/wildlifeIcon.png": "8275c6bf96f7f4b3c230faeb8d4707da",
"assets/assets/icon/doubleRoom.svg": "f407ecdea45f226b0d2c7cfb81b6edba",
"assets/assets/icon/groupAdIcon.png": "51305fa8555fe13f2b7cf9041c710c7a",
"assets/assets/icon/healthWellness.png": "bb78bdb5c36cf2733b93e6cc729abe75",
"assets/assets/icon/festivalEvents.png": "cf2295ffe7853fbef337ff22e5faa501",
"assets/assets/icon/visaSupport/visaSupport.svg": "b6039d90064860880773c3aaab1d033d",
"assets/assets/icon/visaSupport/yesProvideVisaSupport.svg": "bf2d9cf02b2cb212cdad52fad652f441",
"assets/assets/icon/visaSupport/noDoProvideVisaSupport.svg": "c56f4c9d2722ae7c530fe8308ab7770e",
"assets/assets/icon/families.png": "3a1fc2bc7b79b2aa78a6362ee337714e",
"assets/assets/icon/quickAdventureIcon.png": "0e5c2b0f31ed777ac2a7f918645afdd8",
"assets/assets/icon/calender2.svg": "be3730b7424508216e8964ee7e37115f",
"assets/assets/icon/dollarIcon.svg": "a2c68d8ea81df8c58565dced9ca44000",
"assets/assets/icon/bannerImageUnPub.png": "c101dc8790a25aa09fc91a819b2b8d26",
"assets/assets/icon/familyRoom.svg": "885de3d91148305a83b255bdf4cbdce9",
"assets/assets/icon/mealsIcon.svg": "0246ec0147bc25281ace819de417fe4d",
"assets/assets/icon/calender3.svg": "0313b70e3cf8bcfd7e95bba086379082",
"assets/assets/icon/customAdIcon.png": "37c4e3d16758f1e5b148621e9bc75011",
"assets/assets/icon/mobilitySupport/yesProvideMobilitySupport.svg": "61733fc4654767f88fe41f22482004b7",
"assets/assets/icon/mobilitySupport/mobilitySupport.svg": "cf9943e4eb8caeb997fce7165fc954fd",
"assets/assets/icon/mobilitySupport/noDoProvideMobilitySupport.svg": "26ee7829fc6ee5cdb21b8de4db621f47",
"assets/assets/icon/backArrowIcon.svg": "4791e30a861937f3a8346b50a718a2c1",
"assets/assets/icon/accommodation.svg": "308de2df347e73896bd6f3187a2d5c0a",
"assets/assets/icon/comfortIcon.png": "3d501db562c51395a3a4f042d53e032a",
"assets/assets/icon/percentIcon.svg": "e6862a04ffda8e694be95a85c4f4a3a6",
"assets/assets/icon/logOutIcon.svg": "596f7527c287a17adb15ad1e8b5cfb87",
"assets/assets/icon/locationIcon.svg": "104122648f352149e7c34151f7d03195",
"assets/assets/icon/addUserIcon.png": "6d5896b5927c45c1740df678fb8ef8f5",
"assets/assets/icon/relaxAdventureIcon.png": "099f2cbe07e78133a94f571f14da68d5",
"assets/assets/icon/settingIcon.svg": "ecb4db0c276733fb764c8edf0e4589f9",
"assets/assets/icon/suite.svg": "d91fc920d9f43e5a34a4f6758694713b",
"assets/assets/icon/exploreIcon.png": "6410cf2f04f57a2872a69a803f4194c7",
"assets/assets/icon/adultIcon.png": "fb64025965441752d82a765297cebed5",
"assets/assets/icon/seniorsIcon.png": "6ec0928d15444e0c6460605e94f4500a",
"assets/assets/icon/tagsIcon.svg": "d78b6a657c7c8127e18fbeb4acf7c7e6",
"assets/assets/icon/roundAdventureIcon.png": "ed9ecded9e195a592f7d65bb8db7fb29",
"assets/assets/icon/skiSnow.png": "e9cd71d5027ffc9765d832324e1e95df",
"assets/assets/icon/addIcon.png": "ac3030969d62886f5289b36e704a1350",
"assets/assets/icon/appLogo2.svg": "1006b4a28d966d8cd495e45d2880a96f",
"assets/assets/icon/priceIcon.svg": "5785f11c4c3f10e38fea4afa77bcd01b",
"assets/assets/icon/suitable.png": "502afd58e1f5fa021590945ce4b077a7",
"assets/assets/icon/sightseeingIcon.png": "7cd3b5d06c57f0d76125e0bcd2459026",
"assets/assets/icon/calenderWhiteIcon.svg": "3a33478e6e232a37ce39216945f533d2",
"assets/assets/icon/localLiving.png": "ae284cd39ad68bb97fd377114da0fc01",
"assets/assets/icon/business.png": "1fb753ff916c04cc275d971dcbe39019",
"assets/assets/icon/food/japaneseCuisineIcon.svg": "e3650ce56af12b4a4a9a881f0f45757e",
"assets/assets/icon/food/halalIcon.svg": "7a4bdeae66592a5bbed377f791c06f9a",
"assets/assets/icon/food/greekCuisineIcon.svg": "55a6d6f2e3eacae68ca3d4a7ec536f91",
"assets/assets/icon/food/koreanCuisineIcon.svg": "d02b517b1ccc31d6756e9167359fa648",
"assets/assets/icon/food/mexicanCuisineIcon.svg": "193dd89d4ca67404b914c784c4788603",
"assets/assets/icon/food/spanishCuisineIcon.svg": "93e1cd60b556a9ec6fbbb09c37e29bbe",
"assets/assets/icon/food/thaiCuisineIcon.svg": "114723fb589347803e0061e511a9d345",
"assets/assets/icon/food/italianCuisineIcon.svg": "edae8ca72aa308be79e86cdd951eb2a5",
"assets/assets/icon/food/americanCuisineIcon.svg": "46ec3bc8a8633129e79a324666a470b7",
"assets/assets/icon/food/brazilianCuisineIcon.svg": "1e2ce166c500c9a7ff0b48a8406cacc7",
"assets/assets/icon/food/middleEasternCuisineIcon.svg": "9c56f3e4a69e1512fca5fbf48b513b8a",
"assets/assets/icon/food/vietnameseCuisineIcon.svg": "2c9858cb6a7075e373a7d8efe1d17981",
"assets/assets/icon/food/seriousIcon.png": "dc6fde326b73d1ae4f9926598397b0a4",
"assets/assets/icon/food/indianCuisineIcon.svg": "d8ea3464e07ce33b8f2fe24225a5a876",
"assets/assets/icon/food/chineseCuisineIcon.svg": "9880d364956e00ed55d032555d7f000a",
"assets/assets/icon/food/internationalCuisineIcon.svg": "177756c31becc44a614837247460a89d",
"assets/assets/icon/food/frenchCuisineIcon.svg": "965b1615a4f6ee1b1ccf2b53705179fd",
"assets/assets/icon/guidIcon2.svg": "57f98cd70cfe49309a5a9555c2e30f53",
"assets/assets/icon/gpsIcon.svg": "d8f1db12d9121f26f1a49e836e6013c0",
"assets/assets/icon/uploadIcon.svg": "62470a120235cb3d46b87a27468001af",
"assets/assets/icon/noOfUsers.svg": "a65eb26e2283cf69bbbd5547ae4f583d",
"assets/assets/icon/partiallyGuideIcon.png": "29f2f25706b38069588e09c8d7fdc69e",
"assets/assets/icon/boatCruise.png": "a87fbc3d7a91adaf7a1cc93ee92e2599",
"assets/assets/icon/selfGuideIcon.png": "622722b8406e7bd78482b71dff1973a6",
"assets/assets/icon/insuranceIcon.svg": "326214bdd9db444a20ed19e4a56e6b3b",
"assets/assets/icon/selectedRadioIcon.svg": "465d2f9ef77b16cbcb42299b4f4a58df",
"assets/assets/icon/foodCulinary.png": "8c6347c1e61c3e41d84ac17075f97253",
"assets/assets/icon/groupIcon.svg": "5d43834c1219f5f4e1368be1a2d3a1c8",
"assets/assets/icon/language.png": "557a0e573c81585ee2cca10a7cb53734",
"assets/assets/icon/seriousIcon.png": "dc6fde326b73d1ae4f9926598397b0a4",
"assets/assets/icon/locationItinerary.svg": "ce343e627880869384fb36af6b300407",
"assets/assets/icon/deluxeRoom.svg": "9b7aef2755c557b813f5696ad1e81d29",
"assets/assets/icon/checkIcon.svg": "3e75fd5dcd7a03932e833e0af0d65d3e",
"assets/assets/icon/twinRoom.svg": "97119ae9b2f05306b2be6b23e603af2e",
"assets/assets/icon/bicycle.png": "697d4631b2fd6658adcc9bed095e3a59",
"assets/assets/icon/inboxIcon.svg": "60827e5fcb49eb13c496774a3080f8ed",
"assets/assets/icon/selectedRadioIcon.png": "961635e6178fba58770c62a8e15b54b5",
"assets/assets/icon/profileIcon.svg": "d9094976682c84ca7e680f2ee6f8a2ec",
"assets/assets/icon/addIcon2.svg": "be61ef30ff78ff97b4c7211bc846656f",
"assets/assets/icon/gpsIcon.png": "2d8fedf6eb612e8caf601aa14b2d0c6c",
"assets/assets/icon/physical_rating_icon.png": "5d58ad9534b82396576ffd4e251419ff",
"assets/assets/icon/addIcon.svg": "aea8dde2fd3a37b83e83de10d1294008",
"assets/assets/icon/successIcon.svg": "43e8ffd33b7991ab4a636129d90c1180",
"assets/assets/icon/bannerImageInProgress.png": "3247876ec9e040cb7fc97616527beec6",
"assets/assets/icon/activities.svg": "b62292488e795956526731a6fac4369c",
"assets/assets/icon/editIcon2.svg": "516d185e9132085271635390bb609a3b",
"assets/assets/icon/transportationIcon.svg": "4f8d58581992f83269d3a89072194240",
"assets/assets/icon/rocketAdventureIcon.png": "aa0ec5cbc90fe56289780ab595eec8cc",
"assets/assets/icon/longAdventureIcon.png": "85f019646ab471ea3d4c6959b4b7b7e8",
"assets/assets/icon/locationIcon.png": "ca231a5af035f326d8563768832dc978",
"assets/assets/icon/heartBumpingIcon.png": "672980908108397ea32b94f010b99e65",
"assets/assets/icon/moderateIcon.png": "9652b02a8fee4db24fe4974bfe2d8fe0",
"assets/assets/icon/adQualityIcon.svg": "5dfc789bbdaf65e692800c172381ff0b",
"assets/assets/icon/logOutIcon.png": "93d3c55936ff88420f4ca5fe81e91c00",
"assets/assets/icon/golf.png": "86519e8cf558840f83d6e3a415d007cb",
"assets/assets/icon/rightArrowIcon.svg": "9799c9cf10795aaafa6f4609c88e4606",
"assets/assets/icon/bannerImage.png": "7c749ba5966af375d3a5a931d2e42c24",
"assets/assets/icon/easyIcon.png": "f994f97e9404bdfe78a1789bb7573833",
"assets/assets/icon/coachBus.png": "f9d8b5e06de3dece57e134674b59338c",
"assets/assets/icon/soloAdIcon.png": "5252dcd1bf98839e0bfc60329ca37cb3",
"assets/assets/icon/percentIcon.png": "10f99d14122630d276f81f3346eeef94",
"assets/assets/icon/calender3.png": "22a1a238db22b6b520dadb3ebf00c75e",
"assets/assets/icon/shoppingMarket.png": "375c5f5ab78c5349d68b9f12b8257d2a",
"assets/assets/icon/noteIcon.svg": "ff0d7c5a589fb421f39f3298992c4d32",
"assets/assets/icon/minusIcon.svg": "490c346d424bf6596b6858c26aff461c",
"assets/assets/icon/entrance/includedPartiallyIcon.svg": "8ffa3b20377b976ae478722a841a638d",
"assets/assets/icon/entrance/includedFullyIcon.svg": "1448ccd611b3a65908b762ec50ffaa13",
"assets/assets/icon/entrance/notIncludedIcon.svg": "4a6c43df044e8a7df7ebbbb4573132c7",
"assets/assets/icon/dollarIcon.png": "62cc606a14da332ae89a42e7bb92c491",
"assets/assets/icon/editBorderIcon.svg": "516d185e9132085271635390bb609a3b",
"assets/assets/icon/checklistIcon.svg": "bb4e6afad10f412898517ac2d86010aa",
"assets/assets/fonts/Inter-medium.ttf": "4030a28e0ed72a45af2bad89a492bf87",
"assets/assets/fonts/Inter-bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-extraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
