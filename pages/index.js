import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingPage from './LandingPage';
import Navbarmenu from './Navbarmenu/index';
import OnsSale_off from './OnSale_off';
import Registions from './Registions/index';
import Statistical from './Statistical';
export default function Home({data}) {
  return (
    <div>
      <LandingPage data={data} />
    </div>
  )
}
Home.getInitialProps = async (ctx) => {
  const res1 = await fetch("http://localhost:5035/courses/top3/latest");
  const json1 = await res1.json();
  const res2 = await fetch("http://localhost:5035/courses/top3/mostSaler");
  const json2 = await res2.json();
  return { data: [json1,json2] };
};