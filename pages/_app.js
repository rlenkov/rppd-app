import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import Layout from '../components/layout'

import '../styles/globals.css'

Amplify.configure({ ...awsExports, ssr: true })

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
