//Signin.tsx
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from "react-router-dom";
//import React from 'react';
import Inputs from '../input';

//型宣言
type Inputs = {
    username: string;
    password: string;
}

export default function Signin() {
    const navigate = useNavigate();
    //errorMsg という名前のstate関数を宣言、初期値 null をセット
    const [errorMsg, setErrorMsg] = useState("")
    
    const {
        //register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm<Inputs> ({ mode: 'onChange',
    });

    //ログインボタンを押した際の処理
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        console.log(data);
        if (data.username === "user" && data.password === "password"){  //仮ID・パスワード
            loginSuccess();
        }else{
            loginErrorMsg();
        }
        reset();
    };
    
    //ログインに成功した場合、次のページへ遷移
    const loginSuccess = () => {
        navigate("/Todolist");
    }

    //ログインに失敗した場合のエラーメッセージをセット
    const loginErrorMsg = () => {
        //setErrorMsg()でerrorMsgの値を更新
        setErrorMsg("ユーザーIDもしくはパスワードが間違っています。");
    }
    
    //入力内容をクリア
    const clearForm = () => {
        reset();
    }

    return (
        <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>login</h1>
            <hr />
            <div className='uiForm'>
            <p className="errorMsg">{errorMsg}</p>

            <div>
            <Inputs defaultValue="username" />
            </div>

                <ErrorMessage errors={errors} name="username" render={({message}) => <span>{message}</span>} />

                <div>
                <Inputs defaultValue="password" />
                </div>

                <ErrorMessage errors={errors} name="password" render={({message}) => <span>{message}</span>} />
                
                <div className="loginButton">
                    <button 
                        type = "submit"
                        className="submitButton"
                        >ログイン
                    </button>
                    <button 
                        type = "button"
                        className="clearButton" 
                        onClick={clearForm}
                        >クリア
                    </button>
                </div>
            </div>
        </form>
        </div>
    );
}