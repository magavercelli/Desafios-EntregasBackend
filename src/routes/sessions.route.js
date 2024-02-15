import { Router } from 'express';
import passport from 'passport';
import { SessionsController } from '../controllers/sessions.controller.js';

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: '/api/sessions/failregister' }), SessionsController.register);
router.post('/login', passport.authenticate('login', { failureRedirect: '/api/sessions/faillogin' }), SessionsController.login);
router.post('/restartPassword', SessionsController.restartPassword);

router.get('/failregister', (req, res) => {
    console.log('Registration has failed');
    res.send({ error: "Registration failed!" });
});

router.get('/faillogin', (req, res) => {
    res.send({ error: 'fail login' });
});

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => {});
router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), async (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
});
router.get('/logout', async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(500).send({
                status: 'error',
                msg: 'Logout error',
                error: err
            });
        }
        res.redirect('/login');
    });
});

export default router;


