import type {NextPage} from 'next'
import {Layout} from "../components/Layout";
/*import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from "next/link";*/


const Home: NextPage = () => {
    return (
        <></>
    )
}

export default Home
export const getServerSideProps = async () => {
    return {
        redirect: {
            permanent: false,
            destination: '/championship'
        }
    }

}