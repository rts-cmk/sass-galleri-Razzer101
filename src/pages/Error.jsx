import { Link } from "react-router";

export default function Error(){
    return(
        <section className="error-section">
            <h1 className="error-section__h1">Page Not Found</h1>
            <Link className="error-section__link" to="/">Return to main page?</Link>
        </section>
    )
}