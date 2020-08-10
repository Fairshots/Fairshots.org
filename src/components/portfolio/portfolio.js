import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";
import ImageGallery from "react-image-gallery";

import "./portfolio.scss";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0, slide: false };
        /*     this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    */
        this.gallery = React.createRef();
    }

    /*
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === this.props.photos.length - 1
                ? 0
                : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === 0
                ? this.props.photos.length - 1
                : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
*/
    renderCustomControls = () => {
        const { toggleDelPhoto, thirdParty, photos } = this.props;

        return (
            !thirdParty && (
                <button
                    type="button"
                    className="close btn-light"
                    aria-label="Close"
                    onClick={() => {
                        const photoIndex = this.gallery.current.getCurrentIndex();
                        const item = photos[photoIndex];
                        toggleDelPhoto("DEL_PHOTO", item);
                    }}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            )
        );
    };

    render() {
        const { activeIndex } = this.state;
        const { photos } = this.props;

        /* const slides = photos.map(item => (
            <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.id}>
                <div className="img-hold">
                    <img src={item.cloudlink} />

                    {!thirdParty && (
                        <button
                            type="button"
                            className="close btn-light"
                            aria-label="Close"
                            onClick={() => toggleDelPhoto("DEL_PHOTO", item)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    )}
                </div>
            </CarouselItem>
        )); */
        const slides =Array.prototype.slice.call(photos).sort((a, b) => 
        (a.portfolioOrder >= b.portfolioOrder ? 1 : -1))
            .map(item => ({
                original: item.cloudlink,
                thumbnail: item.cloudlink
            }));

        return (
            /*
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                <CarouselIndicators
                    items={photos.map(i => ({ ...i, src: i.id }))}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel> */

            <ImageGallery
                items={slides}
                ref={this.gallery}
                renderCustomControls={this.renderCustomControls}
            />
        );
    }
}
