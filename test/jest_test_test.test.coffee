import Vue from 'vue';
import jsdom from 'jsdom';
import test_test from '../src/components/widgets/test_test.vue';

renderer = require('vue-server-renderer').createRenderer();
ClonedComponent = Vue.extend(test_test);

test 'Test data msg', () ->
    component = new ClonedComponent
                        data: () ->
                          msg: 'I am a cool message'
    component.$mount()
    renderer.renderToString component, (err, str) ->
      dom = new jsdom.JSDOM(str);
      firstHeading = dom.window.document.querySelector('h1')
      expect firstHeading.textContent
        .toContain 'I am a cool message'
