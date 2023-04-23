import * as AWS from 'aws-sdk';

const config = {
    region:"us-east-2", 
    secretAccessKey :"v/5GZaLt7W3ZWsWqmCPj4EVf6550II/ep/r98/Kn",
    accessKeyId: "AKIA5QRQHMXRHPJ3M3G3"
}

AWS.config.update(config);

const table = "reservaciones"

const db = new AWS.DynamoDB.DocumentClient();

export const agregarReservacion = async (data) => {
    const params = {
        TableName: table,
        Item: data
    }

    const response = await db.put(params).promise()
    console.log(response.$response.httpResponse);
}