import React from "react";
import { PaginationItem, PaginationLink } from "reactstrap";
import "./pagination.scss";

const paginationItem = props => (
    <PaginationItem key={props.ref}>
        <PaginationLink
            className="text-dark"
            style={{ margin: "3px" }}
            id={props.id}
            onClick={props.onClick}
            href="#"
        >
            {props.pageNumber}
        </PaginationLink>
    </PaginationItem>
);

export default paginationItem;
