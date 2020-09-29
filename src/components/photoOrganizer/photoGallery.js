import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from "./Photo";
import arrayMove from "array-move";

// import { photos } from "./photos";

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
    <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

export default function PhotoGallery(props) {
    const [items, setItems] = useState(props.photos);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
        props.setIdxs(oldIndex, newIndex);
    };

    return (
        <div>
            <h3>Sortable Gallery</h3>
            <h4>Drag photo to rearrange</h4>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
    );
}
