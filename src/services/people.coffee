import injector from 'vue-inject'

class people 
     @classVariable: 'this is my class variable'

     constructor: () ->
         @classVariable = 'something new'

     getValue: () -> @classVariable

injector.service 'people', people
