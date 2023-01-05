import s from './style.styled';

const Section = ({ title, children, onSubmit }) => {
  return (
    <s.Section as="div" onSubmit={onSubmit}>
      <s.Title>{title}</s.Title>
      {children}
    </s.Section>
  );
};

export default Section;

// Section.propTypes = {
//     title: PropTypes.string.isRequired,
//     onSubmit: PropTypes.func,
//     children: PropTypes.node.isRequired,
// };
