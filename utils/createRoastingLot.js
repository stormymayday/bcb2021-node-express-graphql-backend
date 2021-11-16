const fetch = require('node-fetch');

const createRoastingLot = (roastingLotId) => {

    fetch(`${process.env.GET_LOT}${roastingLotId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.OLDSOUL_API_KEY}`
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

                            createRoastingLot(roastingLotInput: {

                                roastingLotId: "${data.lotId}"

                                roastingNodeId: "${data.nodeId}"

                                organizationId: "${data.organizationId}"
                                marketplaceId: "${data.marketplaceId}"
                                productId: "${data.productId}"
                                lotName: "${data.lotName}"
                                lotType: "${data.lotType}"
                                lotDetailType: "${data.lotDetailType}"
                                createdDate: "${data.createdDate}"
                                lastModifiedDate: "${data.lastModifiedDate}"
                                productName: "${data.productName}"
                                productToken: "${data.productToken}"
                                productSku: "${data.productSku}"
                                organizationName: "${data.organizationName}"
                                currentWeight: "${data.currentWeight}"
                                currentWeightUnit: "${data.currentWeightUnit}"
                                absorbedWeight: "${data.absorbedWeight}"
                                absorbedWeightUnit: "${data.absorbedWeightUnit}"
                                quality: "${data.quality}"

                                lotIsOpen: ${data.lotIsOpen}

                                images: ["${(data.images[0] ? data.images[0].urls[0] : "")}", "${(data.images.length > 1 ? data.images[1].urls[0] : "")}"]
                                documents: ["${(data.documents[0] ? data.documents[0].urls[0] : "")}", "${(data.documents.length > 1 ? data.documents[1].urls[0] : "")}", "${(data.documents.length > 2 ? data.documents[2].urls[0] : "")}"]
                                videos: ["${(data.videos[0] ? data.videos[0].urls[0] : "")}", "${(data.videos.length > 1 ? data.videos[1].urls[0] : "")}"]
                                

                                roasterActor: "${data.customData['ActorName.Measure'] ? data.customData['ActorName.Measure'].value : ""}"

                                roastDate: "${data.customData['TransformDate.MeasureTime'] ? data.customData['TransformDate.MeasureTime'].dateTimeValue : ""}"

                                chargeTemperature: "${data.customData['ChargeTemperature.Measure'] ? data.customData['ChargeTemperature.Measure'].value : ""}"
                                dropTemperature: "${data.customData['DropTemperature.Measure'] ? data.customData['DropTemperature.Measure'].value : ""}"
                                totalRoastTime: "${data.customData['TotalRoastTime.Measure'] ? data.customData['TotalRoastTime.Measure'].value : ""}"
                                roastType: "${data.customData['RoastType.Measure'] ? data.customData['RoastType.Measure'].value : ""}"
                                roastLossQuantity: "${data.customData['RoastLossQuantity.Measure'] ? data.customData['RoastLossQuantity.Measure'].value : ""}"
                                roastingNotes: "${data.customData['RoastingNotes.Measure'] ? data.customData['RoastingNotes.Measure'].value : ""}"
                                tastingNotes: "${data.customData['TastingNotes.Measure'] ? data.customData['TastingNotes.Measure'].value : ""}"
                                
                                cuppingScore: "${data.customData['CuppingScore.Measure'] ? data.customData['CuppingScore.Measure'].value : ""}"

                            }) {

                                roastingLotId

                            }
                        }

                 `

                })
            })
                .then(r => r.json())
                .then(data => console.log('data returned:', data));



            // Sending data as a RESPONSE to the fronted
            // response.json(data);
        })
        .catch((error) => {
            console.log('Please enter a valid lot ID');
            response.json(error);
        });

}

exports.createRoastingLot = createRoastingLot;