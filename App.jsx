import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (descTarea) => {
    const nuevaTarea = { id: tareas.length + 1, descripcion: descTarea };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminar = (idTarea) => {
    const tareasAct = tareas.filter((tarea) => tarea.id !== idTarea);
    setTareas(tareasAct);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Mini Panel de Tareas</h1>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const descTarea = e.target.elements.descTarea.value;
              if (!descTarea.trim()) return;
              agregarTarea(descTarea);
              e.target.elements.descTarea.value = '';
            }}
          >
            <Form.Group controlId="descTarea">
              <Form.Label>Descripción de la Tarea</Form.Label>
              <Form.Control type="text" placeholder="Descripción" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: '10px' }}
            >
              Agregar Tarea
            </Button>
          </Form>
        </Col>
        <Col>
          <h2>Lista de Tareas</h2>
          <ListGroup>
            {tareas.map((tarea) => (
              <ListGroup.Item key={tarea.id}>
                {tarea.descripcion}
                <Button
                  variant="danger"
                  onClick={() => eliminar(tarea.id)}
                  className="margen-derecho"
                >
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
