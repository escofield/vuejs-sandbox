export default 
         namespaced: true
         state:
            people: []
         getters:
            getPerson: (state, name) => #state.people.filter(p => p.name == name)
            getPeople: (state) => state.people
         mutations:
            pushPerson: (state, person) =>
              state.people.push person
         actions:
            addPerson: (context, person) =>
                context.commit('pushPerson', person)
