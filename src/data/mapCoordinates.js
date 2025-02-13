export const campusOutline = [
  [51.23750411041443, 22.5494921207428],
  [51.235206751842, 22.55378365516663],
  [51.232956304007544, 22.549835443496708],
  [51.23382962519178, 22.54868745803833],
  [51.234212537714534, 22.548215389251713],
  [51.23432002135865, 22.546219825744632],
  [51.23500522368733, 22.545157670974735],
  [51.23519331665915, 22.544910907745365],
  [51.23750411041443, 22.5494921207428]
];

export const bounds = [
  [51.2315, 22.5440],
  [51.2385, 22.5550]
];

export const buildingCoordinates = {
    rectorateBuilding: [
        [51.23554263013816, 22.550087571144104],
        [51.23573407966981, 22.550371885299686],
        [51.23564003438539, 22.550511360168457],
        [51.235451943239845, 22.550221681594852]
    ],
    mechBuilding: [
        [51.237074204085104, 22.550210952758793],
        [51.23672490223445, 22.549620866775516],
        [51.236348728044774, 22.550200223922733],
        [51.236698032751484, 22.55075812339783]
    ],
    managementBuildingCoords: [
        [51.23507911744654, 22.548966407775882],
        [51.23549560732431, 22.54950284957886],
        [51.23543179057149, 22.549631595611572],
        [51.23500858249714, 22.549073696136478]
    ],
    envEngineeringBuildingCoords: [
        [51.23483056523926, 22.548451423645023],
        [51.23494476506879, 22.548596262931824],
        [51.23484064170619, 22.548773288726807],
        [51.23474659459552, 22.548633813858036]
    ],
    ciBuildingCoords: [
        [51.23665772849758, 22.5509512424469],
        [51.236321858342066, 22.550479173660282],
        [51.235730720912976, 22.55149841308594],
        [51.23605987791862, 22.55198121070862]
    ],
    pentagonBuildingCoords: [
        [51.235582935368924, 22.5529682636261],
        [51.23524033978194, 22.553429603576664],
        [51.23515972868486, 22.55326867103577],
        [51.23548888977555, 22.55279660224915]
    ],
    libraryBuildingCoords: [
        [51.23591209343186, 22.551165819168094],
        [51.23601957310565, 22.551434040069584],
        [51.23588522347418, 22.55172371864319],
        [51.2357508734504, 22.55153059959412]
    ],
    churchBuildingCoords: [
        [51.236066595383996, 22.547603845596317],
        [51.23618750959331, 22.54778623580933],
        [51.23586507099564, 22.547888159751892],
        [51.23594232211549, 22.548124194145206]
    ],
    dorm_1_BuildingCoords: [
        [51.235378050079426, 22.546214461326603],
        [51.2353007980121, 22.54603743553162],
        [51.23514293468853, 22.546316385269165],
        [51.235247057367005, 22.546488046646118]
    ],
    dorm_2_BuildingCoords: [
        [51.23504552938887, 22.545865774154667],
        [51.23494812388303, 22.54572093486786],
        [51.23480369464994, 22.54597842693329],
        [51.234917894546165, 22.546166181564335]
    ],
    dorm_3_BuildingCoords: [
        [51.23469621213571, 22.546241283416748],
        [51.234612241246765, 22.546091079711918],
        [51.23446781095931, 22.546348571777347],
        [51.234565217482036, 22.54652559757233]
    ],
    dorm_4_BuildingCoords: [
        [51.23481041229872, 22.546895742416385],
        [51.23467605913634, 22.546691894531254],
        [51.2345349878936, 22.54694938659668],
        [51.234622317761534, 22.547121047973633]
    ],
    parking_1_Coords: [
        [51.23637223902171, 22.548837661743168],
        [51.23606323665143, 22.548349499702457],
        [51.23582476601201, 22.548853754997253],
        [51.23611361761427, 22.54925608634949]
    ],

};

// Helper function to calculate center points
export const getCenter = (coords) => {
  let latSum = 0, lngSum = 0;
  coords.forEach(([lat, lng]) => {
    latSum += lat;
    lngSum += lng;
  });
  return [latSum / coords.length, lngSum / coords.length];
};

// Pre-calculated centers for all buildings
export const buildingCenters = {
  rectorate: getCenter(buildingCoordinates.rectorateBuilding),
  mechBuilding: getCenter(buildingCoordinates.mechBuilding),
    managementBuilding: getCenter(buildingCoordinates.managementBuildingCoords),
    envEngineeringBuilding: getCenter(buildingCoordinates.envEngineeringBuildingCoords),
    ciBuilding: getCenter(buildingCoordinates.ciBuildingCoords),
    pentagonBuilding: getCenter(buildingCoordinates.pentagonBuildingCoords),
    libraryBuilding: getCenter(buildingCoordinates.libraryBuildingCoords),
    churchBuilding: getCenter(buildingCoordinates.churchBuildingCoords),
    dorm_1_Building: getCenter(buildingCoordinates.dorm_1_BuildingCoords),
    dorm_2_Building: getCenter(buildingCoordinates.dorm_2_BuildingCoords),
    dorm_3_Building: getCenter(buildingCoordinates.dorm_3_BuildingCoords),
    dorm_4_Building: getCenter(buildingCoordinates.dorm_4_BuildingCoords),
    parking_1: getCenter(buildingCoordinates.parking_1_Coords)
    
};
