var NaturalNameGenerator = require('natural-filename-generator');

var faker  = require('faker'); // Faker.js library
var moment = require('moment');
var Chance = require('chance');
var md5 = require('md5');
 

var vols = require("./vols");
var paths = require("./paths")

// var vip = require("./volumeip")
// var volpre = require("./volumeprefix")

var chance = new Chance();
var api = {}
var output;

for( var x = 0; x<10; x++) {

//api.thing1 = system
api.thing1 = faker.system.fileName();
api.thing2 = faker.system.commonFileName();
api.thing3 = faker.system.mimeType();
api.thing4 = faker.system.commonFileType();
api.thing5 = faker.system.commonFileExt();
api.thing6 = faker.system.fileType();
api.thing7 = faker.system.fileExt();
api.thing8 = faker.system.directoryPath();
api.thing9 = faker.system.filePath();
api.thing10 = faker.system.semver();
api.name       = trailname();
api.username   = faker.internet.userName();
api.chance = chance.word({ syllables: 5 });

api.rating     = chance.integer({ min: 0, max:50 }) / 10;
api.favorites  = Math.ceil(api.rating * chance.integer({ min: 1, max:15 }));
api.visits     = api.favorites * chance.integer({ min: 1, max:15 })
//api.difficulty = random.numeric(1, 5);
//api.terrain    = random.numeric(1, 5);
//api.size       = list(['mini', 'small', 'medium', 'big', 'large']);

// Created 30 - 900 days ago
var created = moment().subtract( chance.integer({ min:30, max:9000}), 'days');

// Moment accepts timestamps in milliseconds
api.created = moment(created).format('LLLL');

// Updated date will be before the present but after the creation date
//var updated = timestamp() - random.numeric(0, timestamp() - created);
//api.updated = moment(updated * 1000).format('LL');

api.coords = `${faker.address.latitude()} ${faker.address.longitude()}`;

//console.log(api);
}
// Snippet code
function trailname() {
    var trails     = ["trail", "path", "route", "stream", "walkway", "beaten path", "footpath"]
    var adjectives = ["dusty", "old", "scenic", "historic", "shady", "sunny"];
    var colors     = ["red", "orange", "yellow", "green", "blue", "indigo", "viovar"];

    var combos = [
        [colors, trails],
        [adjectives, trails],
        [colors, adjectives, trails]
    ];

   
}


 
var g = new NaturalNameGenerator();
    
// for(var i = 0; i < 100; i++){
//     var name = g.generate();
//     console.log("\\VOL" + name.substr(0,8) + "\\");
// }
// console.log(vols)

for (var i = 0; i<100;i++) {
    
    // Volume name        
    //console.log(vols[i])  
    //Random Vol 
   // console.log('"' + vip[chance.integer({min:0, max:9})] + ":" + volpre[chance.integer({min:0, max:5})] + '",')
    
    
}

//     // DIR PATH
// for(var inn=0; inn<=150;inn++){    
//     var dir =  g.generate();
//     var rand = chance.integer({min:1, max:5})
  
//     for(var loop=0;loop<=rand;loop++){
//     dir += "\\\\" + chance.word({ syllables: chance.integer({min:2, max:5 }) }) //+ "\\" +  chance.word({ syllables: chance.integer({min:2, max:5 }) }) )
//     }
//     // FINAL PATH
//     console.log("\\\\" + dir +"\",")
// }

for (var i = 0; i<5;i++) {
    
    // Path name        
    //console.log(paths[i])  
    //Random Vol 
  // console.log(paths[chance.integer({min:0, max:50})])
    
    
}


for (var i = 0; i<50;i++) {
    // Object type name        
  //  console.log(chance.integer({min:1, max:6}))
}


for (var i = 0; i<50;i++) {
    // Object type name        
    //console.log(chance.integer({min:1, max:200000000}))
}




for (var i = 0; i<50;i++) {
    // Object type name      
   // console.log("0x" + md5( paths[chance.integer({min:1, max:50})] + vols[chance.integer({min:1, max:50})]  ));
  //  console.log(chance.integer({min:1, max:6}))
}


for (var count=0;count<100;count++){ 

    var fileItem={}
   

    fileItem.fileName = faker.system.commonFileName();
    fileItem.path =  paths[chance.integer({min:1, max:99})]
    fileItem.containerPath = null
    fileItem.volume = vols[chance.integer({min:1, max:99})]
    fileItem.ObjectTypeID = chance.integer({min:1, max:6})
    fileItem.employeeID = 1
    fileItem.size = chance.integer({min:1, max:200000000})
    
// Moment accepts timestamps in milliseconds

    var created = moment().subtract( chance.integer({ min:63360000, max:9999990000}), 'seconds');
    fileItem.ctime =  moment(created).format('DD/MM/YYYY HH:mm:ss.SSS');
    var modified = moment().subtract( chance.integer({ min:31560000, max:63360000}), 'seconds');
    fileItem.mtime =  moment(modified).format('DD/MM/YYYY HH:mm:ss.SSS'); // faker.system.commonFileName();
    var accessed = moment().subtract( chance.integer({ min:0, max:31560000}), 'seconds');
    fileItem.atime =  moment(accessed).format('DD/MM/YYYY HH:mm:ss.SSS'); // faker.system.commonFileName();
    var recModified = moment().subtract( chance.integer({ min:0, max:3156}), 'seconds');
    fileItem.modified =  moment(recModified).format('DD/MM/YYYY HH:mm:ss.SSS'); // faker.system.commonFileName();
    fileItem.created = fileItem.modified
    fileItem.metaHash = "0x" + md5( fileItem.path + fileItem.ctime + fileItem.fileName  );
    fileItem.isDeleted = 0
    fileItem.amID = null

  
    
   // console.log(fileItem)
    
    output += `
    INSERT INTO [dbo].[fileInfo]
           ([fileName]
           ,[path]
           ,[containerPath]
           ,[volumeName]
           ,[objectTypeID]
           ,[employeeID]
           ,[size]
           ,[cTime]
           ,[mTime]
           ,[aTime]
           ,[modifiedDate]
           ,[createdDate]
           ,[metaHash]
           ,[isDeleted]
           ,[amID])
     VALUES
           ('${ fileItem.fileName }'
           ,'${ fileItem.path }'
           ,${ fileItem.containerPath }
           ,'${ fileItem.volume }'
           ,${ fileItem.ObjectTypeID }
           ,${ fileItem.employeeID } 
           ,'${ fileItem.size }' 
           ,'${ fileItem.ctime }'
           ,'${ fileItem.mtime }'
           ,'${ fileItem.atime }'
           ,'${ fileItem.created }'
           ,'${ fileItem.created }'
           , CONVERT(varbinary(16),'${ fileItem.metaHash }')
           ,${ fileItem.isDeleted }
           ,${ fileItem.amID })
GO
`
}

//
 console.log(output)