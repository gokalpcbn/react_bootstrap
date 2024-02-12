import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Benim Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Benim İçerik</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Kapat</Button>
          <Button variant="primary">Kaydet</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
