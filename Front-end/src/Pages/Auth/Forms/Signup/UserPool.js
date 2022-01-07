import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-south-1_CennR1k4D",
  ClientId: "2qe8o7ijojnr9da4l90conn8p7",
};

export default new CognitoUserPool(poolData);
