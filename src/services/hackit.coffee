import injector from 'vue-inject'

class hackit 
     @classVariable: 'this is my class variable'

     constructor: () ->
         @classVariable = 'something new'

     getValue: () -> @classVariable
     setValue: (v) -> @classVariable = v

injector.service 'hackit', hackit
