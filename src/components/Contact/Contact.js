import PropTypes from 'prop-types';
import { Button, Wrapper } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Wrapper>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Wrapper>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
