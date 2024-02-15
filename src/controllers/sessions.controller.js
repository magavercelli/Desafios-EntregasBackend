import { SessionsService } from '../services/sessions.services.js';

class SessionsController {
    static restartPassword = async (req, res)=> {
        const { email, password } = req.body;
        try {
            const result = await SessionsService.restartPassword(email, password);
            res.json(result);
        } catch (error) {
            res.status(400).json({ status: 'error', message: error.message });
        }
    }
}

export { SessionsController };