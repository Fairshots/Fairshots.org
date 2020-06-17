import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./pagination.scss";

const paginationItem = props => (
    <PaginationItem key={props.key} >
        <PaginationLink id={props.id} onClick={props.onClick} href="#">
            {props.pageNumber}
        </PaginationLink>
    </PaginationItem>
);

export default paginationItem;
