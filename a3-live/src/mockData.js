const mockData = {
    Teams: [
        {
        "Projects": ["599af650fc13ae7e60000078", "599af650fc13ae7e60000079"],
        "Employees": ["5997456604a898b529b5ed3f", "5997456604a898b529b5ed40", "5997456604a898b529b5ed41", "5997456604a898b529b5ed42", "5997456604a898b529b5ed43", "5997456604a898b529b5ed44", "5997456604a898b529b5ed45", "5997456604a898b529b5ed46", "5997456604a898b529b5ed47", "5997456604a898b529b5ed48", "5997456604a898b529b5ed49", "5997456604a898b529b5ed4a", "5997456604a898b529b5ed4b", "5997456604a898b529b5ed4c", "5997456604a898b529b5ed4d", "5997456604a898b529b5ed4e", "5997456604a898b529b5ed4f", "5997456604a898b529b5ed50", "5997456604a898b529b5ed51", "5997456604a898b529b5ed52"],
        "_id": "599b0af0fc13ae20630004a6",
        "TeamName": "Team 1",
        "TeamLead": "5997456604a898b529b5ed40",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e6000007a", "599af650fc13ae7e6000007c"],
        "Employees": ["5997456604a898b529b5ed54", "5997456604a898b529b5ed55", "5997456604a898b529b5ed56", "5997456604a898b529b5ed57", "5997456604a898b529b5ed58", "5997456604a898b529b5ed59", "5997456604a898b529b5ed5a", "5997456604a898b529b5ed5b", "5997456604a898b529b5ed5c", "5997456604a898b529b5ed5d", "5997456604a898b529b5ed5e", "5997456604a898b529b5ed5f", "5997456604a898b529b5ed60", "5997456604a898b529b5ed61", "5997456604a898b529b5ed62", "5997456604a898b529b5ed63", "5997456604a898b529b5ed64", "5997456604a898b529b5ed65", "5997456604a898b529b5ed66"],
        "_id": "599b0af0fc13ae20630004a7",
        "TeamName": "Team 2",
        "TeamLead": "5997456604a898b529b5ed53",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e6000007d", "599af650fc13ae7e6000007e"],
        "Employees": ["5997456604a898b529b5ed68", "5997456604a898b529b5ed69", "5997456604a898b529b5ed6a", "5997456604a898b529b5ed6b", "5997456604a898b529b5ed6c", "5997456604a898b529b5ed6d", "5997456604a898b529b5ed6e", "5997456604a898b529b5ed6f", "5997456604a898b529b5ed70", "5997456604a898b529b5ed71", "5997456604a898b529b5ed72", "5997456604a898b529b5ed73", "5997456604a898b529b5ed74", "5997456604a898b529b5ed75", "5997456604a898b529b5ed76", "5997456604a898b529b5ed77", "5997456604a898b529b5ed78", "5997456604a898b529b5ed79", "5997456604a898b529b5ed7a"],
        "_id": "599b0af0fc13ae20630004a8",
        "TeamName": "Team 3",
        "TeamLead": "5997456604a898b529b5ed67",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e6000007f", "599af650fc13ae7e60000081"],
        "Employees": ["5997456604a898b529b5ed7c", "5997456604a898b529b5ed7d", "5997456604a898b529b5ed7e", "5997456604a898b529b5ed7f", "5997456604a898b529b5ed80", "5997456604a898b529b5ed81", "5997456604a898b529b5ed82", "5997456604a898b529b5ed83", "5997456604a898b529b5ed84", "5997456604a898b529b5ed85", "5997456604a898b529b5ed86", "5997456604a898b529b5ed87", "5997456604a898b529b5ed88", "5997456604a898b529b5ed89", "5997456604a898b529b5ed8a", "5997456604a898b529b5ed8b", "5997456604a898b529b5ed8c", "5997456604a898b529b5ed8d", "5997456604a898b529b5ed8e"],
        "_id": "599b0af0fc13ae20630004a9",
        "TeamName": "Team 4",
        "TeamLead": "5997456604a898b529b5ed7b",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e60000064", "599af650fc13ae7e60000065"],
        "Employees": ["5997456604a898b529b5ed90", "5997456604a898b529b5ed91", "5997456604a898b529b5ed92", "5997456604a898b529b5ed93", "5997456604a898b529b5ed94", "5997456604a898b529b5ed95", "5997456604a898b529b5ed96", "5997456604a898b529b5ed97", "5997456604a898b529b5ed98", "5997456604a898b529b5ed99", "5997456604a898b529b5ed9a", "5997456604a898b529b5ed9b", "5997456604a898b529b5ed9c", "5997456604a898b529b5ed9d", "5997456604a898b529b5ed9e", "5997456604a898b529b5ed9f", "5997456604a898b529b5eda0", "5997456604a898b529b5eda1", "5997456604a898b529b5eda2"],
        "_id": "599b0af0fc13ae20630004aa",
        "TeamName": "Team 5",
        "TeamLead": "5997456604a898b529b5ed8f",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e60000066", "599af650fc13ae7e60000067"],
        "Employees": ["5997456604a898b529b5eda4", "5997456604a898b529b5eda5", "5997456604a898b529b5eda6", "5997456604a898b529b5eda7", "5997456604a898b529b5eda8", "5997456604a898b529b5eda9", "5997456604a898b529b5edaa", "5997456604a898b529b5edab", "5997456604a898b529b5edac", "5997456604a898b529b5edad", "5997456604a898b529b5edae", "5997456604a898b529b5edaf", "5997456604a898b529b5edb0", "5997456604a898b529b5edb1", "5997456604a898b529b5edb2", "5997456604a898b529b5edb3", "5997456604a898b529b5edb4", "5997456604a898b529b5edb5", "5997456604a898b529b5edb6"],
        "_id": "599b0af0fc13ae20630004ab",
        "TeamName": "Team 6",
        "TeamLead": "5997456604a898b529b5eda3",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e60000068", "599af650fc13ae7e60000069"],
        "Employees": ["5997456604a898b529b5edb8", "5997456604a898b529b5edb9", "5997456604a898b529b5edba", "5997456604a898b529b5edbb", "5997456604a898b529b5edbc", "5997456604a898b529b5edbd", "5997456604a898b529b5edbe", "5997456604a898b529b5edbf", "5997456604a898b529b5edc0", "5997456604a898b529b5edc1", "5997456604a898b529b5edc2", "5997456604a898b529b5edc3", "5997456604a898b529b5edc4", "5997456604a898b529b5edc5", "5997456604a898b529b5edc6", "5997456604a898b529b5edc7", "5997456604a898b529b5edc8", "5997456604a898b529b5edc9", "5997456604a898b529b5edca"],
        "_id": "599b0af0fc13ae20630004ac",
        "TeamName": "Team 7",
        "TeamLead": "5997456604a898b529b5edb7",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e6000006a", "599af650fc13ae7e6000006b"],
        "Employees": ["5997456604a898b529b5edcc", "5997456604a898b529b5edcd", "5997456604a898b529b5edce", "5997456604a898b529b5edcf", "5997456604a898b529b5edd0", "5997456604a898b529b5edd1", "5997456604a898b529b5edd2", "5997456604a898b529b5edd3", "5997456604a898b529b5edd4", "5997456604a898b529b5edd5", "5997456604a898b529b5edd6", "5997456604a898b529b5edd7", "5997456604a898b529b5edd8", "5997456604a898b529b5edd9", "5997456604a898b529b5edda", "5997456604a898b529b5eddb", "5997456604a898b529b5eddc", "5997456604a898b529b5eddd", "5997456604a898b529b5edde"],
        "_id": "599b0af0fc13ae20630004ad",
        "TeamName": "Team 8",
        "TeamLead": "5997456604a898b529b5edcb",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e6000006c", "599af650fc13ae7e6000006d"],
        "Employees": ["5997456604a898b529b5ede0", "5997456604a898b529b5ede1", "5997456604a898b529b5ede2", "5997456604a898b529b5ede3", "5997456604a898b529b5ede4", "5997456604a898b529b5ede5", "5997456604a898b529b5ede6", "5997456604a898b529b5ede7", "5997456604a898b529b5ede8", "5997456604a898b529b5ede9", "5997456604a898b529b5edea", "5997456604a898b529b5edeb", "5997456604a898b529b5edec", "5997456604a898b529b5eded", "5997456604a898b529b5edee", "5997456604a898b529b5edef", "5997456604a898b529b5edf0", "5997456604a898b529b5edf1", "5997456604a898b529b5edf2"],
        "_id": "599b0af0fc13ae20630004ae",
        "TeamName": "Team 9",
        "TeamLead": "5997456604a898b529b5eddf",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e6000006e", "599af650fc13ae7e6000006f"],
        "Employees": ["5997456604a898b529b5edf4", "5997456604a898b529b5edf5", "5997456604a898b529b5edf6", "5997456604a898b529b5edf7", "5997456604a898b529b5edf8", "5997456604a898b529b5edf9", "5997456604a898b529b5edfa", "5997456604a898b529b5edfb", "5997456604a898b529b5edfc", "5997456604a898b529b5edfd", "5997456604a898b529b5edfe", "5997456604a898b529b5edff", "5997456604a898b529b5ee00", "5997456604a898b529b5ee01", "5997456604a898b529b5ee02", "5997456604a898b529b5ee03", "5997456604a898b529b5ee04", "5997456604a898b529b5ee05", "5997456604a898b529b5ee06"],
        "_id": "599b0af0fc13ae20630004af",
        "TeamName": "Team 10",
        "TeamLead": "5997456604a898b529b5edf3",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e60000070", "599af650fc13ae7e60000071"],
        "Employees": ["5997456604a898b529b5ee08", "5997456604a898b529b5ee09", "5997456604a898b529b5ee0a", "5997456604a898b529b5ee0b", "5997456604a898b529b5ee0c", "5997456604a898b529b5ee0d", "5997456604a898b529b5ee0e", "5997456604a898b529b5ee0f", "5997456604a898b529b5ee10", "5997456604a898b529b5ee11", "5997456604a898b529b5ee12", "5997456604a898b529b5ee13", "5997456604a898b529b5ee14", "5997456604a898b529b5ee15", "5997456604a898b529b5ee16", "5997456604a898b529b5ee17", "5997456604a898b529b5ee18", "5997456604a898b529b5ee19", "5997456604a898b529b5ee1a"],
        "_id": "599b0af0fc13ae20630004b0",
        "TeamName": "Team 11",
        "TeamLead": "5997456604a898b529b5ee07",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e60000072", "599af650fc13ae7e60000073"],
        "Employees": ["5997456604a898b529b5ee1c", "5997456604a898b529b5ee1d", "5997456604a898b529b5ee1e", "5997456604a898b529b5ee1f", "5997456604a898b529b5ee20", "5997456604a898b529b5ee21", "5997456604a898b529b5ee22", "5997456604a898b529b5ee23", "5997456604a898b529b5ee24", "5997456604a898b529b5ee25", "5997456604a898b529b5ee26", "5997456604a898b529b5ee27", "5997456604a898b529b5ee28", "5997456604a898b529b5ee29", "5997456604a898b529b5ee2a", "5997456604a898b529b5ee2b", "5997456604a898b529b5ee2c", "5997456604a898b529b5ee2d", "5997456604a898b529b5ee2e"],
        "_id": "599b0af0fc13ae20630004b1",
        "TeamName": "Team 12",
        "TeamLead": "5997456604a898b529b5ee1b",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e60000074", "599af650fc13ae7e60000075"],
        "Employees": ["5997456604a898b529b5ee30", "5997456604a898b529b5ee31", "5997456604a898b529b5ee32", "5997456604a898b529b5ee33", "5997456604a898b529b5ee34", "5997456604a898b529b5ee35", "5997456604a898b529b5ee36", "5997456604a898b529b5ee37", "5997456604a898b529b5ee38", "5997456604a898b529b5ee39", "5997456604a898b529b5ee3a", "5997456604a898b529b5ee3b", "5997456604a898b529b5ee3c", "5997456604a898b529b5ee3d", "5997456604a898b529b5ee3e", "5997456604a898b529b5ee3f", "5997456604a898b529b5ee40", "5997456604a898b529b5ee41", "5997456604a898b529b5ee42"],
        "_id": "599b0af0fc13ae20630004b2",
        "TeamName": "Team 13",
        "TeamLead": "5997456604a898b529b5ee2f",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e60000076", "599af650fc13ae7e60000077"],
        "Employees": ["5997456604a898b529b5ee44", "5997456604a898b529b5ee45", "5997456604a898b529b5ee46", "5997456604a898b529b5ee47", "5997456604a898b529b5ee48", "5997456604a898b529b5ee49", "5997456604a898b529b5ee4a", "5997456604a898b529b5ee4b", "5997456604a898b529b5ee4c", "5997456604a898b529b5ee4d", "5997456604a898b529b5ee4e", "5997456604a898b529b5ee4f", "5997456604a898b529b5ee50", "5997456604a898b529b5ee51", "5997456604a898b529b5ee52", "5997456604a898b529b5ee53", "5997456604a898b529b5ee54", "5997456604a898b529b5ee55", "5997456604a898b529b5ee56"],
        "_id": "599b0af0fc13ae20630004b3",
        "TeamName": "Team 14",
        "TeamLead": "5997456604a898b529b5ee43",
        "__v": 0
    }, {
        "Projects": ["599af650fc13ae7e6000007b", "599af650fc13ae7e60000080"],
        "Employees": ["5997456604a898b529b5ee58", "5997456604a898b529b5ee59", "5997456604a898b529b5ee5a", "5997456604a898b529b5ee5b", "5997456604a898b529b5ee5c", "5997456604a898b529b5ee5d", "5997456604a898b529b5ee5e", "5997456604a898b529b5ee5f", "5997456604a898b529b5ee60", "5997456604a898b529b5ee61", "5997456604a898b529b5ee62", "5997456604a898b529b5ee63", "5997456604a898b529b5ee64", "5997456604a898b529b5ee65", "5997456604a898b529b5ee66", "5997456604a898b529b5ee67", "5997456604a898b529b5ee68", "5997456604a898b529b5ee69", "5997456604a898b529b5ee6a"],
        "_id": "599b0af0fc13ae20630004b4",
        "TeamName": "Team 15",
        "TeamLead": "5997456604a898b529b5ee57",
        "__v": 0
    }],
    Employees: [
        {
        "_id": "5997456604a898b529b5ed3f",
        "FirstName": "Zsa zsa",
        "LastName": "Mannering",
        "AddressStreet": "7471 Burning Wood Crossing",
        "AddressState": "CA",
        "AddressCity": "Santa Monica",
        "AddressZip": "90410",
        "PhoneNum": "1-(310)552-1997",
        "Extension": 1,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2010-11-07T00:00:00.000Z",
        "SalaryBonus": 24901,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed40",
        "FirstName": "Andy",
        "LastName": "Ellingsworth",
        "AddressStreet": "947 Lake View Parkway",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93715",
        "PhoneNum": "1-(559)533-3179",
        "Extension": 2,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2008-06-23T00:00:00.000Z",
        "SalaryBonus": 11219,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed41",
        "FirstName": "Packston",
        "LastName": "Corringham",
        "AddressStreet": "9619 Lakewood Gardens Avenue",
        "AddressState": "CA",
        "AddressCity": "North Hollywood",
        "AddressZip": "91606",
        "PhoneNum": "1-(818)413-1751",
        "Extension": 3,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2014-07-07T00:00:00.000Z",
        "SalaryBonus": 12955,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed42",
        "FirstName": "Isabeau",
        "LastName": "Rangle",
        "AddressStreet": "3 American Parkway",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92160",
        "PhoneNum": "1-(619)381-2818",
        "Extension": 4,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2015-12-20T00:00:00.000Z",
        "SalaryBonus": 15146,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed43",
        "FirstName": "Sayers",
        "LastName": "Brayshaw",
        "AddressStreet": "8 Grim Parkway",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94105",
        "PhoneNum": "1-(415)683-0634",
        "Extension": 5,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-03-31T00:00:00.000Z",
        "SalaryBonus": 438,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed44",
        "FirstName": "Isabella",
        "LastName": "Tixall",
        "AddressStreet": "1705 Rusk Point",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92170",
        "PhoneNum": "1-(619)503-8372",
        "Extension": 6,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2006-11-26T00:00:00.000Z",
        "SalaryBonus": 2787,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed45",
        "FirstName": "Pietrek",
        "LastName": "Klossmann",
        "AddressStreet": "14996 Swallow Hill",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94142",
        "PhoneNum": "1-(415)352-8964",
        "Extension": 7,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2007-04-20T00:00:00.000Z",
        "SalaryBonus": 19241,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed46",
        "FirstName": "Ivor",
        "LastName": "Rohfsen",
        "AddressStreet": "160 Wayridge Lane",
        "AddressState": "CA",
        "AddressCity": "Van Nuys",
        "AddressZip": "91411",
        "PhoneNum": "1-(626)934-1269",
        "Extension": 8,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2003-02-09T00:00:00.000Z",
        "SalaryBonus": 20632,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed47",
        "FirstName": "Marya",
        "LastName": "Sprigings",
        "AddressStreet": "37935 Morningstar Pass",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90101",
        "PhoneNum": "1-(213)918-4029",
        "Extension": 9,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2005-02-07T00:00:00.000Z",
        "SalaryBonus": 7456,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed48",
        "FirstName": "Cherilyn",
        "LastName": "Paula",
        "AddressStreet": "86 Rigney Hill",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91131",
        "PhoneNum": "1-(626)376-3431",
        "Extension": 10,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2014-01-29T00:00:00.000Z",
        "SalaryBonus": 4791,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed49",
        "FirstName": "Adrian",
        "LastName": "Fromant",
        "AddressStreet": "4 Springs Crossing",
        "AddressState": "CA",
        "AddressCity": "Fullerton",
        "AddressZip": "92835",
        "PhoneNum": "1-(714)348-7636",
        "Extension": 11,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2005-06-20T00:00:00.000Z",
        "SalaryBonus": 7823,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed4a",
        "FirstName": "Helene",
        "LastName": "Burchill",
        "AddressStreet": "3 Thierer Place",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93778",
        "PhoneNum": "1-(559)798-7463",
        "Extension": 12,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2013-11-09T00:00:00.000Z",
        "SalaryBonus": 20531,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed4b",
        "FirstName": "Veriee",
        "LastName": "Oak",
        "AddressStreet": "9592 Forest Run Alley",
        "AddressState": "CA",
        "AddressCity": "Ventura",
        "AddressZip": "93005",
        "PhoneNum": "1-(805)860-0667",
        "Extension": 13,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-10-29T00:00:00.000Z",
        "SalaryBonus": 8387,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed4c",
        "FirstName": "Easter",
        "LastName": "Conigsby",
        "AddressStreet": "8568 Clyde Gallagher Lane",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90010",
        "PhoneNum": "1-(408)834-8472",
        "Extension": 14,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2012-04-04T00:00:00.000Z",
        "SalaryBonus": 19263,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed4d",
        "FirstName": "Udall",
        "LastName": "Ghelerdini",
        "AddressStreet": "7485 Merry Alley",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93762",
        "PhoneNum": "1-(559)776-0293",
        "Extension": 15,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2012-03-23T00:00:00.000Z",
        "SalaryBonus": 9223,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed4e",
        "FirstName": "Oliy",
        "LastName": "Bruford",
        "AddressStreet": "1901 Nelson Point",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94291",
        "PhoneNum": "1-(916)538-2162",
        "Extension": 16,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2009-09-14T00:00:00.000Z",
        "SalaryBonus": 13046,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed4f",
        "FirstName": "Monah",
        "LastName": "Skae",
        "AddressStreet": "18 Canary Circle",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95823",
        "PhoneNum": "1-(916)985-8929",
        "Extension": 17,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2012-03-02T00:00:00.000Z",
        "SalaryBonus": 5285,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed50",
        "FirstName": "Kyle",
        "LastName": "Strain",
        "AddressStreet": "6476 Huxley Plaza",
        "AddressState": "CA",
        "AddressCity": "Whittier",
        "AddressZip": "90605",
        "PhoneNum": "1-(626)490-5061",
        "Extension": 18,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2007-09-30T00:00:00.000Z",
        "SalaryBonus": 365,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed51",
        "FirstName": "Beilul",
        "LastName": "De Bell",
        "AddressStreet": "2 Moland Road",
        "AddressState": "CA",
        "AddressCity": "Oakland",
        "AddressZip": "94627",
        "PhoneNum": "1-(510)223-5469",
        "Extension": 19,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2009-04-13T00:00:00.000Z",
        "SalaryBonus": 2072,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed52",
        "FirstName": "Boot",
        "LastName": "de Keep",
        "AddressStreet": "8 Service Street",
        "AddressState": "CA",
        "AddressCity": "Berkeley",
        "AddressZip": "94705",
        "PhoneNum": "1-(510)150-1879",
        "Extension": 20,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2013-03-15T00:00:00.000Z",
        "SalaryBonus": 17722,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed53",
        "FirstName": "Rex",
        "LastName": "Anster",
        "AddressStreet": "8 Lukken Street",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94154",
        "PhoneNum": "1-(415)231-3699",
        "Extension": 21,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-06-25T00:00:00.000Z",
        "SalaryBonus": 2877,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed54",
        "FirstName": "Nelle",
        "LastName": "Pullan",
        "AddressStreet": "1467 Messerschmidt Trail",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92805",
        "PhoneNum": "1-(626)381-7258",
        "Extension": 22,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2008-11-29T00:00:00.000Z",
        "SalaryBonus": 7001,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed55",
        "FirstName": "Brent",
        "LastName": "Crowter",
        "AddressStreet": "08 Bluestem Way",
        "AddressState": "CA",
        "AddressCity": "Santa Barbara",
        "AddressZip": "93150",
        "PhoneNum": "1-(805)913-0917",
        "Extension": 23,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-03-01T00:00:00.000Z",
        "SalaryBonus": 14472,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed56",
        "FirstName": "Addia",
        "LastName": "Maple",
        "AddressStreet": "434 Golf Course Park",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94110",
        "PhoneNum": "1-(415)119-6626",
        "Extension": 24,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2012-12-11T00:00:00.000Z",
        "SalaryBonus": 13906,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed57",
        "FirstName": "Cirilo",
        "LastName": "Cazalet",
        "AddressStreet": "4 Cardinal Park",
        "AddressState": "CA",
        "AddressCity": "Northridge",
        "AddressZip": "91328",
        "PhoneNum": "1-(818)647-2025",
        "Extension": 25,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2012-03-07T00:00:00.000Z",
        "SalaryBonus": 18991,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed58",
        "FirstName": "Vivie",
        "LastName": "Kingsmill",
        "AddressStreet": "9548 Helena Alley",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94110",
        "PhoneNum": "1-(562)922-8021",
        "Extension": 26,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2005-05-07T00:00:00.000Z",
        "SalaryBonus": 4585,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed59",
        "FirstName": "Heywood",
        "LastName": "Lee",
        "AddressStreet": "304 Boyd Trail",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92825",
        "PhoneNum": "1-(714)885-0764",
        "Extension": 27,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2011-04-18T00:00:00.000Z",
        "SalaryBonus": 15485,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed5a",
        "FirstName": "Danila",
        "LastName": "Whiscard",
        "AddressStreet": "4 Buena Vista Road",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90050",
        "PhoneNum": "1-(213)728-1233",
        "Extension": 28,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2005-03-26T00:00:00.000Z",
        "SalaryBonus": 3344,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed5b",
        "FirstName": "Wye",
        "LastName": "Greenlees",
        "AddressStreet": "35414 Dahle Road",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93750",
        "PhoneNum": "1-(559)943-7679",
        "Extension": 29,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2004-07-30T00:00:00.000Z",
        "SalaryBonus": 7468,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed5c",
        "FirstName": "Staford",
        "LastName": "Seavers",
        "AddressStreet": "4295 Ridgeway Court",
        "AddressState": "CA",
        "AddressCity": "Irvine",
        "AddressZip": "92619",
        "PhoneNum": "1-(949)676-0769",
        "Extension": 30,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2013-12-02T00:00:00.000Z",
        "SalaryBonus": 19386,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed5d",
        "FirstName": "Sam",
        "LastName": "Dysart",
        "AddressStreet": "1 Eliot Circle",
        "AddressState": "CA",
        "AddressCity": "Riverside",
        "AddressZip": "92519",
        "PhoneNum": "1-(951)623-7643",
        "Extension": 31,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2013-05-24T00:00:00.000Z",
        "SalaryBonus": 11496,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed5e",
        "FirstName": "Bel",
        "LastName": "Mairs",
        "AddressStreet": "4 Marcy Hill",
        "AddressState": "CA",
        "AddressCity": "San Luis Obispo",
        "AddressZip": "93407",
        "PhoneNum": "1-(805)947-2085",
        "Extension": 32,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2005-02-04T00:00:00.000Z",
        "SalaryBonus": 10921,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed5f",
        "FirstName": "Cletus",
        "LastName": "Shepperd",
        "AddressStreet": "7 Cottonwood Hill",
        "AddressState": "CA",
        "AddressCity": "San Mateo",
        "AddressZip": "94405",
        "PhoneNum": "1-(805)255-8279",
        "Extension": 33,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2003-04-10T00:00:00.000Z",
        "SalaryBonus": 6839,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed60",
        "FirstName": "Ofelia",
        "LastName": "Byre",
        "AddressStreet": "99402 Fordem Plaza",
        "AddressState": "CA",
        "AddressCity": "Escondido",
        "AddressZip": "92030",
        "PhoneNum": "1-(760)608-5561",
        "Extension": 34,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2016-02-08T00:00:00.000Z",
        "SalaryBonus": 9627,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed61",
        "FirstName": "Garey",
        "LastName": "Couve",
        "AddressStreet": "6606 Nancy Center",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93778",
        "PhoneNum": "1-(559)775-4360",
        "Extension": 35,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2014-07-17T00:00:00.000Z",
        "SalaryBonus": 2223,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed62",
        "FirstName": "Marita",
        "LastName": "Corston",
        "AddressStreet": "9 Crownhardt Plaza",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93305",
        "PhoneNum": "1-(805)149-4339",
        "Extension": 36,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2009-01-12T00:00:00.000Z",
        "SalaryBonus": 9192,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed63",
        "FirstName": "Kinnie",
        "LastName": "Baumaier",
        "AddressStreet": "42819 Straubel Way",
        "AddressState": "CA",
        "AddressCity": "Sunnyvale",
        "AddressZip": "94089",
        "PhoneNum": "1-(408)963-0006",
        "Extension": 37,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2008-11-24T00:00:00.000Z",
        "SalaryBonus": 17385,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed64",
        "FirstName": "Josie",
        "LastName": "Heggadon",
        "AddressStreet": "5532 Chinook Way",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93778",
        "PhoneNum": "1-(559)411-9392",
        "Extension": 38,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-09-30T00:00:00.000Z",
        "SalaryBonus": 17285,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed65",
        "FirstName": "Arte",
        "LastName": "Pirie",
        "AddressStreet": "951 Chive Junction",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90040",
        "PhoneNum": "1-(714)358-9017",
        "Extension": 39,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2011-10-08T00:00:00.000Z",
        "SalaryBonus": 2337,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed66",
        "FirstName": "Emily",
        "LastName": "Utridge",
        "AddressStreet": "2734 Bultman Place",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91199",
        "PhoneNum": "1-(626)825-1749",
        "Extension": 40,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2009-08-26T00:00:00.000Z",
        "SalaryBonus": 15148,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed67",
        "FirstName": "Lonee",
        "LastName": "Kilbourn",
        "AddressStreet": "546 Amoth Court",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94177",
        "PhoneNum": "1-(415)152-4950",
        "Extension": 41,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2006-01-28T00:00:00.000Z",
        "SalaryBonus": 3643,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed68",
        "FirstName": "Amory",
        "LastName": "Placidi",
        "AddressStreet": "6 Bayside Crossing",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95894",
        "PhoneNum": "1-(916)498-2258",
        "Extension": 42,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-02-17T00:00:00.000Z",
        "SalaryBonus": 1572,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed69",
        "FirstName": "Sonni",
        "LastName": "Wassell",
        "AddressStreet": "1 Hudson Court",
        "AddressState": "CA",
        "AddressCity": "Long Beach",
        "AddressZip": "90810",
        "PhoneNum": "1-(562)749-7819",
        "Extension": 43,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2015-10-22T00:00:00.000Z",
        "SalaryBonus": 15914,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed6a",
        "FirstName": "Miriam",
        "LastName": "Simione",
        "AddressStreet": "10 Prentice Road",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93305",
        "PhoneNum": "1-(661)541-9750",
        "Extension": 44,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2014-07-10T00:00:00.000Z",
        "SalaryBonus": 9069,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed6b",
        "FirstName": "Adolf",
        "LastName": "Bearcock",
        "AddressStreet": "4 Hovde Pass",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90040",
        "PhoneNum": "1-(626)862-8833",
        "Extension": 45,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-10-02T00:00:00.000Z",
        "SalaryBonus": 14145,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed6c",
        "FirstName": "Leena",
        "LastName": "Kinset",
        "AddressStreet": "68 Annamark Way",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92137",
        "PhoneNum": "1-(619)273-0346",
        "Extension": 46,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2005-05-09T00:00:00.000Z",
        "SalaryBonus": 531,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed6d",
        "FirstName": "Annabella",
        "LastName": "Peartree",
        "AddressStreet": "60069 Schlimgen Park",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94147",
        "PhoneNum": "1-(415)984-1257",
        "Extension": 47,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2005-11-13T00:00:00.000Z",
        "SalaryBonus": 13599,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed6e",
        "FirstName": "Zena",
        "LastName": "Maas",
        "AddressStreet": "126 Drewry Park",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95108",
        "PhoneNum": "1-(408)183-4774",
        "Extension": 48,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2006-03-27T00:00:00.000Z",
        "SalaryBonus": 23203,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed6f",
        "FirstName": "Stacee",
        "LastName": "Timewell",
        "AddressStreet": "190 Pennsylvania Park",
        "AddressState": "CA",
        "AddressCity": "Fullerton",
        "AddressZip": "92640",
        "PhoneNum": "1-(559)546-9604",
        "Extension": 49,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2012-01-22T00:00:00.000Z",
        "SalaryBonus": 7551,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed70",
        "FirstName": "Nessie",
        "LastName": "Jahnke",
        "AddressStreet": "19357 Melody Crossing",
        "AddressState": "CA",
        "AddressCity": "Fullerton",
        "AddressZip": "92835",
        "PhoneNum": "1-(714)509-4195",
        "Extension": 50,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2017-03-22T00:00:00.000Z",
        "SalaryBonus": 7064,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed71",
        "FirstName": "Tam",
        "LastName": "Rosetti",
        "AddressStreet": "0 Cottonwood Alley",
        "AddressState": "CA",
        "AddressCity": "Newport Beach",
        "AddressZip": "92662",
        "PhoneNum": "1-(949)508-0439",
        "Extension": 51,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2013-09-17T00:00:00.000Z",
        "SalaryBonus": 13526,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed72",
        "FirstName": "Cissiee",
        "LastName": "Kilmister",
        "AddressStreet": "09377 Merrick Lane",
        "AddressState": "CA",
        "AddressCity": "San Bernardino",
        "AddressZip": "92405",
        "PhoneNum": "1-(909)801-1459",
        "Extension": 52,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2009-09-20T00:00:00.000Z",
        "SalaryBonus": 15098,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed73",
        "FirstName": "Web",
        "LastName": "Quinlan",
        "AddressStreet": "10 Sheridan Road",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92805",
        "PhoneNum": "1-(949)670-5920",
        "Extension": 53,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2011-09-29T00:00:00.000Z",
        "SalaryBonus": 10449,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed74",
        "FirstName": "Abbe",
        "LastName": "Stronach",
        "AddressStreet": "9291 Gerald Lane",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92105",
        "PhoneNum": "1-(858)783-7400",
        "Extension": 54,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2009-02-09T00:00:00.000Z",
        "SalaryBonus": 13532,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed75",
        "FirstName": "Inessa",
        "LastName": "Lindegard",
        "AddressStreet": "16576 Bluejay Hill",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94237",
        "PhoneNum": "1-(916)168-5703",
        "Extension": 55,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2007-01-29T00:00:00.000Z",
        "SalaryBonus": 17738,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed76",
        "FirstName": "Lezley",
        "LastName": "Mish",
        "AddressStreet": "83 Bluejay Avenue",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95894",
        "PhoneNum": "1-(916)556-9892",
        "Extension": 56,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2009-12-08T00:00:00.000Z",
        "SalaryBonus": 2862,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed77",
        "FirstName": "Constantine",
        "LastName": "Keston",
        "AddressStreet": "151 Dixon Hill",
        "AddressState": "CA",
        "AddressCity": "Stockton",
        "AddressZip": "95210",
        "PhoneNum": "1-(209)363-6863",
        "Extension": 57,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2010-07-16T00:00:00.000Z",
        "SalaryBonus": 22849,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed78",
        "FirstName": "Annecorinne",
        "LastName": "Bell",
        "AddressStreet": "5 Monica Center",
        "AddressState": "CA",
        "AddressCity": "Santa Ana",
        "AddressZip": "92705",
        "PhoneNum": "1-(213)518-8194",
        "Extension": 58,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2004-07-30T00:00:00.000Z",
        "SalaryBonus": 13962,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed79",
        "FirstName": "Bernie",
        "LastName": "Palke",
        "AddressStreet": "3 Maryland Junction",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95133",
        "PhoneNum": "1-(408)891-2833",
        "Extension": 59,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2015-07-08T00:00:00.000Z",
        "SalaryBonus": 19681,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed7a",
        "FirstName": "Anastasia",
        "LastName": "Cawston",
        "AddressStreet": "66206 Forster Center",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93773",
        "PhoneNum": "1-(559)208-9758",
        "Extension": 60,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2009-01-16T00:00:00.000Z",
        "SalaryBonus": 21615,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed7b",
        "FirstName": "Rafi",
        "LastName": "Malicki",
        "AddressStreet": "453 Thompson Terrace",
        "AddressState": "CA",
        "AddressCity": "Irvine",
        "AddressZip": "92717",
        "PhoneNum": "1-(714)882-8182",
        "Extension": 61,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2015-08-05T00:00:00.000Z",
        "SalaryBonus": 19851,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed7c",
        "FirstName": "Brigida",
        "LastName": "Dobbison",
        "AddressStreet": "82 Grover Center",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95108",
        "PhoneNum": "1-(408)577-3150",
        "Extension": 62,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-08-06T00:00:00.000Z",
        "SalaryBonus": 23829,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed7d",
        "FirstName": "Marlane",
        "LastName": "Smylie",
        "AddressStreet": "579 Kenwood Pass",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93386",
        "PhoneNum": "1-(661)214-3407",
        "Extension": 63,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2016-11-21T00:00:00.000Z",
        "SalaryBonus": 7516,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed7e",
        "FirstName": "Gavan",
        "LastName": "Bishell",
        "AddressStreet": "6 Vidon Hill",
        "AddressState": "CA",
        "AddressCity": "Fullerton",
        "AddressZip": "92835",
        "PhoneNum": "1-(714)844-6617",
        "Extension": 64,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2015-05-08T00:00:00.000Z",
        "SalaryBonus": 22579,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed7f",
        "FirstName": "Eustacia",
        "LastName": "Tommasetti",
        "AddressStreet": "0 Bay Point",
        "AddressState": "CA",
        "AddressCity": "Ventura",
        "AddressZip": "93005",
        "PhoneNum": "1-(805)603-3357",
        "Extension": 65,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2010-10-04T00:00:00.000Z",
        "SalaryBonus": 11331,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed80",
        "FirstName": "Godfrey",
        "LastName": "Kempstone",
        "AddressStreet": "41237 Lerdahl Circle",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90025",
        "PhoneNum": "1-(310)719-5719",
        "Extension": 66,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2005-03-15T00:00:00.000Z",
        "SalaryBonus": 6396,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed81",
        "FirstName": "Onfroi",
        "LastName": "Curtin",
        "AddressStreet": "66 Bobwhite Lane",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92812",
        "PhoneNum": "1-(714)681-6846",
        "Extension": 67,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2008-05-21T00:00:00.000Z",
        "SalaryBonus": 6292,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed82",
        "FirstName": "Verena",
        "LastName": "Old",
        "AddressStreet": "70 Macpherson Hill",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94177",
        "PhoneNum": "1-(415)156-6075",
        "Extension": 68,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2014-06-19T00:00:00.000Z",
        "SalaryBonus": 21093,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed83",
        "FirstName": "Brade",
        "LastName": "Brayshaw",
        "AddressStreet": "1 Meadow Valley Circle",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92145",
        "PhoneNum": "1-(619)688-0982",
        "Extension": 69,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2011-11-24T00:00:00.000Z",
        "SalaryBonus": 4447,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed84",
        "FirstName": "Angele",
        "LastName": "Lightbody",
        "AddressStreet": "18668 Maywood Trail",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94257",
        "PhoneNum": "1-(916)273-3121",
        "Extension": 70,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2013-11-09T00:00:00.000Z",
        "SalaryBonus": 15711,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed85",
        "FirstName": "Bailie",
        "LastName": "Tomkin",
        "AddressStreet": "223 Blackbird Place",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95133",
        "PhoneNum": "1-(408)759-9859",
        "Extension": 71,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2005-06-11T00:00:00.000Z",
        "SalaryBonus": 3320,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed86",
        "FirstName": "Saidee",
        "LastName": "Meininger",
        "AddressStreet": "46438 Mockingbird Road",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91117",
        "PhoneNum": "1-(626)683-0011",
        "Extension": 72,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2009-03-15T00:00:00.000Z",
        "SalaryBonus": 13348,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed87",
        "FirstName": "Abigael",
        "LastName": "Dallman",
        "AddressStreet": "00 Sunfield Crossing",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94280",
        "PhoneNum": "1-(916)946-5942",
        "Extension": 73,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2011-08-04T00:00:00.000Z",
        "SalaryBonus": 14485,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed88",
        "FirstName": "Port",
        "LastName": "Ternott",
        "AddressStreet": "91 Fair Oaks Hill",
        "AddressState": "CA",
        "AddressCity": "Glendale",
        "AddressZip": "91205",
        "PhoneNum": "1-(818)217-6165",
        "Extension": 74,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2007-01-19T00:00:00.000Z",
        "SalaryBonus": 5029,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed89",
        "FirstName": "Beau",
        "LastName": "Schall",
        "AddressStreet": "6 Hoffman Terrace",
        "AddressState": "CA",
        "AddressCity": "Lancaster",
        "AddressZip": "93584",
        "PhoneNum": "1-(661)316-0489",
        "Extension": 75,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2005-01-21T00:00:00.000Z",
        "SalaryBonus": 24967,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed8a",
        "FirstName": "Tull",
        "LastName": "Baumler",
        "AddressStreet": "4 Mendota Lane",
        "AddressState": "CA",
        "AddressCity": "Richmond",
        "AddressZip": "94807",
        "PhoneNum": "1-(510)907-5974",
        "Extension": 76,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2013-08-25T00:00:00.000Z",
        "SalaryBonus": 15784,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed8b",
        "FirstName": "Emalee",
        "LastName": "Sillett",
        "AddressStreet": "4 Calypso Hill",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94250",
        "PhoneNum": "1-(916)467-8517",
        "Extension": 77,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2010-08-07T00:00:00.000Z",
        "SalaryBonus": 13358,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed8c",
        "FirstName": "Bonni",
        "LastName": "Foskett",
        "AddressStreet": "4030 Nelson Park",
        "AddressState": "CA",
        "AddressCity": "Inglewood",
        "AddressZip": "90310",
        "PhoneNum": "1-(310)529-2961",
        "Extension": 78,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2008-01-28T00:00:00.000Z",
        "SalaryBonus": 13227,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed8d",
        "FirstName": "Cammy",
        "LastName": "Tabbernor",
        "AddressStreet": "8 Thackeray Street",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94142",
        "PhoneNum": "1-(415)351-3083",
        "Extension": 79,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2006-08-27T00:00:00.000Z",
        "SalaryBonus": 9572,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed8e",
        "FirstName": "Ximenez",
        "LastName": "Chadwin",
        "AddressStreet": "9720 Derek Drive",
        "AddressState": "CA",
        "AddressCity": "Irvine",
        "AddressZip": "92619",
        "PhoneNum": "1-(949)812-1896",
        "Extension": 80,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2005-11-07T00:00:00.000Z",
        "SalaryBonus": 20759,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed8f",
        "FirstName": "Cleveland",
        "LastName": "Jacob",
        "AddressStreet": "67 6th Plaza",
        "AddressState": "CA",
        "AddressCity": "Moreno Valley",
        "AddressZip": "92555",
        "PhoneNum": "1-(951)587-5242",
        "Extension": 81,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-08-29T00:00:00.000Z",
        "SalaryBonus": 17605,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed90",
        "FirstName": "Brynne",
        "LastName": "Cavendish",
        "AddressStreet": "26076 Dahle Point",
        "AddressState": "CA",
        "AddressCity": "San Bernardino",
        "AddressZip": "92410",
        "PhoneNum": "1-(951)160-7591",
        "Extension": 82,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2012-01-24T00:00:00.000Z",
        "SalaryBonus": 18264,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed91",
        "FirstName": "Ophelie",
        "LastName": "Sawday",
        "AddressStreet": "00933 Comanche Park",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90050",
        "PhoneNum": "1-(213)383-0786",
        "Extension": 83,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2007-02-17T00:00:00.000Z",
        "SalaryBonus": 19262,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed92",
        "FirstName": "Caitrin",
        "LastName": "Romero",
        "AddressStreet": "99 Westridge Pass",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92196",
        "PhoneNum": "1-(619)575-4794",
        "Extension": 84,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-05-03T00:00:00.000Z",
        "SalaryBonus": 8938,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed93",
        "FirstName": "Niko",
        "LastName": "Yashunin",
        "AddressStreet": "4308 Meadow Ridge Circle",
        "AddressState": "CA",
        "AddressCity": "San Mateo",
        "AddressZip": "94405",
        "PhoneNum": "1-(805)436-8172",
        "Extension": 85,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2017-02-06T00:00:00.000Z",
        "SalaryBonus": 15986,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed94",
        "FirstName": "Tucky",
        "LastName": "Caw",
        "AddressStreet": "72 Elgar Point",
        "AddressState": "CA",
        "AddressCity": "Stockton",
        "AddressZip": "95205",
        "PhoneNum": "1-(209)947-5316",
        "Extension": 86,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2015-07-09T00:00:00.000Z",
        "SalaryBonus": 19606,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed95",
        "FirstName": "Kathlin",
        "LastName": "Cawley",
        "AddressStreet": "55229 Stone Corner Park",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90010",
        "PhoneNum": "1-(626)468-8417",
        "Extension": 87,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2016-09-28T00:00:00.000Z",
        "SalaryBonus": 19389,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed96",
        "FirstName": "Randell",
        "LastName": "Klassmann",
        "AddressStreet": "331 Swallow Drive",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95194",
        "PhoneNum": "1-(408)216-8307",
        "Extension": 88,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-03-07T00:00:00.000Z",
        "SalaryBonus": 4336,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed97",
        "FirstName": "Harmony",
        "LastName": "Zannotti",
        "AddressStreet": "6749 Mayer Court",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90050",
        "PhoneNum": "1-(213)971-4380",
        "Extension": 89,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-02-18T00:00:00.000Z",
        "SalaryBonus": 3010,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed98",
        "FirstName": "Scottie",
        "LastName": "Lackham",
        "AddressStreet": "8662 Schmedeman Court",
        "AddressState": "CA",
        "AddressCity": "Oxnard",
        "AddressZip": "93034",
        "PhoneNum": "1-(805)186-2113",
        "Extension": 90,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2013-10-07T00:00:00.000Z",
        "SalaryBonus": 16297,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed99",
        "FirstName": "Freida",
        "LastName": "Chadwin",
        "AddressStreet": "78830 Oak Valley Center",
        "AddressState": "CA",
        "AddressCity": "Torrance",
        "AddressZip": "90505",
        "PhoneNum": "1-(310)232-6720",
        "Extension": 91,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-01-02T00:00:00.000Z",
        "SalaryBonus": 22687,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed9a",
        "FirstName": "Tamma",
        "LastName": "Assard",
        "AddressStreet": "3545 Coolidge Crossing",
        "AddressState": "CA",
        "AddressCity": "Richmond",
        "AddressZip": "94807",
        "PhoneNum": "1-(510)733-9810",
        "Extension": 92,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2016-06-10T00:00:00.000Z",
        "SalaryBonus": 7082,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed9b",
        "FirstName": "Tally",
        "LastName": "Sherland",
        "AddressStreet": "3 Sloan Terrace",
        "AddressState": "CA",
        "AddressCity": "Santa Barbara",
        "AddressZip": "93106",
        "PhoneNum": "1-(805)498-9474",
        "Extension": 93,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2005-06-26T00:00:00.000Z",
        "SalaryBonus": 16122,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed9c",
        "FirstName": "Roxy",
        "LastName": "Escoffier",
        "AddressStreet": "3 Sheridan Drive",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90065",
        "PhoneNum": "1-(213)458-7026",
        "Extension": 94,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2010-12-24T00:00:00.000Z",
        "SalaryBonus": 9891,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed9d",
        "FirstName": "Annabelle",
        "LastName": "Zupone",
        "AddressStreet": "147 Manufacturers Court",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90040",
        "PhoneNum": "1-(760)353-4396",
        "Extension": 95,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-07-29T00:00:00.000Z",
        "SalaryBonus": 17982,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed9e",
        "FirstName": "Waldon",
        "LastName": "Kleinplatz",
        "AddressStreet": "14 Independence Street",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92115",
        "PhoneNum": "1-(619)841-3709",
        "Extension": 96,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2012-08-10T00:00:00.000Z",
        "SalaryBonus": 12858,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ed9f",
        "FirstName": "Mario",
        "LastName": "Spradbrow",
        "AddressStreet": "75 Loeprich Point",
        "AddressState": "CA",
        "AddressCity": "Northridge",
        "AddressZip": "91328",
        "PhoneNum": "1-(818)549-4504",
        "Extension": 97,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2012-08-15T00:00:00.000Z",
        "SalaryBonus": 1630,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda0",
        "FirstName": "Eddy",
        "LastName": "Kellitt",
        "AddressStreet": "24010 Tennessee Center",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94257",
        "PhoneNum": "1-(916)372-8410",
        "Extension": 98,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2013-04-05T00:00:00.000Z",
        "SalaryBonus": 6817,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda1",
        "FirstName": "Beniamino",
        "LastName": "Culley",
        "AddressStreet": "692 Elgar Junction",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90040",
        "PhoneNum": "1-(760)894-4535",
        "Extension": 99,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2004-07-12T00:00:00.000Z",
        "SalaryBonus": 11180,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda2",
        "FirstName": "Shena",
        "LastName": "Gellier",
        "AddressStreet": "18713 Crowley Trail",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92145",
        "PhoneNum": "1-(619)533-7595",
        "Extension": 100,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2003-09-01T00:00:00.000Z",
        "SalaryBonus": 3708,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda3",
        "FirstName": "Meade",
        "LastName": "Zuker",
        "AddressStreet": "5513 Anzinger Plaza",
        "AddressState": "CA",
        "AddressCity": "San Bernardino",
        "AddressZip": "92415",
        "PhoneNum": "1-(760)557-6128",
        "Extension": 101,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-10-03T00:00:00.000Z",
        "SalaryBonus": 17075,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda4",
        "FirstName": "Cariotta",
        "LastName": "Rapper",
        "AddressStreet": "8001 Gale Plaza",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90020",
        "PhoneNum": "1-(818)743-0851",
        "Extension": 102,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2016-07-31T00:00:00.000Z",
        "SalaryBonus": 2420,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda5",
        "FirstName": "Pearline",
        "LastName": "Boc",
        "AddressStreet": "63 Pennsylvania Lane",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93794",
        "PhoneNum": "1-(559)931-3484",
        "Extension": 103,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2009-12-23T00:00:00.000Z",
        "SalaryBonus": 18392,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda6",
        "FirstName": "Ruth",
        "LastName": "Wysome",
        "AddressStreet": "9 Fremont Road",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93773",
        "PhoneNum": "1-(559)899-8678",
        "Extension": 104,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2007-12-03T00:00:00.000Z",
        "SalaryBonus": 17254,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda7",
        "FirstName": "Randi",
        "LastName": "Aspling",
        "AddressStreet": "153 Hudson Junction",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90094",
        "PhoneNum": "1-(323)441-4549",
        "Extension": 105,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2006-01-25T00:00:00.000Z",
        "SalaryBonus": 5025,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda8",
        "FirstName": "Federica",
        "LastName": "Boyet",
        "AddressStreet": "794 Basil Junction",
        "AddressState": "CA",
        "AddressCity": "Fullerton",
        "AddressZip": "92835",
        "PhoneNum": "1-(714)415-5452",
        "Extension": 106,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2005-05-27T00:00:00.000Z",
        "SalaryBonus": 10434,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eda9",
        "FirstName": "Cullie",
        "LastName": "Booty",
        "AddressStreet": "8904 Golden Leaf Park",
        "AddressState": "CA",
        "AddressCity": "Redwood City",
        "AddressZip": "94064",
        "PhoneNum": "1-(650)459-5546",
        "Extension": 107,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2004-10-17T00:00:00.000Z",
        "SalaryBonus": 7908,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edaa",
        "FirstName": "Bogart",
        "LastName": "Fiddeman",
        "AddressStreet": "4783 Derek Court",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91103",
        "PhoneNum": "1-(626)766-5662",
        "Extension": 108,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2010-08-03T00:00:00.000Z",
        "SalaryBonus": 14877,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edab",
        "FirstName": "Dorie",
        "LastName": "Jordine",
        "AddressStreet": "3821 Del Sol Center",
        "AddressState": "CA",
        "AddressCity": "Long Beach",
        "AddressZip": "90805",
        "PhoneNum": "1-(310)508-6260",
        "Extension": 109,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2017-03-28T00:00:00.000Z",
        "SalaryBonus": 10265,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edac",
        "FirstName": "Byron",
        "LastName": "Pauleit",
        "AddressStreet": "599 Emmet Circle",
        "AddressState": "CA",
        "AddressCity": "Orange",
        "AddressZip": "92867",
        "PhoneNum": "1-(714)288-5982",
        "Extension": 110,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-04-21T00:00:00.000Z",
        "SalaryBonus": 23374,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edad",
        "FirstName": "Pembroke",
        "LastName": "Beenham",
        "AddressStreet": "8 Fremont Way",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92115",
        "PhoneNum": "1-(619)780-5829",
        "Extension": 111,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2017-01-08T00:00:00.000Z",
        "SalaryBonus": 22587,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edae",
        "FirstName": "Standford",
        "LastName": "Aberdeen",
        "AddressStreet": "45 Thompson Road",
        "AddressState": "CA",
        "AddressCity": "San Bernardino",
        "AddressZip": "92424",
        "PhoneNum": "1-(909)357-9556",
        "Extension": 112,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2010-08-10T00:00:00.000Z",
        "SalaryBonus": 22265,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edaf",
        "FirstName": "Jacobo",
        "LastName": "Huntley",
        "AddressStreet": "45 Sauthoff Alley",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90087",
        "PhoneNum": "1-(213)731-5201",
        "Extension": 113,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2013-04-30T00:00:00.000Z",
        "SalaryBonus": 14348,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb0",
        "FirstName": "Bald",
        "LastName": "Grewer",
        "AddressStreet": "8883 Rieder Road",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93381",
        "PhoneNum": "1-(661)309-5689",
        "Extension": 114,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2007-11-20T00:00:00.000Z",
        "SalaryBonus": 3355,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb1",
        "FirstName": "Correy",
        "LastName": "Vannacci",
        "AddressStreet": "0 Comanche Way",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90065",
        "PhoneNum": "1-(213)106-5361",
        "Extension": 115,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2006-03-23T00:00:00.000Z",
        "SalaryBonus": 16715,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb2",
        "FirstName": "Carmelia",
        "LastName": "Guitton",
        "AddressStreet": "8869 Vermont Pass",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90055",
        "PhoneNum": "1-(213)427-9509",
        "Extension": 116,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2006-02-21T00:00:00.000Z",
        "SalaryBonus": 20070,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb3",
        "FirstName": "Don",
        "LastName": "Ullock",
        "AddressStreet": "5 Atwood Drive",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94291",
        "PhoneNum": "1-(916)745-1046",
        "Extension": 117,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2016-02-17T00:00:00.000Z",
        "SalaryBonus": 2061,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb4",
        "FirstName": "Nikita",
        "LastName": "Seyers",
        "AddressStreet": "8030 Blaine Pass",
        "AddressState": "CA",
        "AddressCity": "Alhambra",
        "AddressZip": "91841",
        "PhoneNum": "1-(626)993-5861",
        "Extension": 118,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2012-01-11T00:00:00.000Z",
        "SalaryBonus": 13481,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb5",
        "FirstName": "Darcie",
        "LastName": "Winspeare",
        "AddressStreet": "4013 Browning Plaza",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91125",
        "PhoneNum": "1-(626)609-1513",
        "Extension": 119,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-04-27T00:00:00.000Z",
        "SalaryBonus": 22785,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb6",
        "FirstName": "Tanhya",
        "LastName": "Crosby",
        "AddressStreet": "6 Fisk Junction",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95194",
        "PhoneNum": "1-(408)401-8343",
        "Extension": 120,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2008-12-01T00:00:00.000Z",
        "SalaryBonus": 14830,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb7",
        "FirstName": "Maxi",
        "LastName": "Cowperthwaite",
        "AddressStreet": "7 Maple Wood Center",
        "AddressState": "CA",
        "AddressCity": "Petaluma",
        "AddressZip": "94975",
        "PhoneNum": "1-(707)213-9718",
        "Extension": 121,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2003-12-16T00:00:00.000Z",
        "SalaryBonus": 19023,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb8",
        "FirstName": "Hamlen",
        "LastName": "Silber",
        "AddressStreet": "34 Delaware Drive",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94263",
        "PhoneNum": "1-(916)253-8894",
        "Extension": 122,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2013-01-03T00:00:00.000Z",
        "SalaryBonus": 3750,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edb9",
        "FirstName": "Lonee",
        "LastName": "Ebbers",
        "AddressStreet": "5 Scott Terrace",
        "AddressState": "CA",
        "AddressCity": "Sunnyvale",
        "AddressZip": "94089",
        "PhoneNum": "1-(650)559-8279",
        "Extension": 123,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2016-05-15T00:00:00.000Z",
        "SalaryBonus": 19414,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edba",
        "FirstName": "Noah",
        "LastName": "Dumphrey",
        "AddressStreet": "7188 Hovde Road",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92170",
        "PhoneNum": "1-(619)101-0805",
        "Extension": 124,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2010-10-13T00:00:00.000Z",
        "SalaryBonus": 10210,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edbb",
        "FirstName": "Linnell",
        "LastName": "Maase",
        "AddressStreet": "5643 Fairview Avenue",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94250",
        "PhoneNum": "1-(916)471-2259",
        "Extension": 125,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2003-07-19T00:00:00.000Z",
        "SalaryBonus": 23426,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edbc",
        "FirstName": "Charla",
        "LastName": "Tilston",
        "AddressStreet": "28 Esch Pass",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92115",
        "PhoneNum": "1-(619)678-3524",
        "Extension": 126,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2011-01-30T00:00:00.000Z",
        "SalaryBonus": 15589,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edbd",
        "FirstName": "Carita",
        "LastName": "Gothrup",
        "AddressStreet": "8377 Michigan Plaza",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94297",
        "PhoneNum": "1-(916)838-4550",
        "Extension": 127,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2005-10-31T00:00:00.000Z",
        "SalaryBonus": 21753,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edbe",
        "FirstName": "Claudianus",
        "LastName": "Gannicott",
        "AddressStreet": "38 Nova Plaza",
        "AddressState": "CA",
        "AddressCity": "Redwood City",
        "AddressZip": "94064",
        "PhoneNum": "1-(650)705-4854",
        "Extension": 128,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2011-07-16T00:00:00.000Z",
        "SalaryBonus": 23040,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edbf",
        "FirstName": "Marietta",
        "LastName": "Cinavas",
        "AddressStreet": "0 Everett Center",
        "AddressState": "CA",
        "AddressCity": "Northridge",
        "AddressZip": "91328",
        "PhoneNum": "1-(818)794-9731",
        "Extension": 129,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2004-07-24T00:00:00.000Z",
        "SalaryBonus": 15983,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc0",
        "FirstName": "Umeko",
        "LastName": "Hinze",
        "AddressStreet": "1 Commercial Parkway",
        "AddressState": "CA",
        "AddressCity": "Redwood City",
        "AddressZip": "94064",
        "PhoneNum": "1-(650)952-4754",
        "Extension": 130,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2003-04-19T00:00:00.000Z",
        "SalaryBonus": 4813,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc1",
        "FirstName": "Melody",
        "LastName": "Van den Velde",
        "AddressStreet": "1 Grover Trail",
        "AddressState": "CA",
        "AddressCity": "Van Nuys",
        "AddressZip": "91499",
        "PhoneNum": "1-(213)687-2067",
        "Extension": 131,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2013-03-06T00:00:00.000Z",
        "SalaryBonus": 7384,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc2",
        "FirstName": "Collette",
        "LastName": "O'Crevy",
        "AddressStreet": "58 Anhalt Park",
        "AddressState": "CA",
        "AddressCity": "Riverside",
        "AddressZip": "92513",
        "PhoneNum": "1-(951)867-9306",
        "Extension": 132,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-10-19T00:00:00.000Z",
        "SalaryBonus": 19029,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc3",
        "FirstName": "Bartolomeo",
        "LastName": "Spencelayh",
        "AddressStreet": "5 Gulseth Place",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90045",
        "PhoneNum": "1-(310)861-9372",
        "Extension": 133,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2005-05-28T00:00:00.000Z",
        "SalaryBonus": 11517,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc4",
        "FirstName": "Sly",
        "LastName": "McCrostie",
        "AddressStreet": "60 Armistice Circle",
        "AddressState": "CA",
        "AddressCity": "Stockton",
        "AddressZip": "95219",
        "PhoneNum": "1-(209)906-7652",
        "Extension": 134,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2012-08-15T00:00:00.000Z",
        "SalaryBonus": 19940,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc5",
        "FirstName": "Fiona",
        "LastName": "Pfleger",
        "AddressStreet": "042 Northfield Road",
        "AddressState": "CA",
        "AddressCity": "San Bernardino",
        "AddressZip": "92415",
        "PhoneNum": "1-(909)464-2204",
        "Extension": 135,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2015-08-12T00:00:00.000Z",
        "SalaryBonus": 20901,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc6",
        "FirstName": "Katerine",
        "LastName": "Giorgielli",
        "AddressStreet": "26 Holmberg Court",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94169",
        "PhoneNum": "1-(415)333-2909",
        "Extension": 136,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2006-08-02T00:00:00.000Z",
        "SalaryBonus": 9471,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc7",
        "FirstName": "Pyotr",
        "LastName": "Lurner",
        "AddressStreet": "23089 Manitowish Drive",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94142",
        "PhoneNum": "1-(415)135-4302",
        "Extension": 137,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2014-01-15T00:00:00.000Z",
        "SalaryBonus": 8494,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc8",
        "FirstName": "Paulina",
        "LastName": "Glamart",
        "AddressStreet": "0 Dryden Court",
        "AddressState": "CA",
        "AddressCity": "Berkeley",
        "AddressZip": "94712",
        "PhoneNum": "1-(510)456-3064",
        "Extension": 138,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2005-10-28T00:00:00.000Z",
        "SalaryBonus": 7817,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edc9",
        "FirstName": "Neddy",
        "LastName": "Wanka",
        "AddressStreet": "1 Gina Center",
        "AddressState": "CA",
        "AddressCity": "Lancaster",
        "AddressZip": "93584",
        "PhoneNum": "1-(661)866-2234",
        "Extension": 139,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2012-09-09T00:00:00.000Z",
        "SalaryBonus": 14610,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edca",
        "FirstName": "Tomi",
        "LastName": "Dewire",
        "AddressStreet": "86919 Kinsman Hill",
        "AddressState": "CA",
        "AddressCity": "South Lake Tahoe",
        "AddressZip": "96154",
        "PhoneNum": "1-(530)112-1918",
        "Extension": 140,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2008-09-09T00:00:00.000Z",
        "SalaryBonus": 13264,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edcb",
        "FirstName": "Cosmo",
        "LastName": "Rooson",
        "AddressStreet": "44978 Montana Avenue",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94280",
        "PhoneNum": "1-(916)750-6706",
        "Extension": 141,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2011-04-22T00:00:00.000Z",
        "SalaryBonus": 4325,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edcc",
        "FirstName": "Jaimie",
        "LastName": "Gurnell",
        "AddressStreet": "28 Bartillon Center",
        "AddressState": "CA",
        "AddressCity": "Oakland",
        "AddressZip": "94616",
        "PhoneNum": "1-(415)992-6756",
        "Extension": 142,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2006-07-20T00:00:00.000Z",
        "SalaryBonus": 22253,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edcd",
        "FirstName": "Arnie",
        "LastName": "Hellwich",
        "AddressStreet": "380 Sycamore Pass",
        "AddressState": "CA",
        "AddressCity": "Ventura",
        "AddressZip": "93005",
        "PhoneNum": "1-(805)770-6670",
        "Extension": 143,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-01-13T00:00:00.000Z",
        "SalaryBonus": 23998,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edce",
        "FirstName": "Alessandro",
        "LastName": "Rodger",
        "AddressStreet": "066 Sycamore Crossing",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92191",
        "PhoneNum": "1-(619)843-0413",
        "Extension": 144,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2010-10-12T00:00:00.000Z",
        "SalaryBonus": 5599,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edcf",
        "FirstName": "Val",
        "LastName": "Classen",
        "AddressStreet": "29 American Ash Junction",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95828",
        "PhoneNum": "1-(916)631-9688",
        "Extension": 145,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2010-06-07T00:00:00.000Z",
        "SalaryBonus": 23625,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd0",
        "FirstName": "Shanan",
        "LastName": "Herculeson",
        "AddressStreet": "94209 Southridge Place",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93740",
        "PhoneNum": "1-(559)438-4833",
        "Extension": 146,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2008-07-23T00:00:00.000Z",
        "SalaryBonus": 7900,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd1",
        "FirstName": "Dean",
        "LastName": "Paddison",
        "AddressStreet": "32 Carpenter Parkway",
        "AddressState": "CA",
        "AddressCity": "Richmond",
        "AddressZip": "94807",
        "PhoneNum": "1-(510)159-1477",
        "Extension": 147,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2005-07-27T00:00:00.000Z",
        "SalaryBonus": 4042,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd2",
        "FirstName": "Anders",
        "LastName": "Shoppee",
        "AddressStreet": "8 Eagan Park",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94164",
        "PhoneNum": "1-(415)249-2448",
        "Extension": 148,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2013-01-12T00:00:00.000Z",
        "SalaryBonus": 21537,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd3",
        "FirstName": "Bibby",
        "LastName": "Allsupp",
        "AddressStreet": "83986 Granby Road",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92825",
        "PhoneNum": "1-(714)329-6344",
        "Extension": 149,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2003-09-01T00:00:00.000Z",
        "SalaryBonus": 7000,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd4",
        "FirstName": "Staford",
        "LastName": "Jezard",
        "AddressStreet": "665 6th Street",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95838",
        "PhoneNum": "1-(916)762-3748",
        "Extension": 150,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2011-01-28T00:00:00.000Z",
        "SalaryBonus": 3529,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd5",
        "FirstName": "Hillard",
        "LastName": "de Villier",
        "AddressStreet": "5 Corben Court",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94105",
        "PhoneNum": "1-(310)114-1201",
        "Extension": 151,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2011-04-23T00:00:00.000Z",
        "SalaryBonus": 9083,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd6",
        "FirstName": "Alexa",
        "LastName": "Gaythorpe",
        "AddressStreet": "24255 Brown Road",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93305",
        "PhoneNum": "1-(805)755-4039",
        "Extension": 152,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2013-11-19T00:00:00.000Z",
        "SalaryBonus": 9035,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd7",
        "FirstName": "Reinwald",
        "LastName": "Trethewey",
        "AddressStreet": "48184 Eagan Park",
        "AddressState": "CA",
        "AddressCity": "Burbank",
        "AddressZip": "91505",
        "PhoneNum": "1-(626)144-1690",
        "Extension": 153,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2013-03-04T00:00:00.000Z",
        "SalaryBonus": 5577,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd8",
        "FirstName": "Marshal",
        "LastName": "Bucke",
        "AddressStreet": "2789 Shasta Pass",
        "AddressState": "CA",
        "AddressCity": "Fullerton",
        "AddressZip": "92640",
        "PhoneNum": "1-(559)179-6492",
        "Extension": 154,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2009-02-27T00:00:00.000Z",
        "SalaryBonus": 15841,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edd9",
        "FirstName": "Josephine",
        "LastName": "Chubb",
        "AddressStreet": "985 Forest Dale Lane",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95852",
        "PhoneNum": "1-(916)800-7309",
        "Extension": 155,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2006-05-16T00:00:00.000Z",
        "SalaryBonus": 18202,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edda",
        "FirstName": "Lance",
        "LastName": "Buckthorpe",
        "AddressStreet": "69982 Carioca Plaza",
        "AddressState": "CA",
        "AddressCity": "Berkeley",
        "AddressZip": "94712",
        "PhoneNum": "1-(510)914-7469",
        "Extension": 156,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2004-08-27T00:00:00.000Z",
        "SalaryBonus": 1453,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eddb",
        "FirstName": "Lorene",
        "LastName": "Coskerry",
        "AddressStreet": "60 Harbort Court",
        "AddressState": "CA",
        "AddressCity": "Burbank",
        "AddressZip": "91520",
        "PhoneNum": "1-(661)880-3120",
        "Extension": 157,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2012-03-05T00:00:00.000Z",
        "SalaryBonus": 5940,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eddc",
        "FirstName": "Jameson",
        "LastName": "Overstall",
        "AddressStreet": "280 Armistice Junction",
        "AddressState": "CA",
        "AddressCity": "Berkeley",
        "AddressZip": "94712",
        "PhoneNum": "1-(510)203-8761",
        "Extension": 158,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2012-12-15T00:00:00.000Z",
        "SalaryBonus": 3208,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eddd",
        "FirstName": "Sybil",
        "LastName": "Brosi",
        "AddressStreet": "28954 Barby Lane",
        "AddressState": "CA",
        "AddressCity": "Carlsbad",
        "AddressZip": "92013",
        "PhoneNum": "1-(760)867-4970",
        "Extension": 159,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-12-17T00:00:00.000Z",
        "SalaryBonus": 17691,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edde",
        "FirstName": "Annabela",
        "LastName": "Avon",
        "AddressStreet": "72 Sutteridge Circle",
        "AddressState": "CA",
        "AddressCity": "Santa Rosa",
        "AddressZip": "95405",
        "PhoneNum": "1-(707)873-9103",
        "Extension": 160,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2006-09-16T00:00:00.000Z",
        "SalaryBonus": 12979,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eddf",
        "FirstName": "Lorry",
        "LastName": "Cuell",
        "AddressStreet": "65683 Hintze Park",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95838",
        "PhoneNum": "1-(916)860-1623",
        "Extension": 161,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2006-08-21T00:00:00.000Z",
        "SalaryBonus": 22142,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede0",
        "FirstName": "Dennison",
        "LastName": "Boydell",
        "AddressStreet": "425 Washington Center",
        "AddressState": "CA",
        "AddressCity": "Berkeley",
        "AddressZip": "94705",
        "PhoneNum": "1-(510)289-8581",
        "Extension": 162,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2017-07-03T00:00:00.000Z",
        "SalaryBonus": 23868,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede1",
        "FirstName": "Cristen",
        "LastName": "Billam",
        "AddressStreet": "0 Boyd Place",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95833",
        "PhoneNum": "1-(916)335-1039",
        "Extension": 163,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2008-09-28T00:00:00.000Z",
        "SalaryBonus": 7050,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede2",
        "FirstName": "Natka",
        "LastName": "Tailour",
        "AddressStreet": "314 Bonner Way",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92825",
        "PhoneNum": "1-(714)226-5801",
        "Extension": 164,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2015-04-03T00:00:00.000Z",
        "SalaryBonus": 9460,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede3",
        "FirstName": "Natividad",
        "LastName": "Bickmore",
        "AddressStreet": "81 Loftsgordon Place",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93726",
        "PhoneNum": "1-(209)593-7698",
        "Extension": 165,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-10-29T00:00:00.000Z",
        "SalaryBonus": 21428,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede4",
        "FirstName": "Wylma",
        "LastName": "Nurny",
        "AddressStreet": "62153 Fulton Hill",
        "AddressState": "CA",
        "AddressCity": "Fullerton",
        "AddressZip": "92835",
        "PhoneNum": "1-(714)683-3951",
        "Extension": 166,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2011-08-04T00:00:00.000Z",
        "SalaryBonus": 22129,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede5",
        "FirstName": "Brent",
        "LastName": "McGowran",
        "AddressStreet": "594 Upham Trail",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94142",
        "PhoneNum": "1-(415)895-6545",
        "Extension": 167,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2006-01-29T00:00:00.000Z",
        "SalaryBonus": 12583,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede6",
        "FirstName": "Rodge",
        "LastName": "Copyn",
        "AddressStreet": "97878 Toban Pass",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93773",
        "PhoneNum": "1-(559)568-6966",
        "Extension": 168,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2008-12-05T00:00:00.000Z",
        "SalaryBonus": 13182,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede7",
        "FirstName": "Fancie",
        "LastName": "Corwood",
        "AddressStreet": "626 Atwood Park",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90015",
        "PhoneNum": "1-(213)262-3085",
        "Extension": 169,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2016-09-16T00:00:00.000Z",
        "SalaryBonus": 13702,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede8",
        "FirstName": "Jaimie",
        "LastName": "Trobridge",
        "AddressStreet": "0213 Westport Alley",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94110",
        "PhoneNum": "1-(415)925-5353",
        "Extension": 170,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2007-05-23T00:00:00.000Z",
        "SalaryBonus": 14634,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ede9",
        "FirstName": "Sherm",
        "LastName": "Kryszkiecicz",
        "AddressStreet": "1068 Sachs Avenue",
        "AddressState": "CA",
        "AddressCity": "Carlsbad",
        "AddressZip": "92013",
        "PhoneNum": "1-(760)825-6158",
        "Extension": 171,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2013-10-24T00:00:00.000Z",
        "SalaryBonus": 21705,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edea",
        "FirstName": "Arluene",
        "LastName": "Pykerman",
        "AddressStreet": "20 Jenna Drive",
        "AddressState": "CA",
        "AddressCity": "Salinas",
        "AddressZip": "93907",
        "PhoneNum": "1-(831)415-5435",
        "Extension": 172,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2015-09-04T00:00:00.000Z",
        "SalaryBonus": 6312,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edeb",
        "FirstName": "Eliot",
        "LastName": "Malby",
        "AddressStreet": "4825 Mayfield Center",
        "AddressState": "CA",
        "AddressCity": "Berkeley",
        "AddressZip": "94712",
        "PhoneNum": "1-(510)896-6595",
        "Extension": 173,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2005-08-10T00:00:00.000Z",
        "SalaryBonus": 19979,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edec",
        "FirstName": "Northrup",
        "LastName": "Parsand",
        "AddressStreet": "80709 Maple Lane",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92121",
        "PhoneNum": "1-(858)227-3808",
        "Extension": 174,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2016-10-20T00:00:00.000Z",
        "SalaryBonus": 23999,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5eded",
        "FirstName": "Cordula",
        "LastName": "Phillipps",
        "AddressStreet": "98 Reindahl Street",
        "AddressState": "CA",
        "AddressCity": "Garden Grove",
        "AddressZip": "92645",
        "PhoneNum": "1-(714)645-3841",
        "Extension": 175,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2009-06-28T00:00:00.000Z",
        "SalaryBonus": 11721,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edee",
        "FirstName": "Therese",
        "LastName": "Chasson",
        "AddressStreet": "3287 Eliot Road",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95894",
        "PhoneNum": "1-(916)533-4992",
        "Extension": 176,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2009-10-18T00:00:00.000Z",
        "SalaryBonus": 12861,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edef",
        "FirstName": "Kamila",
        "LastName": "Guiden",
        "AddressStreet": "4 Hovde Place",
        "AddressState": "CA",
        "AddressCity": "San Luis Obispo",
        "AddressZip": "93407",
        "PhoneNum": "1-(805)186-3823",
        "Extension": 177,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2003-02-01T00:00:00.000Z",
        "SalaryBonus": 14607,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf0",
        "FirstName": "Rosie",
        "LastName": "Gallihaulk",
        "AddressStreet": "492 Ruskin Hill",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90015",
        "PhoneNum": "1-(562)605-3514",
        "Extension": 178,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2008-03-27T00:00:00.000Z",
        "SalaryBonus": 3118,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf1",
        "FirstName": "Blondie",
        "LastName": "Flintuff",
        "AddressStreet": "611 Mcguire Circle",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95123",
        "PhoneNum": "1-(408)162-0382",
        "Extension": 179,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2004-09-16T00:00:00.000Z",
        "SalaryBonus": 2613,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf2",
        "FirstName": "Ashley",
        "LastName": "De Cleen",
        "AddressStreet": "78808 Vera Avenue",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92812",
        "PhoneNum": "1-(714)160-4329",
        "Extension": 180,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2014-10-01T00:00:00.000Z",
        "SalaryBonus": 18144,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf3",
        "FirstName": "Celisse",
        "LastName": "Jantet",
        "AddressStreet": "41 Bonner Lane",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91117",
        "PhoneNum": "1-(626)692-3730",
        "Extension": 181,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2011-01-30T00:00:00.000Z",
        "SalaryBonus": 8116,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf4",
        "FirstName": "Ingra",
        "LastName": "Presnail",
        "AddressStreet": "55609 Lighthouse Bay Trail",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94154",
        "PhoneNum": "1-(415)651-1941",
        "Extension": 182,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2008-03-26T00:00:00.000Z",
        "SalaryBonus": 17510,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf5",
        "FirstName": "Stevana",
        "LastName": "Abberley",
        "AddressStreet": "6553 Ridgeway Circle",
        "AddressState": "CA",
        "AddressCity": "Riverside",
        "AddressZip": "92519",
        "PhoneNum": "1-(951)462-3023",
        "Extension": 183,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2008-07-06T00:00:00.000Z",
        "SalaryBonus": 5080,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf6",
        "FirstName": "Bale",
        "LastName": "D'Avaux",
        "AddressStreet": "93 6th Terrace",
        "AddressState": "CA",
        "AddressCity": "Torrance",
        "AddressZip": "90505",
        "PhoneNum": "1-(310)147-3224",
        "Extension": 184,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2005-07-12T00:00:00.000Z",
        "SalaryBonus": 22414,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf7",
        "FirstName": "Brenna",
        "LastName": "Carvil",
        "AddressStreet": "96832 Shoshone Pass",
        "AddressState": "CA",
        "AddressCity": "Petaluma",
        "AddressZip": "94975",
        "PhoneNum": "1-(707)682-7921",
        "Extension": 185,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2003-04-03T00:00:00.000Z",
        "SalaryBonus": 22872,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf8",
        "FirstName": "Reider",
        "LastName": "Kislingbury",
        "AddressStreet": "1442 Stang Plaza",
        "AddressState": "CA",
        "AddressCity": "Mountain View",
        "AddressZip": "94042",
        "PhoneNum": "1-(650)127-6252",
        "Extension": 186,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-05-06T00:00:00.000Z",
        "SalaryBonus": 3268,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edf9",
        "FirstName": "Abbie",
        "LastName": "Tewkesberry",
        "AddressStreet": "4898 Fairview Parkway",
        "AddressState": "CA",
        "AddressCity": "Stockton",
        "AddressZip": "95298",
        "PhoneNum": "1-(209)272-9118",
        "Extension": 187,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2016-08-24T00:00:00.000Z",
        "SalaryBonus": 10728,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edfa",
        "FirstName": "Bibbie",
        "LastName": "Kellet",
        "AddressStreet": "8 Buell Avenue",
        "AddressState": "CA",
        "AddressCity": "Santa Barbara",
        "AddressZip": "93150",
        "PhoneNum": "1-(805)551-2480",
        "Extension": 188,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2011-03-28T00:00:00.000Z",
        "SalaryBonus": 690,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edfb",
        "FirstName": "Ben",
        "LastName": "Petschel",
        "AddressStreet": "96 Park Meadow Alley",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93762",
        "PhoneNum": "1-(559)385-6198",
        "Extension": 189,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2008-09-21T00:00:00.000Z",
        "SalaryBonus": 198,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edfc",
        "FirstName": "Hollyanne",
        "LastName": "Cossentine",
        "AddressStreet": "63 Basil Center",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91117",
        "PhoneNum": "1-(626)786-1884",
        "Extension": 190,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2008-03-17T00:00:00.000Z",
        "SalaryBonus": 3857,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edfd",
        "FirstName": "Ailsun",
        "LastName": "Palk",
        "AddressStreet": "0 Novick Park",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90055",
        "PhoneNum": "1-(213)434-2348",
        "Extension": 191,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2016-09-15T00:00:00.000Z",
        "SalaryBonus": 18031,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edfe",
        "FirstName": "Kass",
        "LastName": "Nann",
        "AddressStreet": "1 South Road",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92105",
        "PhoneNum": "1-(619)861-9455",
        "Extension": 192,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2010-10-10T00:00:00.000Z",
        "SalaryBonus": 9908,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5edff",
        "FirstName": "Reggi",
        "LastName": "Andraud",
        "AddressStreet": "3186 School Drive",
        "AddressState": "CA",
        "AddressCity": "Corona",
        "AddressZip": "92883",
        "PhoneNum": "1-(626)707-3239",
        "Extension": 193,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2004-01-16T00:00:00.000Z",
        "SalaryBonus": 12037,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee00",
        "FirstName": "Franny",
        "LastName": "Pester",
        "AddressStreet": "358 Sloan Lane",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94257",
        "PhoneNum": "1-(916)444-2473",
        "Extension": 194,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-06-03T00:00:00.000Z",
        "SalaryBonus": 19684,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee01",
        "FirstName": "Janith",
        "LastName": "Kilmurray",
        "AddressStreet": "45 Namekagon Alley",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92176",
        "PhoneNum": "1-(619)819-7592",
        "Extension": 195,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2005-04-17T00:00:00.000Z",
        "SalaryBonus": 12809,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee02",
        "FirstName": "Cheryl",
        "LastName": "McCullagh",
        "AddressStreet": "4 Park Meadow Alley",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94142",
        "PhoneNum": "1-(415)269-0626",
        "Extension": 196,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2003-01-18T00:00:00.000Z",
        "SalaryBonus": 16659,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee03",
        "FirstName": "Merrie",
        "LastName": "Cornelisse",
        "AddressStreet": "64 Arapahoe Point",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94250",
        "PhoneNum": "1-(916)646-3852",
        "Extension": 197,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2006-04-14T00:00:00.000Z",
        "SalaryBonus": 21410,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee04",
        "FirstName": "Antonie",
        "LastName": "Delamaine",
        "AddressStreet": "5 Beilfuss Point",
        "AddressState": "CA",
        "AddressCity": "Long Beach",
        "AddressZip": "90840",
        "PhoneNum": "1-(562)960-9267",
        "Extension": 198,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2014-11-02T00:00:00.000Z",
        "SalaryBonus": 459,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee05",
        "FirstName": "Cross",
        "LastName": "Cratere",
        "AddressStreet": "8 Rockefeller Lane",
        "AddressState": "CA",
        "AddressCity": "Salinas",
        "AddressZip": "93907",
        "PhoneNum": "1-(831)104-5097",
        "Extension": 199,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2016-01-16T00:00:00.000Z",
        "SalaryBonus": 3394,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee06",
        "FirstName": "Cullan",
        "LastName": "Tregona",
        "AddressStreet": "963 Spaight Avenue",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92825",
        "PhoneNum": "1-(714)543-9670",
        "Extension": 200,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2004-07-08T00:00:00.000Z",
        "SalaryBonus": 2832,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee07",
        "FirstName": "Heddie",
        "LastName": "Janecki",
        "AddressStreet": "62 Northland Parkway",
        "AddressState": "CA",
        "AddressCity": "North Hollywood",
        "AddressZip": "91606",
        "PhoneNum": "1-(323)362-3249",
        "Extension": 201,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2005-04-07T00:00:00.000Z",
        "SalaryBonus": 11109,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee08",
        "FirstName": "Deane",
        "LastName": "Seebert",
        "AddressStreet": "8 Fair Oaks Place",
        "AddressState": "CA",
        "AddressCity": "Torrance",
        "AddressZip": "90505",
        "PhoneNum": "1-(310)707-9764",
        "Extension": 202,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2016-08-26T00:00:00.000Z",
        "SalaryBonus": 618,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee09",
        "FirstName": "Antoinette",
        "LastName": "Corness",
        "AddressStreet": "389 Onsgard Park",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95155",
        "PhoneNum": "1-(408)617-0095",
        "Extension": 203,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2010-06-21T00:00:00.000Z",
        "SalaryBonus": 22391,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee0a",
        "FirstName": "Curtis",
        "LastName": "McElvine",
        "AddressStreet": "36 Dwight Trail",
        "AddressState": "CA",
        "AddressCity": "Ventura",
        "AddressZip": "93005",
        "PhoneNum": "1-(805)155-6057",
        "Extension": 204,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2016-12-30T00:00:00.000Z",
        "SalaryBonus": 14851,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee0b",
        "FirstName": "Rafaela",
        "LastName": "Sille",
        "AddressStreet": "91 Miller Junction",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90055",
        "PhoneNum": "1-(213)231-0934",
        "Extension": 205,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2007-05-28T00:00:00.000Z",
        "SalaryBonus": 11397,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee0c",
        "FirstName": "Ammamaria",
        "LastName": "BoHlingolsen",
        "AddressStreet": "5605 Darwin Circle",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95838",
        "PhoneNum": "1-(916)453-1539",
        "Extension": 206,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2003-07-30T00:00:00.000Z",
        "SalaryBonus": 20666,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee0d",
        "FirstName": "Lorelle",
        "LastName": "Gisbourn",
        "AddressStreet": "5394 Bluestem Point",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91109",
        "PhoneNum": "1-(626)582-9958",
        "Extension": 207,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-01-11T00:00:00.000Z",
        "SalaryBonus": 23215,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee0e",
        "FirstName": "Diarmid",
        "LastName": "Hartburn",
        "AddressStreet": "32 Schmedeman Road",
        "AddressState": "CA",
        "AddressCity": "Moreno Valley",
        "AddressZip": "92555",
        "PhoneNum": "1-(951)416-6628",
        "Extension": 208,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2013-04-07T00:00:00.000Z",
        "SalaryBonus": 19020,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee0f",
        "FirstName": "Fredek",
        "LastName": "Glossup",
        "AddressStreet": "79 Ludington Court",
        "AddressState": "CA",
        "AddressCity": "North Hollywood",
        "AddressZip": "91616",
        "PhoneNum": "1-(213)295-7372",
        "Extension": 209,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2010-12-04T00:00:00.000Z",
        "SalaryBonus": 6351,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee10",
        "FirstName": "Ramsey",
        "LastName": "Artharg",
        "AddressStreet": "30 Coolidge Place",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94237",
        "PhoneNum": "1-(916)646-0010",
        "Extension": 210,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2015-06-26T00:00:00.000Z",
        "SalaryBonus": 15100,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee11",
        "FirstName": "Lucilia",
        "LastName": "Floweth",
        "AddressStreet": "108 Coleman Junction",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93305",
        "PhoneNum": "1-(661)255-3306",
        "Extension": 211,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2013-10-10T00:00:00.000Z",
        "SalaryBonus": 8471,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee12",
        "FirstName": "Ciel",
        "LastName": "Donaghie",
        "AddressStreet": "579 Armistice Plaza",
        "AddressState": "CA",
        "AddressCity": "Carlsbad",
        "AddressZip": "92013",
        "PhoneNum": "1-(760)617-9094",
        "Extension": 212,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-05-05T00:00:00.000Z",
        "SalaryBonus": 8819,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee13",
        "FirstName": "Arvie",
        "LastName": "Martinolli",
        "AddressStreet": "1426 Mccormick Hill",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93715",
        "PhoneNum": "1-(559)793-6205",
        "Extension": 213,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2004-01-16T00:00:00.000Z",
        "SalaryBonus": 20073,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee14",
        "FirstName": "Pattie",
        "LastName": "McFarland",
        "AddressStreet": "8401 Heffernan Plaza",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94147",
        "PhoneNum": "1-(415)777-1069",
        "Extension": 214,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2010-08-11T00:00:00.000Z",
        "SalaryBonus": 21015,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee15",
        "FirstName": "Aimil",
        "LastName": "Telford",
        "AddressStreet": "3839 Morrow Way",
        "AddressState": "CA",
        "AddressCity": "South Lake Tahoe",
        "AddressZip": "96154",
        "PhoneNum": "1-(530)261-3544",
        "Extension": 215,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2016-05-09T00:00:00.000Z",
        "SalaryBonus": 5746,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee16",
        "FirstName": "Tally",
        "LastName": "Strawbridge",
        "AddressStreet": "6518 Forest Dale Hill",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93305",
        "PhoneNum": "1-(661)955-2887",
        "Extension": 216,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2009-06-06T00:00:00.000Z",
        "SalaryBonus": 3018,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee17",
        "FirstName": "Fancie",
        "LastName": "Bernardoux",
        "AddressStreet": "23 Bashford Avenue",
        "AddressState": "CA",
        "AddressCity": "Oceanside",
        "AddressZip": "92056",
        "PhoneNum": "1-(858)334-1025",
        "Extension": 217,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2006-02-01T00:00:00.000Z",
        "SalaryBonus": 17386,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee18",
        "FirstName": "Florinda",
        "LastName": "Winscomb",
        "AddressStreet": "08 Burning Wood Road",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93786",
        "PhoneNum": "1-(559)854-3427",
        "Extension": 218,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-04-22T00:00:00.000Z",
        "SalaryBonus": 22748,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee19",
        "FirstName": "Davin",
        "LastName": "Snelling",
        "AddressStreet": "6 Manufacturers Park",
        "AddressState": "CA",
        "AddressCity": "Whittier",
        "AddressZip": "90610",
        "PhoneNum": "1-(562)498-5914",
        "Extension": 219,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2004-08-31T00:00:00.000Z",
        "SalaryBonus": 3831,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee1a",
        "FirstName": "Ado",
        "LastName": "Meaney",
        "AddressStreet": "55 Amoth Plaza",
        "AddressState": "CA",
        "AddressCity": "Irvine",
        "AddressZip": "92710",
        "PhoneNum": "1-(714)913-2286",
        "Extension": 220,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-10-03T00:00:00.000Z",
        "SalaryBonus": 1709,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee1b",
        "FirstName": "Isidora",
        "LastName": "Gymblett",
        "AddressStreet": "31593 2nd Road",
        "AddressState": "CA",
        "AddressCity": "Oakland",
        "AddressZip": "94627",
        "PhoneNum": "1-(510)489-7720",
        "Extension": 221,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2004-05-08T00:00:00.000Z",
        "SalaryBonus": 12861,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee1c",
        "FirstName": "Bella",
        "LastName": "Breadmore",
        "AddressStreet": "8107 Onsgard Lane",
        "AddressState": "CA",
        "AddressCity": "Chico",
        "AddressZip": "95973",
        "PhoneNum": "1-(916)952-3790",
        "Extension": 222,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2006-03-15T00:00:00.000Z",
        "SalaryBonus": 5555,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee1d",
        "FirstName": "Lavinia",
        "LastName": "Wain",
        "AddressStreet": "868 Stone Corner Place",
        "AddressState": "CA",
        "AddressCity": "Irvine",
        "AddressZip": "92619",
        "PhoneNum": "1-(949)448-2814",
        "Extension": 223,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2015-08-27T00:00:00.000Z",
        "SalaryBonus": 23655,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee1e",
        "FirstName": "Bernie",
        "LastName": "Bowes",
        "AddressStreet": "9 Holy Cross Terrace",
        "AddressState": "CA",
        "AddressCity": "Oakland",
        "AddressZip": "94627",
        "PhoneNum": "1-(510)487-0465",
        "Extension": 224,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-06-11T00:00:00.000Z",
        "SalaryBonus": 9249,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee1f",
        "FirstName": "Hamnet",
        "LastName": "Fallows",
        "AddressStreet": "8 Jay Trail",
        "AddressState": "CA",
        "AddressCity": "San Bernardino",
        "AddressZip": "92424",
        "PhoneNum": "1-(909)875-3987",
        "Extension": 225,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2017-01-05T00:00:00.000Z",
        "SalaryBonus": 23485,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee20",
        "FirstName": "Rubi",
        "LastName": "Rolls",
        "AddressStreet": "2 Main Center",
        "AddressState": "CA",
        "AddressCity": "Long Beach",
        "AddressZip": "90847",
        "PhoneNum": "1-(562)955-2482",
        "Extension": 226,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2015-07-31T00:00:00.000Z",
        "SalaryBonus": 6237,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee21",
        "FirstName": "Wynn",
        "LastName": "Maghull",
        "AddressStreet": "9255 Golf Course Hill",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92137",
        "PhoneNum": "1-(619)578-2825",
        "Extension": 227,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2005-07-27T00:00:00.000Z",
        "SalaryBonus": 5276,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee22",
        "FirstName": "Carol-jean",
        "LastName": "Chrisp",
        "AddressStreet": "499 Coleman Place",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93750",
        "PhoneNum": "1-(559)603-3928",
        "Extension": 228,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2010-11-11T00:00:00.000Z",
        "SalaryBonus": 10094,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee23",
        "FirstName": "Iggie",
        "LastName": "Menendez",
        "AddressStreet": "0943 Anthes Lane",
        "AddressState": "CA",
        "AddressCity": "San Luis Obispo",
        "AddressZip": "93407",
        "PhoneNum": "1-(805)134-0567",
        "Extension": 229,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2009-02-26T00:00:00.000Z",
        "SalaryBonus": 7615,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee24",
        "FirstName": "Malva",
        "LastName": "Vasquez",
        "AddressStreet": "2 School Circle",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95818",
        "PhoneNum": "1-(916)582-4181",
        "Extension": 230,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2007-08-02T00:00:00.000Z",
        "SalaryBonus": 20445,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee25",
        "FirstName": "Nerissa",
        "LastName": "Gribben",
        "AddressStreet": "9 Golf Course Pass",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93778",
        "PhoneNum": "1-(559)123-9794",
        "Extension": 231,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2003-09-29T00:00:00.000Z",
        "SalaryBonus": 18106,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee26",
        "FirstName": "Leonanie",
        "LastName": "Kelleher",
        "AddressStreet": "204 Summerview Plaza",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93773",
        "PhoneNum": "1-(559)997-1487",
        "Extension": 232,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2010-12-25T00:00:00.000Z",
        "SalaryBonus": 21551,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee27",
        "FirstName": "Meggy",
        "LastName": "Crowther",
        "AddressStreet": "20 Dexter Junction",
        "AddressState": "CA",
        "AddressCity": "Escondido",
        "AddressZip": "92030",
        "PhoneNum": "1-(760)189-1708",
        "Extension": 233,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2015-08-18T00:00:00.000Z",
        "SalaryBonus": 8839,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee28",
        "FirstName": "Ardeen",
        "LastName": "Flatley",
        "AddressStreet": "15174 Corscot Circle",
        "AddressState": "CA",
        "AddressCity": "Fresno",
        "AddressZip": "93740",
        "PhoneNum": "1-(559)953-5076",
        "Extension": 234,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2004-03-27T00:00:00.000Z",
        "SalaryBonus": 8041,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee29",
        "FirstName": "Alfie",
        "LastName": "Gheraldi",
        "AddressStreet": "166 Carpenter Drive",
        "AddressState": "CA",
        "AddressCity": "Long Beach",
        "AddressZip": "90805",
        "PhoneNum": "1-(562)404-9712",
        "Extension": 235,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2011-07-30T00:00:00.000Z",
        "SalaryBonus": 1464,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee2a",
        "FirstName": "Chandra",
        "LastName": "Meron",
        "AddressStreet": "130 Glendale Court",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93305",
        "PhoneNum": "1-(805)386-0120",
        "Extension": 236,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2015-12-14T00:00:00.000Z",
        "SalaryBonus": 14039,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee2b",
        "FirstName": "Harris",
        "LastName": "Crannell",
        "AddressStreet": "68 Havey Way",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94263",
        "PhoneNum": "1-(916)956-2859",
        "Extension": 237,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2013-04-15T00:00:00.000Z",
        "SalaryBonus": 19291,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee2c",
        "FirstName": "Dav",
        "LastName": "Treacy",
        "AddressStreet": "54077 Knutson Plaza",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94286",
        "PhoneNum": "1-(916)780-8120",
        "Extension": 238,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2005-02-03T00:00:00.000Z",
        "SalaryBonus": 22623,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee2d",
        "FirstName": "Gilberto",
        "LastName": "Seeks",
        "AddressStreet": "75235 Northfield Junction",
        "AddressState": "CA",
        "AddressCity": "Orange",
        "AddressZip": "92867",
        "PhoneNum": "1-(949)360-2090",
        "Extension": 239,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2010-01-26T00:00:00.000Z",
        "SalaryBonus": 4259,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee2e",
        "FirstName": "Loralee",
        "LastName": "Zukerman",
        "AddressStreet": "14534 Vahlen Pass",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90087",
        "PhoneNum": "1-(213)747-7465",
        "Extension": 240,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2003-11-29T00:00:00.000Z",
        "SalaryBonus": 413,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee2f",
        "FirstName": "Nanci",
        "LastName": "Haugh",
        "AddressStreet": "65 Birchwood Parkway",
        "AddressState": "CA",
        "AddressCity": "Santa Barbara",
        "AddressZip": "93150",
        "PhoneNum": "1-(805)424-3518",
        "Extension": 241,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2006-07-04T00:00:00.000Z",
        "SalaryBonus": 24433,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee30",
        "FirstName": "Calhoun",
        "LastName": "Whitland",
        "AddressStreet": "1953 Banding Alley",
        "AddressState": "CA",
        "AddressCity": "Concord",
        "AddressZip": "94522",
        "PhoneNum": "1-(925)243-6898",
        "Extension": 242,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2016-06-08T00:00:00.000Z",
        "SalaryBonus": 3747,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee31",
        "FirstName": "Pip",
        "LastName": "Napolitano",
        "AddressStreet": "859 Annamark Junction",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94142",
        "PhoneNum": "1-(415)345-0836",
        "Extension": 243,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2017-08-15T00:00:00.000Z",
        "SalaryBonus": 19976,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee32",
        "FirstName": "Kay",
        "LastName": "Durdle",
        "AddressStreet": "356 Mitchell Plaza",
        "AddressState": "CA",
        "AddressCity": "Berkeley",
        "AddressZip": "94712",
        "PhoneNum": "1-(510)958-0381",
        "Extension": 244,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2005-11-09T00:00:00.000Z",
        "SalaryBonus": 7697,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee33",
        "FirstName": "Rupert",
        "LastName": "Warton",
        "AddressStreet": "2702 West Point",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95155",
        "PhoneNum": "1-(408)821-2708",
        "Extension": 245,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2012-09-14T00:00:00.000Z",
        "SalaryBonus": 3393,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee34",
        "FirstName": "Jimmie",
        "LastName": "Hadye",
        "AddressStreet": "12787 Green Crossing",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92191",
        "PhoneNum": "1-(619)757-0583",
        "Extension": 246,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-04-24T00:00:00.000Z",
        "SalaryBonus": 2576,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee35",
        "FirstName": "Richard",
        "LastName": "Baughn",
        "AddressStreet": "08953 Laurel Alley",
        "AddressState": "CA",
        "AddressCity": "Santa Monica",
        "AddressZip": "90410",
        "PhoneNum": "1-(310)689-6930",
        "Extension": 247,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2003-10-24T00:00:00.000Z",
        "SalaryBonus": 765,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee36",
        "FirstName": "Prentiss",
        "LastName": "Euler",
        "AddressStreet": "78372 Becker Crossing",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90050",
        "PhoneNum": "1-(213)549-5495",
        "Extension": 248,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2006-01-20T00:00:00.000Z",
        "SalaryBonus": 14545,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee37",
        "FirstName": "Haleigh",
        "LastName": "Cankett",
        "AddressStreet": "0 Birchwood Avenue",
        "AddressState": "CA",
        "AddressCity": "Santa Monica",
        "AddressZip": "90405",
        "PhoneNum": "1-(818)321-1377",
        "Extension": 249,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2003-06-16T00:00:00.000Z",
        "SalaryBonus": 5074,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee38",
        "FirstName": "Paulina",
        "LastName": "Hansen",
        "AddressStreet": "91983 Vera Avenue",
        "AddressState": "CA",
        "AddressCity": "Long Beach",
        "AddressZip": "90831",
        "PhoneNum": "1-(562)242-6576",
        "Extension": 250,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2016-03-17T00:00:00.000Z",
        "SalaryBonus": 13733,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee39",
        "FirstName": "Erin",
        "LastName": "Sclater",
        "AddressStreet": "083 Morrow Street",
        "AddressState": "CA",
        "AddressCity": "Corona",
        "AddressZip": "92883",
        "PhoneNum": "1-(626)225-9483",
        "Extension": 251,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2012-08-18T00:00:00.000Z",
        "SalaryBonus": 7963,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee3a",
        "FirstName": "Alysa",
        "LastName": "Edson",
        "AddressStreet": "74120 Eastwood Road",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94237",
        "PhoneNum": "1-(916)986-9052",
        "Extension": 252,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2006-10-26T00:00:00.000Z",
        "SalaryBonus": 19026,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee3b",
        "FirstName": "Adda",
        "LastName": "Pauncefort",
        "AddressStreet": "10767 Mitchell Lane",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95828",
        "PhoneNum": "1-(916)143-4354",
        "Extension": 253,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2006-12-21T00:00:00.000Z",
        "SalaryBonus": 5077,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee3c",
        "FirstName": "Torie",
        "LastName": "Dalliwater",
        "AddressStreet": "45 American Plaza",
        "AddressState": "CA",
        "AddressCity": "Riverside",
        "AddressZip": "92513",
        "PhoneNum": "1-(951)303-6076",
        "Extension": 254,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2005-02-18T00:00:00.000Z",
        "SalaryBonus": 1296,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee3d",
        "FirstName": "Tammi",
        "LastName": "Bottoner",
        "AddressStreet": "88200 Lawn Hill",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95838",
        "PhoneNum": "1-(916)545-9567",
        "Extension": 255,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2004-11-25T00:00:00.000Z",
        "SalaryBonus": 152,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee3e",
        "FirstName": "Marie-jeanne",
        "LastName": "Figiovanni",
        "AddressStreet": "2 Shopko Trail",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92160",
        "PhoneNum": "1-(619)391-8476",
        "Extension": 256,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2010-10-30T00:00:00.000Z",
        "SalaryBonus": 7274,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee3f",
        "FirstName": "Zenia",
        "LastName": "Ludlem",
        "AddressStreet": "5141 Kim Court",
        "AddressState": "CA",
        "AddressCity": "Oakland",
        "AddressZip": "94616",
        "PhoneNum": "1-(510)217-6119",
        "Extension": 257,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2007-09-29T00:00:00.000Z",
        "SalaryBonus": 8347,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee40",
        "FirstName": "Jonathon",
        "LastName": "Ricco",
        "AddressStreet": "8 Macpherson Trail",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94280",
        "PhoneNum": "1-(916)729-2466",
        "Extension": 258,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2014-11-11T00:00:00.000Z",
        "SalaryBonus": 237,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee41",
        "FirstName": "Lotte",
        "LastName": "Stocken",
        "AddressStreet": "9052 Dapin Crossing",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90040",
        "PhoneNum": "1-(310)948-7133",
        "Extension": 259,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2013-05-03T00:00:00.000Z",
        "SalaryBonus": 13376,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee42",
        "FirstName": "Helenelizabeth",
        "LastName": "Harwick",
        "AddressStreet": "90525 Melby Parkway",
        "AddressState": "CA",
        "AddressCity": "Oakland",
        "AddressZip": "94660",
        "PhoneNum": "1-(510)511-5451",
        "Extension": 260,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2012-05-29T00:00:00.000Z",
        "SalaryBonus": 2703,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee43",
        "FirstName": "Danya",
        "LastName": "Shreenan",
        "AddressStreet": "4160 Golden Leaf Trail",
        "AddressState": "CA",
        "AddressCity": "Alhambra",
        "AddressZip": "91841",
        "PhoneNum": "1-(626)292-5241",
        "Extension": 261,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2015-10-14T00:00:00.000Z",
        "SalaryBonus": 12409,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee44",
        "FirstName": "Sammie",
        "LastName": "Oliveras",
        "AddressStreet": "46836 Bartelt Terrace",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90010",
        "PhoneNum": "1-(408)201-6485",
        "Extension": 262,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2011-10-07T00:00:00.000Z",
        "SalaryBonus": 16738,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee45",
        "FirstName": "Vin",
        "LastName": "Dancey",
        "AddressStreet": "94653 Bartelt Drive",
        "AddressState": "CA",
        "AddressCity": "Anaheim",
        "AddressZip": "92805",
        "PhoneNum": "1-(310)300-2531",
        "Extension": 263,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2003-08-15T00:00:00.000Z",
        "SalaryBonus": 11863,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee46",
        "FirstName": "Angelle",
        "LastName": "Lefort",
        "AddressStreet": "557 Comanche Trail",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92170",
        "PhoneNum": "1-(619)824-6494",
        "Extension": 264,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2010-12-04T00:00:00.000Z",
        "SalaryBonus": 9912,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee47",
        "FirstName": "Donetta",
        "LastName": "Kurten",
        "AddressStreet": "2 Lyons Court",
        "AddressState": "CA",
        "AddressCity": "Oakland",
        "AddressZip": "94605",
        "PhoneNum": "1-(510)199-6985",
        "Extension": 265,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2006-05-19T00:00:00.000Z",
        "SalaryBonus": 8369,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee48",
        "FirstName": "Wanda",
        "LastName": "Le Breton",
        "AddressStreet": "68027 Northport Drive",
        "AddressState": "CA",
        "AddressCity": "Irvine",
        "AddressZip": "92717",
        "PhoneNum": "1-(714)356-1202",
        "Extension": 266,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2003-09-24T00:00:00.000Z",
        "SalaryBonus": 19851,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee49",
        "FirstName": "Allen",
        "LastName": "Poleye",
        "AddressStreet": "97 Clyde Gallagher Alley",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90101",
        "PhoneNum": "1-(213)321-3191",
        "Extension": 267,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2010-03-31T00:00:00.000Z",
        "SalaryBonus": 16012,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee4a",
        "FirstName": "Edita",
        "LastName": "Couzens",
        "AddressStreet": "54196 Morrow Way",
        "AddressState": "CA",
        "AddressCity": "Riverside",
        "AddressZip": "92505",
        "PhoneNum": "1-(909)643-8504",
        "Extension": 268,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2010-06-16T00:00:00.000Z",
        "SalaryBonus": 10111,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee4b",
        "FirstName": "Donielle",
        "LastName": "Adelman",
        "AddressStreet": "10846 Beilfuss Lane",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90094",
        "PhoneNum": "1-(323)357-3253",
        "Extension": 269,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-12-31T00:00:00.000Z",
        "SalaryBonus": 16727,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee4c",
        "FirstName": "Sayre",
        "LastName": "Myles",
        "AddressStreet": "0675 Browning Junction",
        "AddressState": "CA",
        "AddressCity": "Irvine",
        "AddressZip": "92717",
        "PhoneNum": "1-(714)511-2073",
        "Extension": 270,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2008-01-03T00:00:00.000Z",
        "SalaryBonus": 19510,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee4d",
        "FirstName": "Warren",
        "LastName": "Whitehurst",
        "AddressStreet": "0144 Logan Crossing",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90045",
        "PhoneNum": "1-(310)581-1217",
        "Extension": 271,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2012-05-20T00:00:00.000Z",
        "SalaryBonus": 9822,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee4e",
        "FirstName": "Brnaba",
        "LastName": "Debill",
        "AddressStreet": "950 Sunnyside Junction",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92165",
        "PhoneNum": "1-(619)198-7572",
        "Extension": 272,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-04-13T00:00:00.000Z",
        "SalaryBonus": 13956,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee4f",
        "FirstName": "Selestina",
        "LastName": "Prandin",
        "AddressStreet": "834 Maryland Center",
        "AddressState": "CA",
        "AddressCity": "Bakersfield",
        "AddressZip": "93305",
        "PhoneNum": "1-(661)988-1774",
        "Extension": 273,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2008-07-19T00:00:00.000Z",
        "SalaryBonus": 22322,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee50",
        "FirstName": "Durante",
        "LastName": "Dulson",
        "AddressStreet": "43 Susan Park",
        "AddressState": "CA",
        "AddressCity": "Santa Ana",
        "AddressZip": "92705",
        "PhoneNum": "1-(949)568-9836",
        "Extension": 274,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2009-09-28T00:00:00.000Z",
        "SalaryBonus": 13713,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee51",
        "FirstName": "Cullin",
        "LastName": "Lambeth",
        "AddressStreet": "83 Morning Court",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92153",
        "PhoneNum": "1-(619)439-4603",
        "Extension": 275,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2012-08-03T00:00:00.000Z",
        "SalaryBonus": 10227,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee52",
        "FirstName": "Arlie",
        "LastName": "Risebarer",
        "AddressStreet": "6390 Farmco Street",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "94291",
        "PhoneNum": "1-(916)613-1675",
        "Extension": 276,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2004-03-17T00:00:00.000Z",
        "SalaryBonus": 15979,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee53",
        "FirstName": "Mora",
        "LastName": "Dubose",
        "AddressStreet": "62 Kropf Hill",
        "AddressState": "CA",
        "AddressCity": "Long Beach",
        "AddressZip": "90810",
        "PhoneNum": "1-(323)675-3903",
        "Extension": 277,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2016-04-12T00:00:00.000Z",
        "SalaryBonus": 14097,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee54",
        "FirstName": "Virge",
        "LastName": "Westmerland",
        "AddressStreet": "065 Hanover Alley",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95818",
        "PhoneNum": "1-(530)349-6830",
        "Extension": 278,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2014-06-24T00:00:00.000Z",
        "SalaryBonus": 8875,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee55",
        "FirstName": "Hans",
        "LastName": "Gronav",
        "AddressStreet": "24628 Butternut Junction",
        "AddressState": "CA",
        "AddressCity": "Torrance",
        "AddressZip": "90505",
        "PhoneNum": "1-(310)863-9992",
        "Extension": 279,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2013-08-14T00:00:00.000Z",
        "SalaryBonus": 18481,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee56",
        "FirstName": "Astrix",
        "LastName": "Tidbold",
        "AddressStreet": "4 Upham Point",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92170",
        "PhoneNum": "1-(619)390-2770",
        "Extension": 280,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2014-04-09T00:00:00.000Z",
        "SalaryBonus": 20477,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee57",
        "FirstName": "George",
        "LastName": "Reckhouse",
        "AddressStreet": "810 Starling Lane",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95865",
        "PhoneNum": "1-(916)680-1749",
        "Extension": 281,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2017-02-08T00:00:00.000Z",
        "SalaryBonus": 8547,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee58",
        "FirstName": "Fancy",
        "LastName": "Nathan",
        "AddressStreet": "9 Crownhardt Plaza",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95113",
        "PhoneNum": "1-(650)827-0070",
        "Extension": 282,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2003-05-19T00:00:00.000Z",
        "SalaryBonus": 4140,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee59",
        "FirstName": "Susanetta",
        "LastName": "Samms",
        "AddressStreet": "27233 Express Lane",
        "AddressState": "CA",
        "AddressCity": "San Diego",
        "AddressZip": "92153",
        "PhoneNum": "1-(619)608-0201",
        "Extension": 283,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2009-03-19T00:00:00.000Z",
        "SalaryBonus": 17766,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee5a",
        "FirstName": "Ruy",
        "LastName": "Hrihorovich",
        "AddressStreet": "84960 Dottie Avenue",
        "AddressState": "CA",
        "AddressCity": "Burbank",
        "AddressZip": "91505",
        "PhoneNum": "1-(661)424-1469",
        "Extension": 284,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2007-06-28T00:00:00.000Z",
        "SalaryBonus": 6386,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee5b",
        "FirstName": "Faith",
        "LastName": "Loughlin",
        "AddressStreet": "2300 Washington Center",
        "AddressState": "CA",
        "AddressCity": "Corona",
        "AddressZip": "92878",
        "PhoneNum": "1-(951)681-6635",
        "Extension": 285,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2013-03-04T00:00:00.000Z",
        "SalaryBonus": 16266,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee5c",
        "FirstName": "Deina",
        "LastName": "Dobie",
        "AddressStreet": "39920 Almo Park",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94137",
        "PhoneNum": "1-(415)648-9541",
        "Extension": 286,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2004-03-22T00:00:00.000Z",
        "SalaryBonus": 577,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee5d",
        "FirstName": "Emmeline",
        "LastName": "Milmo",
        "AddressStreet": "03336 Katie Road",
        "AddressState": "CA",
        "AddressCity": "Santa Ana",
        "AddressZip": "92705",
        "PhoneNum": "1-(714)448-7071",
        "Extension": 287,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2008-01-02T00:00:00.000Z",
        "SalaryBonus": 14593,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee5e",
        "FirstName": "Mendy",
        "LastName": "Pirdue",
        "AddressStreet": "89 Coleman Center",
        "AddressState": "CA",
        "AddressCity": "Sacramento",
        "AddressZip": "95823",
        "PhoneNum": "1-(510)244-4203",
        "Extension": 288,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2009-04-14T00:00:00.000Z",
        "SalaryBonus": 11726,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee5f",
        "FirstName": "Sigvard",
        "LastName": "Woolfenden",
        "AddressStreet": "498 Independence Junction",
        "AddressState": "CA",
        "AddressCity": "Salinas",
        "AddressZip": "93907",
        "PhoneNum": "1-(831)163-2073",
        "Extension": 289,
        "Position": {
            "_id": "5997339b04a898b529b5ec0c",
            "PositionName": "Full Stack Developer",
            "PositionDescription": "Responsible for managing both the front-end and back-end frameworks in a full-stack JavaScript environment.",
            "PositionBaseSalary": 72000,
            "__v": 0
        },
        "HireDate": "2012-09-20T00:00:00.000Z",
        "SalaryBonus": 14860,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee60",
        "FirstName": "Arlinda",
        "LastName": "Puckham",
        "AddressStreet": "3 Sunfield Park",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90035",
        "PhoneNum": "1-(323)667-0318",
        "Extension": 290,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2014-07-24T00:00:00.000Z",
        "SalaryBonus": 6251,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee61",
        "FirstName": "Kristo",
        "LastName": "Huggard",
        "AddressStreet": "929 4th Lane",
        "AddressState": "CA",
        "AddressCity": "Whittier",
        "AddressZip": "90610",
        "PhoneNum": "1-(562)632-7571",
        "Extension": 291,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2013-04-20T00:00:00.000Z",
        "SalaryBonus": 16764,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee62",
        "FirstName": "Enid",
        "LastName": "Sleigh",
        "AddressStreet": "0 Hauk Road",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90010",
        "PhoneNum": "1-(714)104-8641",
        "Extension": 292,
        "Position": {
            "_id": "5997339b04a898b529b5ec0a",
            "PositionName": "Database Administrator",
            "PositionDescription": "Works with the System Architect to define and implement the data models to be used in the system.  Responsible for backups, server maintenance, etc.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2017-06-17T00:00:00.000Z",
        "SalaryBonus": 1743,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee63",
        "FirstName": "Pegeen",
        "LastName": "Vasilic",
        "AddressStreet": "03657 Pankratz Street",
        "AddressState": "CA",
        "AddressCity": "Ventura",
        "AddressZip": "93005",
        "PhoneNum": "1-(805)645-8824",
        "Extension": 293,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2006-02-07T00:00:00.000Z",
        "SalaryBonus": 16137,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee64",
        "FirstName": "Gracia",
        "LastName": "Armatidge",
        "AddressStreet": "83608 Cottonwood Parkway",
        "AddressState": "CA",
        "AddressCity": "Pasadena",
        "AddressZip": "91125",
        "PhoneNum": "1-(626)719-3207",
        "Extension": 294,
        "Position": {
            "_id": "5997339b04a898b529b5ec06",
            "PositionName": "Front End Developer",
            "PositionDescription": "Responsible for designing and implementing visual elements that users see and interact with in a web application.  Technologies include HTML, JavaScript, CSS/LESS/SASS and Front-End frameworks (i.e: AngularJS, React.js, etc)",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2011-09-24T00:00:00.000Z",
        "SalaryBonus": 21840,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee65",
        "FirstName": "Codie",
        "LastName": "Skentelbery",
        "AddressStreet": "1 Continental Junction",
        "AddressState": "CA",
        "AddressCity": "San Luis Obispo",
        "AddressZip": "93407",
        "PhoneNum": "1-(805)959-2092",
        "Extension": 295,
        "Position": {
            "_id": "5997339b04a898b529b5ec09",
            "PositionName": "Test Engineer",
            "PositionDescription": "Responsible for designing and automating tests to validate the system.  This includes overall Quality Assurance and User Acceptance testing",
            "PositionBaseSalary": 62000,
            "__v": 0
        },
        "HireDate": "2011-03-30T00:00:00.000Z",
        "SalaryBonus": 11664,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee66",
        "FirstName": "Cornell",
        "LastName": "Fewlass",
        "AddressStreet": "7672 Mesta Center",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94132",
        "PhoneNum": "1-(415)766-1245",
        "Extension": 296,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2006-01-12T00:00:00.000Z",
        "SalaryBonus": 3732,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee67",
        "FirstName": "Helena",
        "LastName": "Bucham",
        "AddressStreet": "04872 Jackson Parkway",
        "AddressState": "CA",
        "AddressCity": "Whittier",
        "AddressZip": "90610",
        "PhoneNum": "1-(562)550-4965",
        "Extension": 297,
        "Position": {
            "_id": "5996fe51c2b12b20e16ba1c9",
            "PositionName": "UI / UX Designer",
            "PositionDescription": "Responsible for User Interface / User Experience design",
            "PositionBaseSalary": 65000,
            "__v": 0
        },
        "HireDate": "2016-12-28T00:00:00.000Z",
        "SalaryBonus": 13749,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee68",
        "FirstName": "Maurita",
        "LastName": "Zold",
        "AddressStreet": "30 Mariners Cove Park",
        "AddressState": "CA",
        "AddressCity": "San Jose",
        "AddressZip": "95123",
        "PhoneNum": "1-(408)214-4433",
        "Extension": 298,
        "Position": {
            "_id": "5997339b04a898b529b5ec0b",
            "PositionName": "Systems Analyst",
            "PositionDescription": "Work with the client(s) to design information systems solutions to help the organization operate more efficiently and effectively. Responsible for requirements gathering and documentation.",
            "PositionBaseSalary": 70000,
            "__v": 0
        },
        "HireDate": "2003-09-19T00:00:00.000Z",
        "SalaryBonus": 11910,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee69",
        "FirstName": "Ollie",
        "LastName": "Hendriksen",
        "AddressStreet": "27522 Spenser Lane",
        "AddressState": "CA",
        "AddressCity": "Los Angeles",
        "AddressZip": "90025",
        "PhoneNum": "1-(213)194-0216",
        "Extension": 299,
        "Position": {
            "_id": "5997339b04a898b529b5ec07",
            "PositionName": "Back End Developer",
            "PositionDescription": "Responsible for server-side web application logic and integration. This includes writng the web services and APIs used by front-end developers and mobile application developers.",
            "PositionBaseSalary": 68000,
            "__v": 0
        },
        "HireDate": "2007-06-10T00:00:00.000Z",
        "SalaryBonus": 14661,
        "__v": 0
    }, {
        "_id": "5997456604a898b529b5ee6a",
        "FirstName": "Donaugh",
        "LastName": "Ashman",
        "AddressStreet": "84 Chive Lane",
        "AddressState": "CA",
        "AddressCity": "San Francisco",
        "AddressZip": "94132",
        "PhoneNum": "1-(415)792-8334",
        "Extension": 300,
        "Position": {
            "_id": "5997339b04a898b529b5ec08",
            "PositionName": "System Architect",
            "PositionDescription": "Systems architects are responsible for the the architecture of the system including identifying hardware and software patterns and strategies to solve a specific business problem",
            "PositionBaseSalary": 73500,
            "__v": 0
        },
        "HireDate": "2006-04-17T00:00:00.000Z",
        "SalaryBonus": 14211,
        "__v": 0
    }],
    Projects: [
        {
        "_id": "599af650fc13ae7e60000064",
        "ProjectName": "Project 1",
        "ProjectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis vel nunc non tincidunt. Proin elementum facilisis ipsum id tincidunt. Phasellus ut orci placerat, cursus ante sed, feugiat elit. Nullam at velit metus. Morbi suscipit fringilla tellus, id tristique massa mollis a. Cras non tincidunt diam. Morbi rutrum enim eget facilisis aliquet. Ut mattis euismod fermentum. Vestibulum ut tincidunt purus, et porttitor mi.",
        "ProjectStartDate": "2007-01-17T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000065",
        "ProjectName": "Project 2",
        "ProjectDescription": "Nunc at imperdiet purus. Nullam tincidunt orci nibh, eget pellentesque metus rutrum tincidunt. Donec diam purus, dictum non mollis id, facilisis at urna. Nunc euismod bibendum ipsum sed pellentesque. Proin faucibus urna nisi, quis vulputate dolor facilisis vitae. Donec enim magna, posuere id hendrerit sit amet, elementum id dui. Mauris lectus ligula, volutpat eget lacus non, lobortis vestibulum enim. Fusce id pretium risus. Morbi in porttitor arcu, vitae malesuada nunc. Vestibulum mattis bibendum ligula et congue. Pellentesque tempor magna ut magna tempus ullamcorper.",
        "ProjectStartDate": "2009-01-21T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000066",
        "ProjectName": "Project 3",
        "ProjectDescription": "Morbi aliquam sodales fringilla. Praesent eget ultricies dolor, vestibulum sollicitudin nulla. Morbi ut luctus magna, vel gravida nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eu mollis nunc. Cras ac metus nulla. Quisque non urna id neque tristique vestibulum. Aliquam at sem at sem facilisis molestie a nec turpis. Nulla facilisi. Nulla et risus non urna maximus facilisis. Mauris vulputate est at nunc semper placerat.",
        "ProjectStartDate": "2008-08-18T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000067",
        "ProjectName": "Project 4",
        "ProjectDescription": "Nullam sit amet dapibus ligula. Donec convallis neque ut consequat laoreet. Mauris vulputate rhoncus erat, et suscipit ipsum tristique at. Aenean venenatis pretium velit, at semper quam dictum quis. Fusce elementum dictum diam, quis consequat erat feugiat sed. Quisque tortor enim, dignissim ac auctor sit amet, dapibus vitae justo. Suspendisse pharetra feugiat massa, vel fermentum arcu tincidunt a. Donec a placerat enim. Mauris convallis orci sed neque consequat iaculis. Curabitur maximus, leo at euismod mattis, ipsum tortor tristique nulla, ultrices semper eros ipsum nec ex. Nunc vitae tempor urna. Ut tincidunt orci ac laoreet vehicula. Morbi sit amet convallis risus. Quisque sed leo sed justo mattis consectetur at vitae risus. Sed quis tortor porttitor, venenatis mi in, porttitor quam. Integer sit amet dolor bibendum, auctor turpis vel, mattis quam.",
        "ProjectStartDate": "2005-10-12T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000068",
        "ProjectName": "Project 5",
        "ProjectDescription": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec viverra ex. Etiam massa urna, aliquam at malesuada sed, suscipit a neque. Sed laoreet ullamcorper erat ultricies tincidunt. Proin lobortis velit vel sem varius eleifend. Ut vitae purus turpis. Nulla condimentum, ex sed fringilla commodo, felis diam consequat justo, nec efficitur augue dolor ac lacus. Donec dictum auctor mi faucibus consectetur.",
        "ProjectStartDate": "2016-10-22T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000069",
        "ProjectName": "Project 6",
        "ProjectDescription": "Nullam faucibus vestibulum lorem. In mauris justo, faucibus in dignissim sit amet, euismod et ligula. Etiam sed elit nec ante cursus pellentesque. Cras arcu tellus, malesuada eu ex et, facilisis lacinia justo. Nam tempor mi dictum, posuere nunc ut, eleifend metus. Phasellus auctor vestibulum elit, at tincidunt nibh vehicula luctus. Donec ac nibh justo. Nullam luctus, lectus vitae maximus egestas, ligula felis suscipit nisl, vel eleifend purus leo a libero. Aliquam posuere facilisis dictum. Etiam eu placerat quam. Maecenas vel efficitur massa, quis rhoncus tortor. Aenean in sollicitudin dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur varius venenatis fringilla.",
        "ProjectStartDate": "2003-11-20T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000006a",
        "ProjectName": "Project 7",
        "ProjectDescription": "Aenean tristique molestie nisi, non posuere orci sollicitudin nec. Vestibulum id nibh augue. Nam iaculis fermentum mauris, ac interdum massa luctus a. Curabitur a rhoncus purus. Vivamus vel urna ac odio viverra egestas. Ut a nisl in nisi aliquam molestie ac in urna. Nunc sit amet justo eget nisl elementum vestibulum. Sed blandit eros ullamcorper arcu placerat rutrum. Praesent dignissim ligula quis nulla porta venenatis. Nullam condimentum iaculis metus eget dictum. Suspendisse quam tortor, elementum id tristique quis, consectetur eget neque. Donec suscipit, tortor a luctus tempor, ligula diam vehicula est, quis malesuada magna nisl a enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam id mi enim.",
        "ProjectStartDate": "2003-11-06T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000006b",
        "ProjectName": "Project 8",
        "ProjectDescription": "Praesent elementum at orci ac sagittis. Sed quis arcu maximus, mattis elit a, feugiat dolor. Phasellus vehicula lorem eu imperdiet feugiat. Suspendisse nec libero scelerisque, vestibulum sem ac, congue ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque mauris nec dolor fringilla, at bibendum nisi luctus. Vestibulum tempor, velit quis varius dapibus, nisi neque feugiat metus, elementum vehicula ante turpis vel diam. Vivamus sagittis lacus eget lacus laoreet tempor et ut turpis. Duis egestas ullamcorper lobortis. In at venenatis est. Proin augue tortor, malesuada vel varius ut, rhoncus a tellus.",
        "ProjectStartDate": "2010-08-21T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000006c",
        "ProjectName": "Project 9",
        "ProjectDescription": "Donec ut malesuada risus. Integer rutrum hendrerit urna in viverra. Integer scelerisque auctor ornare. Cras sapien purus, euismod vel dictum at, viverra vel tellus. Proin lobortis ultrices mi, quis dignissim urna tempus sed. Integer dictum pulvinar mattis. Quisque eget purus placerat tortor bibendum vulputate a sit amet ex. Donec et tortor tellus. Nunc consequat, metus eget vehicula aliquam, augue lectus fringilla diam, sit amet tempor felis urna non diam. Cras augue est, porta molestie sapien nec, pellentesque elementum mauris. Nulla quis leo eu elit dignissim dapibus sit amet non lorem. Mauris ac tellus luctus, luctus nunc vel, elementum quam. Nunc consectetur libero eget facilisis feugiat.",
        "ProjectStartDate": "2017-06-11T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000006d",
        "ProjectName": "Project 10",
        "ProjectDescription": "Praesent a arcu posuere ligula placerat viverra. Aenean euismod sapien turpis, a scelerisque sem tempor vel. Cras hendrerit convallis arcu, sit amet sodales est sodales vitae. Nam faucibus at dolor vitae iaculis. Ut vestibulum odio erat, quis fringilla purus porta sed. Curabitur et tortor at nisi molestie dapibus sagittis lobortis justo. In in nisi ultrices, luctus felis quis, pharetra lacus. Cras ligula nisi, efficitur eu eros quis, vehicula rutrum nibh. Aliquam mattis magna ut placerat faucibus. Proin faucibus tincidunt varius. Nullam dignissim eros in ornare consectetur. In eget erat dignissim dolor congue luctus. Aenean nulla risus, tincidunt ac porttitor in, posuere vitae dui. Pellentesque rutrum, purus at rhoncus rutrum, justo urna tempus leo, et efficitur sapien nibh eleifend mi. Ut ac consectetur orci.",
        "ProjectStartDate": "2017-06-15T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000006e",
        "ProjectName": "Project 11",
        "ProjectDescription": "Cras bibendum rutrum nisi in iaculis. Suspendisse volutpat sollicitudin ornare. Nunc vel ligula mi. Sed in lacus lobortis, ultricies ligula id, ultricies urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere odio sed dolor pretium accumsan. Mauris eleifend tellus ac nulla venenatis, sit amet bibendum arcu convallis. Cras sagittis consectetur dui, vitae tempor eros tincidunt eget. Pellentesque enim sem, accumsan non mauris sed, suscipit eleifend metus. Integer ultrices libero tellus, vitae interdum tortor viverra at. Nunc blandit, est quis sagittis laoreet, eros lectus imperdiet odio, sagittis tristique dui odio vitae neque.",
        "ProjectStartDate": "2003-11-30T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000006f",
        "ProjectName": "Project 12",
        "ProjectDescription": "Fusce at augue nec nibh ullamcorper pellentesque. Ut pretium fringilla mauris ut pharetra. Mauris at sapien non diam commodo sagittis. Ut cursus nibh justo, ut sollicitudin sapien molestie ac. Phasellus sed nisi libero. Pellentesque ut orci at enim laoreet pellentesque non eu nisl. Sed eget aliquet neque. Proin at congue quam. Donec et cursus augue. Morbi suscipit tellus quis mauris commodo, eget fermentum massa euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis sed turpis in pharetra. Suspendisse potenti. Curabitur nisi urna, finibus pulvinar sem a, vulputate pulvinar felis.",
        "ProjectStartDate": "2007-12-12T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000070",
        "ProjectName": "Project 13",
        "ProjectDescription": "Vestibulum venenatis eget sem ut vestibulum. Aliquam aliquet urna nec lobortis dapibus. Aliquam mauris turpis, convallis quis porta vulputate, congue at nibh. Phasellus nec laoreet lacus. Nam fringilla rhoncus consequat. Nullam porta fringilla metus vel dapibus. Nullam ac purus non quam lobortis laoreet. Integer feugiat, neque sodales convallis eleifend, leo leo malesuada massa, nec ultricies massa nulla ut augue. Nullam at tincidunt nunc. In aliquam fermentum turpis, nec iaculis justo pulvinar varius. Suspendisse tincidunt ipsum porttitor nisi cursus lobortis. Mauris augue nisl, accumsan vitae lectus non, vulputate sagittis lectus. Nunc id dui scelerisque tellus vulputate hendrerit vitae vestibulum eros. Sed et tincidunt dui.",
        "ProjectStartDate": "2003-07-01T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000071",
        "ProjectName": "Project 14",
        "ProjectDescription": "Aliquam erat volutpat. Phasellus eleifend purus in tortor posuere, id lacinia ex pellentesque. Ut eget mauris vel ante luctus posuere ut ut metus. Vivamus pellentesque enim quis ligula gravida accumsan. Proin leo ligula, vestibulum ut est et, mattis sodales dui. Nullam non mi eleifend, ullamcorper massa eu, sodales metus. Praesent sed porta ex. Maecenas eu lorem arcu. Curabitur at pulvinar velit. Nunc sit amet tempus metus. Ut et nisi nibh. Phasellus ipsum lacus, sodales eu sapien ac, pulvinar congue nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "ProjectStartDate": "2005-04-23T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000072",
        "ProjectName": "Project 15",
        "ProjectDescription": "Donec vitae sem vitae est auctor tincidunt ac sit amet arcu. Proin arcu quam, pretium vel lectus vitae, mattis pharetra lorem. Vestibulum sit amet est quis augue convallis sagittis dictum imperdiet nunc. Morbi enim elit, elementum ac purus a, dignissim ultrices risus. Proin vitae justo blandit, viverra dui sed, pellentesque tellus. Suspendisse et consequat diam, nec luctus enim. Nunc auctor lacus nec elementum tincidunt. Cras risus sapien, accumsan quis ultricies in, maximus vel leo. Fusce a nunc facilisis, condimentum nibh accumsan, facilisis erat. Cras sapien augue, porta sed fermentum condimentum, ullamcorper sit amet nulla.",
        "ProjectStartDate": "2004-10-11T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000073",
        "ProjectName": "Project 16",
        "ProjectDescription": "In interdum mollis nunc at placerat. Mauris in mi sit amet elit accumsan ornare. In a leo a enim convallis tempor. Nunc iaculis, elit vel bibendum ultricies, augue risus imperdiet felis, id semper ex risus scelerisque nunc. Cras vitae arcu nec dui iaculis blandit. Aenean non quam eu leo egestas rutrum. Praesent non turpis finibus justo lacinia ornare dignissim non erat. Sed eleifend, justo sit amet viverra scelerisque, sem ex tincidunt purus, eu bibendum lacus sapien vitae magna. Nam eget varius mi. Praesent neque augue, vulputate eget lorem ac, porta sagittis libero. Ut pulvinar, ante non viverra pellentesque, nibh enim faucibus magna, sit amet gravida enim leo non orci. Sed pellentesque, nibh in mattis tempus, turpis lacus dapibus nisi, quis gravida augue odio et mauris. Pellentesque scelerisque quam risus, non sagittis ligula ornare eget. Quisque rhoncus tristique sagittis. Etiam faucibus nunc vitae tincidunt varius.",
        "ProjectStartDate": "2003-12-18T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000074",
        "ProjectName": "Project 17",
        "ProjectDescription": "Etiam bibendum nisi non ipsum iaculis porta. Nullam suscipit felis ullamcorper aliquet ullamcorper. Morbi non placerat dolor. Donec congue, mauris a feugiat tincidunt, mi sem mollis arcu, nec cursus diam libero interdum velit. Suspendisse semper pharetra nisl vel interdum. Nullam ullamcorper maximus libero vitae viverra. Integer at sollicitudin turpis. In placerat nulla quis magna sodales imperdiet. Pellentesque tincidunt pretium blandit. Ut orci turpis, auctor vitae luctus nec, placerat in neque.",
        "ProjectStartDate": "2005-02-16T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000075",
        "ProjectName": "Project 18",
        "ProjectDescription": "Sed fermentum erat mauris, vel commodo justo vehicula id. Ut efficitur odio vitae pretium tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt massa ut metus consequat porttitor. Cras sit amet dui id turpis pellentesque placerat. Aliquam laoreet finibus ipsum eu dignissim. Maecenas posuere mauris tortor, vitae fermentum nulla feugiat ac.",
        "ProjectStartDate": "2006-03-19T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000076",
        "ProjectName": "Project 19",
        "ProjectDescription": "Quisque vulputate tellus orci, at condimentum nibh hendrerit vitae. Nulla et magna faucibus, facilisis lacus in, volutpat nunc. Nunc consequat sit amet quam a lobortis. Fusce sit amet nibh a lacus finibus scelerisque. Phasellus ullamcorper posuere magna, ac rutrum arcu lacinia nec. Morbi id dignissim massa. Sed at dui viverra nunc porta accumsan sed eu enim. Etiam venenatis lectus urna, at pulvinar tellus ultricies eget. Morbi sed odio ac nunc mattis congue. Donec justo lectus, laoreet eu ultricies vitae, rutrum condimentum nibh. Nunc nulla est, mattis sit amet lacus ac, faucibus commodo magna. Phasellus tempor metus eu tellus porta, quis aliquam nisl pretium.",
        "ProjectStartDate": "2011-10-30T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000077",
        "ProjectName": "Project 20",
        "ProjectDescription": "Donec gravida libero lacinia est condimentum, a consectetur odio scelerisque. Vivamus quis nunc sed diam vulputate egestas a ut leo. Maecenas auctor velit felis, ac pretium neque blandit at. Vivamus aliquet velit ut varius porttitor. Ut dictum egestas arcu. In vulputate lectus vitae lacus accumsan congue. Donec eget molestie arcu. Vestibulum metus sem, tristique sed sem et, lobortis tempus justo. Nulla lacus nulla, consectetur in massa eget, ultricies malesuada felis. Phasellus iaculis tempus commodo. Donec in cursus ante. Aliquam augue est, ultricies ut nibh et, finibus ultrices leo. Donec at metus at est aliquam blandit.",
        "ProjectStartDate": "2003-07-22T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000078",
        "ProjectName": "Project 21",
        "ProjectDescription": "Sed sed dui turpis. Praesent porta in massa ac tincidunt. Quisque gravida neque at porttitor cursus. Aliquam iaculis erat in orci aliquet, non suscipit turpis molestie. Sed convallis est id nulla elementum aliquet. Quisque sed congue nulla. Nulla tellus orci, dignissim nec sapien eu, dictum venenatis urna. Quisque ac tortor ac enim vulputate posuere et eget nibh. Maecenas egestas neque vitae tortor dictum, vel imperdiet elit interdum. Aliquam tempor orci sit amet ultricies cursus.",
        "ProjectStartDate": "2012-03-22T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000079",
        "ProjectName": "Project 22",
        "ProjectDescription": "Nam vehicula augue ut lobortis bibendum. Etiam lacinia feugiat magna, lobortis placerat nunc blandit quis. Ut interdum elit quis sapien tincidunt efficitur. Vivamus fringilla arcu vitae lacus aliquet sodales. Sed efficitur porta laoreet. Praesent congue pellentesque dolor a luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Donec vel ullamcorper velit. Cras volutpat convallis velit, sit amet faucibus mauris. Vivamus quis ipsum turpis. Cras luctus at massa sed accumsan. Quisque vitae dignissim mauris.",
        "ProjectStartDate": "2016-04-05T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000007a",
        "ProjectName": "Project 23",
        "ProjectDescription": "Donec et posuere metus, a faucibus ipsum. Proin nec vulputate arcu. Suspendisse egestas, risus sed convallis iaculis, turpis magna suscipit augue, finibus vehicula libero ligula at est. Morbi vel quam ipsum. Praesent fermentum id nibh sed volutpat. Nulla finibus a lorem sit amet bibendum. Donec dictum sodales augue ut hendrerit. Fusce efficitur risus et justo porta sagittis. Phasellus in magna in urna hendrerit pulvinar. Vivamus dapibus interdum cursus.",
        "ProjectStartDate": "2015-09-20T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000007b",
        "ProjectName": "Project 24",
        "ProjectDescription": "Ut tincidunt non arcu a luctus. Nullam viverra id massa et posuere. Phasellus at sem vitae tellus varius pretium. Phasellus lobortis augue sed pretium porttitor. Ut eget tellus non ex ornare ultricies. Vestibulum arcu mauris, feugiat et mi sit amet, ultricies pulvinar nunc. Praesent sit amet vestibulum sem.",
        "ProjectStartDate": "2016-10-14T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000007c",
        "ProjectName": "Project 25",
        "ProjectDescription": "Etiam consequat sapien sem, eget suscipit ligula aliquam eget. Quisque pulvinar vel dolor at tincidunt. Mauris sagittis risus sapien, commodo dapibus justo interdum ac. Aenean tincidunt, felis sed pharetra consequat, mauris urna pharetra leo, in tincidunt elit turpis eu nulla. Nulla facilisi. Nulla eget tincidunt elit. Praesent lacinia, velit vel lacinia bibendum, eros erat vestibulum urna, at condimentum augue diam eget tortor. Cras iaculis odio id orci vestibulum accumsan. Nulla facilisi. Morbi cursus ultrices consequat. In tempus massa tellus, sed tempus neque auctor id. Sed aliquam nulla venenatis, finibus nunc et, varius neque. Sed placerat viverra lacus.",
        "ProjectStartDate": "2007-07-22T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000007d",
        "ProjectName": "Project 26",
        "ProjectDescription": "Praesent urna felis, lobortis at finibus sed, pulvinar sit amet eros. Morbi pellentesque consectetur nisi sit amet tempus. Suspendisse nisi felis, auctor ac auctor vitae, rhoncus gravida lacus. Nam maximus sapien sed vulputate vulputate. Fusce eu sapien euismod, molestie ante aliquet, molestie leo. Integer tincidunt libero felis, at consectetur ligula efficitur quis. Ut vel mattis nulla, a eleifend arcu. Proin dictum vel ipsum vel posuere. Maecenas bibendum quam in leo tempor semper. Curabitur ut maximus massa, sed vehicula risus. Aliquam quis neque commodo, dapibus leo et, euismod est. Sed congue venenatis nunc, et finibus dui.",
        "ProjectStartDate": "2013-09-11T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000007e",
        "ProjectName": "Project 27",
        "ProjectDescription": "Nullam fringilla iaculis diam, sed egestas mauris volutpat et. Nulla id semper velit, at venenatis sapien. Nullam mattis dictum neque. Pellentesque magna sapien, ultrices ut nisl non, sollicitudin aliquet erat. Phasellus viverra rutrum felis in laoreet. Sed tincidunt aliquam nunc, non aliquam diam convallis in. Nunc malesuada magna non nibh iaculis, vel rhoncus eros tempus. Sed feugiat neque quam.",
        "ProjectStartDate": "2005-01-14T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e6000007f",
        "ProjectName": "Project 28",
        "ProjectDescription": "Ut eu euismod enim. Mauris luctus ante quis mauris hendrerit dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Sed rutrum nec velit in imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sagittis ex elit, vitae congue eros tempor semper. Proin massa dolor, pulvinar a mi nec, aliquam tristique ligula. Curabitur tristique, ante sollicitudin varius fringilla, tellus augue maximus nisl, in scelerisque justo lorem non est.",
        "ProjectStartDate": "2009-03-09T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000080",
        "ProjectName": "Project 29",
        "ProjectDescription": "Mauris velit ipsum, dapibus eu varius nec, bibendum eu diam. Phasellus mattis lacus et neque tempus, nec dignissim sem tristique. Morbi sapien diam, laoreet eu maximus eu, ultrices eget sem. Aliquam ut tellus sit amet ex blandit efficitur quis sed leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam laoreet purus non accumsan vestibulum. Nulla faucibus, nisi vitae finibus malesuada, leo ligula lobortis lorem, eget feugiat enim neque a mauris. Sed eu imperdiet quam, sit amet posuere nibh. Aenean faucibus est quis tellus feugiat accumsan. Morbi varius risus sem, vel venenatis velit posuere eu. Mauris cursus magna quis rutrum gravida. Maecenas blandit, augue nec placerat porttitor, libero nisi venenatis orci, vel eleifend dui sapien eget enim. Curabitur egestas porttitor nisi, quis pellentesque justo. Donec suscipit rutrum purus ac tincidunt. Maecenas venenatis libero non fermentum lacinia. Aenean ac justo sit amet lorem convallis egestas.",
        "ProjectStartDate": "2005-04-17T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }, {
        "_id": "599af650fc13ae7e60000081",
        "ProjectName": "Project 30",
        "ProjectDescription": "Nunc at massa accumsan, luctus libero ac, sodales nisl. Aenean pulvinar erat ut augue fringilla, in varius augue dapibus. Vestibulum nulla orci, commodo at cursus in, aliquet vel dui. Cras tempor nisi quam. Pellentesque commodo dui sit amet eros gravida, ac mattis tortor vehicula. Curabitur rutrum eget mi quis posuere. Aliquam nec felis sit amet arcu faucibus tempor.",
        "ProjectStartDate": "2006-05-13T00:00:00.000Z",
        "ProjectEndDate": null,
        "__v": 0
    }],
};
export default mockData
