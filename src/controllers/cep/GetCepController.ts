import { Request, Response } from 'express';

const XMLHttpRequest = require('xhr2');

class GetCepController {
        
    async execute(req: Request, res: Response) {
        const cep = Number(req.params.CEP);

        try {
            let url = 'https://ws.apicep.com/cep.json?code='+cep;
            let xmlHttp = new XMLHttpRequest()
            xmlHttp.open('GET', url)
        
            xmlHttp.onreadystatechange = () => {
                if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    let dadosJSONText = xmlHttp.responseText
                    let dadosJSONObj = 	JSON.parse(dadosJSONText)
                    return res.status(200).json(dadosJSONObj);
                }
            }
             xmlHttp.send()
            
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

}

export { GetCepController };
