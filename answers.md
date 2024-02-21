1.  How can we design the system in a way that every Company will be able to
    serve games on their gaming site from their domain?

    We can create a proxy for each Company that will endorse their requests with
    Company ID header. So that backend will retrieve data for users of specific
    Company only. And change of domain within one Company will still be possible
    seamlessly (including multiple domain support). The front-end part should
    have pre-compiled assets and also be served based on Company ID and same
    goes for Backoffice.

2.  What modification should be done to the users table at gPlatform to support
    this change?

    Users table should be altered to include the Company ID of used website, and
    unique index must be based on email + Company ID combination. All
    pre-existing users should receive the Company ID of "gSite".

3.  Considering we have 1 backend cluster that serves all companies, how can we
    validate a user login on one gaming domain in such a way that it does not
    give access to a different gaming domain? (i.e. authenticating on site A,
    grants access to site A only)

    Having separate proxies for each Company will already isolate their
    requests. Extra layer of obscurity could be added by requiring requests to
    be signed with a separate key for each Company, but this logic should be
    well-hidden and obfuscated on the client side.
