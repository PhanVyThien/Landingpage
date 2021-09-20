import styles from '../styles/Home.module.css'

// function setimgs(tab){
//     var re="imgs/img"+tab+".jpg";
//     return re;
// }
// function setnames(tab){
//     var re="Name "+tab;
//     return re;
// }
// function setPrice(tab){
//     var re=<span>${tab*10}</span>
//     return re;
// }
function mainn(data){
    return <div className={styles.producsdisplay}>
                <ul>{data.map((item)=>(//dfsdf
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

export default function Newproduct ({data}) {
    console.log(data);
    return(
        <div>
            <main>{mainn(data)}</main>
        </div>
    )
};