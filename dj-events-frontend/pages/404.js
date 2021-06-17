import Layout from "@/components/Layout"
import styles from "@/styles/404.module.css"
import {FaExclamationTriangle} from "react-icons/fa"

import Link from "next/link"

export default function NotFound() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1>404<FaExclamationTriangle/></h1>
                <h4>Sorry there is nothing here</h4>
                <Link href='/'>Go back Home</Link>
            </div>
        </Layout>
    )
}
