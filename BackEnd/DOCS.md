# spmapi v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [ChatBot](#chatbot)
	- [Send Message](#send-message)
	
- [Company](#company)
	- [Create company](#create-company)
	- [Delete company](#delete-company)
	- [Retrieve companies](#retrieve-companies)
	- [Retrieve company](#retrieve-company)
	- [Update company](#update-company)
	
- [Employee](#employee)
	- [Create employee](#create-employee)
	- [Delete employee](#delete-employee)
	- [Retrieve employee](#retrieve-employee)
	- [Retrieve employees](#retrieve-employees)
	- [Update employee](#update-employee)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Role](#role)
	- [Create role](#create-role)
	- [Delete role](#delete-role)
	- [Retrieve role](#retrieve-role)
	- [Retrieve roles](#retrieve-roles)
	- [Update role](#update-role)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# ChatBot

## Send Message



	POST /chatbot


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| message			| 			|  <p>Message.</p>							|

# Company

## Create company



	POST /companies


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| name			| 			|  <p>Company's name.</p>							|
| address			| 			|  <p>Company's address.</p>							|
| website			| 			|  <p>Company's website.</p>							|

## Delete company



	DELETE /companies/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve companies



	GET /companies


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Retrieve company



	GET /companies/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Update company



	PUT /companies/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| name			| 			|  <p>Company's name.</p>							|
| address			| 			|  <p>Company's address.</p>							|
| website			| 			|  <p>Company's website.</p>							|

# Employee

## Create employee



	POST /employees


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| FirstName			| 			|  <p>Employee's FirstName.</p>							|
| LastName			| 			|  <p>Employee's LastName.</p>							|
| MiddleName			| 			|  <p>Employee's MiddleName.</p>							|
| Sufix			| 			|  <p>Employee's Sufix.</p>							|
| DisplayName			| 			|  <p>Employee's DisplayName.</p>							|
| FormalName			| 			|  <p>Employee's FormalName.</p>							|
| Title			| 			|  <p>Employee's Title.</p>							|
| BirthName			| 			|  <p>Employee's BirthName.</p>							|
| Initials			| 			|  <p>Employee's Initials.</p>							|
| Prefix			| 			|  <p>Employee's Prefix.</p>							|
| Gender			| 			|  <p>Employee's Gender.</p>							|
| MaritalStatus			| 			|  <p>Employee's MaritalStatus.</p>							|
| MaritalStatusSince			| 			|  <p>Employee's MaritalStatusSince.</p>							|
| SecondNationality			| 			|  <p>Employee's SecondNationality.</p>							|
| ThirdNationality			| 			|  <p>Employee's ThirdNationality.</p>							|
| NativePreferredLanguage			| 			|  <p>Employee's NativePreferredLanguage.</p>							|
| ChallengeStatus			| 			|  <p>Employee's ChallengeStatus.</p>							|
| CertificateStartDate			| 			|  <p>Employee's CertificateStartDate.</p>							|
| CertificateEndDate			| 			|  <p>Employee's CertificateEndDate.</p>							|
| Addresses			| Object			|  <p>Employee's Addresses.</p>							|

## Delete employee



	DELETE /employees/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve employee



	GET /employees/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve employees



	GET /employees


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update employee



	PUT /employees/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| FirstName			| 			|  <p>Employee's FirstName.</p>							|
| LastName			| 			|  <p>Employee's LastName.</p>							|
| MiddleName			| 			|  <p>Employee's MiddleName.</p>							|
| Sufix			| 			|  <p>Employee's Sufix.</p>							|
| DisplayName			| 			|  <p>Employee's DisplayName.</p>							|
| FormalName			| 			|  <p>Employee's FormalName.</p>							|
| Title			| 			|  <p>Employee's Title.</p>							|
| BirthName			| 			|  <p>Employee's BirthName.</p>							|
| Initials			| 			|  <p>Employee's Initials.</p>							|
| Prefix			| 			|  <p>Employee's Prefix.</p>							|
| Gender			| 			|  <p>Employee's Gender.</p>							|
| MaritalStatus			| 			|  <p>Employee's MaritalStatus.</p>							|
| MaritalStatusSince			| 			|  <p>Employee's MaritalStatusSince.</p>							|
| SecondNationality			| 			|  <p>Employee's SecondNationality.</p>							|
| ThirdNationality			| 			|  <p>Employee's ThirdNationality.</p>							|
| NativePreferredLanguage			| 			|  <p>Employee's NativePreferredLanguage.</p>							|
| ChallengeStatus			| 			|  <p>Employee's ChallengeStatus.</p>							|
| CertificateStartDate			| 			|  <p>Employee's CertificateStartDate.</p>							|
| CertificateEndDate			| 			|  <p>Employee's CertificateEndDate.</p>							|
| Addresses			| Object			|  <p>Employee's Addresses.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Role

## Create role



	POST /roles


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Role's name.</p>							|

## Delete role



	DELETE /roles/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve role



	GET /roles/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve roles



	GET /roles


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update role



	PUT /roles/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Role's name.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's picture.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


