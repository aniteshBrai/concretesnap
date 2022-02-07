import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp



/*import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { withRouter } from 'next/router'
import App from 'next/app'

import createStore from 'store/createStore'

class MyApp extends App {
  render () {
    const { Component, pageProps, router, store } = this.props
    return (
          <Provider store={store}>
              <Component router={router} {...pageProps} />
          </Provider>
    )
  }
}

export default withRedux(createStore)(
  withRouter(MyApp)
)*/
