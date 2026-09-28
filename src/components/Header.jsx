import { Briefcase, UserRound } from "lucide-react"
import { Link } from "react-router-dom"
import '../Header.css'

function Header (){
  return (
    <header className="header">
      <Link to="/">
        <span className="header-logo" aria-hidden="true">
          <Briefcase size={16} strokeWidth={2}/>
        </span>
        <span className="header-name">CareerPath</span>
      </Link>
      <div className="header-user">
        <div className="header-user-text">
          <span className="header-user-name">Greta Dev</span>
          <span className="header-user-title">Junior Front-End Developer</span>
        </div>
        <span className="header-avatar" aria-hidden="true">
          <UserRound size={16} strokeWidth={1.75}/>
        </span>
      </div>
      
    </header>
  )
}

export default Header