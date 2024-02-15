import userModel from '../dao/models/user.model.js';
import { createHash } from '../utils.js';

class SessionsService {
    static restartPassword = (email, password)=> {
        if (!email || !password) {
            throw new Error('Invalid email or password');
        }

        const user =  userModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        const newHashPassword = createHash(password);
         userModel.updateOne({ _id: user._id }, { $set: { password: newHashPassword } });
        return { status: 'success', message: 'Password reset successfully' };
    }
}

export { SessionsService };