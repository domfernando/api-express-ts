import { Request, Response } from 'express';

class HomeController {
    public async index(req: Request, res: Response): Promise<Response> {
        const retorno = { sucesso: true, mensagem: "It´s alive! It´s alive!" }
        return res.json(retorno);
    }
}

export default new HomeController()