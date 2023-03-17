# TANDA_
Front-End MVP design for an application to help manage a TANDA -- A rotating savings and credit association for a group of friends or relatives. Heavily used in the Latin Community.

Auth0 EMbedded Passwordless Login with Twilio
Auth0 supports [embedded passwordless loign via either SMS or Email](https://auth0.com/docs/authenticate/passwordless/implement-login/embedded-login). By default, Auth0 uses [Twilio programmable messaging API](https://www.twilio.com/docs/sms/api) to send OTP via SMS.

## Pre-requisites
* Auth0 account
* Twilio Account. [signup free](https://www.twilio.com/try-twilio)!
*  Please follow Auth0 online instruction to [setup passwordless connection](https://auth0.com/docs/connections/passwordless/authentication-factors/sms-otp)

## Setup
* Setup following [Environment variables]
Variable | Value 
--- | --- 
`REACT_APP_DOMAIN`| Your Auth0 Client ID 
`REACT_APP_CLIENT_ID` | Your Auth0 Client Secret

## Start Application

* npm start
