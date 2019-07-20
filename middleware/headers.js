export const headers = (req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
        "*");
    res.header(
        "Access-Control-Allow-Credentials",
        true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Access-Token",
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.header(
        "Access-Control-Expose-Headers",
        "Content-Type, Content-Disposition"
    );
    next();
};