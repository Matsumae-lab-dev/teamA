import { useNavigate } from "react-router-dom";

export default function Todolist_app() {
    const navigate = useNavigate();
    
    return (
        <div className="container">
        <div>todolist</div>
        <input type="text" />
        <button>タスクを追加</button>
        <button>完了したタスクの削除</button>
        <div>残りのタスク：０</div>
        <button 
            onClick={() => navigate('/')}
            >ログアウト
        </button>
        </div>
    );
}