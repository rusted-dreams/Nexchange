export const catchAsyncErrors = (func) => {
    Promise.resolve(func(req, res, next)).catch(next);
};