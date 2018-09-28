var request = require('request')

// Hand off error to the given context
function handOffError(context, status, body) {
    context.res = {
        status: status, 
        body: body
    }
}

// Get data from specified URL
function getDataPromise(url) {
    return new Promise(function( resolve, reject ) {
        request.get(url, function(err, resp, body) {
            if (err) {
                reject(err)
            }
            else {
                resolve(body)
            }
        })
    })
}

function getUser(userId) {
    var userUrl = "https://serverlessohuser.trafficmanager.net/api/GetUser"
    getDataPromise(userUrl)
        .then(function(user) {
            return user
        })
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    var productUrl = "https://serverlessohproduct.trafficmanager.net/api/GetProduct"

    var user = getUser(req.query.userId)
    console.log(user)

    // // Check for required fields
    // if (req.query) {

    //     // Check the userId passed in
    //     if (req.query.userId) {
    //         // Do Something
    //         var user = getData(userUrl + "?userId=" + req.query.userId)
    //         context.log(user)
    //     }
    //     else {
    //         handOffError(context, 400, "Parameter 'userId' is required.")
    //     }

    //     // Check the productId passed in
    //     if (req.query.productId) {
    //         // Do something
    //     }
    //     else {
    //         handOffError(context, 400, "Parameter 'productId' is required.")
    //     }

    // }
    // else {
    //     handOffError(context, 400, "Please attach a request body.")
    // }

};