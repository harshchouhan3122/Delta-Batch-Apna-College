class ExpressError extends Error {      //Inheritence
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;