import PropTypes from 'prop-types';
import { useRoutes, withRouter } from 'react-router-dom';

const CustomLink = ({ history, to, onClick, tag: Tag, ...rest }) => (
    <Tag
        {...rest}
        onClick={(event) => {
            onClick(event);
            history.push(to)
        }}
    />
);

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};
CustomLink.defaultProps = {
    onClick: () => {}
};
export default CustomLink;