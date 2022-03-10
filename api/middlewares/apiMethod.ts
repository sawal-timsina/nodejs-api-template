export const apiMethods = (_, res, next) => {
    res.apiSuccess = ({
        message = "Success",
        data,
        status = {
            code: 200,
            success: true
        }
    }) => {
        res.status(status.code || 200).json({ message, status, data });
    };
    res.apiFail = ({
        message = "Error Occured",
        error,
        status = {
            code: 404,
            success: false
        }
    }) => {
        res.status(status.code || 404).json({
            message, status: {
                code: status.code || 400,
                success: status.success || false
            }, error
        });
    };
    next()
};
