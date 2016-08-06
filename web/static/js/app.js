// import '../../../deps/phoenix/priv/static/phoenix'
// import '../../../deps/phoenix_html/priv/static/phoenix_html'

// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(<App />, document.getElementById('root'))
  })
}
