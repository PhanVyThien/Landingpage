import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
// function setimgs(tab){
//     var re="imgs/img"+tab+".jpg";
//     return re;
// }
// function setnames(tab){
//     var re="Name "+tab;
//     return re;
// }
// function setPrice(tab){
//     var k=<span className={styles.strikethrough}>${tab*10+5}</span>;
//     var re=<span>{k}{'  '}${tab*10}</span>
//     return re;
// }
// function jjj(item){
//     if((item.Tags)[0]=='nu'){
//         return <li>
//         <a className={styles.product}>
//             <img className={styles.pro} src={item.Image}/>
//             <a className={styles.produtName}>{item.Name}</a>
//             <h4 >
//                 {item.Price}
//             </h4>
//         </a>
//         </li>  ;
//     }else{
//         return null;
//     }
// }

function mainn({data}){
    var a=data[1];
    return <div className={styles.producsdisplay}>
                <ul>{data.map((item)=>(
                    <li>
                        <a className={styles.product}>
                            <img className={styles.pro} src={"http://localhost:5035/upload/images/"+item.Image}/>
                            <a className={styles.produtName}>{item.Name}</a>
                            <h4 >
                                ${item.Price}
                            </h4>
                        </a>
                    </li>
                  ))}
                    <li>
                        <a className={styles.more}>
                            <img className={styles.pro} src="imgs/moreproducts.jpg"/>
                            <button className={styles.morebutton}>
                                Xem thêm
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
}

export default function OnsaleProduct({data}){
    return(
        <div>
            <main>{mainn({data})}</main>
        </div>
    )
}


