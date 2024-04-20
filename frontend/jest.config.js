module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub",
    },
};
