import Navbar from "../../components/navbar/Navbar";
import "./search.css";

const Search = () => {
    const recentSearches = [
        {
            img: "https://i.scdn.co/image/ab6765630000ba8a0e695af6fdf3f35efe2cc4fd",
            name: "Marvel's Wastelanders",
            folder: "Marvel & SiriusXM",
        },
        {
            img: "https://i.scdn.co/image/ab6765630000ba8a0e695af6fdf3f35efe2cc4fd",
            name: "Marvel's Wastelanders",
            folder: "Marvel & SiriusXM",
        },
        {
            img: "https://i.scdn.co/image/ab6765630000ba8a0e695af6fdf3f35efe2cc4fd",
            name: "Marvel's Wastelanders",
            folder: "Marvel & SiriusXM",
        },
        {
            img: "https://i.scdn.co/image/ab6765630000ba8a0e695af6fdf3f35efe2cc4fd",
            name: "Marvel's Wastelanders",
            folder: "Marvel & SiriusXM",
        },
        {
            img: "https://i.scdn.co/image/ab6765630000ba8a0e695af6fdf3f35efe2cc4fd",
            name: "Marvel's Wastelanders",
            folder: "Marvel & SiriusXM",
        },
    ];

    const browseAll = [{ img: "", name: "" }];

    return (
        <div className="search-div">
            <Navbar />
            <div className="recent-div">
                <h2>Recent searches</h2>
                <div className="r-elements">
                    {recentSearches.map((ele) => (
                        <div className="ele">
                            <img
                                src={ele.img}
                                alt={ele.name}
                                className={ele.folder === "Artist" ? "img" : ""}
                            />
                            <h3>{ele.name}</h3>
                            <h4>{ele.folder}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className="div2">
                <h2>Browse all</h2>
                <div className="b-elements">
                    {browseAll.map((ele) => (
                        <div className="ele">
                            <img src={ele.img} alt={ele.name} />
                            <h3>{ele.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
