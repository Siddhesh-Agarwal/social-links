import './App.css';
import LinksList from './components/LinksList/LinksList';
import SocialLinks from './components/SocialLinks/SocialLinks';

function App() {
    return (
        <div className="App">
            <img src="https://github.com/siddhesh-agarwal.png" alt="Profile" id="Profile-pic" />
            <h1 id="Name">
                Siddhesh Agarwal
            </h1>
            <LinksList />
            <SocialLinks />
        </div>
    )
}

export default App
