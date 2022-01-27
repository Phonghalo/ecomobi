import axios from "axios"
import { useEffect, useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import "./Story.css"
function Story() {

    const [storys, setStory] = useState([])

    const config = {
        method: "get",
        url: "https://api.dev.kol.eco/api/v2/end-user/get-highlight-stories-by-domain",
        headers: {
            "seller-hostname": "nhung.dev.kol.eco"
        }
    }
    useEffect(() => {
        axios(config)
            .then(response => setStory(response.data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="row">
            <div className="story">
                <ScrollContainer className="scroll-container">
                    {storys.map((story, index) => (
                        <div key={index} className="abc">
                            <a className="col" href={story.tracking_url}>
                                <img className="imgStory" src={story.image_url} alt="" />
                                <label className="lbStory">{story.title}</label>
                            </a>
                        </div>
                    ))}
                </ScrollContainer>
            </div>
        </div>

    )

}
export default Story