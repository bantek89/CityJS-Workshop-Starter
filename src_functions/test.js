import trainedNet from './trainingData/trained-net'

exports.handler = function (event, context, callback) {
    // console.log(event.body)
    const board = JSON.parse(event.body)
    const result = trainedNet(board)
    
    console.log({board})
    console.log({result})

    const emptySpaces = board.map((space, i) => {
        return space === 0 ? result[i] : null
    }).filter(space => {
        if (!null){
            return space
        }
    })

    const response = {
        index : result.indexOf(emptySpaces.sort((a, b) => b-a)[0])
    }

    console.log({emptySpaces})
    console.log({response})

    try {

        if (event.httpMethod !== "POST") {
        
             console.log(error)
             return {statusCode: 405, body: "Method Not Allowed" }
        }


        callback(null, {
            statusCode: 200,
            body: JSON.stringify(response)
        })
    } catch (e) {
        callback(null, { statusCode: 500, body: "Internal Server Error: " + e })
    }
}