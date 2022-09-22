var root = document.getElementById('root')
function Header() {
    return (
    <div id="header">
            <ul id="nav">
                <li><a href="#slider">HOME</a></li>
                <li><a href="#text-conten">BAND</a></li>
                <li><a href="#tour-section">TOUR</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li className="cotra">
                    <a href="#">
                        MORE
                    <i className="ti-angle-down"></i>
                    </a>
                    <ul className="subnav">
                        <li>
                            <a className="subnav__link" href="#">Merchadise</a>
                        </li>
                        <li>
                            <a className="subnav__link" href="#">Extras</a>
                        </li>
                        <li>
                            <a className="subnav__link" href="#">Media</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div id="menu-mobile" className="menu-mb">
                <i className="ti-menu"></i>
            </div>
            <div className="search">
                <a className="search-none" href=""><i className="ti-search"></i></a>
            </div>
        </div>
    )
}

function Slide() {
    var image = ['chicago.jpg','newyork.jpg','paris.jpg']
    var text
    return (
    <div id="slider">
        <img id = "img" src={'/style/img/'+image[1]} />
        <div id="text-conten">
            <h2 class="text-heading">NEW YORK</h2>
            <div class="TEXT">the atmosphere in New York it lorem ipsum.</div>
        </div>
    </div>
    )
}
function viewsList(){
    var image = []
    var titleText = []
    var contentText = []
    for (let index = 0; index < image.length; index++) {
        const element = [index];
        <div>
            <img src={window.location.origin + "./style.img" + image[index]} alt=''/>
            <div>{titleText[index]}</div>
            <div>{contentText[index]}</div>
        </div>
    }
    return;
}
const views = (
    <div>
        <Header />
        <Slide />
    </div>
)
ReactDOM.render(views , root)