import { useState } from "react";

function About() {
    const [imageUrl, setImageUrl] = useState(null);

    useState(() => {
        setImageUrl("https://http.cat/204.jpg");
    }, []);

    return (
        <div className="flex justify-center content-center mt-12">
            {imageUrl && <img src={imageUrl} alt="204" />}
        </div>
    );
}

export default About;