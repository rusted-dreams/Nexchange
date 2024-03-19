export const asyncErr = (func) => {
    Promise.resolve(func(req, res, next)).catch(next);
};