import React, { useEffect, useState } from "react";
import { Input, Form, FormGroup, Alert, Label, Button, Row, Container } from "reactstrap";

const applytoProject = ({ Question1, Question2, Question3, applyProject }) => {
    const haveQuestions = Question1 || Question2 || Question3;
    const [answers, setAnswers] = useState({ answer1: "", answer2: "", answer3: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        applyProject(answers);
    };

    return (
        <div>
            <h4 className="about-green-tittles">
                {haveQuestions
                    ? "Answer the required questions to apply:"
                    : "Click button to confirm application"}
            </h4>

            <Form onSubmit={handleSubmit}>
                {haveQuestions && (
                    <Container>
                        {Question1 && (
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="question1" className="listing-subtittle page mt-3">
                                    {Question1}
                                </Label>
                                <Input
                                    type="text"
                                    name="question1"
                                    id="question1"
                                    value={answers.answer1}
                                    onChange={e =>
                                        setAnswers({ ...answers, answer1: e.target.value })
                                    }
                                    invalid={errorMessage !== ""}
                                />
                            </FormGroup>
                        )}
                        {Question2 && (
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="question2" className="listing-subtittle page mt-3">
                                    {Question2}
                                </Label>
                                <Input
                                    type="text"
                                    name="question2"
                                    id="question2"
                                    value={answers.answer2}
                                    onChange={e =>
                                        setAnswers({ ...answers, answer2: e.target.value })
                                    }
                                    invalid={errorMessage !== ""}
                                />
                            </FormGroup>
                        )}
                        {Question3 && (
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                                <Label for="question3" className="listing-subtittle page mt-3">
                                    {Question3}
                                </Label>
                                <Input
                                    type="text"
                                    name="question3"
                                    id="question3"
                                    value={answers.answer3}
                                    onChange={e =>
                                        setAnswers({ ...answers, answer3: e.target.value })
                                    }
                                    invalid={errorMessage !== ""}
                                />
                            </FormGroup>
                        )}
                        <Row>{errorMessage && <Alert>{errorMessage}</Alert>}</Row>
                    </Container>
                )}

                <Row className="justify-content-center">
                    <Button type="submit" color="success">
                        Confirm application
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default applytoProject;
