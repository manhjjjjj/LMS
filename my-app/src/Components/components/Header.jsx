import 'bootstrap/dist/css/bootstrap.min.css';
import FromInput from '../Extra/FromInput';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
    return (
        <div className=''>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container >
                        <Navbar.Brand href="#"><img src="../Image/LOGO RIKKEI ACADEMY 2022-01 2.png" alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">
                                        <img src="../Image/Trang chủ.svg" alt="" /> Trang Chủ
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <img src="../Image/Lộ trình.svg" alt="" /> Lộ Trình
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <img src="../Image/Khóa học.svg" alt="" /> Khóa Học
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <img src="../Image/Bảng điều khiển.svg" alt="" /> Bảng điều khiển
                                    </Nav.Link>
                                </Nav>

                                <FromInput />

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Nav.Link href="#"><img className='User' src="../Image/Rectangle 190.png" alt="logo" /></Nav.Link>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
}

export default OffcanvasExample;