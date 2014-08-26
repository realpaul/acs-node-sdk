var ACSNode = require('../../../index');
var u = require('../lib/util');

var acsAppKey = u.getConfig().acs_appkey;
if (acsAppKey) {
    var acsApp = new ACSNode.ACSApp(acsAppKey);
}

function index(req, res) {
    res.render('index', {
        hasACSAppKey: (acsAppKey ? true : false)
    });
}

function login(req, res) {
    acsApp.Users.login({
        req: req,
        res: res
    }, function(err, result) {
    	res.send(result.response.statusCode, result.body);
    });
}

function showMe(req, res) {
    acsApp.Users.showMe({
        req: req,
        res: res
    }, function(err, result) {
    	res.send(result.response.statusCode, result.body);
    });
}
