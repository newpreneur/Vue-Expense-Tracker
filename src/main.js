import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Bars from 'vuebars'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo, { ApolloProvider } from 'vue-apollo';

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'https://sengineering-app.herokuapp.com/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});
Vue.use(VueApollo);
Vue.use(Bars)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  render: h => h(App), router, apolloProvider,
}).$mount('#app')
