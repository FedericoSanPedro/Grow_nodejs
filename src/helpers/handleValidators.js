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

        if(typeof req.user.role != 'undefined' && req.user.role == role){
            return next();
        }

        res.status(403).json({error: 'No puedes usar este route con tu tipo de user'});
};

export { handleValidators };