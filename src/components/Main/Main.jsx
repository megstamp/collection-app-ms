import { HashLink } from "react-router-hash-link"
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Main () {

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <h1>Gallery</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati facere vitae eius impedit cumque! Eligendi quibusdam, et maiores ullam minima aspernatur quis repellat vero nihil, cum est, quod incidunt iste?</p>
                        <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink>
                    </Col>
                </Row>
            </Container>
        </main> 
    )

}