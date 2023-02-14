import avatar from '../assets/images/avatar.png'

function Home() {
    return (
        <div className="home-screen">
            <div className="home-content d-flex justify-content-center align-items-center flex-wrap">
                <div>
                    <img className="avatar-img" src={avatar} alt="avatar" />
                </div>
                <div>
                    <h5>Hello, I'm Andreea</h5>
                    <h1>Frontend <br /> Developer</h1>
                    <p className="intro">Driven frontend developer bringing passion and precision to every project. I'm so glad you've decided to take the time to explore my portfolio. Take a look around and feel free to contact me if you have any questions.</p>
                    <div className="d-flex mt-5">
                    <a className="nav-link" href="#/projects"><button className="btn btn-light me-4">See my projects</button></a>
                    <a className="nav-link" href="#/about"><button className="btn btn-outline-light">Find out more about me</button></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;