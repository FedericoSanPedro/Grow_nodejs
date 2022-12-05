import { validationResult } from "express-validator";

const handleValidators = {};

handleValidators.validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        res.send({errors: error.array()});
    }
};

handleValidators.validateRole = (role, req, res, next) => {
    try {
        if(typeof req.userInfo.role != 'undefined' && req.userInfo.role == role){
            return next();
        }
    } catch (error) {
        res.status(403).json({error: 'No puedes hacer usar este route con tu tipo de user'});
        res.send({errors: error.array()});
    }
};

export { handleValidators };