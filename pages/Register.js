import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Frame=styled.div`
  width:100%;
  height:100%;
  display: flex;
  position: fixed;
  background-color: rgba(0,0,0,0.7);
  justify-content:center;
  font-family:times, "Times New Roman";
`;
const Loginform=styled.div`
  height:50%;
  width:30%;
  background-color: white;
  transform: translate(0px,30%);
  border-radius:10px;
`;
const TextBox=styled.input`
  height:40px;
  width:300px;
  border-radius: 6px;
  font-size: 120%;
  padding-left: 8px;
  border: 1px solid black;
`;
const Headconten=styled.header`
  font-size:200%;
  text-align: center;
  text-decoration: none;
  width:100%;
`;
const Label=styled.a`
  font-size:100%;
  text-align: center;
  text-decoration: none;
  color:blue;
  cursor:pointer;
`;
const Div=styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const LoginButton=styled.button`
  height: 40px;
  width:250px;
  border-radius: 10px;
  background-color: skyblue;
  border: 0px;
  transition: all 0.2s ease-in-out;
  &:hover { 
    background-color: #2690d1;
  }
`;
const Cancel=styled.span`
  font-size:100%;
  float:right;
  width:50px;
  height:50px;
  position:absolute;
  background-color: black;
  border-radius:50px;
  color:white;
  transform:translate(150px,-70px);
  font-family: Andale Mono, monospace;
  cursor:pointer;
  &:hover{
    color: lightskyblue;
  }
`;
const DIV=styled.div`
  background-color: red;
`;
export const Register =({show,setShow,setLoginstate})=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Customer");
    const hide=()=>{
        setShow(false);
    };
    const handleChange = () => (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (name == "name") {
        setName(value);
      } else if (name == "email") {
        setEmail(value);
      } else if (name == "password") {
        setPassword(value);
      } else if (name == "role") {
        setRole(value);
      }
      
    };
  
    const handleSubmit = () => {
      axios
        .post(
          "http://localhost:5035/users/register",
          { name, email, password, role },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(function (response) {
          console.log(response);
          setLoginstate(name);
          hide();
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  return <>
    {show ? (
      <Frame>
        <Loginform>
          <Headconten>Đăng ký<Cancel onClick={()=>hide()}>X</Cancel></Headconten>
          <Div><TextBox  type="text"
              id="role"
              placeholder="Nhập email"
              required
              name="email"
              onChange={handleChange()}
              /></Div>
          <Div><TextBox  type="text"
              id="role"
              placeholder="Nhập tên đăng nhập"
              required
              name="name"
              onChange={handleChange()}
              /></Div>
          <Div><TextBox  type="text"
              id="role"
              placeholder="Mật khẩu"
              required
              name="password"
              onChange={handleChange()}
              /></Div>
          <Div><LoginButton onClick={handleSubmit}>Đăng ký</LoginButton></Div>
        </Loginform>
      </Frame>
    ):null}
  </>
};