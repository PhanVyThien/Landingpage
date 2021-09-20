import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from "styled-components";
import { Login } from './Login';
import { Register } from './Register';
import cookieCutter from 'cookie-cutter';
// var a=function(){
//     console.log('hello');
// }
// var Tags={ 
//     "NamKid":{
//         "All":Array(100),
//         "count":0
//     },
//     "NuKid":{
//         "All":Array(100),
//         "count":0
//     },
//     "NamAdult":{
//         "All":Array(100),
//         "count":0
//     },
//     "NuAdult":{
//         "All":Array(100),
//         "count":0
//     }
// };
// function Tagsfilter(tag,filt){
//     if(tag[0]==filt){
//         var tmp=Tags[filt];
//         for (let i = 0; i < tmp["count"]; i++) {
//             if(tmp["All"][i]==tag[1]){
//                 return "null";
//             }
//         }
//         tmp["All"][tmp["count"]]=tag[1];
//         tmp["count"]=tmp["count"]+1;
//         console.log('a'+filt);
//         return 'nam';
//     }
//     return "NULL";
// }
const Navbarmenu=styled.div`
    height: 60px;
    width: 100%;
    margin-top: 0px;
    background-color: white;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-weight: 100;
`;
const Tabemenu=styled.table`
    width: 100%;
`;
const Leftside=styled.td`
    text-align: left;
    display: flex;
    width: 45%;
    margin-left:5%;
    transform: translate(0px, -10px);

`;
const Rightside=styled.td`
    text-align: right;
    width: 50%;
`;
const Dropdownlist=styled.a`
    margin-left:-20px;
    padding: 1.5rem;
    text-align: left;
    color: black;
    text-decoration: none;
    border: 0px solid #eaeaea;
    border-radius: 10px;
    height: 40px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 240px;
    display: inline;
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    &:hover .Optionslist {
        background-color: transparent;
        display: block;
        margin-top: -5px;
    }
    &:hover {
        color: skyblue;
        transition: all 0.25s ease-out;
    }
    &:hover h5{
        transform: translate(0px,-10px);
        transition: all 0.25s ease-out;
    }
`;
const Optionslist=styled.div`
    display: none;
    position: relative;
    width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-left: -27px; 
    transition: all 0.5s ease-out;
    transform: translate(30px,0px);
    border-radius:4px;
    border:1px solid grey;
    box-shadow:0px 5px 5px 4px rgb(175, 174, 174);
    &:hover {
        
    }
`;
const Option=styled.a`
    display: block;

    background-color: #ffffff;
    color: black;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 10px 20px;
    &:hover {
        color: black;
        border-left: 3px solid rgb(4, 50, 56);
        background-color: #cfe9fa;
    }
    
`;
const Right=styled.div`
    margin-right: 0%;
`;
const Menubutton=styled.a`
    margin: 2px;
    padding: 1.5rem;
    margin: 0 auto;
    color: black;
    text-decoration: none;
    border: 0px solid #ffffff;
    border-radius: 20px;
    height: 20px;
    margin-top: -20px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 140px;
    display: inline-flex;
    background-color: transparent;
    align-items: flex-start;
    float: right;
    cursor: pointer;
    &:hover {
        color: skyblue;
        font-size: 110%;
        transition: all 0.2s ease-out;
    }
`;
const Searchbar=styled.input`
    height:100%;
    width:100px;
    border-radius:3px;
    border:1px groove black;
    float: right;
    position: static;
`;
const Searchbutton=styled.img`
    height:100%;
    width:25px;
    float: right;
    cursor: pointer;
`;
const Search=styled.div`
    height:25px;
    width:130px;
    float: right;
    transform:translate(-10px,0px);
`;
function setup() {
    const [ShowLogin,setShowLogin]=useState(false);
    const [ShowRegister,setShowRegister]=useState(false);
    const [Loginstate,setLoginstate]=useState("Đăng nhập");
    return (
        <Navbarmenu>
            <Register  show={ShowRegister} setShow={setShowRegister} setLoginstate={setLoginstate}/>
            <Login show={ShowLogin} setShow={setShowLogin} setShowRegister={setShowRegister} setLoginstate={setLoginstate}/>
            <Tabemenu>
                <tr>
                    <Leftside>
                        <Nav>
                            <Dropdownlist>
                                <h5>Thời trang nam</h5>
                                <Optionslist className='Optionslist'>
                                    <Option style={{borderBottom:"1px solid", borderColor:"lightGray"}}>Thời trang nam</Option>
                                    <Option>Áo thun</Option>
                                    <Option>Áo sơ mi</Option>
                                    <Option>Áo khoác</Option>
                                    <Option>Vet</Option>
                                    <Option>Áo ba lỗ</Option>
                                    <Option>Quần gin</Option>
                                    <Option>Quần tây</Option>
                                    <Option>Quần đùi</Option>
                                    <Option>Quần thun</Option>
                                    <Option>Giày bata</Option>
                                    <Option>Giày thể thao</Option>
                                    <Option>Giày quai hậu</Option>
                                    
                                </Optionslist>
                            </Dropdownlist>
                        </Nav>
                        <Nav>
                            <Dropdownlist>
                                <h5>Thời trang nữ</h5>
                                <Optionslist className='Optionslist'>
                                    <Option style={{borderBottom:"1px solid", borderColor:"lightGray"}}>Thời trang nữ</Option>
                                    <Option>Áo thun</Option>
                                    <Option>Áo sơ mi</Option>
                                    <Option>Áo khoác</Option>
                                    <Option>Áo hai đây</Option>
                                    <Option>Quần gin</Option>
                                    <Option>Quần tây</Option>
                                    <Option>Quần đùi</Option>
                                    <Option>Quần thun</Option>
                                    <Option>Váy ngắn</Option>
                                    <Option>Váy dài</Option>
                                    <Option>Đằm dạ hội</Option>
                                    <Option>Giày bata</Option>
                                    <Option>Giày thể thao</Option>
                                    <Option>Giày cao gót</Option>
                                </Optionslist>
                            </Dropdownlist>
                        </Nav>
                        <Nav>
                            <Dropdownlist>
                                <h5>Thời trang trẻ em</h5>
                                <Optionslist className='Optionslist'>
                                    <Option style={{borderBottom:"1px solid", borderColor:"lightGray"}}>Thời trang trẻ em</Option>
                                    <Option>Áo thun</Option>
                                    <Option>Áo sơ mi</Option>
                                    <Option>Áo khoác</Option>
                                    <Option>Vet</Option>
                                    <Option>Quần gin</Option>
                                    <Option>Quần tây</Option>
                                    <Option>Quần đùi</Option>
                                    <Option>Quần thun</Option>
                                    <Option>Quần thun</Option>
                                    <Option>Giày bata</Option>
                                    <Option>Giày thể thao</Option>
                                    <Option>Giày quai hậu</Option>
                                </Optionslist>
                            </Dropdownlist>
                        </Nav>
                    </Leftside >
                    <Rightside>
                        <Right>
                            <Search>
                                <Searchbar/>
                                <Searchbutton src='imgs/search.png'/>
                            </Search>
                            <Menubutton>Giỏ hàng</Menubutton>
                            <Menubutton  onClick={()=>setShowLogin(!ShowLogin)}>{Loginstate}</Menubutton>
                            <Menubutton onClick={()=>setShowRegister(!ShowRegister)}>Đăng ký</Menubutton>
                        </Right>
                    </Rightside>
                </tr>
            </Tabemenu>
        </Navbarmenu>
    );
}
const Mainmenu = () =>(
    <>{setup()}</>
)
export default Mainmenu