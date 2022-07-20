import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import '../styles/globals.css'
import Layout from '../components/layout'

Amplify.configure({ ...awsExports, ssr: true })

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
