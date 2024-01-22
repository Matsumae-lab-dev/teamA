//Signin.tsx
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import "./resiter.css"

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
        register,
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
        setErrorMsg("ユーザーIDもしくはパスワードが不正です。");
    }
    
    //入力内容をクリア
    const clearForm = () => {
        reset();
    }


    return (
        <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>サインアップ</h1>
            <hr />
            <div className='uiForm'>
            <p className="errorMsg">{errorMsg}</p>
                <div className='formField'>
                    {/* <label htmlFor="userID">ユーザーID</label> */}
                    <TextField 
                        id="outlined-basic" 
                        label="ユーザーID" 
                        variant="outlined"  
                        type="text" 
                        placeholder='userID' 
                        {...register('username', { 
                            required: 'ユーザーIDを入力してください。', 
                            maxLength: {
                                value: 20,
                                message: '20文字以内で入力してください。'
                            },
                            pattern: {
                                value:
                                    /^[A-Za-z0-9-]+$/i,
                            message: 'ユーザーIDの形式が不正です。',
                            }, 
                        })}
                    />
                </div>
                <ErrorMessage errors={errors} name="username" render={({message}) => <span>{message}</span>} />
                <div className='formField'>
                    {/* <label htmlFor="password">パスワード</label> */}
                    <TextField 
                        id="outlined-basic" 
                        label="パスワード" 
                        variant="outlined"
                        type="password" 
                        placeholder='password' 
                        role = 'password'
                        {...register('password', { 
                            required: 'パスワードを入力してください。', 
                            maxLength: {
                                value: 20,
                                message: '20文字以内で入力してください',
                            },
                            pattern: {
                                value:
                                    /^[A-Za-z0-9]+$/i,
                            message: 'パスワードの形式が不正です。',
                            }, 
                        })} 
                    />
                </div>
                <ErrorMessage errors={errors} name="password" render={({message}) => <span>{message}</span>} />
                <div className="loginButton">
                    <button 
                        type = "submit"
                        className="submitButton"
                        >サインアップ
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