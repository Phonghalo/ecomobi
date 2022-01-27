import { useEffect, useState } from "react"
import axios from "axios"
import ScrollContainer from "react-indiana-drag-scroll"
import "./MyChoice.css"
function MyChoice() {
    const [myChoices, setMyChoice] = useState([])
    const [key, setKey] = useState("All")
    const [listChoice, setListChoice] = useState([])
    //getdata
    useEffect(() => {

        const config = {
            method: "get",
            url: "https://api.dev.kol.eco/api/v2/end-user/get-my-choice-by-domain",
            headers: { "seller-hostname": "nhung.dev.kol.eco" }
        }
        axios(config)
            .then(reponse => {
                setMyChoice(reponse.data)
                setListChoice(reponse.data)
            })
            .catch(error => console.log(error))
    }, [])
    console.log(myChoices)
    //
    const handleKey = (myChoice => {
        if (myChoice === key) {
            setKey("All")
            setListChoice([...myChoices])
        } else {
            setKey(myChoice)
            const newList = myChoices.filter(x => x.name === myChoice)
            setListChoice(newList)
        }
    })
    console.log(listChoice)
    return (
        <div>
            <div className="row">
                <ScrollContainer className="containerScroll">
                    {myChoices.map((myChoice, index) => (
                        <button
                            key={index}
                            onClick={() => handleKey(myChoice.name)}
                            className={myChoice.name === key ? "btnclickactive" : "btnclick"}
                        >
                            {myChoice.name}
                        </button>
                    ))}
                </ScrollContainer>
            </div>
            <div className="row">
                {listChoice.map((list, index) => (
                    <div key={index}  >
                        <div className="nameview">
                            {list.name}
                        </div>
                        <div className="listproduct">
                            {list.links.map((product, index) => (
                                <div key={index} className="product">
                                    <a href={product.target_url}>
                                        <img src={product.image} className="imgproduct" />
                                        <div className="lbproduct" >{product.product_name}</div>
                                    </a>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default MyChoice