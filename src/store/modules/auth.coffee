export default 
         namespaced: true
         state:
            jwt: null
            redirectToOnAuth: null
            username: ''
         getters:
            isAuthorized: (state) -> state.jwt?
         mutations:
            updateAuthorized: (state, [jwt, username]) ->
                state.jwt = jwt
                state.username = username
                state.authFailureMessage = null
            updateRedirectOnAuth: (state, location) ->
                state.redirectToOnAuth = location
         actions:
            logIn: (context, [router, username, password]) ->
                new Promise (resolve, reject) ->
                    jwt = 'i have logged in'
                    if username == 'fail'
                        reject('You have failed to pass my gate.')
                    else
                        context.commit 'updateAuthorized', [jwt, username]
                        if context.state.redirectToOnAuth?
                            router.push context.state.redirectToOnAuth
                            context.commit 'updateRedirectOnAuth'
                        else
                            router.push {name: 'overview'}
                        resolve()
            logOut: (context) ->
                context.commit 'updateAuthorized'
            validateAuth: (context, [router, route]) ->
                if !context.state.jwt?
                    context.commit 'updateRedirectOnAuth', route.fullPath
                    router.push {name: 'login'}