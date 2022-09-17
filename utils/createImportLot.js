const fetch = require('node-fetch');

const createImportLot = (lotId) => {

    fetch(`${process.env.GET_LOT_RETAIL}${lotId}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': `${process.env.CATRACHA_COFFEE_API_KEY}`
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
            fetch('https://graphql-bcb.herokuapp.com/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: ` 

                        mutation {

                            createImportLot(importLotInput: {

                                importLotId: "${data.lotId}"

                                importNodeId: "${data.nodeId}"

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

                                fobBasePaymentValue: ""
                                fobBasePaymentAsset: ""
                                fobBasePaymentTimeStamp: ""
                                fobBasePaymentNotes: ""

                                fobPremiumPaymentValue: ""
                                fobPremiumPaymentAsset: ""
                                fobPremiumPaymentTimestamp: ""
                                fobPremiumPaymentNotes: ""

                                catrachaCommunityContributionPaymentValue: ""
                                catrachaCommunityContributionPaymentAsset: ""
                                catrachaCommunityContributionPaymentTimeStamp: ""
                                catrachaCommunityContributionPaymentNotes: ""

                                numberOfBags: "${data.customData['NumberOfBags.Measure'].value}"
                                damage: "${data.customData['Damage.Measure'].value}"
                                transferDate: "${data.customData['TransferDate.MeasureTime'].value}"
                                
                            }) {

                                importLotId

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

exports.createImportLot = createImportLot;