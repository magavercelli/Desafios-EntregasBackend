import { Router } from 'express';
import passport from 'passport';
import { SessionsController } from '../controllers/sessions.controller.js';

const router = Router();

router.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/failregister'}),
async (req,res)=> {
    res.send({
        status: 'success', 
        message: 'User created successfully'
    })
})

router.get('/failregister', (req, res) => {
    console.log('Registration has failed');
    res.send({ error: "Registration failed!" });
});

router.post('/login', passport.authenticate('login', {
    failureRedirect: '/api/sessions/faillogin'}),
async(req,res)=> {
    if(!req.user){
        return res.status(400).send({status:'error'})
    }
    req.session.user ={
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email:req.user.email
    }
    res.send({status: 'success', payload: req.user})
})

router.get('/faillogin', (req, res) => {
    res.send({ error: 'fail login' });
});
router.post('/restartPassword', SessionsController.restartPassword);

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


