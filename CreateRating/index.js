module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Check for required fields
    if (req.query) {

        // Check the userId passed in
        if (req.query.userId) {
            // Do Something
        }
        else {
            handOffError(context, 400, "Parameter 'userId' is required.")
        }

        // Check the productId passed in
        if (req.query.productId) {
            // Do something
        }
        else {
            handOffError(context, 400, "Parameter 'productId' is required.")
        }

    }
    else {
        handOffError(context, 400, "Please attach a request body.")
    }

};

function handOffError(context, status, body) {
    context.res = {
        status: status, 
        body: body
    }
}