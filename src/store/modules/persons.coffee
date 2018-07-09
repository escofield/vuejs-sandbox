import Vue from 'vue'
import Person from 'model/person.coffee'

export default 
         namespaced: true
         state:
            people: []
         getters:
            getPerson: (state, name) -> #state.people.filter(p -> p.name == name)
            getPeople: (state) -> state.people
         mutations:
            pushPerson: (state, person) ->
              state.people.push person
            setPeople: (state, people) ->
              state.people = people
         actions:
            addPerson: (context, person) ->
                context.commit('pushPerson', person)
            fetchPeople:(context) ->
                return new Promise (resolve) ->
                  Vue.http.get('./static/data.json').then (response) ->
                      context.commit 'setPeople', response.data.map (x) -> new Person(x.name, x.email, x.birthDate, x.id)
                      resolve()
