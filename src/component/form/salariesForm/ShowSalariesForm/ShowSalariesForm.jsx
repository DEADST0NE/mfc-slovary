import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import s from '../../GlobalForm.module.scss';

const ShowJobSalariesForm = ({data, onClose }) => {
    
    return (   
            <Form className={s.forms}>
                <Modal.Body>
                    {data.jobPositionName ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Наименование должности </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly  type="text" value={data.jobPositionName} name='jobPositionName' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}

                    {data.salary ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Сумма </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  name='salary' value={data.salary} /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}
                    
                    {data.costMinute ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Стоймость оплаты в минуту </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  value={data.costMinute} name='costMinute' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}

                    {data.coefficient ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Коэффициент </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  value={data.coefficient} name='coefficient' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}

                    {data.costNormal ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Норма стоимости </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  value={data.costNormal} name='costNormal' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}

                    {data.coefficientJobPosition ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Коэффициент должности </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  value={data.coefficientJobPosition} name='coefficientJobPosition' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}

                    {data.dateStart ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата начала </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  value={ new Date(Date.parse(data.dateStart)).toLocaleDateString() } 
                                name='dateStart' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}

                    {data.dateStop ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Дата окончания </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  value={ new Date(Date.parse(data.dateStop)).toLocaleDateString() } 
                                name='dateStop' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}

                    {data.comment ? <Form.Group> 
                        <Form.Row>
                            <Col sm="4">
                                <Form.Label> Комментарий </Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control readOnly type="text"  value={data.comment} name='comment' /> 
                            </Col>
                        </Form.Row>
                    </Form.Group> : null}
                </Modal.Body>

                <Modal.Footer>  
                    <Button type='button' variant="secondary" onClick={onClose}>Закрыть</Button>
                </Modal.Footer> 
            </Form>   
    )
}


export default ShowJobSalariesForm; 
