import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditPage({ type1, description1, fetchExclusiveExperiences, userId }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState(type1);
  const [description, setDescription] = useState(description1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/thingstodo/edit-event",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            type: type,
            description: description,
          }),
        }
      );

      if (response.status === 200) {
        console.log("Event edited successfully");
        handleClose(); // Close the modal after saving
        // Fetch the updated list of exclusive experiences
        fetchExclusiveExperiences();
      } else {
        throw new Error("Failed to edit event");
      }
    } catch (error) {
      console.error("Error editing event:", error.message);
      // Handle error appropriately, such as displaying an error message to the user
    }
  };

  return (
    <>
      <button onClick={handleShow} className="btn bg-warning text-dark">
        Edit
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPage;
