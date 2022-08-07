import React, { useState } from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
    // icons
    FacebookIcon,
    WhatsappIcon,
    EmailIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon
} from "react-share";

const ReactShare = () => {
    const shareUrl = 'https://dotkonnekt.com/';
    const text = 'This content will be shared..';
    const title = "Steadylearner Demo Placeholder Image"
    const url = "https://avatars0.githubusercontent.com/u/32325099?s=460&v=4"
    const components = {
        Facebook: <FacebookShareButton
            url={shareUrl}
            quote={'Share Any Things on social media'}
            hashtag={'#dotkonnect'}
        >
            <FacebookIcon size={"2rem"} round={true} />
        </FacebookShareButton>,
        Whatsapp: <WhatsappShareButton
            url={text}
            quote={'Share Any Things on social media'}
            hashtag={'#dotkonnect'}
        >
            <WhatsappIcon size={"2rem"} round={true} />
        </WhatsappShareButton>,
        Email: <EmailShareButton
            url={shareUrl}
            quote={'Share Any Things on social media'}
            hashtag={'#dotkonnect'}
        >
            <EmailIcon size={40} round={true} />
        </EmailShareButton>,
        Twitter: <TwitterShareButton>
            <TwitterIcon size={"2rem"} round />
        </TwitterShareButton>,
        Linkedin: <LinkedinShareButton
            title={title}
            windowWidth={750}
            windowHeight={600}
        >
            <LinkedinIcon size={"2rem"} round />
        </LinkedinShareButton>,
        Pinterest: <PinterestShareButton
            url={String(window.location)}
            media={`${url}`}
            windowWidth={1000}
            windowHeight={730}
        >
            <PinterestIcon size={"2rem"} round />
        </PinterestShareButton>,
        VKShare: <VKShareButton image={`${url}`} windowWidth={660} windowHeight={460}>
            <VKIcon size={"2rem"} round />
        </VKShareButton>

    }
    const options = ["Email", "Whatsapp", "Facebook", "Twitter", "Linkedin", "Pinterest", "VKShare"]
    const [customButtons, setCustomButtons] = useState(["Facebook", "Email"])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div style={{ display: "flex", alignItem: "center" }}>
                {customButtons.map((item, index) => (
                    <>
                        <span key={index}>{components[item]}</span>
                        <span style={{ cursor: "pointer" }} onClick={() => setCustomButtons(customButtons.filter(data => data !== item))}>&times;</span>
                    </>
                ))
                }
            </div>
            <button onClick={() => setIsMenuOpen(true)}>Add custom Share</button>
            {isMenuOpen ? (
                <div>
                    {
                        options.map((item, index) =>
                            !customButtons.includes(item) && (
                                <div style={{ background: "white", color: 'black', cursor: "pointer" }} key={index} onClick={() => {
                                    setIsMenuOpen(false)
                                    setCustomButtons([...customButtons, item])
                                }}>{item}</div>
                            )
                        )
                    }
                </div>
            ) : null
            }

        </>
    )
}
export default ReactShare