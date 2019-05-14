import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { ProjectSidebar, ProjectMain } from "../../components/projectComponents";
import "./projectPage.scss";

/**
 * This container component holds and handle information about project
 * @extends Component
 */
const images = [
    {
        cloudlink: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        cloudlink: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        thumbnailWidth: 271,
        thumbnailHeight: 320,
        caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
        cloudlink: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "201H (gratisography.com)"
    },
    {
        cloudlink: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        cloudlink: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Man on BMX (Tom Eversley - isorepublic.com)"
    },
    {
        cloudlink: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
    },
    {
        cloudlink: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
        thumbnailWidth: 257,
        thumbnailHeight: 320,
        caption: "A photo by 贝莉儿 NG. (unsplash.com)"
    }
];

const ProjectPage = props => {
    /*
    useEffect(
        () => {
            if (notification) setTimeout(() => props.history.push("/"), 5000);
        },
        [notification]
    );
    */
    return (
        <Container className="project" fluid>
            <Row className="justify-content-between">
                <ProjectSidebar />
                <ProjectMain images={images} />
            </Row>
        </Container>
    );
};

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token,
    authId: state.auth.user.userId,
    clAPIKey: state.auth.user.CL_apikey,
    clAPISecret: state.auth.user.CL_apisecret
});
const mapDispatchToProps = dispatch => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ProjectPage)
);
