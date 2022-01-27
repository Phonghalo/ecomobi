import axios from "axios"
import { useEffect, useState } from "react";
import "./profile.css"
function Profile() {
    const [profiles, setProfile] = useState({})
    const [isMore, setIsMore] = useState(false)
    //get data API

    const config = {
        method: 'get',
        url: 'https://api.dev.kol.eco/api/v2/end-user/get-seller-profile-by-domain?domain=nhung.dev.kol.eco',
        headers: { 'domain': 'nhung.dev.kol.eco' }
    }
    useEffect(() => {
        axios(config)
            .then(reponse => setProfile(reponse.data))
            .catch(error => console.log(error))
    }, [])
    console.log(typeof profiles.channels)
    //
    const handleMore = () => {
        setIsMore(!isMore)
    }
    return (
        <div className="row">

            <div className="avatar col-3">
                <img id="avatarKol" src={profiles.avatar} alt="" />
            </div>
            <div className="name col-8">
                <p className="nameKol">{profiles.name}</p>
                <div className="nameInfor">
                    {profiles.bio}
                </div>

                <div className="ContentKol">
                    <div className="Content">
                        <textarea id="areaContent" readOnly rows={!isMore ? "4" : "13"} value={profiles.description}></textarea>

                    </div>
                </div>
                <a id="moreInfo" onClick={() => handleMore()}>{isMore ? "Thu lại..." : "Xem thêm..."}</a>
                <div className="link">
                    {profiles.channels !== undefined && profiles.channels.map((channel, index) => {

                        return (
                            <a href={channel.url} key={index}>
                                <img className="iconLink"
                                    src={channel.channel_type === "youtube" ? ("https://i.pinimg.com/originals/63/d0/8e/63d08e28c42a90dfc2fe2d0b1c7ab00c.png"
                                    ) : (
                                        channel.channel_type === "facebook" ? ("https://i.pinimg.com/originals/79/0d/29/790d29ac20dc5fc7cd5c2a61cbddb9f7.png"
                                        ) : (
                                            "http://assets.stickpng.com/images/602179070ad3230004b93c28.png"
                                        )
                                    )}
                                />
                            </a>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default Profile