import { Col, Card, Image } from "react-bootstrap";

export default function Panel ({ data: {title, author, id, pages, year, genres, ISBN, image}}) {

    return (
        <Col key={id} sm={10}  md={6} lg={4}>
            <Card className="p-3" >
                <figure>
                    <Image 
                    src={image}
                     fluid />
                </figure>

                <div className="content">
                    <h3>{title}</h3>
                    <p>{author}</p>
                </div>
            </Card>
        </Col>
    )
}