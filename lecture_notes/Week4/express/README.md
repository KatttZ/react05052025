# User Authentication 

Session (Cookies)Based vs Token based authentication
Session Authentication:
The server creates a session on login and stores session data (user info, login state)
The client receives a session ID, typically stored in an HTTP-only cookie
On each request, the browser automatically sends the cookie, and the server checks the session ID


Token Authentication (JWT):
The server generates a token (usually a JWT) after login
The client stores the token in localStorage, sessionStorage, or memory.
The client must manually send the token(usually via Authorization: Bearer<token>) with each request
The server validates the token without needing session storage


1. traditional approach on web is cookie-based
client                                         server
                        --login--->          store session
save cookie      <--response{session ID}
                ---request with cookie-->     check session 
                <--------response-------

stateful session between front-end and server 

cons:  
- vulnerable to an attack (cross-site request forgery CSRF)
- session stored on server


2. token-based

How JWT Works (Login Flow)
User logs in → server verifies credentials.

Server creates a JWT with user info and sends it to the client.

Client stores the token (e.g., in localStorage or memory).

On every future API request, client sends the token in the header:

Authorization: Bearer <your_jwt_token>
Server verifies the token's signature and lets the request through if it's valid.


# JWT  Json web token
URL-safe way to securely transmit information between parties as a digitally signed token
used for user authentication and authorization, in modern web apps and APIs

A JWT looks like : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkthdCIsImlhdCI6MTY5MDc1NjAwMH0.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

It consists of 3 parts, separated by dots (.)
header/payload/signature
