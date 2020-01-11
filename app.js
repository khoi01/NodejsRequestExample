const request = require('request')
    var username = "nagiosadmin";
    var password = "1234";
    var options = {
        url: "http://192.168.1.111/nagios/cgi-bin/statusjson.cgi?query=hostcount&parenthost=none&childhost=none&hostgroup=linux-servers",
        auth: {
          user: username,
          password: password
        }
      }

    setInterval(() => {
        //method get called
        GetData()
    }, 5000);

      


function GetData(){

    request(options, function (err, res, body) {
        if (err) {
          console.dir(err)
          return
        }
        if (!err && res.statusCode == 200) {
          var data = JSON.parse(body);
            
          //display data
          console.log(data.result.user)
          
        }
      })
        
}