var bands = require ('./bands.js');
var type =  process.argv[2]


if(type === 'classic'){
    console.log("a Classic band is: ", bands.classic)
} else if (type === 'rap'){
    console.log("a Rap band is: ", bands.rap)
} else if (type === 'punk'){
    console.log("a Punk band is: ", bands.punk)
}




