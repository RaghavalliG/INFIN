import Image from "next/image";

export default function ContentBlock(props) {
    return <>
    <div className={`image-content-sec ${props.calssnames ? props.calssnames : ''}`} id={`${props.id ? props.id : ''}`}>
    <div className="container">
            <div className={`row ${props.imgpos == "right" ? 'flex-lg-row-reverse' : ''} align-items-center py-5`}>
                {props.img ? (
                    <div className="col-10 col-sm-8 col-lg-6 img-col">
                    <Image
                        src={props.img}
                        className="d-block mx-lg-auto img-fluid img-auto-fix"
                        alt="images"
                        loading="lazy"
                        width={800}
                        height={600}
                    />
                    </div>
                ) :''}
                
                <div className="col-lg-6 text-col">
                    {props.children}
                
                </div>
            </div>
            </div>

    </div>
    </>
}