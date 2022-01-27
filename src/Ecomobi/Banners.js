import axios from "axios"
import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'
function Banners() {
    const [banners, setBanner] = useState([])
    //get data API

    const config = {
        method: "get",
        url: "https://api.dev.kol.eco/api/v2/end-user/get-banners-by-domain",
        headers: { "seller-hostname": "nhung.dev.kol.eco" }
    }
    useEffect(() => {
        axios(config)
            .then(reponse => setBanner(reponse.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="row">
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false" interval={1} >
                <div className="carousel-indicators">
                    {banners.map((banner, index) => (
                        <button key={index} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide-to={index} className={index === 0 ? "listbtn active" : "listbtn"} aria-current="true" aria-label={index}></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {banners.map((banner, index) => (
                        <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={banner.id}>
                            <img src={banner.image_url} className="d-block w-100" alt="..." />
                        </div>
                    ))}

                </div>
                <button className="btnleft carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="btnright carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >

    )
}
export default Banners