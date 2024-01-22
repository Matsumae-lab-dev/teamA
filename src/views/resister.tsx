// pages/Register.tsx
import {Component, SyntheticEvent} from "react";
import axios from "axios"
import {User} from '../models/user'
import {Redirect} from 'react-router-dom'
import { useNavigate } from "react-router-dom"; 

class Register extends Component {
	id = ''
	name = ''
	email = ''
	password = ''
    registerUrl = 'http://localhost:8000/api/admin/register'
	state = {
		redirect: false
	}

    const navigate = useNavigate(); 

	// SyntheticEvent
	// https://ja.reactjs.org/docs/events.html
	submit = async (e: SyntheticEvent) =&gt; {
		// formのデフォルトの挙動をキャンセルする
		// https://ja.reactjs.org/docs/handling-events.html
		e.preventDefault()
 
		const user = new User(
			this.id,
			this.name,
			this.email,
			this.password
		)
 
		// フォーマットが合っていればクラスをそのまま渡せる
 
		await axios.post(this.registerUrl, user)
 
		// 送信に成功したらリダイレクトフラグを立てる
		this.setState({
			redirect: true
		})
	}

	render() {
        if (this.state.redirect) {
			return <Redirect to={"/Todolist"} />
		}
		return (
			<main className="form-signin">
				<form onSubmit={this.submit}>
					<h1 className="h3 mb-3 fw-normal">Please register</h1>

					<div className="form-floating">
						<input className="form-control" placeholder="Name"
						 onChange={e => this.id = e.target.value}
						/>
						<label>First Nam</label>
					</div>

					<div className="form-floating">
						<input className="form-control" placeholder="Last Name"
						 onChange={e => this.lastName = e.target.value}
						/>
						<label>Last Name</label>
					</div>

					<div className="form-floating">
						<input type="email" className="form-control" placeholder="name@example.com"
						 onChange={e => this.email = e.target.value}
						/>
						<label>Email address</label>
					</div>

					<div className="form-floating">
						<input type="password" className="form-control" placeholder="Password"
						 onChange={e => this.password = e.target.value}
						/>
						<label>Password</label>
					</div>

					<div className="form-floating">
						<input type="password" className="form-control" placeholder="Password Confirm"
						 onChange={e => this.passwordConfirm = e.target.value}
						/>
						<label>Password Confirm</label>
					</div>

					<button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
				</form>
                <button
                    onClick={() => navigate("/Todolist")}
                    >
                    登録完了
                </button>
		  	</main>
		)
	}
}

export default Register