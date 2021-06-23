import '../styles/globals.css'
import Header from 'components/Header.js'
import {jsx, ThemeProvider} from '@emotion/react'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import {DefaultSeo} from 'next-seo'
import Wrapper from '../components/ContextWrapper'
import Router from 'next/router'
import { parseCookies  } from 'nookies'
import SEO from '../next-seo.config'


function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation)
  return (
        <>
          <DefaultSeo {...SEO} />
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper navigation={navigation}>
              <Header  />
            </Wrapper>
            
            <Component {...pageProps} />
          </ThemeProvider>
        </>  
      )
}


const { publicRuntimeConfig } = getConfig()

function redirectUser(ctx, location) {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        Router.push(location);
    }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {}
    const jwt = parseCookies(ctx).jwt

    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
    const navigation = await res.json()

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    if (!jwt) {
        if (ctx.pathname === "/premium-blogs") {
            redirectUser(ctx, "/login");
        }
    }

    return {
        pageProps,
        navigation
    }
}

export default MyApp
