import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboutAvatar from '../assets/images/about.png'


const skillsList = [{
    name: "HTML5",
    image: `https://cdn-icons-png.flaticon.com/512/174/174854.png`
},
{
    name: "CSS3",
    image: `https://camo.githubusercontent.com/809a763f1c8f3497709ff0a974bfe7dd11be4dd7a29085645f8e98fbaa4a26e4/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3733322f3733323139302e706e67`
},
{
    name: "JavaScript",
    image: `https://camo.githubusercontent.com/899faceac4ba793d1b47c461a572a228f852b16827a75a3c1744db1502d2b4ce/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f353936382f353936383239322e706e67`
},
{
    name: "Bootstrap",
    image: `https://camo.githubusercontent.com/5a3e9f617a51fa1e3885992f840d4f1097e188a6686338232c5958e380df554e/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f353936382f353936383637322e706e67`
},
{
    name: "jQuery",
    image: `https://camo.githubusercontent.com/ca96f2bd388ffa3fcf47a76dc059f14c18998286f10ffecd3cbe7f703f91d2b8/68747470733a2f2f696d67732e7365617263682e62726176652e636f6d2f686c365143794b72697955754157474551796c6b36627a48754a6a6d6b465747694955554f5133324b654d2f72733a6669743a3531323a3531323a312f673a63652f6148523063484d364c79396a5a4734752f61574e7662693170593239756379356a2f6232307661574e76626e4d794c7a49302f4d545576554535484c7a55784d6939712f6358566c636e6c6662334a705a326c752f59577866643239795a473168636d74662f6247396e6231397059323975587a45302f4e6a51304e793577626d63`
},
{
    name: "Node.js",
    image: `https://camo.githubusercontent.com/8d7500389365cd5fb067475412ecd642616447844f81b471c04097dccdca6a21/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f353936382f353936383332322e706e67`
},
{
    name: "NPM",
    image: `https://camo.githubusercontent.com/868a25e4c9b31ee98c0fdb8e068bc0ffb161c8ccd61bb927d8b75c7fa88c5410/68747470733a2f2f616c7465726e61746976652e6d652f6d656469612f3235362f6e706d2d69636f6e2d796e766733627a3576786a37756163322d632e706e67`
},
{
    name: "Git",
    image: `https://camo.githubusercontent.com/63aa3867771cb118aea507901fb027c868add2dfb5a990b0b4667a9447004bd0/68747470733a2f2f696d67732e7365617263682e62726176652e636f6d2f503874674e334a6a454f334d3555675a475f74346b38584b674a384d4b6563756271314a694d52547541552f72733a6669743a313230303a313230303a312f673a63652f6148523063484d364c79396a5a4734752f5a6e4a6c5a574a705a584e31634842732f6553356a623230766247396e62334d762f624746795a3255764d6e67765a326c302f4c576c6a623234746247396e627931772f626d637464484a68626e4e7759584a6c2f626e51756347356e`
},
{
    name: "GitHub",
    image: `https://cdn-icons-png.flaticon.com/512/733/733553.png`
},
// {
//     name: "Express.js",
//     image: `https://img.icons8.com/ios/512/express-js.png`
// },
{
    name: "React",
    image: `https://imgs.search.brave.com/bnhKsRdWpV8-PdxjB-oJZtfHAxSYoNW5EbHuHjD7Lro/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcHJvZ3Jh/bW1pbmd3aXRobW9z/aC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDEvMjAw/MHB4LVJlYWN0LWlj/b24uc3ZnXy5wbmc_/Zml0PTIwMDAlMkMx/NDEzJnNzbD0x`
},
{
    name: "VS Code",
    image: `https://camo.githubusercontent.com/cf0b5d4de16868dfaf11498bcd358343631968e60adc5d71467189f9fea4190b/68747470733a2f2f696d67732e7365617263682e62726176652e636f6d2f6d646c72316f36505773673032614e6664637437485544784f6175486963394a585556666c7072515453672f72733a6669743a313032343a313032343a312f673a63652f6148523063484d364c79396a6232526c2f4c6e5a706333566862484e30645752702f6279356a6232307659584e7a5a58527a2f4c326c745957646c6379396a6232526c2f4c584e3059574a735a533577626d63`
},
{
    name: "Atom",
    image: `https://imgs.search.brave.com/-OOKOCKF42YW7G4gyjsniZvceideQ39vtmMzBQcxkqQ/rs:fit:474:474:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvYXRv/bS00LWxvZ28tcG5n/LXRyYW5zcGFyZW50/LnBuZw`
},
{
    name: "Terminal",
    image: `https://camo.githubusercontent.com/eb4addaf62cb4f0645554e33f5e0bd00944fe86dd9d96760f174382319e8d3bd/68747470733a2f2f696d67732e7365617263682e62726176652e636f6d2f6567514b45724c6b74307759683144665a50487450673669307434517173416274526d765255716c426b342f72733a6669743a313032343a313032343a312f673a63652f6148523063446f764c336433647935712f62335679626d46735a485673595842702f6269356a6232307664334174593239752f6447567564433931634778765957527a2f4c7a49774d5451764d445976564756792f62576c75595777756347356e`
}];

function About() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="about-page">
            <hr />
            <section id="about" className="container d-flex flex-row align-items-center justify-content-start">
                <div className="my-details">
                    <h2 className="clash">Get to know me a little</h2>
                    <p>For the past year I have taught myself a lot about the processes, concepts and theories of UX/UI design which made me want to further understand and learn how the digital products I was designing could be brought to life and am now pursuing a path towards becoming a Front-End Web Developer.</p>
                    <h5>Aside from learning to code, I also enjoy:</h5>
                    <p className="hobbies"> 🧘🏻‍♀️ Yoga &nbsp; &nbsp; 🍲 Cooking &nbsp; &nbsp; 📸 Photography &nbsp; &nbsp; 🎨 Painting &nbsp; &nbsp; 🪡 Sewing</p>
                </div>
                <img className="hello-img" src={aboutAvatar} alt="Avatar bouncing up and down" />
            </section>
            <section id="skills" className="container">
                <h3 className="mt-5 mb-5">Tools and Technologies</h3>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    {skillsList.map((skill, index) =>
                        <div key={index} className="d-flex flex-column align-items-center">
                            <div className="text-center">
                                <img id={skill.name} className="skill-img" src={skill.image} alt={skill.name} />
                                <h5 className="mt-4">{skill.name}</h5>
                            </div>
                        </div>)}
                </Carousel>
            </section>
        </div>
    )
}

export default About;