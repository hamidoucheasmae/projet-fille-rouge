class Menu2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (     
        <nav className="main-header navbar navbar-expand navbar-light navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav col-md-9" >
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="dashboard.html" className="nav-link">Dashboard</a>
            </li>
          </ul>
        </nav>



        )
    }
}