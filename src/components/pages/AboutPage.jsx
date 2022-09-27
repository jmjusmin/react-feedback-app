import {Link} from 'react-router-dom';
import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a react app to leave feedback for a product or service</p>
            <p>Vesion 1.0.0</p>

            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage