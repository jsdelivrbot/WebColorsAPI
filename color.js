var request = require('request');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
        function(err, res, body){
            var colorList = JSON.parse(body);
            var userChoice = process.argv[2];
            colorList.map(function(val){
                if(val.name === userChoice){
                    console.log(val.rgb.r + ' ' + val.rgb.g + ' ' + val.rgb.b);
                }
            });
        });

