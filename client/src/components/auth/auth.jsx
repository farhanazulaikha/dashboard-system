import './auth.css'

export default function Auth({children}) {
    return(
        <div className="auth">
            <div className="auth__title">{children}</div>
            <form>
                {children === "Sign Up" ?
                    <div className="auth__field">
                    <label className="auth__field-label">Name</label>
                    <input type="text" className="auth__field-input" placeholder="Enter your name"></input>
                    </div>
                    :
                    ""
                }

                <div className="auth__field">
                    <label className="auth__field-label">Email</label>
                    <input type="email" className="auth__field-input" placeholder="Enter your email"></input>
                </div>
                <div className="auth__field">
                    <label className="auth__field-label">Password</label>
                    <input type="password" className="auth__field-input" placeholder="Enter your password"></input>
                </div>
            </form>
        </div>
    )
}