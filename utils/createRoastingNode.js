const fetch = require('node-fetch');

const createRoastingNode = (nodeId) => {

    fetch(`${process.env.GET_NODE}${nodeId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.QCCC_API_KEY}`
        }
    })
        .then((result) => {
            // console.log(result);
            return result.json();
        })
        .then((data) => {
            // Logging data on the server
            console.log(data);

            // Storing data in the database
            fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` 

                    mutation {
                        createRoastingNode(roastingNodeInput: {

                                roastingNodeId: "${data.nodeId}"

                                organizationId: "${data.organizationId}"
                                marketplaceId: "${data.marketplaceId}"
                                defaultLocationId: "${data.defaultLocationId}"
                                nodeName: "${data.nodeName}"
                                nodeType: "${data.nodeType}"
                                nodeDetailType: "${data.nodeDetailType}"
                                createdDate: "${data.createdDate}"
                                lastModifiedDate: "${data.lastModifiedDate}"
                                organizationName: "${data.organizationName}"

                                images: ["${(data.images[0] ? data.images[0].urls[0] : "")}", "${(data.images[1] ? data.images[1].urls[0] : "")}"]
                                documents: ["${(data.documents[0] ? data.documents[0].urls[0] : "")}", "${(data.documents[1] ? data.documents[1].urls[0] : "")}"]
                                videos: ["${(data.videos[0] ? data.videos[0].urls[0] : "")}", "${(data.videos[1] ? data.videos[1].urls[0] : "")}"]

                                value: "${data.value}"
                                valueUnit: "${data.valueUnit}"
                                unitValue: "${data.unitValue}"
                                unitValueUnit: "${data.unitValueUnit}"

                                locationId: "${data.defaultLocation.locationId}"
                                name: "${data.defaultLocation.name}"

                                country: "${data.defaultLocation.country}"
                                city: "${data.defaultLocation.city}"
                                state: "${data.defaultLocation.state}"
                                latitude: "${data.defaultLocation.latitude}"
                                longitude: "${data.defaultLocation.longitude}"
                                elevation: "${data.defaultLocation.elevation}"
                                elevationUnit: "${data.defaultLocation.elevationUnit}"

                                address: "${data.defaultLocation.address}"

                            }) {

                                roastingNodeId

                            }
                        }

                 `

                })
            })
                .then(r => r.json())
                // .catch((error) => {
                //     console.log('error: ' + error);
                // })
                .then(data => console.log('data returned:', data));

            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

exports.createRoastingNode = createRoastingNode;