import OnsaleProduct from './OnsaleProduct'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
function k(tab){
    var a=styles.buttontrasperant;
    var b=styles.buttontrasperant;
    var c=styles.buttontrasperant;
    var d=styles.buttontrasperant;
    var e='NamAdult';
    if(tab==1){
        a=styles.buttonskyblue;
    }else if(tab==2){
        e='NuAdult';
        b=styles.buttonskyblue;
    }else if(tab==3){
        e='NamKid';
        c=styles.buttonskyblue;
    }else{
        e='NuKid';
        d=styles.buttonskyblue;
    }
    return [a,b,c,d,e];
}

function mainn({data}){
    const [tab,settab] = useState(k(1));
    return (
        <div className={styles.center}>
            <h1>Bán chạy</h1>
            <div className={styles.centert}>
                <ul className={styles.tabmenu}>
                    <li><button className={tab[0]} tabIndex="1" onClick={()=>settab(k(1))}><h3>Quần áo Nam</h3></button></li>
                    <li><button className={tab[1]} tabIndex="2" onClick={()=>settab(k(2))}><h3>Quần áo Nữ</h3></button></li>
                    <li><button className={tab[2]} tabIndex="3" onClick={()=>settab(k(3))}><h3>Quần áo trai</h3></button></li>
                    <li><button className={tab[3]} tabIndex="4" onClick={()=>settab(k(4))}><h3>Quần áo gái</h3></button></li>
                </ul>
            </div>
            <OnsaleProduct data={data}/>
        </div>
    )
    
}
const OnsaleProducts=({data})=>(
    <div>
        <main>{mainn({data})}</main>
    </div>
)
export default OnsaleProducts

