import {useEffect, useState} from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar";
import {RenderItems} from "./components/RenderItems";
import {TopBlock} from "./components/TopBlock";
import {BreadCrumbsRender} from "./components/BreadCrumbsRender";

function App() {

    const [isLoaded, setLoaded] = useState(false);
    const [items, setItems] = useState();
    const fetchData = () => {
        fetch("https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/dataset.json")
            .then((res) => res.json())
            .then(json => {
                console.clear();
                setItems(json);
                console.log(json);
            })
            .finally(setLoaded(true));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="App">
            <div className="container">
                <Header/>
                {items ? <NavBar items={items}/> : null}
                {items ? <BreadCrumbsRender items={items}/> : null}
                {items ? <TopBlock/> : null}
                {items ? <RenderItems items={items}/> : null}
                <TopBlock/>
            </div>
        </div>
    );
}

export default App;
